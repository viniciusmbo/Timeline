/* Motor da linha do tempo: escala, zoom, distribuicao em faixas e agrupamentos. */
window.JC = window.JC || {};

(function () {
  "use strict";

  var DOM_MIN = -70;      // 70 a.C.
  var DOM_MAX = 2010;
  var SPAN_MAX = DOM_MAX - DOM_MIN;
  var SPAN_MIN = 0.004;   // ~1,5 dia

  // A partir de que largura de janela (em anos) cada nivel de importancia aparece.
  var LIMITES = [Infinity, 900, 250, 40, 4];

  var MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  var CUM = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365.25];

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  function partes(t) {
    var ano = Math.floor(t), doy = (t - ano) * 365.25, m = 0;
    while (m < 11 && doy >= CUM[m + 1]) m++;
    return { ano: ano, mes: m, dia: Math.floor(doy - CUM[m]) + 1 };
  }

  function rotuloAno(y) {
    var a = Math.round(y);
    if (a < 0) return (-a) + " a.C.";
    if (a === 0) return "1 d.C.";
    return a + " d.C.";
  }

  function Timeline(cfg) {
    this.el = cfg.el;
    this.track = cfg.track;
    this.elTicks = cfg.ticks;
    this.elItens = cfg.itens;
    this.elVazio = cfg.vazio;
    this.eventos = cfg.eventos;
    this.fontes = cfg.fontes;          // mapa id -> {cor, nome}
    this.aoSelecionar = cfg.aoSelecionar || function () {};
    this.aoMudarVista = cfg.aoMudarVista || function () {};
    this.selecionadas = cfg.selecionadas || {};
    this.selecionado = null;

    this.span = 60;
    this.t0 = -12;
    this.largura = this.el.clientWidth || 1000;

    this._ligarEventos();
    var self = this;
    window.addEventListener("resize", function () { self.medir(); self.render(); });
  }

  Timeline.prototype.medir = function () {
    this.largura = this.el.clientWidth || 1000;
    this.altura = this.el.clientHeight || 600;
  };

  /* ————— escala ————— */
  Timeline.prototype.x = function (t) { return (t - this.t0) / this.span * this.largura; };
  Timeline.prototype.t = function (x) { return this.t0 + x / this.largura * this.span; };

  Timeline.prototype.nivel = function () {
    var n = 1;
    for (var i = 1; i < LIMITES.length; i++) if (this.span <= LIMITES[i]) n = i + 1;
    return n;
  };

  Timeline.prototype._limitar = function () {
    this.span = clamp(this.span, SPAN_MIN, SPAN_MAX);
    var folga = this.span * 0.08;
    this.t0 = clamp(this.t0, DOM_MIN - folga, DOM_MAX + folga - this.span);
  };

  Timeline.prototype.irPara = function (a, b, animar) {
    var span = clamp(b - a, SPAN_MIN, SPAN_MAX);
    var t0 = a - (span - (b - a)) / 2;
    if (animar === false) { this.t0 = t0; this.span = span; this._limitar(); this.render(); return; }
    this._animar(t0, span);
  };

  Timeline.prototype._animar = function (t0, span) {
    var self = this, i0 = this.t0, s0 = this.span, ini = performance.now(), dur = 420;
    if (this._raf) cancelAnimationFrame(this._raf);
    var ls0 = Math.log(s0), ls1 = Math.log(clamp(span, SPAN_MIN, SPAN_MAX));
    function passo(agora) {
      var p = Math.min(1, (agora - ini) / dur);
      var e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      self.span = Math.exp(ls0 + (ls1 - ls0) * e);
      self.t0 = i0 + (t0 - i0) * e;
      self._limitar();
      self.render();
      if (p < 1) self._raf = requestAnimationFrame(passo);
    }
    this._raf = requestAnimationFrame(passo);
  };

  Timeline.prototype.zoomEm = function (px, fator) {
    var tAlvo = this.t(px);
    var novo = clamp(this.span * fator, SPAN_MIN, SPAN_MAX);
    this.t0 = tAlvo - (px / this.largura) * novo;
    this.span = novo;
    this._limitar();
    this.render();
  };

  Timeline.prototype.zoom = function (fator) { this.zoomEm(this.largura / 2, fator); };
  Timeline.prototype.mover = function (dxPx) { this.t0 += dxPx / this.largura * this.span; this._limitar(); this.render(); };

  /* ————— interacao ————— */
  Timeline.prototype._ligarEventos = function () {
    var self = this, arrastando = false, moveu = 0, ultimoX = 0, ponteiros = {}, distIni = 0, spanIni = 0;

    this.el.addEventListener("wheel", function (e) {
      e.preventDefault();
      if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        self.mover(-(e.deltaX || e.deltaY));
        return;
      }
      var r = self.el.getBoundingClientRect();
      self.zoomEm(e.clientX - r.left, Math.exp(e.deltaY * 0.0016));
    }, { passive: false });

    this.el.addEventListener("pointerdown", function (e) {
      ponteiros[e.pointerId] = e;
      if (Object.keys(ponteiros).length === 2) {
        var p = Object.keys(ponteiros).map(function (k) { return ponteiros[k]; });
        distIni = Math.abs(p[0].clientX - p[1].clientX) || 1;
        spanIni = self.span;
        return;
      }
      if (e.target.closest(".item-cartao, .cluster")) return;
      arrastando = true; moveu = 0; ultimoX = e.clientX;
      self.el.classList.add("arrastando");
      self.el.setPointerCapture(e.pointerId);
    });

    this.el.addEventListener("pointermove", function (e) {
      if (ponteiros[e.pointerId]) ponteiros[e.pointerId] = e;
      var ids = Object.keys(ponteiros);
      if (ids.length === 2) {
        var p = ids.map(function (k) { return ponteiros[k]; });
        var d = Math.abs(p[0].clientX - p[1].clientX) || 1;
        var r = self.el.getBoundingClientRect();
        var meio = (p[0].clientX + p[1].clientX) / 2 - r.left;
        var alvo = clamp(spanIni * (distIni / d), SPAN_MIN, SPAN_MAX);
        self.zoomEm(meio, alvo / self.span);
        return;
      }
      if (!arrastando) return;
      var dx = e.clientX - ultimoX; ultimoX = e.clientX; moveu += Math.abs(dx);
      self.mover(dx);
    });

    function fim(e) {
      delete ponteiros[e.pointerId];
      arrastando = false;
      self.el.classList.remove("arrastando");
    }
    this.el.addEventListener("pointerup", fim);
    this.el.addEventListener("pointercancel", fim);
    this.el.addEventListener("pointerleave", function (e) { delete ponteiros[e.pointerId]; });

    this.el.addEventListener("dblclick", function (e) {
      var r = self.el.getBoundingClientRect();
      self.zoomEm(e.clientX - r.left, 0.45);
    });

    this.el.addEventListener("keydown", function (e) {
      var passo = self.largura * 0.18;
      if (e.key === "ArrowRight") { self.mover(-passo); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { self.mover(passo); e.preventDefault(); }
      else if (e.key === "+" || e.key === "=") { self.zoom(0.6); e.preventDefault(); }
      else if (e.key === "-" || e.key === "_") { self.zoom(1 / 0.6); e.preventDefault(); }
      else if (e.key === "Home") { self.irPara(-12, 45); e.preventDefault(); }
    });
  };

  /* ————— dados visiveis ————— */
  Timeline.prototype.visiveis = function () {
    var self = this, nivel = this.nivel();
    var a = this.t0 - this.span * 0.02, b = this.t0 + this.span * 1.02;
    return this.eventos.filter(function (ev) {
      if (ev.imp > nivel) return false;
      var fim = ev.t2 != null ? ev.t2 : ev.t;
      if (fim < a || ev.t > b) return false;
      return self.fontesDoEvento(ev).length > 0;
    });
  };

  Timeline.prototype.fontesDoEvento = function (ev) {
    var sel = this.selecionadas, saida = [];
    for (var k in ev.visoes) if (sel[k]) saida.push(k);
    return saida;
  };

  /* ————— render ————— */
  Timeline.prototype.render = function () {
    if (!this.altura) this.medir();
    this._limitar();
    this._ticks();

    var self = this;
    var temFonte = Object.keys(this.selecionadas).some(function (k) { return self.selecionadas[k]; });
    this.elVazio.hidden = temFonte;
    var itens = temFonte ? this.visiveis() : [];

    var eixoY = Math.round(this.altura * 0.5);
    this.track.querySelector(".tl-axis").style.top = eixoY + "px";

    var CARTAO_H = 60, PASSO = 70, DIST_EIXO = 24, CLUSTER_H = 26;
    var maxFaixas = Math.max(1, Math.floor((eixoY - DIST_EIXO - CARTAO_H - 6) / PASSO) + 1);
    var cima = [], baixo = [], html = [], grupos = {}, sobras = [];

    itens.sort(function (a, b) { return (a.imp - b.imp) || (a.t - b.t); });

    itens.forEach(function (ev) {
      var x = self.x(ev.t);
      var fontes = self.fontesDoEvento(ev);
      var cor = self.fontes[fontes[0]].cor;
      var larg = ev.imp === 1 ? 238 : (ev.imp === 2 ? 220 : 184);
      // cartoes de fatos que comecam fora da tela (ou coladas na borda) sao trazidos para dentro
      var esq = clamp(x + 12, 8, Math.max(8, self.largura - larg - 8));

      // barra de duracao
      if (ev.t2 != null) {
        var x2 = self.x(ev.t2);
        if (x2 - x > 3) {
          html.push('<div class="item-barra" style="left:' + x + 'px;width:' + (x2 - x) + 'px;top:' + (eixoY - 3) + 'px;--cor:' + cor + '"></div>');
        }
      }

      var iCima = achaFaixa(cima, esq), iBaixo = achaFaixa(baixo, esq);
      var lado, faixa;
      if (iCima <= iBaixo) { lado = "cima"; faixa = iCima; } else { lado = "baixo"; faixa = iBaixo; }

      if (faixa >= maxFaixas) {                     // nao cabe: vira agrupamento
        var chave = Math.round(x / 72);
        (grupos[chave] = grupos[chave] || []).push(ev);
        return;
      }
      (lado === "cima" ? cima : baixo)[faixa] = esq + larg;

      var topo = lado === "cima"
        ? eixoY - DIST_EIXO - faixa * PASSO - CARTAO_H
        : eixoY + DIST_EIXO + faixa * PASSO;
      var linhaTopo = lado === "cima" ? topo + CARTAO_H / 2 : eixoY;
      var linhaAlt = lado === "cima" ? eixoY - topo - CARTAO_H / 2 : topo + CARTAO_H / 2 - eixoY;

      var sel = self.selecionado === ev.id ? " sel" : "";
      var obra = ev.obra && window.JC.obras[ev.obra];
      var thumb = (ev.imp <= 2 && obra)
        ? '<span class="item-thumb" style="background-image:url(&quot;' + JC.urlObra(obra.arquivo, 160) + '&quot;)"></span>' : "";
      var faixinhas = fontes.slice(0, 6).map(function (f) {
        return '<i style="background:' + self.fontes[f].cor + '"></i>';
      }).join("");

      html.push(
        '<div class="item imp' + ev.imp + sel + '" style="left:' + x + 'px;--cor:' + cor + '">' +
          '<span class="item-linha" style="left:0;top:' + linhaTopo + 'px;height:' + Math.max(0, linhaAlt) + 'px"></span>' +
          '<span class="item-ponto" style="left:-6px;top:' + (eixoY - 6) + 'px"></span>' +
          '<button class="item-cartao" type="button" data-id="' + ev.id + '" style="left:' + (esq - x) + 'px;top:' + topo + 'px;width:' + larg + 'px;height:' + CARTAO_H + 'px">' +
            '<span class="item-cores">' + faixinhas + '</span>' +
            thumb +
            '<span class="item-txt">' +
              '<span class="item-titulo">' + ev.titulo + '</span>' +
              '<span class="item-data">' + ev.quando + '</span>' +
            '</span>' +
          '</button>' +
        '</div>'
      );
    });

    // agrupamentos entram nas mesmas faixas dos cartoes, para nao se sobreporem a eles
    Object.keys(grupos).forEach(function (k, i) {
      var lista = grupos[k];
      var x = self.x(lista[0].t);
      var cores = {};
      lista.forEach(function (ev) { self.fontesDoEvento(ev).forEach(function (f) { cores[f] = 1; }); });
      var pts = Object.keys(cores).slice(0, 6).map(function (f) {
        return '<i style="background:' + self.fontes[f].cor + '"></i>';
      }).join("");
      var larg = 46 + Object.keys(cores).length * 7;
      var esq = clamp(x - larg / 2, 4, Math.max(4, self.largura - larg - 4));
      var iCima = achaFaixa(cima, esq), iBaixo = achaFaixa(baixo, esq);
      var lado = iCima <= iBaixo ? "cima" : "baixo";
      var faixa = Math.min(iCima, iBaixo);
      var topo;
      if (faixa >= maxFaixas) {
        // sem faixa livre: fileiras proprias junto ao eixo, sem sobrepor outros agrupamentos
        var linha = 0;
        while (sobras[linha] !== undefined && sobras[linha] + 6 > esq) linha++;
        sobras[linha] = esq + larg;
        topo = eixoY + (linha % 2 ? 1 : -1) * (21 + Math.floor(linha / 2) * 30) - CLUSTER_H / 2;
      } else {
        (lado === "cima" ? cima : baixo)[faixa] = esq + larg;
        topo = lado === "cima"
          ? eixoY - DIST_EIXO - faixa * PASSO - CLUSTER_H
          : eixoY + DIST_EIXO + faixa * PASSO;
      }
      var ids = lista.map(function (e) { return e.id; }).join(",");
      html.push('<button class="cluster" type="button" data-grupo="' + ids + '" style="left:' + esq + 'px;top:' + topo + 'px;width:' + larg + 'px">' +
        '+' + lista.length + '<span class="pts">' + pts + '</span></button>');
    });

    this.elItens.innerHTML = html.join("");

    if (!this._delegado) {
      this._delegado = true;
      var tl = this;
      this.elItens.addEventListener("click", function (e) {
        var cartao = e.target.closest(".item-cartao");
        if (cartao) { tl.selecionar(cartao.dataset.id); return; }
        var grupo = e.target.closest(".cluster");
        if (grupo) {
          var ids = grupo.dataset.grupo.split(",");
          var ts = ids.map(function (id) { return window.JC.eventosPorId[id].t; });
          var a = Math.min.apply(null, ts), b = Math.max.apply(null, ts);
          var folga = Math.max((b - a) * 0.6, tl.span * 0.06);
          tl.irPara(a - folga, b + folga);
        }
      });
    }

    this.aoMudarVista({ t0: this.t0, span: this.span, nivel: this.nivel(), visiveis: itens.length });

    function achaFaixa(faixas, esq) {
      for (var i = 0; i < maxFaixas; i++) {
        if (faixas[i] === undefined || faixas[i] + 10 < esq) return i;
      }
      return maxFaixas;
    }
  };

  Timeline.prototype.selecionar = function (id, mover) {
    this.selecionado = id;
    var ev = window.JC.eventosPorId[id];
    if (ev && mover) {
      var meio = ev.t2 != null ? (ev.t + ev.t2) / 2 : ev.t;
      var span = Math.min(this.span, ev.t2 != null ? (ev.t2 - ev.t) * 2.2 : this.span);
      this._animar(meio - span / 2, span);
    } else {
      this.render();
    }
    this.aoSelecionar(ev);
  };

  /* ————— eixo ————— */
  Timeline.prototype._ticks = function () {
    var passos = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 1 / 4, 1 / 12, 1 / 24, 1 / 52, 1 / 365.25];
    var passo = passos[passos.length - 1];
    for (var i = 0; i < passos.length; i++) {
      if (this.span / passos[i] <= 13) { passo = passos[i]; break; }
    }
    var ini = Math.ceil(this.t0 / passo) * passo;
    var out = [];
    for (var t = ini; t < this.t0 + this.span; t += passo) {
      var x = this.x(t);
      var forte = passo >= 1 && Math.abs(t % (passo * 5)) < passo / 2;
      var rot;
      if (passo >= 1) rot = rotuloAno(t);
      else if (passo >= 1 / 12) { var p = partes(t); rot = MESES[p.mes] + " " + rotuloAno(p.ano); }
      else { var q = partes(t); rot = q.dia + " " + MESES[q.mes]; }
      out.push('<div class="tick' + (forte ? " forte" : "") + '" style="left:' + x + 'px"></div>' +
        '<div class="tick-rotulo" style="left:' + x + 'px;top:6px">' + rot + '</div>');
    }
    this.elTicks.innerHTML = out.join("");
  };

  Timeline.DOM_MIN = DOM_MIN;
  Timeline.DOM_MAX = DOM_MAX;
  Timeline.partes = partes;
  Timeline.rotuloAno = rotuloAno;
  window.JC.Timeline = Timeline;
})();
