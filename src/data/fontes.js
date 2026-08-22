// Perspectivas / tradicoes cujo olhar sobre Jesus o infografico compara.
window.JC = window.JC || {};

window.JC.fontes = [
  {
    id: "catolica",
    nome: "Católica",
    cor: "#d9a83f",
    curta: "Magistério e tradição latina",
    resumo: "Lê os Evangelhos dentro da Tradição e do Magistério: Jesus é verdadeiro Deus e verdadeiro homem, e os concílios são leitura autorizada do que os textos dizem. Devoções, calendário litúrgico e dogmas marianos moldam a narrativa.",
    textos: "Evangelhos canônicos; concílios (Niceia 325, Calcedônia 451); Catecismo da Igreja Católica (1992)",
    obra: "fra_angelico_anunciacao"
  },
  {
    id: "ortodoxa",
    nome: "Ortodoxa",
    cor: "#d1516a",
    curta: "Tradição bizantina e oriental",
    resumo: "Mesma base cristológica dos concílios, com ênfase na Encarnação como divinização do humano, na liturgia e no ícone como teologia visível. A Ressurreição é narrada como Anástase: Cristo arrancando Adão e Eva do Hades.",
    textos: "Evangelhos; Padres gregos; sete concílios ecumênicos; calendário juliano em parte das igrejas",
    obra: "pantocrator"
  },
  {
    id: "protestante",
    nome: "Protestante",
    cor: "#34b3a8",
    curta: "Reformas e evangélicos",
    resumo: "Sola scriptura: a autoridade está no texto bíblico, não na tradição posterior. Ênfase na pregação, na graça e na relação pessoal com Cristo; menos peso a devoções marianas e a concílios como fonte normativa.",
    textos: "Bíblia (66 livros); confissões de fé da Reforma; crítica textual moderna amplamente adotada",
    obra: "sermao"
  },
  {
    id: "judaica",
    nome: "Judaica",
    cor: "#5c72d9",
    curta: "Tradição rabínica",
    resumo: "Jesus é um judeu do século I entre outros pregadores e messias frustrados; não é o Mashiach, porque a redenção messiânica esperada — paz, retorno do exílio, reconstrução do Templo — não aconteceu. As referências rabínicas a ele são tardias e polêmicas.",
    textos: "Tanakh; Mishná e Talmude (redigidos entre 200 e 500); literatura medieval de polêmica",
    obra: "templo_destruido"
  },
  {
    id: "islamica",
    nome: "Islâmica",
    cor: "#56a63f",
    curta: "Isa ibn Maryam no Alcorão",
    resumo: "Isa é profeta e Messias, nascido de virgem por decreto divino, autor de milagres — mas não é Deus nem filho de Deus. Não foi crucificado: outro foi feito parecer com ele, e Deus o elevou a si. Voltará antes do fim dos tempos.",
    textos: "Alcorão (suras 3, 4, 5, 19); hadices; literatura das Histórias dos Profetas",
    obra: "isa_miniatura"
  },
  {
    id: "historica",
    nome: "Histórica",
    cor: "#8d97a8",
    curta: "Pesquisa histórico-crítica",
    resumo: "Trata os Evangelhos como fontes teológicas do fim do século I e busca o que pode ser sustentado por método: batismo por João e crucificação sob Pilatos são quase consenso. Milagres e ressurreição ficam fora do alcance do método, que descreve o que as pessoas relataram.",
    textos: "Cartas de Paulo (anos 50); Marcos (c. 70); Q; Josefo, Tácito, Plínio; arqueologia da Galileia",
    obra: "pedra_pilatos"
  },
  {
    id: "espirita",
    nome: "Espírita",
    cor: "#a978e0",
    curta: "Codificação kardequiana",
    resumo: "Jesus é o Espírito mais puro já encarnado na Terra e seu governador espiritual — modelo moral, não Deus. Os milagres são fenômenos mediúnicos regidos por leis naturais ainda pouco conhecidas, e a moral do Evangelho é o que realmente importa.",
    textos: "O Livro dos Espíritos (1857); O Evangelho segundo o Espiritismo (1864); A Gênese (1868)",
    obra: "kardec"
  },
  {
    id: "apocrifa",
    nome: "Apócrifa",
    cor: "#d160a0",
    curta: "Evangelhos não canônicos",
    resumo: "Dezenas de textos que ficaram fora do cânone e mesmo assim moldaram a imaginação cristã: a gruta de Belém, o boi e o burro, os nomes dos magos, a infância milagrosa. Alguns são gnósticos, outros são pura devoção popular.",
    textos: "Protoevangelho de Tiago (séc. II); Evangelho de Tomé; Evangelho da Infância; Evangelho de Nicodemos",
    obra: "gruta_belem"
  }
];

window.JC.fontesPorId = window.JC.fontes.reduce(function (acc, f) { acc[f.id] = f; return acc; }, {});
