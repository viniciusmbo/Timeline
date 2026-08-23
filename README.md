# Jesus Cristo — uma linha do tempo em oito olhares

Infográfico web interativo sobre a vida de Jesus Cristo e sua recepção, com uma linha do tempo
que ganha detalhe conforme o zoom e compara oito perspectivas diferentes sobre os mesmos fatos.

![status](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS%20puro-informational)

## O que ele faz

- **Zoom por importância.** No máximo afastamento aparecem só cinco fatos essenciais (nascimento,
  batismo, ministério, crucificação, ressurreição). À medida que se aproxima, o infográfico revela
  cinco níveis de detalhe, até o passo hora a hora da última semana.
- **Oito fontes, oito cores.** Católica, ortodoxa, protestante, judaica, islâmica, histórica,
  espírita e apócrifa. Cada fato mostra na lateral do cartão as faixas coloridas das fontes que
  falam sobre ele; ao filtrar, a linha do tempo muda — há fatos que só existem para uma tradição
  (o nascimento sob a tamareira, no Alcorão; a descida ao Hades, no Oriente; a leitura espírita de
  “nascer de novo”).
- **Obras de arte em carrossel.** 111 pinturas, ícones, mosaicos, papiros e fotografias. Cada fato
  pode trazer até cinco obras, navegáveis como um carrossel (setas, pontinhos, arrastar), cada uma
  com autor, ano, técnica, acervo, licença, link para o Wikimedia Commons e uma curiosidade — de
  por que o braço de Maria é longo demais em Leonardo até a tela de Rembrandt roubada em 1990 e
  nunca recuperada.
- **Alta resolução.** Clicar na obra abre um visualizador em tela cheia que carrega a imagem grande
  do Commons, com zoom por roda, pinça, duplo clique ou botões, arrastar para deslocar, navegação
  entre as obras do mesmo fato e link para o arquivo original.
- **Tabela de divergências.** As mesmas oito perguntas (quem é Jesus, nasceu de virgem, morreu na
  cruz, ressuscitou…) respondidas por cada tradição, acompanhando as fontes selecionadas.
- **Períodos.** Seis recortes prontos — Tudo, Vida de Jesus, Infância, Ministério, Semana Santa e
  Igreja primitiva — mais um **período personalizado**, escolhido numa lista com todos os fatos
  (de qual acontecimento até qual acontecimento). Qualquer período pode ser **travado**: com a
  trava ligada, zoom, arrasto, teclado e minimapa não saem daquele trecho, e o que ficou de fora
  aparece escurecido no minimapa.
- **Minimapa** com escala comprimida, para navegar entre o contexto romano e o século XX sem perder
  a região da vida de Jesus.
- **Nota sobre o calendário**, explicando por que a infância de Jesus aparece do lado “a.C.” da
  régua — com um fato dedicado ao erro de cálculo de Dionísio, o Exíguo, em 525.

## Como rodar

Não há build nem dependências. Basta servir a pasta:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Abrir o `index.html` direto pelo navegador (`file://`) também funciona, porque os scripts são
carregados como scripts clássicos, sem módulos ES.

As imagens são servidas pelo Wikimedia Commons (`Special:FilePath`), então é preciso rede para
vê-las; sem conexão, o app continua funcionando e mostra um marcador no lugar da imagem.

Para publicar, qualquer hospedagem estática serve (GitHub Pages, Netlify, S3): é HTML, CSS e JS.

## Controles

| Ação | Como |
| --- | --- |
| Zoom | roda do mouse, pinça, botões `+` / `−`, teclas `+` / `−`, duplo clique |
| Navegar | arrastar, setas `←` `→`, clicar no minimapa |
| Enquadrar | botões *Tudo*, *Vida de Jesus*, *Infância*, *Ministério*, *Semana Santa*, *Igreja primitiva*, tecla `Home` |
| Período personalizado | botão *Personalizado ▾*, escolher o fato inicial e o final, *aplicar* |
| Travar o período | botão *travar* — prende a navegação ao trecho ativo até destravar |
| Abrir um fato | clicar no cartão (ou no `+N` para aproximar o grupo) |
| Trocar de obra | setas ‹ ›, pontinhos, arrastar de lado, ou `←` `→` com o painel aberto |
| Ver em alta resolução | clicar na imagem; zoom com roda, pinça, duplo clique ou `+` `−`; `Esc` fecha |
| Filtrar fontes | as pastilhas coloridas no topo |

## Estrutura

```
index.html               marcação da página
assets/css/styles.css    estilos
src/timeline.js          motor da linha do tempo (escala, zoom, faixas, agrupamentos)
src/app.js               filtros, painel com carrossel, lupa em alta resolução, minimapa, tabela e galeria
src/data/eventos.js      108 fatos, com data, importância, resumo, referências e as visões de cada fonte
src/data/fontes.js       as oito perspectivas (cor, resumo, textos de referência)
src/data/obras.js        as obras de arte (autor, ano, acervo, curiosidade, arquivo no Commons, licença)
src/data/divergencias.js a matriz comparativa
```

### Modelo de um evento

```js
{
  id: "batismo", t: 28.6, imp: 1, cat: "ministerio",
  titulo: "O batismo de Jesus no Jordão",
  quando: "c. 28–29 d.C.",
  resumo: "…",
  obras: ["batismo", "batismo_piero", "batismo_elgreco"],   // até 5 chaves de src/data/obras.js
  refs: ["Mc 1,9-11", "Jo 1,29-34"],
  visoes: { catolica: "…", historica: "…", espirita: "…" }
}
```

`t` é o ano em número decimal (negativo = a.C.); `t2`, quando existe, marca o fim de um período e
vira uma barra sobre o eixo. `imp` vai de 1 (aparece já no zoom máximo de saída) a 5 (só no detalhe
mais fino). Um evento só aparece se pelo menos uma das fontes selecionadas comentar o fato.

## Sobre o conteúdo

As datas são aproximadas e assumidamente discutíveis. O nascimento é situado entre 6 e 4 a.C. e a
crucificação em 7 de abril de 30 — a alternativa mais defendida, 3 de abril de 33, está registrada
no próprio evento. Onde as fontes divergem sobre o que aconteceu, a divergência é o conteúdo: cada
tradição é apresentada em seus próprios termos, sem arbitrar quem tem razão.

As imagens vêm do Wikimedia Commons, em domínio público ou sob licença livre (CC BY / CC BY-SA);
autor e licença aparecem no painel de cada obra e o link leva à página original. Os arquivos foram
conferidos um a um pela API do Commons — nome, autoria e licença — antes de entrarem no catálogo.

As miniaturas são pedidas apenas nas larguras padrão do Wikimedia (320, 640, 800, 1024, 1280 e
2560 px), que são as que o servidor mantém em cache; pedir tamanhos fora dessa lista faz o Commons
responder com erro em vez da imagem. Se uma imagem grande falhar, o app tenta automaticamente a
versão de 320 px antes de desistir.
