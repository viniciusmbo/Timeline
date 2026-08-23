// Linha do tempo de Jesus Cristo — fatos, datas aproximadas e leituras de cada tradicao.
// t / t2: ano decimal (negativo = a.C.). imp: 1 = aparece no zoom maximo de saida, 5 = so no detalhe fino.
window.JC = window.JC || {};

window.JC.eventos = [

  // ————————————————————————————— contexto —————————————————————————————
  {
    id: "pompeu", t: -63, imp: 3, cat: "contexto",
    titulo: "Roma toma Jerusalém",
    quando: "63 a.C.",
    resumo: "Pompeu intervém na guerra civil entre os irmãos asmoneus, cerca Jerusalém e entra no Santo dos Santos. A Judeia entra na órbita romana e nunca mais sai — é esse o mundo político em que Jesus nasce.",
    refs: ["Josefo, Guerra Judaica I"],
    visoes: {
      historica: "Marco inicial da dominação romana na Judeia. A partir daqui o país oscila entre reis clientes, prefeitos romanos e revoltas — o caldo que produz movimentos messiânicos em série.",
      judaica: "A perda da soberania asmoneia e a profanação do Templo alimentam a expectativa de um libertador ungido que restaure Israel."
    }
  },
  {
    id: "herodes", t: -37, t2: -4, imp: 3, cat: "contexto",
    titulo: "Reinado de Herodes, o Grande",
    quando: "37–4 a.C.",
    resumo: "Rei cliente de Roma, construtor monumental e governante implacável: reformou o Templo, ergueu Cesareia e Massada, executou a própria esposa e três filhos.",
    refs: ["Josefo, Antiguidades XV–XVII", "Mt 2"],
    visoes: {
      historica: "A cronologia de Herodes é a principal âncora para datar o nascimento de Jesus: se Mateus está certo ao situá-lo no reinado dele, Jesus nasceu antes de 4 a.C.",
      judaica: "Herodes era idumeu convertido e visto por muitos como usurpador; sua obra no Templo conviveu com a desconfiança popular.",
      catolica: "O Herodes dos relatos da infância é o tirano diante do qual a Sagrada Família precisa fugir."
    }
  },
  {
    id: "templo_obra", t: -19, imp: 4, cat: "contexto",
    titulo: "Começa a reconstrução do Templo",
    quando: "c. 19 a.C.",
    resumo: "Herodes inicia a ampliação do Segundo Templo, um canteiro de obras que atravessa gerações e só termina por volta de 63 d.C. — sete anos antes de ser destruído.",
    refs: ["Jo 2,20", "Josefo, Antiguidades XV"],
    visoes: {
      historica: "A frase de João 2,20 (“quarenta e seis anos para construir este templo”) é usada para datar o início do ministério de Jesus por volta de 28 d.C.",
      judaica: "O Templo era o centro da vida religiosa: peregrinação, sacrifício e calendário organizavam o ano de todo o povo."
    }
  },
  {
    id: "quirino", t: 6, imp: 4, cat: "contexto",
    titulo: "Censo de Quirino e anexação da Judeia",
    quando: "6 d.C.",
    resumo: "Roma depõe Arquelau, transforma a Judeia em província e realiza um recenseamento para fins tributários. O censo provoca a revolta de Judas, o Galileu.",
    refs: ["Lc 2,1-2", "At 5,37", "Josefo, Antiguidades XVIII"],
    visoes: {
      historica: "Aqui está a maior dor de cabeça cronológica dos Evangelhos: Lucas liga o nascimento ao censo de Quirino (6 d.C.), mas Mateus o coloca sob Herodes (morto em 4 a.C.). São dez anos de diferença.",
      catolica: "Leituras tradicionais propõem um recenseamento anterior ou um primeiro mandato de Quirino para harmonizar Lucas e Mateus.",
      protestante: "Parte da exegese evangélica traduz Lucas 2,2 como “antes de o censo de Quirino ocorrer”, solução gramaticalmente possível."
    }
  },
  {
    id: "tiberio", t: 14, imp: 4, cat: "contexto",
    titulo: "Tibério torna-se imperador",
    quando: "19 de agosto de 14 d.C.",
    resumo: "Com a morte de Augusto, Tibério assume o império — a referência que Lucas usa para datar a pregação de João Batista.",
    refs: ["Lc 3,1"],
    visoes: {
      historica: "“No décimo quinto ano do reinado de Tibério” aponta para 28–29 d.C., a datação mais usada para o início do ministério público."
    }
  },
  {
    id: "pilatos_prefeito", t: 26, t2: 36, imp: 3, cat: "contexto",
    titulo: "Pôncio Pilatos, prefeito da Judeia",
    quando: "26–36 d.C.",
    resumo: "Governa a província por dez anos, com sede em Cesareia. Josefo e Fílon o descrevem como duro e pouco diplomático; foi removido do cargo após uma repressão violenta na Samaria.",
    obras: ["pedra_pilatos"],
    refs: ["Josefo, Antiguidades XVIII", "Fílon, Embaixada a Gaio", "Tácito, Anais XV,44"],
    visoes: {
      historica: "A Pedra de Pilatos, achada em Cesareia em 1961, é a única prova arqueológica direta de sua existência — e o chama de prefeito, não procurador.",
      judaica: "Fontes judaicas do século I descrevem provocações de Pilatos contra a lei religiosa, como levar estandartes imperiais a Jerusalém.",
      catolica: "O nome de Pilatos entrou no Credo como marca histórica: “padeceu sob Pôncio Pilatos”."
    }
  },
  {
    id: "caifas", t: 18, t2: 36, imp: 4, cat: "contexto",
    titulo: "Caifás, sumo sacerdote",
    quando: "18–36 d.C.",
    resumo: "José Caifás dirige o Templo por dezoito anos, mandato longo que sugere boa relação com o poder romano. Um ossuário decorado com o nome “Yehosef bar Qayafa” foi encontrado em Jerusalém em 1990.",
    refs: ["Mt 26,57", "Jo 11,49-50"],
    visoes: {
      historica: "Sumos sacerdotes eram nomeados e demitidos pelos romanos; a aristocracia sacerdotal tinha interesse direto em evitar tumultos durante a Páscoa.",
      judaica: "Caifás pertencia à elite saduceia, que a própria tradição rabínica posterior via com reservas."
    }
  },
  {
    id: "seitas", t: -10, t2: 70, imp: 5, cat: "contexto",
    titulo: "Fariseus, saduceus, essênios e zelotas",
    quando: "séc. I a.C. – 70 d.C.",
    resumo: "O judaísmo do tempo de Jesus não era um bloco: convivem correntes com ideias distintas sobre Templo, pureza, ressurreição dos mortos e resistência a Roma.",
    refs: ["Josefo, Guerra Judaica II", "Manuscritos do Mar Morto"],
    visoes: {
      historica: "Jesus discute com fariseus como quem discute dentro de casa: muitas de suas posições (ressurreição, autoridade da Torá interpretada) são farisaicas.",
      judaica: "O judaísmo rabínico posterior é herdeiro dos fariseus; a polêmica dos Evangelhos contra eles reflete o conflito entre grupos irmãos no fim do século I."
    }
  },

  // ————————————————————————————— infância —————————————————————————————
  {
    id: "anunciacao", t: -6.2, imp: 2, cat: "infancia",
    titulo: "A Anunciação a Maria",
    quando: "c. 6 a.C.",
    resumo: "O anjo Gabriel anuncia a uma jovem de Nazaré que ela conceberá um filho pelo poder do Espírito. O relato só aparece em Lucas; Mateus conta a mesma coisa do ponto de vista de José.",
    obras: ["anunciacao", "fra_angelico_anunciacao", "anunciacao_botticelli", "anunciacao_rossetti"],
    refs: ["Lc 1,26-38", "Mt 1,18-25"],
    visoes: {
      catolica: "Momento da Encarnação: o Verbo se faz carne no “sim” de Maria. A festa é celebrada em 25 de março, nove meses antes do Natal.",
      ortodoxa: "Evangelismos, uma das doze grandes festas. Maria é a Theotokos, aquela que gera Deus — título definido em Éfeso (431).",
      protestante: "O relato é aceito como está no texto, mas sem o culto mariano: Maria é modelo de fé, não intercessora.",
      judaica: "O nascimento virginal não é esperado do Messias. Isaías 7,14 fala de uma almah — jovem mulher —, e a tradução grega por parthenos (virgem) está na origem da leitura cristã.",
      islamica: "O Alcorão narra a mesma cena em duas suras: anjos anunciam a Maryam um filho criado pela palavra “seja”, sem pai. A concepção virginal é afirmada — a filiação divina, negada.",
      historica: "Os relatos da infância aparecem só em Mateus e Lucas, são tardios e divergem entre si; Marcos e Paulo, as fontes mais antigas, não sabem nada de nascimento virginal.",
      espirita: "Para o Espiritismo, Jesus foi um Espírito puro que encarnou pelas leis naturais, como qualquer outro; a concepção virginal é lida em sentido simbólico, e a grandeza está no Espírito, não no corpo.",
      apocrifa: "O Protoevangelho de Tiago acrescenta a infância de Maria no Templo, o sorteio dos pretendentes e a vara florida de José — cenas que a arte reproduziria por mil anos."
    }
  },
  {
    id: "visitacao", t: -6.05, imp: 4, cat: "infancia",
    titulo: "A Visitação e o Magnificat",
    quando: "c. 6 a.C.",
    resumo: "Maria vai à casa de Isabel, grávida de João Batista, e entoa o cântico que inverte a ordem do mundo: derruba os poderosos e eleva os humildes.",
    obras: ["visitacao"],
    refs: ["Lc 1,39-56"],
    visoes: {
      catolica: "Festa em 31 de maio; o Magnificat é rezado todos os dias nas Vésperas.",
      ortodoxa: "O encontro das duas mães é lido como o primeiro reconhecimento de Cristo, ainda no ventre.",
      protestante: "O Magnificat é dos textos mais citados por teologias sociais e de libertação, também em meio protestante.",
      historica: "O cântico é um mosaico de citações do Antigo Testamento, próximo ao cântico de Ana em 1Samuel — composição literária de Lucas."
    }
  },
  {
    id: "joao_nasce", t: -5.9, imp: 4, cat: "infancia",
    titulo: "Nascimento de João Batista",
    quando: "c. 6 a.C.",
    resumo: "Filho do sacerdote Zacarias e de Isabel, nasce seis meses antes de Jesus segundo Lucas. Cresce no deserto e se torna pregador de conversão.",
    refs: ["Lc 1,57-80"],
    visoes: {
      catolica: "Único santo, além de Maria, cujo nascimento é celebrado na liturgia (24 de junho).",
      ortodoxa: "Chamado Prodromos, o Precursor; aparece em quase todo ícone da Deesis, ao lado de Cristo.",
      islamica: "Yahya é profeta reconhecido no Alcorão, dado a Zacarias já idoso.",
      historica: "A existência e a execução de João são confirmadas por Josefo, de forma independente dos Evangelhos."
    }
  },
  {
    id: "nascimento", t: -5, imp: 1, cat: "infancia",
    titulo: "Nascimento de Jesus em Belém",
    quando: "entre 6 e 4 a.C.",
    resumo: "Mateus e Lucas situam o nascimento em Belém, na Judeia, no fim do reinado de Herodes. O ano exato é desconhecido: a contagem que usamos vem de um erro de cálculo do monge Dionísio, o Exíguo, no século VI.",
    obras: ["natividade", "natividade_giotto", "natividade_latour", "gruta_belem"],
    refs: ["Lc 2,1-20", "Mt 1,18–2,12"],
    visoes: {
      catolica: "Encarnação do Filho de Deus. O Natal em 25 de dezembro foi fixado em Roma no século IV; a data é litúrgica, não histórica.",
      ortodoxa: "Mesma festa, mas as igrejas que seguem o calendário juliano a celebram em 7 de janeiro do calendário civil.",
      protestante: "Aceita o relato bíblico; algumas correntes históricas chegaram a rejeitar a celebração do Natal por não ser bíblica.",
      judaica: "Nada exige que o Messias nasça de virgem; a expectativa é de um descendente de Davi que restaure Israel neste mundo.",
      islamica: "Isa nasce de Maryam, virgem, sem pai — sinal de Deus, como Adão, criado do pó. O nascimento é milagroso; a divindade, negada.",
      historica: "A maioria dos historiadores considera Nazaré, e não Belém, a cidade de origem; Belém cumpre a profecia de Miqueias 5,2 e é provável construção teológica.",
      espirita: "Encarnação voluntária de um Espírito de ordem superior, sujeito às leis naturais do nascimento como qualquer criatura.",
      apocrifa: "O Protoevangelho de Tiago põe a cena numa gruta, com o tempo parando no instante do parto — imagem que a iconografia oriental adotou."
    }
  },
  {
    id: "isa_tamareira", t: -5.03, imp: 3, cat: "infancia",
    titulo: "Isa nasce sob a tamareira",
    quando: "narrativa do Alcorão",
    resumo: "Na versão corânica, Maryam se retira para um lugar distante e dá à luz sozinha, agarrada ao tronco de uma tamareira que faz cair tâmaras maduras. O recém-nascido fala do berço para defender a mãe das acusações.",
    obras: ["isa_miniatura"],
    refs: ["Alcorão 19,16-34"],
    visoes: {
      islamica: "A sura Maryam é a única do Alcorão com nome de mulher. O bebê declara: “Sou servo de Deus; Ele me deu o Livro e fez de mim profeta” — a confissão que fecha qualquer leitura de divindade.",
      apocrifa: "A palmeira que se curva para alimentar Maria aparece antes, no Evangelho do Pseudo-Mateus: o Alcorão dialoga com um repertório cristão oriental já em circulação."
    }
  },
  {
    id: "pastores", t: -4.98, imp: 4, cat: "infancia",
    titulo: "O anúncio aos pastores",
    quando: "c. 5 a.C.",
    resumo: "Em Lucas, os primeiros a saber são pastores — trabalhadores de reputação duvidosa, testemunhas legalmente pouco confiáveis na época.",
    obras: ["pastores"],
    refs: ["Lc 2,8-20"],
    visoes: {
      catolica: "O presépio, popularizado por Francisco de Assis em Greccio (1223), nasce dessa cena.",
      protestante: "A escolha dos pastores é lida como sinal de que o Evangelho começa pelos que estão fora do círculo religioso.",
      historica: "Detalhe literário coerente com o programa de Lucas, que privilegia pobres e marginalizados em toda a obra.",
      espirita: "A simplicidade dos primeiros avisados ilustra a preferência do Evangelho pelos humildes de coração."
    }
  },
  {
    id: "apresentacao", t: -4.9, imp: 4, cat: "infancia",
    titulo: "Apresentação no Templo",
    quando: "c. 5 a.C.",
    resumo: "Quarenta dias após o parto, José e Maria levam o menino ao Templo e oferecem duas rolas — a oferta prevista para quem não podia pagar um cordeiro. O velho Simeão o reconhece e prevê a espada que atravessará a mãe.",
    obras: ["apresentacao"],
    refs: ["Lc 2,22-38", "Lv 12,8"],
    visoes: {
      catolica: "Festa da Apresentação (2 de fevereiro), popularmente Candelária; a profecia de Simeão funda a devoção às Dores de Maria.",
      ortodoxa: "Hypapante, o “Encontro”: uma das doze grandes festas, centrada no encontro do Antigo com o Novo.",
      protestante: "Cena valorizada como cumprimento fiel da Torá por uma família judia pobre.",
      historica: "O detalhe da oferta barata é um dos indícios de origem social modesta preservados no texto."
    }
  },
  {
    id: "magos", t: -4.85, imp: 3, cat: "infancia",
    titulo: "Os magos do Oriente",
    quando: "c. 5–4 a.C.",
    resumo: "Astrólogos vindos do Oriente seguem um astro até a criança e oferecem ouro, incenso e mirra. Mateus não diz quantos eram nem que fossem reis.",
    obras: ["magos"],
    refs: ["Mt 2,1-12"],
    visoes: {
      catolica: "Epifania, 6 de janeiro: a manifestação de Cristo às nações. Os três nomes tradicionais aparecem só a partir do século VI.",
      ortodoxa: "Em 6 de janeiro o Oriente celebra sobretudo a Teofania — o Batismo —, e não a visita dos magos.",
      protestante: "Cena lida como sinal de que o Messias judeu é oferecido a todos os povos.",
      historica: "Hipóteses astronômicas para a estrela incluem a conjunção tripla de Júpiter e Saturno em 7 a.C. e o cometa registrado por astrônomos chineses em 5 a.C.; nenhuma é conclusiva.",
      apocrifa: "Gaspar, Melchior e Baltazar, os camelos e o número três vêm de tradições posteriores, não do Evangelho."
    }
  },
  {
    id: "fuga_egito", t: -4.8, imp: 3, cat: "infancia",
    titulo: "A fuga para o Egito",
    quando: "c. 4 a.C.",
    resumo: "Avisado em sonho, José leva a família para o Egito e volta só depois da morte de Herodes, instalando-se em Nazaré.",
    obras: ["fuga_egito"],
    refs: ["Mt 2,13-23", "Os 11,1"],
    visoes: {
      catolica: "Episódio muito presente na devoção à Sagrada Família e, hoje, em leituras sobre refugiados.",
      ortodoxa: "A Igreja Copta mantém um itinerário devocional da Sagrada Família pelo Egito, com dezenas de locais reconhecidos.",
      historica: "Mateus organiza a infância como um novo Êxodo: Jesus repete o caminho de Israel e de Moisés, e a citação “do Egito chamei meu filho” dirige o enredo.",
      apocrifa: "O Pseudo-Mateus enche a viagem de prodígios: ídolos que desabam, feras que se amansam, a palmeira que se inclina."
    }
  },
  {
    id: "inocentes", t: -4.78, imp: 4, cat: "infancia",
    titulo: "A matança dos inocentes",
    quando: "c. 4 a.C.",
    resumo: "Herodes manda matar os meninos de Belém com menos de dois anos. O episódio aparece apenas em Mateus.",
    obras: ["inocentes"],
    refs: ["Mt 2,16-18", "Jr 31,15"],
    visoes: {
      catolica: "Os Santos Inocentes são celebrados em 28 de dezembro como os primeiros mártires.",
      historica: "Nenhuma fonte externa registra o massacre, nem mesmo Josefo, que detalha as crueldades de Herodes. Belém era um vilarejo: falaríamos de talvez uma dúzia de crianças, o que explicaria o silêncio — mas o episódio segue sem confirmação.",
      judaica: "A cena ecoa o faraó de Êxodo 1, reforçando a leitura de que Mateus escreve com moldes bíblicos."
    }
  },
  {
    id: "herodes_morre", t: -4, imp: 4, cat: "contexto",
    titulo: "Morte de Herodes, o Grande",
    quando: "4 a.C. (provável)",
    resumo: "Josefo associa a morte de Herodes a um eclipse lunar e à Páscoa seguinte, o que a maioria dos historiadores situa em 4 a.C. O reino é dividido entre três filhos.",
    refs: ["Josefo, Antiguidades XVII"],
    visoes: {
      historica: "Essa data é o limite superior para o nascimento de Jesus segundo Mateus — e a razão de o “ano zero” estar errado por pelo menos quatro anos."
    }
  },
  {
    id: "nazare", t: -3.5, t2: 28, imp: 3, cat: "infancia",
    titulo: "Os anos ocultos em Nazaré",
    quando: "c. 4 a.C. – 28 d.C.",
    resumo: "Trinta anos sobre os quais os Evangelhos praticamente nada dizem. Jesus é chamado de tekton, artesão que trabalha madeira e pedra, e fala aramaico galileu.",
    obras: ["galileia"],
    refs: ["Mc 6,3", "Lc 2,51-52"],
    visoes: {
      historica: "A arqueologia mostra Nazaré como aldeia de 200 a 400 habitantes, a seis quilômetros de Séforis, cidade helenizada em obras — provável mercado de trabalho para artesãos da região.",
      catolica: "A “vida oculta” é valorizada como santificação do trabalho e do cotidiano.",
      espirita: "Período de preparação do Espírito para a missão, vivido em condições comuns.",
      apocrifa: "O Evangelho da Infância de Tomé preenche o silêncio com um menino que modela pássaros de barro e os faz voar — e fulmina colegas que o contrariam."
    }
  },
  {
    id: "doutores", t: 7.5, imp: 4, cat: "infancia",
    titulo: "Jesus aos doze anos no Templo",
    quando: "c. 7–8 d.C.",
    resumo: "Perdido pelos pais durante a peregrinação da Páscoa, é encontrado três dias depois discutindo com os mestres. É a única cena da adolescência em todo o Novo Testamento.",
    obras: ["doutores"],
    refs: ["Lc 2,41-52"],
    visoes: {
      catolica: "Quinto mistério gozoso do rosário; a resposta “nas coisas de meu Pai” é lida como primeira consciência filial.",
      protestante: "Mostra uma família judia observante e um menino formado na Escritura.",
      historica: "Cena típica de biografias antigas, que costumavam antecipar na infância o talento do herói."
    }
  },
  {
    id: "irmaos", t: 12, imp: 5, cat: "infancia",
    titulo: "Os irmãos de Jesus",
    quando: "menções ao longo do séc. I",
    resumo: "Marcos nomeia Tiago, José, Judas e Simão como irmãos de Jesus, além de irmãs. Quem são eles é uma das divergências mais antigas entre as tradições.",
    refs: ["Mc 6,3", "Gl 1,19", "Josefo, Antiguidades XX"],
    visoes: {
      catolica: "São parentes próximos: o termo aramaico para irmão cobre primos. A virgindade perpétua de Maria é dogma.",
      ortodoxa: "São filhos de um casamento anterior de José, viúvo — solução do Protoevangelho de Tiago, dominante no Oriente.",
      protestante: "A leitura mais comum é a literal: filhos posteriores de Maria e José.",
      historica: "Paulo chama Tiago de “irmão do Senhor” e Josefo registra sua execução em 62; a existência de irmãos é dado histórico sólido, o parentesco exato é discutido.",
      apocrifa: "O Protoevangelho de Tiago é a fonte da tese do José viúvo com filhos."
    }
  },

  // ————————————————————————————— ministério —————————————————————————————
  {
    id: "joao_prega", t: 28.2, imp: 3, cat: "ministerio",
    titulo: "João Batista prega no Jordão",
    quando: "c. 28 d.C.",
    resumo: "Um profeta de manto de pelos convoca Israel a um banho de conversão às margens do Jordão. Multidões descem da Judeia; o movimento incomoda Herodes Antipas.",
    obras: ["joao_leonardo", "joao_bruegel"],
    refs: ["Mc 1,1-8", "Lc 3,1-18", "Josefo, Antiguidades XVIII,116-119"],
    visoes: {
      historica: "Josefo descreve João sem qualquer ligação com Jesus, o que reforça a existência independente do movimento batista — e alguns discípulos de João seguiram separados por décadas.",
      catolica: "O Precursor prepara o caminho; a Igreja lê seu batismo como anúncio do sacramento.",
      protestante: "Ênfase no chamado à conversão pessoal e no arrependimento como porta de entrada.",
      islamica: "Yahya é profeta enviado por Deus, confirmador da palavra divina.",
      espirita: "Missionário do plano espiritual encarregado de preparar o terreno moral para a missão de Jesus."
    }
  },
  {
    id: "batismo", t: 28.6, imp: 1, cat: "ministerio",
    titulo: "O batismo de Jesus no Jordão",
    quando: "c. 28–29 d.C.",
    resumo: "Jesus se põe na fila dos que buscam conversão e é batizado por João. Céu aberto, pomba, voz: começa a vida pública.",
    obras: ["batismo", "batismo_piero", "batismo_elgreco"],
    refs: ["Mc 1,9-11", "Mt 3,13-17", "Lc 3,21-22", "Jo 1,29-34"],
    visoes: {
      catolica: "Manifestação da Trindade e início do ministério; a festa fecha o tempo do Natal.",
      ortodoxa: "Teofania, celebrada em 6 de janeiro com a grande bênção das águas — a maior festa depois da Páscoa em muitas comunidades.",
      protestante: "Modelo de obediência e ponto de partida do ministério; base para as práticas de batismo de adultos em várias denominações.",
      historica: "Um dos dois fatos praticamente inquestionáveis da vida de Jesus. Justamente por ser embaraçoso — o maior sendo batizado pelo menor —, é considerado autêntico pelo critério da dificuldade; veja como Mateus e João já suavizam a cena.",
      espirita: "Marco simbólico do início da missão; a “pomba” é lida como manifestação espiritual perceptível aos presentes.",
      judaica: "Banhos rituais de purificação (mikvê) eram práticas judaicas comuns; a novidade era o gesto único e escatológico proposto por João."
    }
  },
  {
    id: "tentacao", t: 28.68, imp: 2, cat: "ministerio",
    titulo: "As tentações no deserto",
    quando: "c. 28–29 d.C.",
    resumo: "Quarenta dias de jejum e três propostas recusadas: pão, poder e espetáculo. Marcos resume em duas linhas; Mateus e Lucas desenvolvem o diálogo.",
    obras: ["tentacao", "tentacao_botticelli", "tentacao_scheffer"],
    refs: ["Mt 4,1-11", "Lc 4,1-13", "Mc 1,12-13"],
    visoes: {
      catolica: "Fundamento da Quaresma; as três tentações são lidas como recusa a um messianismo de poder.",
      ortodoxa: "Combate ascético que inaugura a tradição monástica do deserto.",
      protestante: "Jesus responde citando apenas a Escritura — modelo de resistência pela Palavra.",
      historica: "Composição literária construída sobre três citações do Deuteronômio; refaz os quarenta anos de Israel no deserto em quarenta dias.",
      espirita: "Provas morais e enfrentamento de Espíritos inferiores, dentro das leis que regem as relações entre os dois planos."
    }
  },
  {
    id: "chamado", t: 28.75, imp: 3, cat: "ministerio",
    titulo: "O chamado dos primeiros discípulos",
    quando: "c. 28–29 d.C.",
    resumo: "Pescadores do lago — Simão, André, Tiago e João — largam as redes. Depois virá um cobrador de impostos, figura socialmente detestada.",
    obras: ["chamado", "chamado_ghirlandaio"],
    refs: ["Mc 1,16-20", "Mt 9,9-13"],
    visoes: {
      catolica: "Vocação como iniciativa de Cristo, base da teologia do chamado.",
      protestante: "Discipulado como decisão pessoal e imediata.",
      historica: "O grupo misto — pescadores com barcos e um publicano — indica um movimento que não era de miseráveis absolutos nem de elite.",
      espirita: "Reencontro de Espíritos comprometidos com a mesma missão, atraídos por afinidade."
    }
  },
  {
    id: "galileia", t: 28.75, t2: 30.2, imp: 1, cat: "ministerio",
    titulo: "Ministério na Galileia",
    quando: "c. 28–30 d.C.",
    resumo: "O núcleo da atividade pública: pregação do Reino em sinagogas e ao ar livre, curas, exorcismos e refeições com gente de má fama, tendo Cafarnaum como base.",
    obras: ["galileia"],
    refs: ["Mc 1–9", "Lc 4–9"],
    visoes: {
      catolica: "Anúncio do Reino que se realiza na Igreja e nos sacramentos.",
      ortodoxa: "Manifestação progressiva do Deus encarnado, culminando no Tabor.",
      protestante: "Pregação do Reino e chamado à conversão, centro da mensagem.",
      judaica: "Um mestre galileu itinerante entre muitos, discutindo Torá dentro do judaísmo de seu tempo.",
      islamica: "Ministério profético de Isa entre os Filhos de Israel, confirmando a Torá e trazendo o Injil.",
      historica: "Consenso amplo: Jesus foi pregador itinerante, exorcista e curandeiro na Galileia, com mensagem centrada no Reino de Deus. A duração — um ano nos sinóticos, cerca de três em João — é discutida.",
      espirita: "Período de ensino moral e de fenômenos mediúnicos usados como recurso pedagógico."
    }
  },
  {
    id: "cana", t: 28.8, imp: 3, cat: "ministerio",
    titulo: "As bodas de Caná",
    quando: "c. 29 d.C.",
    resumo: "Numa festa de casamento, a pedido da mãe, Jesus transforma água em vinho. João chama o episódio de “o primeiro dos sinais”.",
    obras: ["cana", "cana_duccio"],
    refs: ["Jo 2,1-11"],
    visoes: {
      catolica: "Fundamento da intercessão de Maria: “fazei o que ele vos disser”. Também é leitura clássica sobre o matrimônio.",
      ortodoxa: "Sinal da transfiguração da matéria pela presença divina.",
      protestante: "Manifestação da glória de Cristo que leva os discípulos a crer.",
      historica: "Só em João, num evangelho organizado por sete sinais com forte carga simbólica; a abundância de vinho evoca as promessas messiânicas de Amós e Joel.",
      espirita: "Kardec lê os prodígios como efeitos de leis naturais ainda desconhecidas, não como suspensão dessas leis.",
      apocrifa: "A tradição posterior identificou o noivo com o apóstolo João — detalhe ausente do texto."
    }
  },
  {
    id: "templo_joao", t: 28.85, imp: 5, cat: "ministerio",
    titulo: "A purificação do Templo — versão de João",
    quando: "c. 29 d.C.",
    resumo: "João coloca a expulsão dos vendedores logo no início do ministério; os sinóticos, na última semana. Uma das discrepâncias cronológicas mais discutidas.",
    refs: ["Jo 2,13-22", "Mc 11,15-19"],
    visoes: {
      historica: "A maioria dos historiadores considera um único episódio, situado no fim — é o gesto que explica a prisão. João o antecipa por razões teológicas.",
      protestante: "Parte da tradição harmonizadora entende que houve dois episódios distintos, um no início e outro no fim.",
      catolica: "A leitura litúrgica privilegia a versão dos sinóticos, ligada à Paixão."
    }
  },
  {
    id: "nicodemos", t: 28.9, imp: 5, cat: "ministerio",
    titulo: "A conversa noturna com Nicodemos",
    quando: "c. 29 d.C.",
    resumo: "Um fariseu do Sinédrio procura Jesus à noite e ouve que é preciso “nascer de novo” — expressão que, em grego, também significa “nascer do alto”.",
    refs: ["Jo 3,1-21"],
    visoes: {
      protestante: "Texto central da teologia do novo nascimento e da conversão pessoal.",
      catolica: "Lido em chave batismal: nascer da água e do Espírito.",
      espirita: "Passagem-chave da leitura kardequiana: “nascer de novo” é entendido como reencarnação, tema que o Espiritismo considera pressuposto do Evangelho.",
      historica: "Diálogo típico de João, construído sobre um mal-entendido intencional entre sentido literal e espiritual."
    }
  },
  {
    id: "samaritana", t: 29.0, imp: 4, cat: "ministerio",
    titulo: "A samaritana no poço de Jacó",
    quando: "c. 29 d.C.",
    resumo: "Jesus pede água a uma mulher samaritana e trava com ela o diálogo mais longo que tem com alguém em todo o Evangelho de João — atravessando três barreiras: de gênero, de etnia e de reputação.",
    obras: ["samaritana"],
    refs: ["Jo 4,1-42"],
    visoes: {
      catolica: "Leitura batismal clássica, usada na preparação dos catecúmenos na Quaresma.",
      protestante: "Exemplo de evangelização direta e pessoal, sem mediação institucional.",
      ortodoxa: "A tradição a chama de santa Fotina e a venera como mártir.",
      historica: "Reflete a hostilidade real entre judeus e samaritanos e o interesse do cristianismo primitivo pela missão na Samaria."
    }
  },
  {
    id: "sermao", t: 29.1, imp: 2, cat: "ministerio",
    titulo: "O Sermão da Montanha",
    quando: "c. 29 d.C.",
    resumo: "Bem-aventuranças, Pai-Nosso, amor aos inimigos, a regra de ouro. Mateus reúne o essencial do ensino num só discurso; Lucas apresenta versão mais curta, numa planície.",
    obras: ["sermao"],
    refs: ["Mt 5–7", "Lc 6,20-49"],
    visoes: {
      catolica: "Magna carta da vida cristã, base da moral e da doutrina social.",
      protestante: "Centro da ética cristã; alimentou desde a Reforma radical até o pacifismo moderno.",
      ortodoxa: "Caminho das bem-aventuranças como programa de divinização.",
      judaica: "Boa parte tem paralelos na tradição rabínica: a regra de ouro na forma negativa é atribuída a Hillel, uma geração antes.",
      historica: "Composição de Mateus a partir de ditos avulsos, muitos vindos da fonte Q, comum a Mateus e Lucas.",
      espirita: "É o coração do Espiritismo: “O Evangelho segundo o Espiritismo” organiza-se em torno destes ensinamentos morais."
    }
  },
  {
    id: "doze", t: 29.15, imp: 3, cat: "ministerio",
    titulo: "A escolha dos Doze",
    quando: "c. 29 d.C.",
    resumo: "Jesus separa doze homens para acompanhá-lo e serem enviados. As listas dos Evangelhos não coincidem inteiramente.",
    refs: ["Mc 3,13-19", "Lc 6,12-16"],
    visoes: {
      catolica: "Origem do colégio apostólico e da sucessão apostólica dos bispos.",
      ortodoxa: "Os Doze são celebrados como fundamento da Igreja, sem primado jurisdicional de um sobre os outros.",
      protestante: "Grupo de discípulos enviados; a autoridade permanece na mensagem, não numa linhagem.",
      historica: "O número doze é programático: aponta para a restauração das doze tribos de Israel — é dado antigo, presente já em Paulo (1Cor 15,5)."
    }
  },
  {
    id: "curas", t: 29.2, imp: 4, cat: "ministerio",
    titulo: "Curas e exorcismos em Cafarnaum",
    quando: "c. 29 d.C.",
    resumo: "Paralíticos, leprosos, possessos, a sogra de Pedro. Marcos abre o evangelho com uma sequência de curas que atrai multidões e cria conflito com autoridades religiosas.",
    obras: ["curas_rembrandt"],
    refs: ["Mc 1,21-45", "Mc 2,1-12"],
    visoes: {
      catolica: "Sinais do Reino e prefiguração dos sacramentos de cura.",
      protestante: "Demonstração da autoridade de Cristo e de sua compaixão.",
      historica: "Que Jesus foi tido como curandeiro e exorcista é praticamente consenso — inclusive os adversários, nos textos, não negam os feitos: atribuem-nos a outro poder.",
      espirita: "Ação de fluidos e magnetismo espiritual; o Espiritismo relê possessões como obsessões espirituais tratáveis.",
      judaica: "Curandeiros carismáticos existiam no judaísmo galileu — Honi, o Traçador de Círculos, e Hanina ben Dosa são exemplos rabínicos."
    }
  },
  {
    id: "tempestade", t: 29.3, imp: 4, cat: "ministerio",
    titulo: "A tempestade acalmada",
    quando: "c. 29 d.C.",
    resumo: "Uma borrasca súbita no lago — comum no Kinneret por causa dos ventos das colinas — surpreende os discípulos enquanto Jesus dorme na popa.",
    obras: ["tempestade"],
    refs: ["Mc 4,35-41"],
    visoes: {
      catolica: "Imagem clássica da Igreja em meio à tempestade.",
      protestante: "Chamado à fé diante do medo.",
      ortodoxa: "Manifestação do domínio divino sobre o caos das águas, tema do Antigo Testamento.",
      historica: "A pergunta final — “quem é este?” — mostra a função do relato: cristologia narrada, não crônica meteorológica."
    }
  },
  {
    id: "jairo", t: 29.35, imp: 5, cat: "ministerio",
    titulo: "A filha de Jairo e a mulher que tocou o manto",
    quando: "c. 29 d.C.",
    resumo: "Marcos encaixa uma história dentro da outra: a caminho da casa do chefe da sinagoga, uma mulher com hemorragia crônica toca as vestes de Jesus.",
    refs: ["Mc 5,21-43"],
    visoes: {
      catolica: "“Talitha kum”, preservado em aramaico, é uma das poucas frases de Jesus na língua que ele falava.",
      historica: "As palavras aramaicas mantidas no texto grego são indício de tradição oral antiga.",
      espirita: "Lido como caso de morte aparente e de ação fluídica, não de retorno de um Espírito já desligado do corpo.",
      protestante: "Contraste entre a fé silenciosa da mulher e a autoridade religiosa que chega atrasada."
    }
  },
  {
    id: "joao_morre", t: 29.4, imp: 3, cat: "ministerio",
    titulo: "A execução de João Batista",
    quando: "c. 29 d.C.",
    resumo: "Preso por criticar o casamento de Herodes Antipas com Herodias, João é decapitado na fortaleza de Maquerus.",
    obras: ["joao_decapitado", "salome_caravaggio", "moreau_aparicao"],
    refs: ["Mc 6,14-29", "Josefo, Antiguidades XVIII,116-119"],
    visoes: {
      historica: "Josefo dá outro motivo: Antipas temia que a popularidade de João provocasse revolta. As duas explicações — moral e política — não se excluem.",
      catolica: "Mártir da verdade; sua morte prefigura a de Cristo.",
      islamica: "Yahya é venerado como profeta martirizado.",
      protestante: "Exemplo de coragem profética diante do poder."
    }
  },
  {
    id: "paes", t: 29.45, imp: 3, cat: "ministerio",
    titulo: "A multiplicação dos pães",
    quando: "c. 29 d.C.",
    resumo: "O único milagre narrado pelos quatro Evangelhos — em Marcos e Mateus, duas vezes. Cinco pães, dois peixes, milhares de pessoas e sobras que enchem doze cestos.",
    obras: ["paes"],
    refs: ["Mc 6,30-44", "Jo 6,1-15"],
    visoes: {
      catolica: "Prefiguração da Eucaristia: toma, abençoa, parte e distribui — os mesmos verbos da Última Ceia.",
      ortodoxa: "Sinal da abundância do Reino e do banquete eucarístico.",
      protestante: "Prova do poder e da compaixão de Cristo diante da fome real.",
      historica: "Em João, a multidão quer proclamá-lo rei — indício do potencial político que um movimento assim tinha aos olhos de Roma.",
      espirita: "Interpretado ora como fenômeno de materialização, ora como partilha desencadeada pelo exemplo — Kardec insiste que nada escapa às leis naturais."
    }
  },
  {
    id: "aguas", t: 29.5, imp: 4, cat: "ministerio",
    titulo: "Caminhando sobre as águas",
    quando: "c. 29 d.C.",
    resumo: "De madrugada, Jesus caminha sobre o lago; em Mateus, Pedro tenta ir ao encontro e afunda.",
    obras: ["aguas"],
    refs: ["Mc 6,45-52", "Mt 14,22-33"],
    visoes: {
      catolica: "“Sou eu” ecoa o nome divino revelado a Moisés.",
      ortodoxa: "Teofania sobre as águas, tema recorrente na himnografia.",
      protestante: "A dúvida de Pedro é usada como imagem da fé vacilante.",
      historica: "Cena de epifania com forte carga simbólica; alguns propõem confusão com uma figura vista à beira da água, mas o texto é claramente teológico."
    }
  },
  {
    id: "confissao", t: 29.6, imp: 3, cat: "ministerio",
    titulo: "A confissão de Pedro em Cesareia de Filipe",
    quando: "c. 29–30 d.C.",
    resumo: "“Quem dizeis que eu sou?” Pedro responde: “Tu és o Cristo”. Em Mateus, Jesus acrescenta: “sobre esta pedra edificarei minha Igreja”.",
    obras: ["chaves"],
    refs: ["Mc 8,27-30", "Mt 16,13-20"],
    visoes: {
      catolica: "Fundamento bíblico do primado de Pedro e do papado: as chaves entregues a uma pessoa e a seus sucessores.",
      ortodoxa: "Pedro é primeiro em honra, mas a rocha é a fé confessada; nenhum bispo tem jurisdição universal sobre os demais.",
      protestante: "A rocha é a confissão de fé, não a pessoa de Pedro — argumento central da Reforma contra o papado.",
      historica: "O acréscimo sobre a Igreja só existe em Mateus, escrito por volta de 85, quando comunidades já se organizavam institucionalmente."
    }
  },
  {
    id: "transfiguracao", t: 29.65, imp: 3, cat: "ministerio",
    titulo: "A Transfiguração",
    quando: "c. 29–30 d.C.",
    resumo: "Num monte alto — a tradição diz Tabor —, o rosto de Jesus brilha diante de Pedro, Tiago e João, com Moisés e Elias ao lado.",
    obras: ["transfiguracao"],
    refs: ["Mc 9,2-8", "2Pd 1,16-18"],
    visoes: {
      catolica: "Antecipação da glória pascal; festa em 6 de agosto.",
      ortodoxa: "Uma das doze grandes festas e centro da teologia hesicasta: a luz do Tabor é energia incriada de Deus, tese defendida por Gregório Palamas no século XIV.",
      protestante: "Confirmação da identidade divina de Cristo diante de testemunhas.",
      historica: "Alguns exegetas veem aí uma experiência pascal deslocada para o meio do ministério; outros, um relato de visão.",
      espirita: "Leitura clássica do Espiritismo: fenômeno de visão espiritual, com a aparição dos Espíritos de Moisés e Elias percebida pelos três discípulos."
    }
  },
  {
    id: "samaritano", t: 29.75, imp: 4, cat: "ministerio",
    titulo: "A parábola do bom samaritano",
    quando: "c. 30 d.C.",
    resumo: "Resposta à pergunta “quem é meu próximo?”. O herói é um samaritano — para o público original, justamente o herege.",
    obras: ["bom_samaritano"],
    refs: ["Lc 10,25-37"],
    visoes: {
      catolica: "Base da doutrina social e da caridade organizada.",
      protestante: "Fé que se prova em ação concreta.",
      espirita: "Ilustração perfeita da caridade como lei suprema: “fora da caridade não há salvação”.",
      historica: "Exclusiva de Lucas; a escolha do samaritano como modelo é provocação deliberada ao auditório judeu.",
      judaica: "A obrigação de socorrer o próximo já está em Levítico 19,18, texto que o próprio diálogo cita."
    }
  },
  {
    id: "prodigo", t: 29.8, imp: 4, cat: "ministerio",
    titulo: "A parábola do filho pródigo",
    quando: "c. 30 d.C.",
    resumo: "Um pai que corre para abraçar o filho que dilapidou a herança — e um irmão mais velho que não entende a festa.",
    obras: ["prodigo"],
    refs: ["Lc 15,11-32"],
    visoes: {
      catolica: "Ícone da misericórdia e do sacramento da reconciliação.",
      protestante: "Retrato da graça: o pai perdoa antes de qualquer discurso do filho.",
      espirita: "Lido como retorno do Espírito ao caminho do bem, através de vidas sucessivas e da reparação.",
      historica: "Pertence ao material próprio de Lucas; o realismo social — herança, fome, trabalho com porcos — é notável."
    }
  },
  {
    id: "adultera", t: 29.9, imp: 4, cat: "ministerio",
    titulo: "A mulher surpreendida em adultério",
    quando: "c. 30 d.C.",
    resumo: "“Quem de vós estiver sem pecado atire a primeira pedra.” O episódio mais famoso de João... não estava em João.",
    obras: ["adultera"],
    refs: ["Jo 7,53–8,11"],
    visoes: {
      historica: "A perícope falta nos manuscritos gregos mais antigos e migra de lugar entre cópias — inclusive para dentro de Lucas. É provável tradição antiga e autêntica em espírito, inserida no texto depois.",
      protestante: "Bíblias de estudo trazem a passagem entre colchetes, com nota sobre os manuscritos.",
      catolica: "Reconhecida como canônica e inspirada, apesar da história textual conhecida.",
      espirita: "Exemplo maior da recusa em condenar e do convite à reforma íntima."
    }
  },
  {
    id: "mulheres", t: 29.95, imp: 4, cat: "ministerio",
    titulo: "As mulheres que seguiam Jesus",
    quando: "c. 29–30 d.C.",
    resumo: "Lucas cita Maria Madalena, Joana, mulher de um administrador de Herodes, e Susana, que sustentavam o grupo com seus bens. Elas estarão na cruz e no túmulo.",
    obras: ["madalena"],
    refs: ["Lc 8,1-3", "Mc 15,40-41"],
    visoes: {
      historica: "Um grupo itinerante com mulheres, algumas com recursos próprios, é socialmente incomum e por isso mesmo considerado dado antigo, não invenção posterior.",
      catolica: "Madalena é chamada “apóstola dos apóstolos”; em 2016 sua memória foi elevada a festa. A identificação dela com uma prostituta foi corrigida em 1969.",
      ortodoxa: "Sempre a venerou como mirróforo (portadora de mirra) e igual aos apóstolos, nunca como pecadora pública.",
      protestante: "Realce ao papel das mulheres como primeiras testemunhas da Ressurreição.",
      apocrifa: "O Evangelho de Maria, texto do século II, apresenta Madalena como discípula que recebe revelações e enfrenta a resistência de Pedro."
    }
  },
  {
    id: "lazaro", t: 30.15, imp: 3, cat: "ministerio",
    titulo: "A ressurreição de Lázaro",
    quando: "c. 30 d.C.",
    resumo: "Em Betânia, Jesus chama para fora do túmulo um amigo morto há quatro dias. Em João, é o sinal que precipita a decisão de matá-lo.",
    obras: ["lazaro", "lazaro_vangogh", "lazaro_giotto", "lazaro_rembrandt"],
    refs: ["Jo 11,1-53"],
    visoes: {
      catolica: "Antecipação da Ressurreição e promessa da vida eterna: “eu sou a ressurreição e a vida”.",
      ortodoxa: "O Sábado de Lázaro, véspera de Ramos, é festa própria no calendário bizantino.",
      protestante: "Ponto alto da revelação do poder de Cristo sobre a morte.",
      historica: "Silêncio total dos sinóticos sobre um episódio dessa magnitude é o principal argumento para lê-lo como composição teológica de João.",
      espirita: "Kardec entende as ressurreições evangélicas como casos de morte aparente — letargia ou catalepsia —, pois o Espírito definitivamente desligado não retorna ao mesmo corpo."
    }
  },

  // ————————————————————————————— paixão —————————————————————————————
  {
    id: "ramos", t: 30.24, imp: 2, cat: "paixao",
    titulo: "Entrada em Jerusalém",
    quando: "domingo antes da Páscoa",
    resumo: "Jesus entra na cidade montado num jumento, aclamado com ramos. O gesto cita Zacarias 9,9: um rei que chega humilde, não em cavalo de guerra.",
    obras: ["ramos"],
    refs: ["Mc 11,1-11", "Zc 9,9"],
    visoes: {
      catolica: "Domingo de Ramos abre a Semana Santa; a procissão é rito universal.",
      ortodoxa: "Uma das doze grandes festas, celebrada com ramos de palmeira ou salgueiro.",
      protestante: "Início da Semana da Paixão, marcada pela pregação.",
      historica: "Uma entrada messiânica durante a Páscoa, com Jerusalém lotada de peregrinos e tropas romanas reforçadas, é exatamente o tipo de gesto que atrai atenção das autoridades.",
      judaica: "Multidões de peregrinos e expectativas de libertação eram parte normal da Páscoa em Jerusalém."
    }
  },
  {
    id: "templo_purificacao", t: 30.2427, imp: 3, cat: "paixao",
    titulo: "A expulsão dos vendilhões do Templo",
    quando: "início da semana da Páscoa",
    resumo: "Jesus derruba as mesas dos cambistas e dos vendedores de animais no pátio do Templo — o gesto público mais agressivo que os Evangelhos lhe atribuem.",
    obras: ["templo_purificacao"],
    refs: ["Mc 11,15-19", "Jo 2,13-22"],
    visoes: {
      historica: "Para boa parte dos pesquisadores, este é o estopim: um ataque simbólico ao centro econômico e religioso, em plena Páscoa, sela sua sorte.",
      catolica: "Purificação do culto e denúncia da religião transformada em comércio.",
      protestante: "Texto clássico contra a mercantilização da fé.",
      judaica: "Cambistas e venda de animais eram serviços necessários ao culto prescrito na Torá — a crítica é a um abuso, não ao Templo em si."
    }
  },
  {
    id: "ceia", t: 30.251, imp: 2, cat: "paixao",
    titulo: "A Última Ceia",
    quando: "quinta-feira à noite",
    resumo: "Na véspera da morte, Jesus parte o pão e distribui o cálice com palavras que se tornariam o centro do culto cristão. Anuncia a traição e a negação.",
    obras: ["ceia", "ceia_tintoretto", "ceia_juanes", "ceia_bouts"],
    refs: ["Mc 14,12-25", "1Cor 11,23-26", "Jo 13"],
    visoes: {
      catolica: "Instituição da Eucaristia e do sacerdócio: pão e vinho tornam-se realmente corpo e sangue (transubstanciação).",
      ortodoxa: "Mistério eucarístico celebrado com pão fermentado; a mudança é real, mas descrita como mistério, sem a terminologia escolástica.",
      protestante: "Aqui a Reforma se dividiu: Lutero afirmou presença real, Calvino falou de presença espiritual, Zuínglio de memorial simbólico.",
      judaica: "Os sinóticos apresentam a ceia como refeição pascal; o pão e o vinho, as bênçãos e o cântico final são elementos do seder.",
      historica: "A cronologia diverge: nos sinóticos a ceia é pascal e a morte ocorre na Páscoa; em João, a morte acontece na véspera, quando os cordeiros são imolados. A fórmula de 1Coríntios, dos anos 50, é o registro mais antigo.",
      espirita: "Refeição de despedida com sentido moral e fraterno; a Doutrina Espírita não pratica sacramentos.",
      islamica: "A sura 5 recebe o nome de Al-Ma'ida, “a mesa servida”: uma mesa descida do céu a pedido dos discípulos de Isa."
    }
  },
  {
    id: "lava_pes", t: 30.2513, imp: 4, cat: "paixao",
    titulo: "O lava-pés",
    quando: "quinta-feira à noite",
    resumo: "Em João, no lugar da instituição da ceia, Jesus se ajoelha e lava os pés dos discípulos — tarefa de escravo.",
    obras: ["lava_pes"],
    refs: ["Jo 13,1-17"],
    visoes: {
      catolica: "Rito da Missa da Ceia do Senhor na Quinta-feira Santa; desde 2016 pode incluir mulheres explicitamente.",
      ortodoxa: "Celebrado por bispos e abades na Quinta-feira Santa.",
      protestante: "Praticado como ordenança regular por menonitas, irmãos e outras tradições.",
      historica: "João substitui a instituição eucarística por um gesto de serviço — escolha teológica deliberada.",
      espirita: "Síntese do ensino sobre humildade e serviço ao próximo."
    }
  },
  {
    id: "getsemani", t: 30.2519, imp: 3, cat: "paixao",
    titulo: "A agonia no Getsêmani",
    quando: "noite de quinta-feira",
    resumo: "No olival, Jesus pede que o cálice passe e sua angústia é descrita como suor de sangue por Lucas. Os discípulos dormem.",
    obras: ["getsemani", "getsemani_elgreco", "getsemani_bellini"],
    refs: ["Mc 14,32-42", "Lc 22,44"],
    visoes: {
      catolica: "Prova suprema da humanidade de Cristo; primeiro mistério doloroso do rosário.",
      ortodoxa: "Manifestação da vontade humana que se une livremente à divina — questão definida no VI Concílio (681).",
      protestante: "Modelo de oração em sofrimento e de submissão à vontade do Pai.",
      historica: "Se todos dormiam, quem ouviu a oração? A pergunta é clássica e mostra o caráter construído da cena — o que não elimina a memória de angústia real.",
      espirita: "Momento de provação moral vencida pela submissão consciente à missão assumida."
    }
  },
  {
    id: "prisao", t: 30.2522, imp: 3, cat: "paixao",
    titulo: "A prisão e o beijo de Judas",
    quando: "noite de quinta-feira",
    resumo: "Judas identifica Jesus com um beijo. Uma tropa o prende sem resistência organizada; um discípulo corta a orelha de um servo.",
    obras: ["prisao", "judas_giotto"],
    refs: ["Mc 14,43-52", "Jo 18,1-11"],
    visoes: {
      catolica: "A traição de Judas é lida como drama da liberdade humana diante da graça.",
      protestante: "Contraste entre o beijo e o abandono de todos os demais.",
      historica: "Uma prisão noturna, discreta e fora do olhar das multidões é coerente com o receio de tumulto durante a festa.",
      espirita: "Judas é lido como Espírito imperfeito que sucumbiu à própria ambição, não como instrumento fatal do destino.",
      apocrifa: "O Evangelho de Judas, texto gnóstico do século II, inverte tudo: Judas seria o único discípulo a compreender Jesus e a agir a seu pedido."
    }
  },
  {
    id: "sinedrio", t: 30.2526, imp: 3, cat: "paixao",
    titulo: "O julgamento diante das autoridades judaicas",
    quando: "madrugada de sexta-feira",
    resumo: "Levado à casa do sumo sacerdote, Jesus é interrogado sobre o Templo e sobre ser o Messias. A conclusão: blasfêmia — e entrega ao prefeito romano.",
    obras: ["pilatos"],
    refs: ["Mc 14,53-65", "Jo 18,12-24"],
    visoes: {
      historica: "O procedimento descrito viola várias regras da Mishná para julgamentos capitais (à noite, na véspera de festa, sem intervalo). Provavelmente houve uma audiência informal de notáveis, não uma sessão plenária do Sinédrio.",
      judaica: "A pena de morte por crucificação é romana, não judaica; o judaísmo lapidava. A acusação de deicídio contra o povo judeu, sustentada por séculos, é historicamente insustentável e alimentou perseguições.",
      catolica: "A declaração Nostra Aetate (1965) rejeitou formalmente a culpa coletiva dos judeus pela morte de Jesus.",
      protestante: "Diversas igrejas emitiram declarações semelhantes ao longo do século XX.",
      ortodoxa: "A himnografia da Sexta-feira Santa carrega expressões duras que várias igrejas passaram a discutir e contextualizar."
    }
  },
  {
    id: "negacao", t: 30.2528, imp: 4, cat: "paixao",
    titulo: "A negação de Pedro",
    quando: "madrugada de sexta-feira",
    resumo: "No pátio, aquecido pelo fogo, o discípulo mais próximo nega três vezes conhecer Jesus. O galo canta.",
    obras: ["negacao"],
    refs: ["Mc 14,66-72"],
    visoes: {
      catolica: "Queda e restauração de Pedro fundamentam a teologia do perdão e da missão apesar da fraqueza.",
      protestante: "Retrato realista da fragilidade humana e da graça que restaura.",
      historica: "Um relato que expõe o líder da comunidade primitiva em situação vexatória tem forte presunção de autenticidade.",
      espirita: "Prova moral não superada no momento, seguida de arrependimento sincero e reparação."
    }
  },
  {
    id: "pilatos", t: 30.2531, imp: 2, cat: "paixao",
    titulo: "O julgamento diante de Pilatos",
    quando: "manhã de sexta-feira",
    resumo: "Diante do prefeito, a acusação muda de tom: de blasfêmia para pretensão régia — “rei dos judeus”, ameaça política. Pilatos condena à cruz.",
    obras: ["pilatos", "pilatos_munkacsy", "pilatos_ge"],
    refs: ["Mc 15,1-15", "Jo 18,28–19,16"],
    visoes: {
      historica: "A crucificação era pena romana para sedição, e o letreiro na cruz confirma a acusação política. O Pilatos hesitante dos Evangelhos contrasta com o administrador duro descrito por Fílon e Josefo — os textos cristãos tendem a aliviar Roma.",
      catolica: "“Padeceu sob Pôncio Pilatos” fixa a Paixão na história concreta.",
      judaica: "A responsabilidade pela sentença e pela execução é do poder romano.",
      protestante: "O silêncio de Jesus diante das acusações é lido à luz de Isaías 53.",
      islamica: "Toda esta sequência é entendida como um engano permitido por Deus: quem foi julgado e crucificado não era Isa."
    }
  },
  {
    id: "flagelacao", t: 30.2533, imp: 4, cat: "paixao",
    titulo: "A flagelação",
    quando: "manhã de sexta-feira",
    resumo: "Antes da execução, o açoite romano com o flagrum — couro com pontas de metal ou osso — aplicado a um condenado amarrado a uma coluna baixa.",
    obras: ["flagelacao"],
    refs: ["Mc 15,15-20", "Jo 19,1-5"],
    visoes: {
      catolica: "Segundo e terceiro mistérios dolorosos; centro da devoção às Chagas.",
      ortodoxa: "Cantada nos ofícios da Paixão da Sexta-feira Santa.",
      historica: "A flagelação precedia rotineiramente a crucificação e podia matar o condenado — é uma das explicações para a morte relativamente rápida na cruz."
    }
  },
  {
    id: "coroacao", t: 30.2534, imp: 5, cat: "paixao",
    titulo: "A coroação de espinhos",
    quando: "manhã de sexta-feira",
    resumo: "A tropa monta uma paródia de realeza: manto de púrpura, cetro de caniço, coroa trançada de espinhos e saudações de escárnio ao “rei dos judeus”.",
    obras: ["coroacao"],
    refs: ["Mc 15,16-20", "Jo 19,2-5"],
    visoes: {
      catolica: "Terceiro mistério doloroso; a coroa de espinhos venerada em Paris desde 1239 foi salva do incêndio de Notre-Dame em 2019.",
      ortodoxa: "Cantada nos ofícios da Paixão como realeza verdadeira revelada no escárnio.",
      historica: "O escárnio militar contra condenados é atestado em fontes romanas; o detalhe da acusação régia é coerente com o letreiro da cruz.",
      protestante: "Contraste entre a coroa de espinhos e a realeza que a fé confessa."
    }
  },
  {
    id: "viacrucis", t: 30.2535, imp: 3, cat: "paixao",
    titulo: "O caminho até o Gólgota",
    quando: "sexta-feira, meio da manhã",
    resumo: "Jesus carrega o patíbulo até o local da execução, fora dos muros. Simão de Cirene é obrigado a ajudar.",
    obras: ["viacrucis", "viacrucis_ticiano"],
    refs: ["Mc 15,21-22", "Lc 23,26-32"],
    visoes: {
      catolica: "A Via Sacra, com catorze estações, foi difundida pelos franciscanos; Verônica e as quedas vêm da tradição, não do texto.",
      ortodoxa: "Não há Via Sacra; a Paixão é percorrida na liturgia dos Doze Evangelhos, na Quinta-feira Santa.",
      historica: "O condenado carregava apenas a travessa horizontal; o poste vertical já estava fixado no local. Simão é identificado como pai de Alexandre e Rufo — sinal de que a família era conhecida da comunidade de Marcos."
    }
  },
  {
    id: "crucificacao", t: 30.2537, imp: 1, cat: "paixao",
    titulo: "A crucificação",
    quando: "sexta-feira, 7 de abril de 30 (ou 3 de abril de 33)",
    resumo: "Jesus é crucificado no Gólgota entre dois condenados, sob um letreiro que declara o motivo da pena: “rei dos judeus”.",
    obras: ["crucificacao", "crucificacao_mantegna", "crucificacao_zurbaran"],
    refs: ["Mc 15,22-32", "Jo 19,17-27", "Tácito, Anais XV,44"],
    visoes: {
      catolica: "Sacrifício redentor que reconcilia a humanidade com Deus; centro da missa e da Sexta-feira Santa.",
      ortodoxa: "Vitória sobre a morte já na cruz — a cruz é cantada como instrumento de triunfo, não apenas de dor.",
      protestante: "Expiação substitutiva: Cristo morre no lugar do pecador, tema central da pregação reformada.",
      judaica: "Execução romana de um judeu entre milhares de outros; a morte na cruz não é entendida como expiação universal.",
      islamica: "“Não o mataram nem o crucificaram, mas assim lhes pareceu” (Alcorão 4,157). Deus salvou Isa e o elevou a si; outro morreu em seu lugar.",
      historica: "Junto com o batismo, é o dado mais seguro sobre Jesus: atestado por Paulo, pelos Evangelhos e, de fora, por Tácito. As duas datas possíveis são 7 de abril de 30 e 3 de abril de 33.",
      espirita: "Morte real do corpo físico, coroando uma missão de exemplo; o Espiritismo recusa a ideia de sacrifício exigido por Deus para aplacar a justiça divina.",
      apocrifa: "Textos gnósticos como o Segundo Tratado do Grande Set também negam a morte real, dizendo que outro foi crucificado em seu lugar — tradição que ecoa na leitura corânica."
    }
  },
  {
    id: "morte", t: 30.2539, imp: 3, cat: "paixao",
    titulo: "A morte e as últimas palavras",
    quando: "sexta-feira, à tarde",
    resumo: "Trevas, o grito “por que me abandonaste?” em Marcos, o “está consumado” em João. O véu do Templo se rasga; um centurião reconhece o filho de Deus.",
    obras: ["morte_cruz", "cristo_morto_mantegna"],
    refs: ["Mc 15,33-41", "Lc 23,44-49", "Jo 19,28-30"],
    visoes: {
      catolica: "As sete palavras, reunidas dos quatro Evangelhos, estruturam a devoção da Sexta-feira Santa.",
      ortodoxa: "A morte de Cristo abre o caminho para a descida ao Hades, celebrada no Sábado Santo.",
      protestante: "O grito de abandono é lido como Salmo 22 inteiro, que termina em confiança.",
      historica: "Trevas e véu rasgado são linguagem apocalíptica; nenhum eclipse é possível na lua cheia da Páscoa.",
      espirita: "O perdão pedido aos algozes é apresentado como o ponto mais alto do ensino moral de Jesus."
    }
  },
  {
    id: "descida", t: 30.2541, imp: 4, cat: "paixao",
    titulo: "A descida da cruz",
    quando: "sexta-feira, fim da tarde",
    resumo: "José de Arimateia pede o corpo a Pilatos. Era véspera do sábado, e havia pressa para sepultar antes do pôr do sol.",
    obras: ["descida"],
    refs: ["Mc 15,42-46", "Jo 19,38-40"],
    visoes: {
      catolica: "A Pietà — Maria com o corpo do filho no colo — é devoção medieval, não cena bíblica.",
      ortodoxa: "O Epitáfio, ícone do corpo sepultado, é levado em procissão na Sexta-feira Santa.",
      historica: "Que um corpo de crucificado fosse entregue para sepultamento é excepcional, mas atestado: o ossuário de Yehohanan, achado em 1968, traz um calcanhar perfurado por um prego."
    }
  },
  {
    id: "pieta", t: 30.2542, imp: 5, cat: "paixao",
    titulo: "A Pietà: a dor da mãe",
    quando: "devoção posterior",
    resumo: "Nenhum Evangelho descreve Maria segurando o corpo do filho. A cena nasce na devoção alemã do século XIV e conquista a arte europeia.",
    obras: ["pieta"],
    refs: ["Jo 19,25-27"],
    visoes: {
      catolica: "Nossa Senhora das Dores; a Pietà de Michelangelo se tornou a imagem mais reproduzida do tema.",
      ortodoxa: "O tema equivalente é o Threnos, a lamentação sobre o corpo, com várias figuras e não apenas Maria.",
      historica: "Exemplo claro de como a imaginação devocional cria cenas que passam a ser lembradas como bíblicas."
    }
  },
  {
    id: "sepultamento", t: 30.2543, imp: 3, cat: "paixao",
    titulo: "O sepultamento",
    quando: "sexta-feira, ao anoitecer",
    resumo: "O corpo é envolto em linho e colocado num túmulo escavado na rocha, fechado com uma pedra. Mulheres observam onde foi posto.",
    obras: ["sepultamento", "sepultamento_rafael"],
    refs: ["Mc 15,46-47", "Jo 19,41-42"],
    visoes: {
      catolica: "O Santo Sepulcro, em Jerusalém, é venerado desde o século IV como o local.",
      ortodoxa: "Partilha o Santo Sepulcro com outras confissões sob o Statu Quo, acordo de 1852 que congela até a posição das escadas.",
      protestante: "Parte das igrejas prefere o Túmulo do Jardim, identificado no século XIX — devoção sem sustentação arqueológica.",
      historica: "Há debate: alguns pesquisadores argumentam que crucificados eram lançados em valas comuns; a menção nominal a José de Arimateia, porém, é considerada por muitos um dado antigo e verificável na época."
    }
  },
  {
    id: "hades", t: 30.2565, imp: 3, cat: "pascoa",
    titulo: "Sábado Santo: a descida ao Hades",
    quando: "sábado",
    resumo: "Entre a morte e a Ressurreição, a tradição cristã situa a descida de Cristo à morada dos mortos para libertar os justos de todas as eras.",
    obras: ["anastasis"],
    refs: ["1Pd 3,18-20", "Credo dos Apóstolos"],
    visoes: {
      ortodoxa: "É a imagem oficial da Ressurreição no Oriente: Cristo pisa as portas quebradas do Hades e arranca Adão e Eva pelos pulsos.",
      catolica: "“Desceu à mansão dos mortos”, no Credo; o Catecismo a explica como anúncio da redenção aos justos que morreram antes.",
      protestante: "Interpretações variam: alguns reformadores leram a expressão como referência ao sofrimento na cruz, não a um evento posterior.",
      apocrifa: "O Evangelho de Nicodemos narra a cena em detalhe, com o diálogo entre Hades e Satanás — fonte direta da iconografia."
    }
  },

  // ————————————————————————————— páscoa —————————————————————————————
  {
    id: "ressurreicao", t: 30.2592, imp: 1, cat: "pascoa",
    titulo: "A Ressurreição",
    quando: "domingo de manhã",
    resumo: "Mulheres encontram o túmulo aberto e vazio. Seguem-se relatos de aparições em Jerusalém e na Galileia — narrados de forma diferente por cada Evangelho.",
    obras: ["ressurreicao", "ressurreicao_grunewald"],
    refs: ["Mc 16,1-8", "1Cor 15,3-8", "Jo 20"],
    visoes: {
      catolica: "Fundamento da fé: se Cristo não ressuscitou, vã é a fé (1Cor 15,14). Corpo real e glorificado.",
      ortodoxa: "A Páscoa é a festa das festas; a saudação “Cristo ressuscitou — verdadeiramente ressuscitou” se repete por quarenta dias.",
      protestante: "Evento histórico e literal, base da esperança na ressurreição dos crentes.",
      judaica: "A ressurreição de um indivíduo antes do fim dos tempos não faz parte da expectativa judaica; a tradição sustenta que o Messias não veio.",
      islamica: "Como não houve morte na cruz, não há ressurreição: Isa foi elevado vivo e voltará antes do Dia do Juízo.",
      historica: "O método histórico alcança o que se pode documentar: que discípulos afirmaram ter visto Jesus vivo e mudaram radicalmente de vida. A lista de aparições em 1Coríntios 15 é um credo formulado poucos anos após os fatos. A explicação do evento fica fora do alcance da disciplina.",
      espirita: "Aparições reais de Jesus em corpo espiritual — fenômeno de materialização, segundo Kardec, e não retorno do corpo físico ao sepulcro.",
      apocrifa: "O Evangelho de Pedro descreve o momento da saída do túmulo, com dois anjos gigantes e uma cruz que fala — a canonicidade dos quatro textos se firmou também contra excessos como esse."
    }
  },
  {
    id: "noli", t: 30.2594, imp: 4, cat: "pascoa",
    titulo: "Maria Madalena, primeira testemunha",
    quando: "domingo de manhã",
    resumo: "Em João, ela chora junto ao túmulo, confunde Jesus com o jardineiro e o reconhece quando ele a chama pelo nome. É enviada a anunciar aos outros.",
    obras: ["noli", "noli_correggio"],
    refs: ["Jo 20,11-18"],
    visoes: {
      catolica: "Chamada “apóstola dos apóstolos” desde os Padres, título retomado oficialmente em 2016.",
      ortodoxa: "Igual aos apóstolos; a tradição a leva a pregar até Roma, onde teria oferecido um ovo vermelho ao imperador.",
      protestante: "Realce ao fato de a primeira testemunha ser uma mulher, num contexto em que seu testemunho tinha pouco valor legal.",
      historica: "Justamente por isso, o detalhe é considerado antigo: nenhuma comunidade inventaria testemunhas cujo depoimento era desqualificado."
    }
  },
  {
    id: "emaus", t: 30.2597, imp: 4, cat: "pascoa",
    titulo: "Os discípulos de Emaús",
    quando: "domingo à tarde",
    resumo: "Dois discípulos caminham conversando com um estranho e só o reconhecem quando ele parte o pão — e desaparece.",
    obras: ["emaus"],
    refs: ["Lc 24,13-35"],
    visoes: {
      catolica: "Estrutura da missa: Escritura explicada no caminho e pão partido à mesa.",
      protestante: "Cristo se dá a conhecer pela Palavra e pela comunhão.",
      espirita: "Aparição espiritual perceptível, coerente com a compreensão espírita do corpo fluídico.",
      historica: "Cena exclusiva de Lucas, construída como catequese narrativa para comunidades que já celebravam a fração do pão."
    }
  },
  {
    id: "tome", t: 30.2811, imp: 4, cat: "pascoa",
    titulo: "A dúvida de Tomé",
    quando: "oito dias depois",
    resumo: "O discípulo que não estava presente exige ver e tocar. Quando Jesus reaparece e o convida a fazê-lo, ele responde: “Meu Senhor e meu Deus”.",
    obras: ["tome", "tome_rembrandt"],
    refs: ["Jo 20,24-29"],
    visoes: {
      catolica: "A confissão de Tomé é o ponto alto cristológico do Evangelho de João.",
      protestante: "“Bem-aventurados os que creram sem ver” fundamenta a fé baseada no testemunho apostólico.",
      historica: "A cena responde a dúvidas reais das comunidades do fim do século I sobre a corporeidade do ressuscitado.",
      apocrifa: "Tomé virou protagonista de uma literatura própria — o Evangelho de Tomé e os Atos de Tomé, que o levam até a Índia."
    }
  },
  {
    id: "aparicao_lago", t: 30.29, imp: 5, cat: "pascoa",
    titulo: "A aparição junto ao lago",
    quando: "dias depois",
    resumo: "No capítulo final de João, os discípulos voltaram a pescar. Depois de uma pesca abundante e de um café da manhã na praia, Pedro é reabilitado com três perguntas sobre amor.",
    refs: ["Jo 21"],
    visoes: {
      catolica: "“Apascenta minhas ovelhas” é lido como confirmação do encargo pastoral de Pedro.",
      ortodoxa: "Restauração de Pedro por três vezes, uma para cada negação.",
      protestante: "Perdão e recomissionamento como padrão da restauração cristã.",
      historica: "O capítulo 21 é considerado apêndice acrescentado ao Evangelho de João, que já havia terminado no capítulo 20."
    }
  },
  {
    id: "ascensao", t: 30.366, imp: 2, cat: "pascoa",
    titulo: "A Ascensão",
    quando: "quarenta dias depois",
    resumo: "Segundo Lucas e Atos, Jesus é elevado ao céu diante dos discípulos, no monte das Oliveiras, quarenta dias após a Páscoa.",
    obras: ["ascensao", "ascensao_giotto"],
    refs: ["At 1,6-11", "Lc 24,50-53"],
    visoes: {
      catolica: "Solenidade obrigatória, quarenta dias após a Páscoa; Cristo “sentado à direita do Pai”.",
      ortodoxa: "Uma das doze grandes festas.",
      protestante: "Entronização de Cristo e início do tempo da Igreja e da missão.",
      islamica: "A elevação de Isa a Deus é afirmada, mas ocorre no lugar da crucificação, não depois dela.",
      historica: "Só Lucas narra a cena, e com cronologias diferentes no Evangelho e em Atos; o vocabulário é o das ascensões de heróis e profetas na literatura antiga.",
      espirita: "Desligamento definitivo do Espírito de Jesus do plano material, sem que isso signifique afastamento."
    }
  },

  // ————————————————————————————— igreja e fontes —————————————————————————————
  {
    id: "pentecostes", t: 30.393, imp: 2, cat: "igreja",
    titulo: "Pentecostes",
    quando: "cinquenta dias depois",
    resumo: "Na festa judaica de Shavuot, os discípulos reunidos relatam vento, fogo e a capacidade de serem entendidos por peregrinos de toda parte. É o início público do movimento.",
    obras: ["pentecostes", "pentecostes_ticiano", "pentecostes_restout"],
    refs: ["At 2"],
    visoes: {
      catolica: "Nascimento da Igreja e efusão do Espírito Santo sobre os apóstolos com Maria.",
      ortodoxa: "Festa da Santíssima Trindade; ícones mostram os apóstolos em semicírculo, sem Maria em algumas tradições.",
      protestante: "Marco do dom do Espírito a todo crente; o pentecostalismo do século XX faz dele o centro de sua identidade.",
      judaica: "Shavuot celebra o dom da Torá no Sinai — o paralelo entre lei e Espírito é intencional em Atos.",
      historica: "Lucas concentra num só dia um processo mais longo de formação e expansão das comunidades.",
      espirita: "Fenômeno mediúnico coletivo, com xenoglossia — falar línguas desconhecidas — descrito antes de a ciência ter nome para isso."
    }
  },
  {
    id: "estevao", t: 34, imp: 5, cat: "igreja",
    titulo: "O apedrejamento de Estêvão",
    quando: "c. 34 d.C.",
    resumo: "Primeiro mártir cristão, morto por uma multidão em Jerusalém. Atos registra que um jovem chamado Saulo guardava as capas dos executores.",
    refs: ["At 6–7"],
    visoes: {
      catolica: "Protomártir, celebrado em 26 de dezembro.",
      historica: "Indica que o conflito inicial se dá dentro do mundo judaico, entre grupos, e ainda sem envolvimento romano.",
      protestante: "O discurso de Estêvão é a primeira grande releitura cristã da história de Israel."
    }
  },
  {
    id: "paulo_conversao", t: 34.6, imp: 2, cat: "igreja",
    titulo: "A conversão de Paulo",
    quando: "c. 34–36 d.C.",
    resumo: "A caminho de Damasco para perseguir cristãos, Saulo de Tarso tem uma experiência que descreve como aparição do ressuscitado. Torna-se o principal missionário do movimento.",
    obras: ["paulo", "paulo_bruegel", "paulo_michelangelo"],
    refs: ["At 9,1-19", "Gl 1,11-17", "1Cor 15,8"],
    visoes: {
      catolica: "Apóstolo dos gentios, cujas cartas fundamentam boa parte da teologia cristã.",
      protestante: "A leitura de Romanos por Lutero está na origem da Reforma: justificação pela fé.",
      historica: "Paulo é a fonte cristã mais antiga que temos e o único autor do Novo Testamento que escreve sobre si mesmo — sua conversão é dado biográfico seguro, por volta de dois a cinco anos após a crucificação.",
      judaica: "Fariseu de formação, Paulo é figura central no debate sobre quando e como cristianismo e judaísmo se separaram.",
      espirita: "Exemplo de transformação moral súbita provocada por percepção espiritual."
    }
  },
  {
    id: "concilio_jerusalem", t: 49, imp: 4, cat: "igreja",
    titulo: "O encontro de Jerusalém",
    quando: "c. 48–49 d.C.",
    resumo: "Líderes decidem que os não judeus que aderissem ao movimento não precisariam ser circuncidados nem seguir integralmente a lei alimentar. É a decisão que torna o cristianismo universal.",
    refs: ["At 15", "Gl 2,1-10"],
    visoes: {
      catolica: "Modelo de colegialidade e primeiro concílio da história da Igreja.",
      protestante: "Precedente de decisão comunitária a partir da Escritura e da experiência missionária.",
      historica: "Paulo e Atos contam a reunião de formas diferentes; a versão de Gálatas, escrita pelo participante, é a mais antiga.",
      judaica: "Marca o ponto em que o movimento deixa de ser uma corrente interna do judaísmo."
    }
  },
  {
    id: "cartas_paulo", t: 50, t2: 62, imp: 3, cat: "fontes",
    titulo: "As cartas de Paulo",
    quando: "c. 50–62 d.C.",
    resumo: "Sete cartas de autoria praticamente incontestada — entre elas 1Tessalonicenses, Gálatas, 1 e 2Coríntios e Romanos — são os textos cristãos mais antigos que existem, anteriores a qualquer Evangelho.",
    refs: ["1Ts", "Gl", "1-2Cor", "Rm", "Fl", "Fm"],
    visoes: {
      historica: "1Coríntios 15,3-8 preserva uma fórmula de fé que Paulo diz ter recebido: o registro escrito mais próximo dos acontecimentos, formulado provavelmente nos anos 30.",
      protestante: "Base doutrinária da Reforma e da teologia da graça.",
      catolica: "Lidas junto com os Evangelhos e a Tradição, não acima delas.",
      espirita: "A frase “a letra mata, o espírito vivifica” é citada por Kardec como chave de leitura de toda a Escritura."
    }
  },
  {
    id: "tiago_morte", t: 62, imp: 5, cat: "fontes",
    titulo: "Execução de Tiago, irmão de Jesus",
    quando: "62 d.C.",
    resumo: "Josefo relata que o sumo sacerdote Anano aproveitou um intervalo entre governadores romanos para mandar apedrejar “Tiago, irmão de Jesus chamado o Cristo”.",
    obras: ["josefo"],
    refs: ["Josefo, Antiguidades XX,200"],
    visoes: {
      historica: "Esta passagem é considerada autêntica por quase todos os especialistas e é uma das melhores provas externas da existência de Jesus.",
      judaica: "Mostra que a comunidade de seguidores em Jerusalém ainda era liderada por um parente próximo, dentro do mundo judaico.",
      catolica: "Tiago é venerado como primeiro bispo de Jerusalém."
    }
  },
  {
    id: "nero", t: 64, imp: 4, cat: "contexto",
    titulo: "O incêndio de Roma e a perseguição de Nero",
    quando: "64 d.C.",
    resumo: "Depois do incêndio que destrói boa parte da cidade, Nero atribui a culpa aos cristãos e promove execuções públicas.",
    refs: ["Tácito, Anais XV,44"],
    visoes: {
      historica: "É neste contexto que Tácito, escrevendo por volta de 116, explica quem eram os cristãos — e registra a execução de Cristo por Pilatos.",
      catolica: "Tradição situa aqui os martírios de Pedro e Paulo em Roma."
    }
  },
  {
    id: "templo_destruido", t: 70, imp: 2, cat: "contexto",
    titulo: "A destruição do Templo de Jerusalém",
    quando: "agosto/setembro de 70 d.C.",
    resumo: "Após quatro anos de guerra, as legiões de Tito tomam Jerusalém, incendeiam o Templo e levam seus utensílios em triunfo para Roma.",
    obras: ["templo_destruido", "arco_tito"],
    refs: ["Josefo, Guerra Judaica VI", "Mc 13"],
    visoes: {
      judaica: "Ruptura decisiva: sem Templo e sem sacrifícios, o judaísmo se reorganiza em torno da Torá, da sinagoga e do estudo — nasce o judaísmo rabínico, em Yavne. O Tishá BeAv ainda hoje marca o luto.",
      historica: "Baliza para datar os Evangelhos: as descrições detalhadas da queda em Marcos 13 sugerem redação em torno de 70 ou pouco depois.",
      catolica: "Lida na tradição como cumprimento das palavras de Jesus sobre o Templo, sem que isso implique culpa coletiva do povo judeu.",
      protestante: "Tema recorrente na leitura profética e escatológica dos Evangelhos."
    }
  },
  {
    id: "marcos", t: 70, imp: 3, cat: "fontes",
    titulo: "O Evangelho de Marcos",
    quando: "c. 65–75 d.C.",
    resumo: "O mais antigo dos quatro, curto e direto, começa no batismo — sem infância — e termina, nos manuscritos mais antigos, com mulheres fugindo do túmulo em silêncio.",
    refs: ["Mc 1,1", "Mc 16,8"],
    visoes: {
      historica: "Serviu de fonte para Mateus e Lucas, junto com a coleção de ditos chamada Q — a chamada hipótese das duas fontes, majoritária hoje.",
      protestante: "O final abrupto e os finais acrescentados são discutidos abertamente nas Bíblias de estudo.",
      catolica: "Reconhecido como inspirado com os demais; o final longo é canônico."
    }
  },
  {
    id: "mateus_lucas", t: 85, imp: 3, cat: "fontes",
    titulo: "Os Evangelhos de Mateus e Lucas",
    quando: "c. 80–90 d.C.",
    resumo: "Ampliam Marcos com relatos de infância, discursos e aparições pascais. Mateus escreve para comunidades de origem judaica; Lucas, com olhar universalista e cuidado de historiador antigo.",
    refs: ["Mt 1", "Lc 1,1-4"],
    visoes: {
      historica: "As genealogias dos dois são incompatíveis entre si, e cada infância segue caminho próprio — sinal de tradições distintas costuradas a Marcos.",
      catolica: "Complementaridade dos quatro Evangelhos, lidos em conjunto na liturgia.",
      protestante: "Diferenças são tratadas como perspectivas de testemunhas, não como contradições.",
      espirita: "Kardec propõe reter dos Evangelhos sobretudo a moral, que segundo ele os quatro transmitem sem divergência relevante."
    }
  },
  {
    id: "josefo_ev", t: 93, imp: 3, cat: "fontes",
    titulo: "Josefo menciona Jesus",
    quando: "93–94 d.C.",
    resumo: "Nas “Antiguidades Judaicas”, o historiador judeu cita Jesus duas vezes. A passagem mais longa, o Testimonium Flavianum, chegou até nós com frases claramente cristãs.",
    obras: ["josefo"],
    refs: ["Josefo, Antiguidades XVIII,63-64 e XX,200"],
    visoes: {
      historica: "Consenso majoritário: havia um núcleo autêntico — Jesus, mestre, condenado por Pilatos, com seguidores — ampliado depois por copistas cristãos. Uma versão árabe do século X preserva forma mais sóbria.",
      judaica: "Josefo escreve como judeu para leitores romanos e trata o grupo como um entre vários movimentos da época.",
      catolica: "Citado desde Eusébio como confirmação externa dos Evangelhos."
    }
  },
  {
    id: "joao_ev", t: 95, imp: 3, cat: "fontes",
    titulo: "O Evangelho de João",
    quando: "c. 90–100 d.C.",
    resumo: "Estrutura, vocabulário e teologia diferentes dos outros três: longos discursos, sete sinais, e Jesus falando abertamente de sua origem divina desde o início.",
    refs: ["Jo 1,1-18", "Jo 20,30-31"],
    visoes: {
      catolica: "Evangelho espiritual, base da cristologia da Encarnação.",
      ortodoxa: "Lido na noite de Páscoa; João é chamado “o Teólogo”.",
      protestante: "Fonte de textos centrais da pregação, como João 3,16.",
      historica: "Redação em camadas, com material antigo independente (topografia de Jerusalém, festas) e teologia bastante desenvolvida.",
      espirita: "O prólogo é lido em chave espiritual, e as palavras sobre “muitas moradas” são citadas como referência à pluralidade dos mundos."
    }
  },
  {
    id: "plinio", t: 112, imp: 4, cat: "fontes",
    titulo: "Plínio, o Jovem, escreve a Trajano",
    quando: "c. 112 d.C.",
    resumo: "Governador na Bitínia, Plínio pergunta ao imperador como julgar cristãos e descreve o que apurou: reuniam-se antes do amanhecer e cantavam “a Cristo, como a um deus”.",
    refs: ["Plínio, Cartas X,96"],
    visoes: {
      historica: "Documento romano de primeira mão sobre práticas cristãs, escrito por quem não tinha simpatia pelo grupo.",
      protestante: "Testemunho antigo do culto a Cristo como divino, usado em debates sobre cristologia primitiva."
    }
  },
  {
    id: "tacito", t: 116, imp: 4, cat: "fontes",
    titulo: "Tácito registra a execução de Christus",
    quando: "c. 116 d.C.",
    resumo: "Ao narrar o incêndio de Roma, o historiador informa que o nome do grupo vinha de “Christus”, executado sob Tibério pelo procurador Pôncio Pilatos.",
    refs: ["Tácito, Anais XV,44"],
    visoes: {
      historica: "A menção mais valiosa entre as fontes romanas: hostil, independente e coerente com os Evangelhos quanto ao essencial. O título “procurador” é anacrônico, indício de que Tácito usou linguagem de sua época.",
      judaica: "Confirma que a execução foi ato do poder romano.",
      catolica: "Usada há séculos como confirmação externa do artigo do Credo sobre Pilatos."
    }
  },
  {
    id: "suetonio", t: 121, imp: 5, cat: "fontes",
    titulo: "Suetônio e a expulsão dos judeus de Roma",
    quando: "c. 121 d.C.",
    resumo: "Registra que Cláudio expulsou de Roma judeus que se agitavam “por instigação de Chrestus”, provável referência confusa a disputas sobre Cristo por volta de 49 d.C.",
    refs: ["Suetônio, Vida de Cláudio 25", "At 18,2"],
    visoes: {
      historica: "A grafia Chrestus e a ambiguidade tornam a passagem menos sólida que Tácito, mas ela combina com a chegada de Áquila e Priscila a Corinto, narrada em Atos."
    }
  },
  {
    id: "p52_ev", t: 135, imp: 4, cat: "fontes",
    titulo: "O fragmento mais antigo do Novo Testamento",
    quando: "c. 125–175 d.C.",
    resumo: "O papiro P52, com poucas linhas de João 18, é o mais antigo pedaço identificado de um manuscrito neotestamentário conhecido.",
    obras: ["p52"],
    refs: ["Papiro Rylands 457"],
    visoes: {
      historica: "Encontrado no Egito, mostra que o Evangelho de João já circulava longe de seu local de origem poucas décadas depois de escrito. A datação paleográfica, porém, tem margem de décadas.",
      protestante: "Peça central nos argumentos sobre a transmissão antiga do texto bíblico."
    }
  },
  {
    id: "tome_ev", t: 140, imp: 4, cat: "fontes",
    titulo: "O Evangelho de Tomé",
    quando: "compilação do séc. II",
    resumo: "Coleção de 114 ditos atribuídos a Jesus, sem narrativa, sem paixão e sem ressurreição. Foi encontrado completo em copta na biblioteca de Nag Hammadi, em 1945.",
    obras: ["nag_hammadi"],
    refs: ["Nag Hammadi II,2"],
    visoes: {
      apocrifa: "Alguns ditos têm paralelo direto nos sinóticos; outros são claramente gnósticos, com ênfase no conhecimento secreto e na salvação como despertar interior.",
      historica: "Uma minoria de pesquisadores defende que parte do material é tão antiga quanto Q; a maioria vê uma obra do século II dependente da tradição sinótica.",
      catolica: "Fora do cânone; útil como documento histórico, não como fonte de fé.",
      protestante: "Tratado como testemunho da diversidade cristã antiga, sem autoridade normativa."
    }
  },
  {
    id: "protoevangelho", t: 150, imp: 4, cat: "fontes",
    titulo: "O Protoevangelho de Tiago",
    quando: "c. 150 d.C.",
    resumo: "Narra a infância de Maria, o noivado com José viúvo, a gruta de Belém e a parteira incrédula. Sem existir no cânone, moldou festas, dogmas e imagens.",
    obras: ["gruta_belem"],
    refs: ["Protoevangelho de Tiago"],
    visoes: {
      apocrifa: "Daqui vêm os nomes Joaquim e Ana, a apresentação de Maria no Templo e a gruta que a arte oriental adotou.",
      catolica: "A Igreja não o reconhece como Escritura, mas festas como a Natividade de Maria têm origem nessa tradição.",
      ortodoxa: "Base da explicação oriental para os irmãos de Jesus: filhos de um casamento anterior de José.",
      historica: "Escrito por alguém pouco familiarizado com a geografia e os costumes judaicos da Palestina, o que indica composição tardia e fora da região."
    }
  },
  {
    id: "canon", t: 180, imp: 5, cat: "fontes",
    titulo: "A formação do cânone dos quatro Evangelhos",
    quando: "séc. II–IV",
    resumo: "Irineu de Lião defende, por volta de 180, que os Evangelhos devem ser quatro — nem mais, nem menos. A lista completa do Novo Testamento como o conhecemos aparece pela primeira vez em 367, numa carta de Atanásio.",
    refs: ["Irineu, Contra as Heresias III,11", "Atanásio, Carta Festal 39"],
    visoes: {
      catolica: "A Igreja reconhece — não cria — os livros inspirados; o cânone é fixado definitivamente em Trento (1546).",
      protestante: "O cânone se impõe pela autoridade própria dos textos, não por decisão eclesiástica.",
      historica: "O processo é longo e disputado: Marcião propôs um cânone reduzido, e livros como Apocalipse e Hebreus demoraram a ser aceitos em algumas regiões.",
      apocrifa: "Dezenas de evangelhos, atos e apocalipses ficaram de fora e continuaram sendo lidos por séculos."
    }
  },
  {
    id: "alexamenos_ev", t: 200, imp: 4, cat: "fontes",
    titulo: "O grafite de Alexamenos",
    quando: "c. 200 d.C.",
    resumo: "Riscado numa parede do Palatino, em Roma, mostra um crucificado com cabeça de asno e um homem em adoração, sob a legenda “Alexamenos adora seu deus”.",
    obras: ["alexamenos"],
    refs: ["Museu Palatino, Roma"],
    visoes: {
      historica: "É a representação mais antiga conhecida da crucificação — feita por um adversário. Mostra como o culto a um crucificado soava absurdo à mentalidade romana.",
      catolica: "Testemunho involuntário de que cristãos já adoravam Cristo crucificado no início do século III."
    }
  },
  {
    id: "talmude", t: 200, t2: 500, imp: 4, cat: "fontes",
    titulo: "Yeshu nas fontes rabínicas",
    quando: "séc. III–VI",
    resumo: "O Talmude traz passagens dispersas sobre um Yeshu enforcado na véspera de Pessach por praticar magia e desviar Israel — textos tardios, censurados em edições europeias.",
    refs: ["Sanhedrin 43a"],
    visoes: {
      judaica: "Não são crônicas históricas, e sim polêmica tardia, escrita séculos depois e em outro contexto; muitos estudiosos judeus consideram que nem sempre se referem ao Jesus dos Evangelhos.",
      historica: "Valor histórico baixo quanto aos fatos, mas alto para entender como as comunidades se olhavam mutuamente depois da separação.",
      catolica: "Passagens usadas em disputas medievais, contexto que produziu queima de exemplares do Talmude — parte de uma história que a Igreja hoje reconhece como perseguição."
    }
  },
  {
    id: "imagens", t: 250, imp: 4, cat: "fontes",
    titulo: "As primeiras imagens de Cristo",
    quando: "séc. II–III",
    resumo: "Nas catacumbas romanas e em Dura-Europos, Jesus aparece como jovem imberbe, pastor com a ovelha aos ombros ou taumaturgo com uma varinha. Nada de cruz, nada de barba.",
    obras: ["bom_pastor"],
    refs: ["Catacumbas de Priscila e de Calisto", "Dura-Europos"],
    visoes: {
      historica: "A iconografia começa emprestando modelos pagãos; o Cristo barbado e frontal só se firma a partir do século IV, com o modelo imperial.",
      ortodoxa: "A defesa dos ícones como consequência da Encarnação será definida no VII Concílio (787), depois de duas ondas iconoclastas.",
      catolica: "A imagem é considerada auxílio à devoção, distinguindo veneração de adoração.",
      protestante: "Parte da Reforma, sobretudo calvinista, rejeitou imagens no culto, provocando ondas de destruição no século XVI."
    }
  },
  {
    id: "niceia", t: 325, imp: 2, cat: "igreja",
    titulo: "O Concílio de Niceia",
    quando: "325 d.C.",
    resumo: "Convocado por Constantino para resolver a disputa com Ário, que via o Filho como criatura. O concílio define o Filho como “consubstancial ao Pai” e formula o núcleo do Credo.",
    obras: ["niceia"],
    refs: ["Credo niceno"],
    visoes: {
      catolica: "Definição dogmática irreversível da divindade de Cristo.",
      ortodoxa: "Primeiro dos sete concílios ecumênicos, base comum de toda a ortodoxia.",
      protestante: "As igrejas da Reforma mantêm o Credo niceno; grupos não trinitários posteriores o rejeitam.",
      historica: "O concílio não “inventou” a divindade de Cristo — Plínio já a registrava em 112 —, mas fixou vocabulário técnico e envolveu o poder imperial na definição doutrinária.",
      islamica: "A teologia islâmica vê nas definições conciliares o momento em que a mensagem de Isa teria sido alterada."
    }
  },
  {
    id: "natal_data", t: 336, imp: 4, cat: "igreja",
    titulo: "O Natal em 25 de dezembro",
    quando: "336 d.C. (primeiro registro em Roma)",
    resumo: "A data aparece pela primeira vez num calendário romano de 336. Antes disso, várias comunidades celebravam o nascimento em 6 de janeiro.",
    obras: ["pastores", "sol_invictus"],
    refs: ["Cronógrafo de 354"],
    visoes: {
      historica: "Duas explicações concorrem: a substituição da festa solar do Sol Invicto e o cálculo simbólico que fixava a concepção em 25 de março, data tradicional da Paixão.",
      catolica: "Data litúrgica, nunca apresentada como aniversário histórico.",
      ortodoxa: "As igrejas que mantêm o calendário juliano celebram no dia 7 de janeiro civil; armênios permanecem em 6 de janeiro.",
      protestante: "Puritanos chegaram a proibir o Natal na Inglaterra e na Nova Inglaterra do século XVII por considerá-lo invenção humana."
    }
  },
  {
    id: "calcedonia", t: 451, imp: 3, cat: "igreja",
    titulo: "O Concílio de Calcedônia",
    quando: "451 d.C.",
    resumo: "Define Cristo como uma pessoa em duas naturezas, divina e humana, “sem confusão, sem mudança, sem divisão, sem separação”.",
    refs: ["Definição de Calcedônia"],
    visoes: {
      catolica: "Fórmula cristológica normativa até hoje.",
      ortodoxa: "Aceita pelas igrejas ortodoxas calcedonianas, que a leem na chave dos Padres gregos.",
      protestante: "Mantida pelas principais tradições reformadas como resumo fiel da Escritura.",
      historica: "O concílio provocou o primeiro grande cisma duradouro: coptas, siríacos, armênios e etíopes não o aceitaram, formando as igrejas ortodoxas orientais. Diálogos do século XX concluíram que boa parte da divergência era de vocabulário."
    }
  },
  {
    id: "pantocrator_ev", t: 550, imp: 3, cat: "igreja",
    titulo: "O rosto que se tornou padrão",
    quando: "séc. VI",
    resumo: "O ícone do Pantocrator do Sinai fixa o rosto barbado, de olhos assimétricos, que se tornaria a imagem mais reconhecível de Cristo no mundo inteiro.",
    obras: ["pantocrator", "deesis"],
    refs: ["Mosteiro de Santa Catarina, Sinai"],
    visoes: {
      ortodoxa: "O ícone não é ilustração: é presença e teologia em cores, defendida no VII Concílio contra os iconoclastas.",
      catolica: "A tradição latina desenvolve caminho próprio, com escultura e imagens narrativas.",
      historica: "Ninguém sabe como Jesus era; a fisionomia consagrada é uma convenção artística formada entre os séculos IV e VI, provavelmente inspirada em imagens imperiais e filosóficas."
    }
  },
  {
    id: "alcorao", t: 632, imp: 2, cat: "fontes",
    titulo: "O Alcorão e Isa ibn Maryam",
    quando: "610–632 d.C.",
    resumo: "Jesus aparece em quinze suras, sempre como profeta, Messias, servo e palavra de Deus — nascido de virgem, curador de cegos e leprosos, elevado ao céu, e que voltará.",
    obras: ["isa_miniatura"],
    refs: ["Alcorão 3, 4, 5, 19, 43"],
    visoes: {
      islamica: "Isa é um dos cinco maiores profetas. Negar sua profecia é descrença; afirmar sua divindade é o pecado maior. Ele voltará antes do Dia do Juízo e desmentirá o que fizeram de sua mensagem.",
      historica: "O texto dialoga com tradições cristãs orientais e apócrifas em circulação na Arábia do século VII — as tâmaras da palmeira e os pássaros de barro vêm desse repertório.",
      catolica: "A Nostra Aetate reconhece que os muçulmanos “veneram Jesus como profeta” e honram Maria.",
      apocrifa: "O menino que modela pássaros de barro e lhes dá vida está no Evangelho da Infância de Tomé e reaparece no Alcorão 3,49."
    }
  },
  {
    id: "dionisio", t: 525, imp: 4, cat: "fontes",
    titulo: "O erro que criou o “antes de Cristo”",
    quando: "525 d.C.",
    resumo: "O monge Dionísio, o Exíguo, calcula em Roma o ano do nascimento de Jesus para montar tabelas de Páscoa — e erra por alguns anos. Como Herodes morreu em 4 a.C., o nascimento acaba caindo antes do próprio “ano 1”.",
    obras: ["gruta_belem"],
    refs: ["Dionísio, o Exíguo, Argumenta paschalia (525)", "Josefo, Antiguidades XVII"],
    visoes: {
      historica: "A contagem a partir da Encarnação só se generaliza no século VIII, com Beda. Dionísio não tinha como acertar: faltavam-lhe as datas de Herodes e dos imperadores que hoje conhecemos. Some-se a isso o fato de não haver ano zero — 1 a.C. é seguido direto por 1 d.C. — e o resultado é que Jesus nasce entre 6 e 4 a.C.",
      catolica: "A Igreja adotou a era cristã sem nunca tratá-la como datação histórica exata; o Natal é data litúrgica.",
      judaica: "O calendário judaico conta desde a criação do mundo segundo a tradição (ano 3761 a.C.), e não tem relação com essa contagem.",
      islamica: "O calendário islâmico conta a partir da Hégira (622 d.C.), em anos lunares."
    }
  },
  {
    id: "niceia2", t: 787, imp: 4, cat: "igreja",
    titulo: "O Segundo Concílio de Niceia e os ícones",
    quando: "787 d.C.",
    resumo: "Depois de meio século de destruição de imagens, o concílio decide que representar Cristo é consequência da Encarnação: quem tem corpo pode ser pintado.",
    obras: ["pantocrator"],
    refs: ["Atas do II Concílio de Niceia"],
    visoes: {
      ortodoxa: "Vitória celebrada até hoje como Triunfo da Ortodoxia, no primeiro domingo da Quaresma. Venera-se o ícone, adora-se apenas a Deus.",
      catolica: "Reconhecido como sétimo concílio ecumênico; a tradição latina adota a mesma distinção entre veneração e adoração.",
      protestante: "A Reforma reabriu a questão, e correntes calvinistas voltaram a rejeitar imagens no culto.",
      islamica: "A recusa islâmica de imagens de Deus e dos profetas é um dos pontos de contraste mais visíveis com o cristianismo oriental."
    }
  },
  {
    id: "cisma", t: 1054, imp: 4, cat: "igreja",
    titulo: "O Grande Cisma do Oriente",
    quando: "1054",
    resumo: "Excomunhões mútuas em Constantinopla selam a separação entre Roma e as igrejas do Oriente, depois de séculos de afastamento cultural, político e teológico.",
    refs: ["Filioque", "Concílio de Florença (1439)"],
    visoes: {
      catolica: "A disputa envolve o Filioque no Credo e a autoridade universal do papa; as excomunhões foram revogadas em 1965.",
      ortodoxa: "O ponto central é a recusa do acréscimo latino ao Credo e da jurisdição papal sobre as demais igrejas.",
      historica: "A ruptura foi processo longo, não um episódio: a data de 1054 é simbólica, e o saque de Constantinopla em 1204 pesou muito mais."
    }
  },
  {
    id: "presepio", t: 1223, imp: 5, cat: "igreja",
    titulo: "Francisco de Assis inventa o presépio",
    quando: "Natal de 1223",
    resumo: "Em Greccio, na Itália, Francisco monta uma manjedoura com feno, um boi e um jumento para que as pessoas vissem com os olhos a pobreza do nascimento.",
    obras: ["greccio_giotto"],
    refs: ["Tomás de Celano, Vida Primeira"],
    visoes: {
      catolica: "Daí nasce a tradição do presépio, hoje presente em milhões de casas.",
      historica: "O boi e o burro não estão nos Evangelhos: vêm de uma leitura de Isaías 1,3 e do Pseudo-Mateus, e chegam a Greccio já como imagem consagrada.",
      apocrifa: "É mais um caso de detalhe apócrifo que a devoção transformou em memória coletiva."
    }
  },
  {
    id: "erasmo", t: 1516, imp: 4, cat: "fontes",
    titulo: "Erasmo publica o Novo Testamento em grego",
    quando: "1516",
    resumo: "Com a imprensa, o texto grego volta a circular e revela diferenças em relação à Vulgata latina usada havia mil anos. Começa a crítica textual moderna.",
    refs: ["Novum Instrumentum omne"],
    visoes: {
      protestante: "A edição de Erasmo é a base do texto que Lutero traduz para o alemão em 1522.",
      catolica: "Trento reafirma a Vulgata como texto oficial, sem negar o valor dos originais.",
      historica: "É o começo do trabalho que hoje compara milhares de manuscritos — e que permitiu identificar acréscimos como o final longo de Marcos e a perícope da adúltera."
    }
  },
  {
    id: "tabor", t: 1341, imp: 5, cat: "igreja",
    titulo: "A luz do Tabor e o hesicasmo",
    quando: "1341–1351",
    resumo: "Concílios em Constantinopla confirmam a doutrina de Gregório Palamas: a luz vista na Transfiguração era energia incriada de Deus, acessível na oração, e não um símbolo criado.",
    obras: ["tabor_icone"],
    refs: ["Gregório Palamas, Tríades"],
    visoes: {
      ortodoxa: "Coração da espiritualidade oriental: Deus é inacessível em sua essência e verdadeiramente comunicável em suas energias — daí a possibilidade real de divinização.",
      catolica: "A teologia latina seguiu outro caminho, com a distinção entre natureza e graça; o diálogo moderno reduziu boa parte da oposição.",
      historica: "A disputa mostra como um episódio evangélico — o monte da Transfiguração — continuou gerando definições doutrinárias mil e trezentos anos depois."
    }
  },
  {
    id: "sudario", t: 1354, imp: 4, cat: "fontes",
    titulo: "O Sudário de Turim",
    quando: "primeira exposição documentada: 1354",
    resumo: "Um lençol de linho de 4,4 metros com a imagem tênue de um homem torturado e crucificado. Objeto de devoção intensa e de disputa científica desde então.",
    obras: ["sudario"],
    refs: ["Catedral de Turim"],
    visoes: {
      catolica: "A Igreja nunca se pronunciou sobre a autenticidade e o trata como ícone e objeto de devoção, não como relíquia comprovada.",
      historica: "A datação por carbono-14 de 1988, feita por três laboratórios, apontou o período entre 1260 e 1390. Contestações sobre contaminação e remendos continuam, e a formação da imagem segue sem explicação consensual.",
      protestante: "Em geral tratado com reserva, na linha da crítica reformada às relíquias."
    }
  },
  {
    id: "reforma", t: 1517, imp: 3, cat: "igreja",
    titulo: "A Reforma e o retorno ao texto",
    quando: "a partir de 1517",
    resumo: "Lutero, Calvino e outros deslocam a autoridade da tradição para a Escritura, traduzem a Bíblia para línguas vernáculas e mudam para sempre a forma de ler os Evangelhos no Ocidente.",
    obras: ["lutero_cranach"],
    refs: ["95 teses", "Bíblia de Lutero (1534)"],
    visoes: {
      protestante: "Sola scriptura, sola fide, sola gratia: o acesso direto ao texto define a identidade das igrejas reformadas.",
      catolica: "O Concílio de Trento responde reafirmando Tradição e Vulgata; o Vaticano II (1965) reabre o incentivo à leitura bíblica pelos fiéis.",
      historica: "A imprensa e as traduções vernáculas criaram as condições materiais para a crítica textual moderna, que nasce no mundo protestante do século XVIII."
    }
  },
  {
    id: "kardec_ev", t: 1857, imp: 2, cat: "igreja",
    titulo: "A leitura espírita de Jesus",
    quando: "1857–1868",
    resumo: "Allan Kardec organiza em Paris as obras básicas do Espiritismo. Em “O Evangelho segundo o Espiritismo” (1864), apresenta Jesus como modelo moral e guia espiritual da humanidade.",
    obras: ["kardec"],
    refs: ["O Livro dos Espíritos (1857)", "O Evangelho segundo o Espiritismo (1864)"],
    visoes: {
      espirita: "Jesus é o Espírito mais puro que passou pela Terra e seu governador espiritual — não Deus, nem parte de uma trindade. Os milagres são fenômenos naturais mal compreendidos, e a moral do Evangelho é a parte que importa.",
      catolica: "A Igreja não reconhece as obras espíritas e desaconselha a prática mediúnica.",
      historica: "O Espiritismo nasce no ambiente do século XIX de fé no progresso e nas ciências, e no Brasil tornou-se o país com maior número de adeptos do mundo.",
      protestante: "Rejeitado pela maioria das igrejas por conflitar com a suficiência da Escritura."
    }
  },
  {
    id: "jesus_historico", t: 1906, imp: 3, cat: "fontes",
    titulo: "A busca do Jesus histórico",
    quando: "séc. XVIII–XXI",
    resumo: "De Reimarus a Schweitzer, e depois dele em novas ondas, gerações de pesquisadores tentam separar o Jesus da história do Cristo da fé — e descobrem que o resultado varia com quem procura.",
    obras: ["pedra_pilatos", "schweitzer"],
    refs: ["Albert Schweitzer, História da pesquisa sobre a vida de Jesus (1906)"],
    visoes: {
      historica: "Schweitzer mostrou que cada época pintava um Jesus à sua imagem; a pesquisa atual insiste em situá-lo no judaísmo do século I, com critérios explícitos e menos ilusão de neutralidade.",
      catolica: "O método histórico-crítico é reconhecido oficialmente desde 1943 e usado nos estudos bíblicos católicos.",
      protestante: "Foi no mundo protestante alemão que a crítica bíblica moderna se desenvolveu, com forte reação conservadora em seguida.",
      judaica: "Pesquisadores judeus tiveram papel decisivo em recolocar Jesus dentro do judaísmo de seu tempo."
    }
  },
  {
    id: "nostra_aetate", t: 1965, imp: 4, cat: "igreja",
    titulo: "Nostra Aetate e a revisão das relações",
    quando: "28 de outubro de 1965",
    resumo: "O Concílio Vaticano II declara que a morte de Cristo não pode ser imputada indistintamente aos judeus de então nem aos de hoje, e condena o antissemitismo.",
    refs: ["Nostra Aetate 4"],
    visoes: {
      catolica: "Ponto de virada no diálogo inter-religioso; reconhece também o que há de verdadeiro no islã e em outras tradições.",
      judaica: "Recebido como marco importante, ainda que o diálogo siga com pontos sensíveis.",
      historica: "Encerra oficialmente a acusação de deicídio, usada por séculos para justificar perseguições."
    }
  }
];

window.JC.eventosPorId = window.JC.eventos.reduce(function (acc, e) { acc[e.id] = e; return acc; }, {});
