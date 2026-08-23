/* Montagem da pagina: filtros, painel com carrossel de obras, lupa em alta resolucao,
   minimapa, matriz comparativa e galeria. */
(function () {
  "use strict";

  var JC = window.JC;
  var fontes = JC.fontes, fmap = JC.fontesPorId, eventos = JC.eventos, obras = JC.obras;

  // O Wikimedia so entrega miniaturas em larguras padrao; pedir tamanhos fora desta lista
  // faz o servidor responder 429 em vez da imagem.
  var LARGURAS = [320, 640, 800, 1024, 1280, 2560];
  function larguraPadrao(l) {
    for (var i = 0; i < LARGURAS.length; i++) if (l <= LARGURAS[i]) return LARGURAS[i];
    return LARGURAS[LARGURAS.length - 1];
  }

  JC.urlObra = function (arquivo, largura) {
    // encodeURIComponent deixa passar ' ( ) ! * — que quebram atributos HTML e url() no CSS
    var nome = encodeURIComponent(arquivo)
      .replace(/%20/g, "_")
      .replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")
      .replace(/!/g, "%21").replace(/\*/g, "%2A");
    var base = "https://commons.wikimedia.org/wiki/Special:FilePath/" + nome;
    return largura ? base + "?width=" + larguraPadrao(largura) : base;
  };

  // se a miniatura grande falhar, tenta a menor antes de desistir
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (!img || img.tagName !== "IMG" || img.dataset.retentado) return;
    var m = String(img.src).match(/^(.*Special:FilePath\/[^?]*)/);
    if (!m) return;
    img.dataset.retentado = "1";
    img.src = m[1] + "?width=320";
  }, true);

  var selecionadas = {};
  fontes.forEach(function (f) { selecionadas[f.id] = true; });

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  function obrasDe(ev) {
    return (ev.obras || []).map(function (k) { return obras[k]; }).filter(Boolean);
  }

  /* ————— indicadores ————— */
  (function kpis() {
    var dados = [
      [eventos.length, "fatos catalogados"],
      [fontes.length, "perspectivas"],
      [Object.keys(obras).length, "obras de arte"],
      ["5", "níveis de zoom"],
      ["63 a.C. – 1965", "período coberto"]
    ];
    $("kpis").innerHTML = dados.map(function (d) {
      return "<li><b>" + d[0] + "</b><span>" + d[1] + "</span></li>";
    }).join("");
  })();

  /* ————— chips de fontes ————— */
  var contagem = {};
  fontes.forEach(function (f) { contagem[f.id] = 0; });
  eventos.forEach(function (e) {
    Object.keys(e.visoes).forEach(function (k) { if (contagem[k] != null) contagem[k]++; });
  });

  $("chips-fontes").innerHTML = fontes.map(function (f) {
    return '<button class="chip" type="button" role="switch" aria-pressed="true" data-fonte="' + f.id +
      '" style="--cor:' + f.cor + '"><span class="ponto"></span>' + esc(f.nome) +
      ' <span class="conta">' + contagem[f.id] + "</span></button>";
  }).join("");

  $("chips-fontes").addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    var id = chip.dataset.fonte;
    selecionadas[id] = !selecionadas[id];
    chip.setAttribute("aria-pressed", selecionadas[id] ? "true" : "false");
    atualizarTudo();
  });

  function definirTodas(valor) {
    fontes.forEach(function (f) { selecionadas[f.id] = valor; });
    Array.prototype.forEach.call(document.querySelectorAll(".chip"), function (c) {
      c.setAttribute("aria-pressed", valor ? "true" : "false");
    });
    atualizarTudo();
  }
  $("btn-todas").addEventListener("click", function () { definirTodas(true); });
  $("btn-nenhuma").addEventListener("click", function () { definirTodas(false); });

  /* ————— linha do tempo ————— */
  var tl = new JC.Timeline({
    el: $("tl"),
    track: $("tl-track"),
    ticks: $("tl-ticks"),
    itens: $("tl-itens"),
    vazio: $("tl-vazio"),
    eventos: eventos,
    fontes: fmap,
    selecionadas: selecionadas,
    aoSelecionar: function (ev) { abrirPainel(ev, 0); },
    aoMudarVista: function (v) {
      mostrarNivel(v.nivel, v.visiveis);
      desenharMapa(v);
    }
  });

  var VISTAS = {
    tudo: { nome: "Tudo", a: JC.Timeline.DOM_MIN, b: JC.Timeline.DOM_MAX },
    vida: { nome: "Vida de Jesus", a: -12, b: 45 },
    infancia: { nome: "Infância", a: -7.2, b: 9 },
    ministerio: { nome: "Ministério", a: 27.9, b: 30.35 },
    semana: { nome: "Semana Santa", a: 30.236, b: 30.40 },
    igreja: { nome: "Igreja primitiva", a: 30.2, b: 130 }
  };

  var periodo = VISTAS.vida;   // periodo ativo (predefinido ou personalizado)
  var travado = false;
  var travaTimer = null;

  function aplicarPeriodo(p, botao) {
    periodo = p;
    Array.prototype.forEach.call(document.querySelectorAll("[data-fit]"), function (o) {
      o.setAttribute("aria-current", o === botao ? "true" : "false");
    });
    if (travaTimer) { clearTimeout(travaTimer); travaTimer = null; }
    if (travado) tl.travar(null);           // libera para poder mover ate o novo trecho
    tl.irPara(p.a, p.b);
    if (travado) travaTimer = setTimeout(function () { tl.travar(p.a, p.b); travaTimer = null; }, 440);
    mostrarPeriodo();
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-fit]"), function (b) {
    b.addEventListener("click", function () { aplicarPeriodo(VISTAS[b.dataset.fit], b); });
  });

  /* trava do periodo */
  var btnTravar = $("btn-travar");
  btnTravar.addEventListener("click", function () {
    travado = !travado;
    if (travado) {
      // sem periodo escolhido, trava no trecho que esta na tela
      if (!periodo.personalizado && periodo === VISTAS.tudo) periodo = { nome: "trecho atual", a: tl.t0, b: tl.t0 + tl.span };
      tl.travar(periodo.a, periodo.b);
    } else {
      tl.travar(null);
    }
    btnTravar.setAttribute("aria-pressed", travado ? "true" : "false");
    btnTravar.textContent = (travado ? "🔒" : "🔓") + " travar";
    mostrarPeriodo();
  });

  /* periodo personalizado a partir da lista de fatos */
  var ordenados = eventos.slice().sort(function (a, b) { return a.t - b.t; });
  var opcoes = ordenados.map(function (e) {
    return '<option value="' + e.id + '">' + esc(e.titulo) + " — " + esc(e.quando) + "</option>";
  }).join("");
  $("sel-ini").innerHTML = opcoes;
  $("sel-fim").innerHTML = opcoes;
  $("sel-ini").value = ordenados[0].id;
  $("sel-fim").value = ordenados[ordenados.length - 1].id;

  $("btn-custom").addEventListener("click", function () {
    var cx = $("custom");
    cx.hidden = !cx.hidden;
    $("btn-custom").setAttribute("aria-expanded", cx.hidden ? "false" : "true");
  });

  $("btn-aplicar").addEventListener("click", function () {
    var a = JC.eventosPorId[$("sel-ini").value], b = JC.eventosPorId[$("sel-fim").value];
    if (!a || !b) return;
    var ta = a.t, tb = b.t2 != null ? b.t2 : b.t, aviso = "";
    if (tb < ta) { var tmp = ta; ta = tb; tb = tmp; aviso = "ordem invertida — ajustada. "; }
    var folga = Math.max((tb - ta) * 0.06, 0.004);
    aplicarPeriodo({
      nome: a.titulo + " → " + b.titulo,
      a: ta - folga, b: tb + folga, personalizado: true
    }, null);
    $("custom-msg").textContent = aviso + "período aplicado" + (travado ? " e travado" : "");
  });

  function mostrarPeriodo() {
    var el = $("periodo");
    if (!travado && periodo === VISTAS.tudo) { el.innerHTML = ""; return; }
    el.innerHTML = (travado ? '<span class="cadeado">🔒 travado em</span> ' : '<span class="cadeado">período</span> ') +
      "<b>" + esc(periodo.nome) + "</b>" +
      (travado ? ' <button class="mini" id="destravar" type="button">destravar</button>' : "");
    var d = $("destravar");
    if (d) d.addEventListener("click", function () { btnTravar.click(); });
  }
  $("btn-mais").addEventListener("click", function () { tl.zoom(0.55); });
  $("btn-menos").addEventListener("click", function () { tl.zoom(1 / 0.55); });

  function mostrarNivel(nivel, visiveis) {
    var barras = "";
    for (var i = 1; i <= 5; i++) barras += '<i class="' + (i <= nivel ? "on" : "") + '"></i>';
    var textos = ["", "só o essencial", "fatos maiores", "narrativa completa", "episódios e parábolas", "detalhe hora a hora"];
    $("nivel").innerHTML = '<span class="nivel-barras">' + barras + "</span> nível " + nivel +
      " de 5 — " + textos[nivel] + " · " + visiveis + " fatos em tela";
  }

  /* ————— minimapa ————— */
  var SEG = [[-70, 0, 0, 0.10], [0, 120, 0.10, 0.62], [120, 700, 0.62, 0.80], [700, 2010, 0.80, 1]];
  function mapaFrac(t) {
    for (var i = 0; i < SEG.length; i++) {
      var s = SEG[i];
      if (t <= s[1] || i === SEG.length - 1) {
        var p = (t - s[0]) / (s[1] - s[0]);
        return s[2] + Math.max(0, Math.min(1, p)) * (s[3] - s[2]);
      }
    }
    return 1;
  }
  function mapaTempo(frac) {
    for (var i = 0; i < SEG.length; i++) {
      var s = SEG[i];
      if (frac <= s[3] || i === SEG.length - 1) {
        var p = (frac - s[2]) / (s[3] - s[2]);
        return s[0] + Math.max(0, Math.min(1, p)) * (s[1] - s[0]);
      }
    }
    return 2010;
  }

  var canvas = $("mapa-canvas"), ctx = canvas.getContext("2d");
  $("mapa-legendas").innerHTML = [
    [0.05, "contexto"], [0.30, "vida de Jesus"], [0.52, "igreja antiga"], [0.71, "concílios"], [0.9, "recepção"]
  ].map(function (l) { return '<span style="left:' + (l[0] * 100) + '%">' + l[1] + "</span>"; }).join("");

  function desenharMapa(v) {
    var r = canvas.parentNode.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    canvas.width = r.width * dpr; canvas.height = r.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, r.width, r.height);

    SEG.forEach(function (s, i) {
      if (i % 2) return;
      ctx.fillStyle = "rgba(255,255,255,.018)";
      ctx.fillRect(s[2] * r.width, 0, (s[3] - s[2]) * r.width, r.height);
    });

    eventos.forEach(function (ev) {
      var fs = Object.keys(ev.visoes).filter(function (k) { return selecionadas[k]; });
      if (!fs.length || ev.imp > 3) return;
      var x = mapaFrac(ev.t) * r.width;
      var h = ev.imp === 1 ? 26 : (ev.imp === 2 ? 17 : 10);
      ctx.fillStyle = fmap[fs[0]].cor;
      ctx.globalAlpha = ev.imp === 1 ? 0.95 : (ev.imp === 2 ? 0.7 : 0.45);
      ctx.fillRect(x, r.height / 2 - h / 2 - 6, 2, h);
    });
    ctx.globalAlpha = 1;

    if (v.limite) {                     // escurece o que esta fora do periodo travado
      var la = mapaFrac(v.limite[0]) * r.width, lb = mapaFrac(v.limite[1]) * r.width;
      ctx.fillStyle = "rgba(6,8,12,.62)";
      ctx.fillRect(0, 0, la, r.height);
      ctx.fillRect(lb, 0, r.width - lb, r.height);
      ctx.strokeStyle = "rgba(217,168,63,.5)";
      ctx.beginPath();
      ctx.moveTo(la, 0); ctx.lineTo(la, r.height);
      ctx.moveTo(lb, 0); ctx.lineTo(lb, r.height);
      ctx.stroke();
    }

    var a = mapaFrac(v.t0) * r.width, b = mapaFrac(v.t0 + v.span) * r.width;
    var jan = $("mapa-janela");
    jan.style.left = Math.max(0, a) + "px";
    jan.style.width = Math.max(3, b - a) + "px";
  }

  var mapaArrasta = false;
  function irMapa(e) {
    var r = canvas.parentNode.getBoundingClientRect();
    var t = mapaTempo((e.clientX - r.left) / r.width);
    tl.irPara(t - tl.span / 2, t + tl.span / 2, false);   // o proprio motor respeita a trava
  }
  $("mapa").addEventListener("pointerdown", function (e) { mapaArrasta = true; irMapa(e); });
  window.addEventListener("pointermove", function (e) { if (mapaArrasta) irMapa(e); });
  window.addEventListener("pointerup", function () { mapaArrasta = false; });

  /* ————— painel com carrossel ————— */
  var painel = $("painel"), fundo = $("painel-fundo");
  var atual = { ev: null, obras: [], i: 0 };

  var LICENCAS = {
    "Public domain": "Domínio público",
    "PD-US": "Domínio público (EUA)",
    "CC0": "CC0 — domínio público"
  };
  function licenca(o) { return LICENCAS[o.licenca] || o.licenca; }

  function fichaObra(o) {
    return '<div class="t">' + esc(o.titulo) + "</div>" +
      '<div class="meta">' + esc(o.autor) + " · " + esc(o.ano) +
      (o.tecnica ? " · " + esc(o.tecnica) : "") +
      (o.local ? "<br>" + esc(o.local) : "") + "</div>" +
      '<div class="cur">' + esc(o.curiosidade) + "</div>" +
      '<div class="lic">' + esc(licenca(o)) + ' · <a href="' + o.pagina +
        '" target="_blank" rel="noopener">Wikimedia Commons</a></div>';
  }

  function montarCarrossel(lista) {
    var slides = lista.map(function (o, i) {
      return '<button class="car-slide" type="button" data-i="' + i + '" title="Abrir em alta resolução">' +
        '<img src="' + JC.urlObra(o.arquivo, 1024) + '" alt="' + esc(o.titulo) + '" loading="lazy">' +
        '<span class="car-lupa">⤢ alta resolução</span></button>';
    }).join("");
    var pontos = lista.length > 1
      ? '<div class="car-pontos">' + lista.map(function (o, i) {
          return '<button class="car-ponto' + (i === 0 ? " on" : "") + '" type="button" data-i="' + i +
            '" aria-label="Obra ' + (i + 1) + '"></button>';
        }).join("") + "</div>"
      : "";
    var setas = lista.length > 1
      ? '<button class="car-nav ant" type="button" data-d="-1" aria-label="Anterior">‹</button>' +
        '<button class="car-nav prox" type="button" data-d="1" aria-label="Próxima">›</button>' +
        '<span class="car-conta"><b>1</b>/' + lista.length + "</span>"
      : "";
    return '<figure class="p-obra">' +
      '<div class="carrossel" id="carrossel">' +
        '<div class="car-palco" id="car-palco">' + slides + "</div>" + setas + pontos +
      "</div>" +
      '<figcaption class="p-obra-info" id="p-obra-info">' + fichaObra(lista[0]) + "</figcaption>" +
    "</figure>";
  }

  function irSlide(i) {
    var n = atual.obras.length;
    if (!n) return;
    atual.i = (i + n) % n;
    var palco = $("car-palco");
    if (palco) palco.style.transform = "translateX(" + (-atual.i * 100) + "%)";
    var info = $("p-obra-info");
    if (info) info.innerHTML = fichaObra(atual.obras[atual.i]);
    Array.prototype.forEach.call(document.querySelectorAll(".car-ponto"), function (p, k) {
      p.classList.toggle("on", k === atual.i);
    });
    var conta = document.querySelector(".car-conta b");
    if (conta) conta.textContent = atual.i + 1;
  }

  function ligarCarrossel() {
    var car = $("carrossel");
    if (!car) return;
    car.addEventListener("click", function (e) {
      var nav = e.target.closest(".car-nav");
      if (nav) { irSlide(atual.i + Number(nav.dataset.d)); return; }
      var ponto = e.target.closest(".car-ponto");
      if (ponto) { irSlide(Number(ponto.dataset.i)); return; }
      var slide = e.target.closest(".car-slide");
      if (slide) abrirLupa(Number(slide.dataset.i));
    });
    // arrastar/deslizar
    var x0 = null;
    car.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
    car.addEventListener("pointerup", function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 45) irSlide(atual.i + (dx < 0 ? 1 : -1));
    });
  }

  function abrirPainel(ev, indice) {
    if (!ev) return;
    var lista = obrasDe(ev);
    atual = { ev: ev, obras: lista, i: 0 };

    var cats = {
      contexto: "Contexto", infancia: "Infância", ministerio: "Ministério",
      paixao: "Paixão", pascoa: "Páscoa", igreja: "Igreja e doutrina", fontes: "Fontes e testemunhos"
    };

    var visoesSel = [], visoesOut = [];
    fontes.forEach(function (f) {
      if (!ev.visoes[f.id]) return;
      var bloco = '<div class="p-visao" style="--cor:' + f.cor + '"><h4>' + esc(f.nome) +
        "</h4><p>" + esc(ev.visoes[f.id]) + "</p></div>";
      (selecionadas[f.id] ? visoesSel : visoesOut).push(bloco);
    });

    $("painel-conteudo").innerHTML =
      '<p class="p-cat">' + (cats[ev.cat] || ev.cat) + "</p>" +
      '<h2 class="p-titulo">' + esc(ev.titulo) + "</h2>" +
      '<p class="p-quando">' + esc(ev.quando) + "</p>" +
      (lista.length ? montarCarrossel(lista) : "") +
      '<p class="p-resumo">' + esc(ev.resumo) + "</p>" +
      (ev.refs ? '<p class="p-refs">' + ev.refs.map(function (r) { return "<span>" + esc(r) + "</span>"; }).join("") + "</p>" : "") +
      '<p class="p-sub">Como cada fonte conta</p>' +
      (visoesSel.join("") || '<p class="p-quando">Nenhuma das fontes selecionadas comenta este fato.</p>') +
      (visoesOut.length
        ? '<button class="p-mais" type="button" id="p-mais">mostrar outras ' + visoesOut.length + " perspectiva" + (visoesOut.length > 1 ? "s" : "") + "</button>" +
          '<div id="p-extra" hidden>' + visoesOut.join("") + "</div>"
        : "");

    painel.hidden = false; fundo.hidden = false;
    painel.scrollTop = 0;
    ligarCarrossel();
    if (indice) irSlide(indice);
    var mais = $("p-mais");
    if (mais) mais.addEventListener("click", function () { $("p-extra").hidden = false; mais.remove(); });
  }

  function fecharPainel() {
    painel.hidden = true; fundo.hidden = true;
    tl.selecionado = null; tl.render();
  }
  $("painel-fechar").addEventListener("click", fecharPainel);
  fundo.addEventListener("click", fecharPainel);

  /* ————— lupa: obra em alta resolucao ————— */
  var lupa = $("lupa"), lupaImg = $("lupa-img"), palco = $("lupa-palco");
  var zoom = { escala: 1, x: 0, y: 0, arrastando: false, px: 0, py: 0 };

  function aplicarZoom() {
    lupaImg.style.transform = "translate(" + zoom.x + "px," + zoom.y + "px) scale(" + zoom.escala + ")";
    palco.classList.toggle("ampliado", zoom.escala > 1.02);
  }
  function ajustar() { zoom.escala = 1; zoom.x = 0; zoom.y = 0; aplicarZoom(); }

  function abrirLupa(i) {
    if (!atual.obras.length) return;
    atual.i = i;
    var o = atual.obras[i];
    $("lupa-carregando").hidden = false;
    lupaImg.src = JC.urlObra(o.arquivo, 2560);
    lupaImg.alt = o.titulo;
    $("lupa-titulo").textContent = o.titulo + " · " + o.autor;
    $("lupa-commons").href = o.pagina;
    $("lupa-legenda").innerHTML = "<b>" + esc(o.titulo) + "</b> — " + esc(o.autor) + ", " + esc(o.ano) +
      (o.local ? " · " + esc(o.local) : "") +
      '<span class="lupa-conta">' + (i + 1) + "/" + atual.obras.length + "</span>";
    var mostraNav = atual.obras.length > 1;
    $("lupa-ant").hidden = !mostraNav; $("lupa-prox").hidden = !mostraNav;
    lupa.hidden = false;
    document.body.classList.add("travado");
    ajustar();
  }
  function fecharLupa() {
    lupa.hidden = true;
    document.body.classList.remove("travado");
    lupaImg.removeAttribute("src");
    if (!painel.hidden) irSlide(atual.i);
  }

  lupaImg.addEventListener("load", function () { $("lupa-carregando").hidden = true; });
  lupaImg.addEventListener("error", function () { $("lupa-carregando").textContent = "não foi possível carregar a imagem"; });
  $("lupa-fechar").addEventListener("click", fecharLupa);
  $("lupa-ajustar").addEventListener("click", ajustar);
  $("lupa-mais").addEventListener("click", function () { zoom.escala = Math.min(8, zoom.escala * 1.5); aplicarZoom(); });
  $("lupa-menos").addEventListener("click", function () {
    zoom.escala = Math.max(1, zoom.escala / 1.5);
    if (zoom.escala === 1) { zoom.x = 0; zoom.y = 0; }
    aplicarZoom();
  });
  $("lupa-ant").addEventListener("click", function () { abrirLupa((atual.i - 1 + atual.obras.length) % atual.obras.length); });
  $("lupa-prox").addEventListener("click", function () { abrirLupa((atual.i + 1) % atual.obras.length); });

  palco.addEventListener("wheel", function (e) {
    e.preventDefault();
    var r = palco.getBoundingClientRect();
    var cx = e.clientX - r.left - r.width / 2, cy = e.clientY - r.top - r.height / 2;
    var antes = zoom.escala;
    zoom.escala = Math.max(1, Math.min(8, zoom.escala * Math.exp(-e.deltaY * 0.002)));
    var k = zoom.escala / antes;
    zoom.x = cx - (cx - zoom.x) * k;
    zoom.y = cy - (cy - zoom.y) * k;
    if (zoom.escala === 1) { zoom.x = 0; zoom.y = 0; }
    aplicarZoom();
  }, { passive: false });

  palco.addEventListener("dblclick", function (e) {
    if (zoom.escala > 1.02) return ajustar();
    var r = palco.getBoundingClientRect();
    var cx = e.clientX - r.left - r.width / 2, cy = e.clientY - r.top - r.height / 2;
    zoom.escala = 2.6;
    zoom.x = -cx * (zoom.escala - 1);
    zoom.y = -cy * (zoom.escala - 1);
    aplicarZoom();
  });

  var toques = {}, pinca = null;
  function distancia() {
    var p = Object.keys(toques).map(function (k) { return toques[k]; });
    return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y) || 1;
  }
  palco.addEventListener("pointerdown", function (e) {
    toques[e.pointerId] = { x: e.clientX, y: e.clientY };
    if (Object.keys(toques).length === 2) {
      pinca = { d: distancia(), escala: zoom.escala };
      zoom.arrastando = false;
      return;
    }
    if (zoom.escala <= 1.02) return;
    zoom.arrastando = true; zoom.px = e.clientX; zoom.py = e.clientY;
    palco.setPointerCapture(e.pointerId);
  });
  palco.addEventListener("pointermove", function (e) {
    if (toques[e.pointerId]) toques[e.pointerId] = { x: e.clientX, y: e.clientY };
    if (pinca && Object.keys(toques).length === 2) {
      zoom.escala = Math.max(1, Math.min(8, pinca.escala * (distancia() / pinca.d)));
      if (zoom.escala === 1) { zoom.x = 0; zoom.y = 0; }
      aplicarZoom();
      return;
    }
    if (!zoom.arrastando) return;
    zoom.x += e.clientX - zoom.px; zoom.y += e.clientY - zoom.py;
    zoom.px = e.clientX; zoom.py = e.clientY;
    aplicarZoom();
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach(function (t) {
    palco.addEventListener(t, function (e) {
      delete toques[e.pointerId];
      if (Object.keys(toques).length < 2) pinca = null;
      zoom.arrastando = false;
    });
  });
  palco.addEventListener("click", function (e) { if (e.target === palco) fecharLupa(); });

  document.addEventListener("keydown", function (e) {
    if (!lupa.hidden) {
      if (e.key === "Escape") fecharLupa();
      else if (e.key === "ArrowRight" && atual.obras.length > 1) abrirLupa((atual.i + 1) % atual.obras.length);
      else if (e.key === "ArrowLeft" && atual.obras.length > 1) abrirLupa((atual.i - 1 + atual.obras.length) % atual.obras.length);
      else if (e.key === "+" || e.key === "=") { zoom.escala = Math.min(8, zoom.escala * 1.5); aplicarZoom(); }
      else if (e.key === "-") { zoom.escala = Math.max(1, zoom.escala / 1.5); aplicarZoom(); }
      return;
    }
    if (e.key === "Escape" && !painel.hidden) fecharPainel();
    if (!painel.hidden && atual.obras.length > 1) {
      if (e.key === "ArrowRight") irSlide(atual.i + 1);
      if (e.key === "ArrowLeft") irSlide(atual.i - 1);
    }
  });

  /* ————— matriz de divergencias ————— */
  function montarMatriz() {
    var ativas = fontes.filter(function (f) { return selecionadas[f.id]; });
    if (!ativas.length) { $("matriz").innerHTML = '<tbody><tr><td>Selecione ao menos uma fonte.</td></tr></tbody>'; return; }
    var cab = "<thead><tr><th></th>" + ativas.map(function (f) {
      return '<th><span class="ponto" style="background:' + f.cor + '"></span>' + esc(f.nome) + "</th>";
    }).join("") + "</tr></thead>";
    var corpo = "<tbody>" + JC.divergencias.map(function (linha) {
      return "<tr><th>" + esc(linha.pergunta) + "</th>" + ativas.map(function (f) {
        return "<td>" + esc(linha.respostas[f.id] || "—") + "</td>";
      }).join("") + "</tr>";
    }).join("") + "</tbody>";
    $("matriz").innerHTML = cab + corpo;
  }

  /* ————— cards das fontes ————— */
  $("cards-fontes").innerHTML = fontes.map(function (f) {
    var o = obras[f.obra];
    return '<article class="card" style="--cor:' + f.cor + '">' +
      (o ? '<div class="card-img" style=\'background-image:url("' + JC.urlObra(o.arquivo, 640) + '")\'></div>' : "") +
      '<div class="card-corpo"><h3>' + esc(f.nome) + "</h3>" +
      '<p class="curta">' + esc(f.curta) + "</p>" +
      "<p>" + esc(f.resumo) + "</p>" +
      '<p class="textos">' + esc(f.textos) + "</p></div></article>";
  }).join("");

  /* ————— galeria (uma entrada por obra) ————— */
  var vistas = {}, itensGaleria = [];
  eventos.forEach(function (e) {
    (e.obras || []).forEach(function (k, i) {
      if (!obras[k] || vistas[k]) return;
      vistas[k] = 1;
      itensGaleria.push({ obra: obras[k], evento: e.id, indice: i });
    });
  });
  $("galeria").innerHTML = itensGaleria.map(function (g) {
    return '<button type="button" data-id="' + g.evento + '" data-i="' + g.indice + '">' +
      '<span class="g-img" style=\'background-image:url("' + JC.urlObra(g.obra.arquivo, 320) + '")\'></span>' +
      '<span class="g-txt"><span class="g-t">' + esc(g.obra.titulo) + "</span>" +
      '<span class="g-a">' + esc(g.obra.autor) + " · " + esc(g.obra.ano) + "</span></span></button>";
  }).join("");
  $("galeria").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-id]");
    if (!b) return;
    var ev = JC.eventosPorId[b.dataset.id];
    $("tl").scrollIntoView({ behavior: "smooth", block: "center" });
    irAteEvento(ev, Math.max(tl.span, 1.2));
    tl.selecionado = ev.id;
    abrirPainel(ev, Number(b.dataset.i));
  });

  /* ————— atalho da nota sobre o calendario ————— */
  Array.prototype.forEach.call(document.querySelectorAll("[data-ev]"), function (el) {
    el.addEventListener("click", function () {
      var ev = JC.eventosPorId[el.dataset.ev];
      if (!ev) return;
      irAteEvento(ev, 240);
      tl.selecionado = ev.id;
      abrirPainel(ev, 0);
    });
  });

  // leva a vista ate um fato; se ele estiver fora do periodo travado, destrava antes
  function irAteEvento(ev, largura) {
    if (travado && (ev.t < periodo.a || ev.t > periodo.b)) btnTravar.click();
    tl.irPara(ev.t - largura / 2, ev.t + largura / 2);
  }

  /* ————— ligacao geral ————— */
  function atualizarTudo() {
    tl.selecionadas = selecionadas;
    tl.render();
    montarMatriz();
  }

  tl.medir();
  montarMatriz();
  tl.irPara(VISTAS.vida.a, VISTAS.vida.b, false);
  document.querySelector('[data-fit="vida"]').setAttribute("aria-current", "true");
  mostrarPeriodo();
})();
