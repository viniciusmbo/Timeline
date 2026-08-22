/* Montagem da pagina: filtros, painel de detalhes, minimapa, matriz e galeria. */
(function () {
  "use strict";

  var JC = window.JC;
  var fontes = JC.fontes, fmap = JC.fontesPorId, eventos = JC.eventos, obras = JC.obras;

  JC.urlObra = function (arquivo, largura) {
    // encodeURIComponent deixa passar ' ( ) ! * — que quebram atributos HTML e url() no CSS
    var nome = encodeURIComponent(arquivo)
      .replace(/%20/g, "_")
      .replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")
      .replace(/!/g, "%21").replace(/\*/g, "%2A");
    return "https://commons.wikimedia.org/wiki/Special:FilePath/" + nome + "?width=" + largura;
  };

  var selecionadas = {};
  fontes.forEach(function (f) { selecionadas[f.id] = true; });

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };

  /* ————— indicadores ————— */
  (function kpis() {
    var comObra = eventos.filter(function (e) { return e.obra; }).length;
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
    void comObra;
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
    aoSelecionar: abrirPainel,
    aoMudarVista: function (v) {
      mostrarNivel(v.nivel, v.visiveis);
      desenharMapa(v);
    }
  });

  var VISTAS = {
    vida: [-12, 45],
    semana: [30.236, 30.40],
    tudo: [JC.Timeline.DOM_MIN, JC.Timeline.DOM_MAX]
  };
  Array.prototype.forEach.call(document.querySelectorAll("[data-fit]"), function (b) {
    b.addEventListener("click", function () {
      var v = VISTAS[b.dataset.fit];
      tl.irPara(v[0], v[1]);
      Array.prototype.forEach.call(document.querySelectorAll("[data-fit]"), function (o) {
        o.setAttribute("aria-current", o === b ? "true" : "false");
      });
    });
  });
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

    var a = mapaFrac(v.t0) * r.width, b = mapaFrac(v.t0 + v.span) * r.width;
    var jan = $("mapa-janela");
    jan.style.left = Math.max(0, a) + "px";
    jan.style.width = Math.max(3, b - a) + "px";
  }

  var mapaArrasta = false;
  function irMapa(e) {
    var r = canvas.parentNode.getBoundingClientRect();
    var t = mapaTempo((e.clientX - r.left) / r.width);
    tl.irPara(t - tl.span / 2, t + tl.span / 2, false);
  }
  $("mapa").addEventListener("pointerdown", function (e) { mapaArrasta = true; irMapa(e); });
  window.addEventListener("pointermove", function (e) { if (mapaArrasta) irMapa(e); });
  window.addEventListener("pointerup", function () { mapaArrasta = false; });

  /* ————— painel ————— */
  var painel = $("painel"), fundo = $("painel-fundo");

  function imagemObra(obra, largura) {
    return '<img src="' + JC.urlObra(obra.arquivo, largura) + '" alt="' + esc(obra.titulo) +
      '" loading="lazy" onerror="this.outerHTML=\'<div class=&quot;p-obra-fallback&quot;>imagem indisponível offline<br>' +
      esc(obra.titulo).replace(/'/g, "") + '</div>\'">';
  }

  function abrirPainel(ev) {
    if (!ev) return;
    var obra = ev.obra && obras[ev.obra];
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

    var html =
      '<p class="p-cat">' + (cats[ev.cat] || ev.cat) + "</p>" +
      '<h2 class="p-titulo">' + esc(ev.titulo) + "</h2>" +
      '<p class="p-quando">' + esc(ev.quando) + "</p>" +
      (obra ? '<figure class="p-obra">' + imagemObra(obra, 900) +
        '<figcaption class="p-obra-info">' +
          '<div class="t">' + esc(obra.titulo) + "</div>" +
          '<div class="meta">' + esc(obra.autor) + " · " + esc(obra.ano) +
          (obra.tecnica ? " · " + esc(obra.tecnica) : "") +
          (obra.local ? "<br>" + esc(obra.local) : "") + "</div>" +
          '<div class="cur">' + esc(obra.curiosidade) + "</div>" +
          '<div class="lic">' + esc(obra.licenca) + ' · <a href="' + obra.pagina +
            '" target="_blank" rel="noopener">Wikimedia Commons</a></div>' +
        "</figcaption></figure>" : "") +
      '<p class="p-resumo">' + esc(ev.resumo) + "</p>" +
      (ev.refs ? '<p class="p-refs">' + ev.refs.map(function (r) { return "<span>" + esc(r) + "</span>"; }).join("") + "</p>" : "") +
      '<p class="p-sub">Como cada fonte conta</p>' +
      (visoesSel.join("") || '<p class="p-quando">Nenhuma das fontes selecionadas comenta este fato.</p>') +
      (visoesOut.length
        ? '<button class="p-mais" type="button" id="p-mais">mostrar outras ' + visoesOut.length + " perspectiva" + (visoesOut.length > 1 ? "s" : "") + "</button>" +
          '<div id="p-extra" hidden>' + visoesOut.join("") + "</div>"
        : "");

    $("painel-conteudo").innerHTML = html;
    painel.hidden = false; fundo.hidden = false;
    painel.scrollTop = 0;
    var mais = $("p-mais");
    if (mais) mais.addEventListener("click", function () {
      $("p-extra").hidden = false;
      mais.remove();
    });
  }

  function fecharPainel() {
    painel.hidden = true; fundo.hidden = true;
    tl.selecionado = null; tl.render();
  }
  $("painel-fechar").addEventListener("click", fecharPainel);
  fundo.addEventListener("click", fecharPainel);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !painel.hidden) fecharPainel(); });

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
    var obra = obras[f.obra];
    return '<article class="card" style="--cor:' + f.cor + '">' +
      (obra ? '<div class="card-img" style=\'background-image:url("' + JC.urlObra(obra.arquivo, 600) + '")\'></div>' : "") +
      '<div class="card-corpo"><h3>' + esc(f.nome) + "</h3>" +
      '<p class="curta">' + esc(f.curta) + "</p>" +
      "<p>" + esc(f.resumo) + "</p>" +
      '<p class="textos">' + esc(f.textos) + "</p></div></article>";
  }).join("");

  /* ————— galeria ————— */
  var vistas = {};
  var comObra = eventos.filter(function (e) {
    if (!e.obra || !obras[e.obra] || vistas[e.obra]) return false;
    vistas[e.obra] = 1; return true;
  });
  $("galeria").innerHTML = comObra.map(function (e) {
    var o = obras[e.obra];
    return '<button type="button" data-id="' + e.id + '">' +
      '<span class="g-img" style=\'background-image:url("' + JC.urlObra(o.arquivo, 400) + '")\'></span>' +
      '<span class="g-txt"><span class="g-t">' + esc(o.titulo) + "</span>" +
      '<span class="g-a">' + esc(o.autor) + " · " + esc(o.ano) + "</span></span></button>";
  }).join("");
  $("galeria").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-id]");
    if (!b) return;
    var ev = JC.eventosPorId[b.dataset.id];
    document.getElementById("tl").scrollIntoView({ behavior: "smooth", block: "center" });
    var largura = Math.max(tl.span, 1.2);
    tl.irPara(ev.t - largura / 2, ev.t + largura / 2);
    tl.selecionar(ev.id);
  });

  /* ————— ligacao geral ————— */
  function atualizarTudo() {
    tl.selecionadas = selecionadas;
    tl.render();
    montarMatriz();
  }

  tl.medir();
  montarMatriz();
  tl.irPara(VISTAS.vida[0], VISTAS.vida[1], false);
  document.querySelector('[data-fit="vida"]').setAttribute("aria-current", "true");
})();
