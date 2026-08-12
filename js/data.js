window.LS_DATA = {
  areas: [
    { n: 'Som e Iluminação Ambiente', d: 'Sonorização multiroom pensada divisão a divisão, ou espaço a espaço.', img: 'img/som-ambiente.png' },
    { n: 'Audiovisual e Cinema', d: 'Salas de cinema em casa e soluções audiovisuais para espaços profissionais.', img: 'img/cinema-maven.webp' },
    { n: 'Iluminação Profissional', d: 'Fornecimento e instalação de iluminação para espetáculos e teatro.', img: 'img/iluminacao-palco.jpg' },
    { n: 'Domótica e Integração de Sistemas', d: 'Som, imagem, luz e climatização a funcionar em conjunto, num só comando.', img: 'img/sala-clara.webp' },
    { n: 'Audioconferência e Videoconferência', d: 'Salas de reunião equipadas para comunicar com clareza, à distância que for.' },
    { n: 'Videowall e LED Wall', d: 'Ecrãs de grande formato para eventos, receções e espaços corporativos.', img: 'img/videowall.png' },
    { n: 'Segurança, CCTV e Controlo de Acessos', d: 'Videovigilância, deteção de incêndio e controlo de acessos, integrados na gestão do espaço.', img: 'img/cctv-hikvision.jpg' },
    { n: 'Aluguer de Equipamento', d: 'Som, luz e audiovisual para eventos privados e corporativos, com montagem e assistência incluídas.', img: 'img/aluguer-eventos.png' }
  ],

  // Fonte: Validacao_Timeline_v2.csv (timeline validada) + Timeline_Fotos/00_INDICE.md.
  // `nota` = observações internas do CSV; não são renderizadas como texto visível,
  // saem como comentário HTML junto da entrada para nada se perder.
  marcos: [
    {
      ano: '1985',
      marco: 'Fundação — Loja no Centro Comercial Dallas',
      tag: 'Tudo começou nas pistas de dança.',
      det: 'Origem do negócio nos anos 80: primeira loja Luz e Som no Centro Comercial Dallas (Porto), com equipamento de som e alta fidelidade inovador para a época.',
      nota: 'Confirmar ano exato de fundação — planeamento indica 1985; a apresentação dos 25 Anos é de 2013. Fonte: HISTORIAL 2 (2013), slides 1-8; Planeamento 6.1',
      foto: { src: 'img/timeline/1985-montra-dallas.jpg', alt: 'Montra da loja Luz e Som no Centro Comercial Dallas, no Porto, com letreiro de néon' },
      galeria: [
        { src: 'img/timeline/1985-interior-dallas-t.jpg', alt: 'Interior da loja Luz e Som no Centro Comercial Dallas' }
      ]
    },
    {
      ano: 'Início anos 90',
      marco: 'Representação de marcas internacionais',
      tag: 'O salto para as grandes marcas internacionais.',
      det: 'Marcas internacionais de alta fidelidade e sistemas multi-room (ex.: Audio Innovations, Rockustics). Presença na imprensa da especialidade, na Revista Áudio entre 1992 e 1994.',
      nota: 'CSV antigo indicava 1990; apresentação mostra anúncios 1992-94 — confirmar início. Fonte: HISTORIAL 2 (2013), slides 9-11',
      foto: { fit: 'contain', src: 'img/timeline/1990s-anuncio-audio-1992.jpg', alt: 'Anúncio da Luz e Som na Revista Áudio de 1992, com equipamento Audio Innovations' },
      galeria: [
        { src: 'img/timeline/1990s-anuncio-rockustics-t.jpg', alt: 'Anúncio da Luz e Som na Revista Áudio de 1993, com colunas Rockustics' },
        { src: 'img/timeline/1990s-anuncio-alta-fidelidade-t.jpg', alt: 'Anúncio de alta fidelidade da Luz e Som na Revista Áudio de 1994' },
        { src: 'img/timeline/1990s-anuncio-multiroom-t.jpg', alt: 'Anúncio de sistemas multi-room da Luz e Som na Revista Áudio de 1994' }
      ]
    },
    {
      ano: '1993–1994',
      marco: 'EXPO Luz e Som (Hotel Meridien, Porto)',
      tag: 'A alta-fidelidade sobe ao palco.',
      det: 'Duas edições da EXPO Luz e Som — O Espetáculo da Alta Fidelidade ao Vivo, no Hotel Meridien, no Porto: 23-24 de janeiro de 1993 e 9-10 de abril de 1994.',
      nota: 'Fonte: HISTORIAL 2 (2013), slides 12-20',
      foto: { fit: 'contain', src: 'img/timeline/1993-poster-expo-meridien.jpg', alt: 'Cartaz da EXPO Luz e Som no Hotel Meridien do Porto, janeiro de 1993' },
      galeria: [
        { src: 'img/timeline/1994-poster-expo-meridien-t.jpg', alt: 'Cartaz da EXPO Luz e Som no Hotel Meridien do Porto, abril de 1994' },
        { src: 'img/timeline/1994-expo-sala-t.jpg', alt: 'Sala de demonstração da EXPO Luz e Som de 1994' },
        { src: 'img/timeline/1994-expo-colunas-t.jpg', alt: 'Colunas em exposição na EXPO Luz e Som de 1994' }
      ]
    },
    {
      ano: '1995',
      marco: 'Espaço de referência em Matosinhos (Roberto Ivens)',
      tag: 'Matosinhos ganha um espaço de referência.',
      det: 'Inauguração, em novembro de 1995, da loja e sede na Rua Roberto Ivens, em Matosinhos, com salas de audição dedicadas.',
      nota: 'CSV associava 1995 a domótica/Smarthouse e 1.200 m² — confirmar se são deste período ou posteriores. Fonte: HISTORIAL 2 (2013), slides 21-28; Apresentação 2015',
      foto: { src: 'img/timeline/1995-roberto-ivens-entrada.jpg', alt: 'Entrada da sede da Luz e Som na Rua Roberto Ivens, em Matosinhos, com o logótipo LS na fachada' },
      galeria: [
        { src: 'img/timeline/1995-roberto-ivens-edificio-t.jpg', alt: 'Edifício da Luz e Som na Rua Roberto Ivens, em Matosinhos' },
        { src: 'img/timeline/1995-inauguracao-convidados-t.jpg', alt: 'Convidados na inauguração da loja da Rua Roberto Ivens, em novembro de 1995' },
        { src: 'img/timeline/1995-roberto-ivens-escadaria-t.jpg', alt: 'Escadaria interior da sede da Rua Roberto Ivens' }
      ]
    },
    {
      ano: '1998–2000',
      marco: 'Reconhecimento e consagração',
      tag: 'O reconhecimento de um percurso.',
      det: 'Estatuto PME Excelência Comércio 98 e nova edição da Expo Luz e Som em 2000. Impacto e cobertura nacional crescentes.',
      nota: 'Fonte: HISTORIAL 2 (2013), slides 29-37',
      foto: { src: 'img/timeline/2000-showroom-cinema-em-casa.jpg', alt: 'Showroom da Luz e Som com sala de cinema em casa e poltronas amarelas, por volta de 2000' },
      galeria: [
        { src: 'img/timeline/1998-diploma-pme-excelencia-t.jpg', alt: 'Diploma de PME Excelência Comércio 98 atribuído à Luz e Som' },
        { src: 'img/timeline/2000-artigo-expo-regresso-t.jpg', alt: 'Artigo de imprensa sobre o regresso da Expo Luz e Som em 2000' },
        { src: 'img/timeline/2000-roteiro-t.jpg', alt: 'Roteiro Luz e Som com o mapa dos espaços da empresa' }
      ]
    },
    {
      ano: '2001',
      marco: 'Chegada a Lisboa',
      tag: 'De norte a sul do país.',
      det: 'Primeiro espaço em Lisboa, em 2001, marcando o alcance nacional da empresa.',
      nota: 'Confirmar morada e se antecedeu a loja de 2007. Fonte: HISTORIAL 2 (2013), slides 38-42',
      foto: { src: 'img/timeline/2001-lisboa-obras.jpg', alt: 'Interior do primeiro espaço da Luz e Som em Lisboa, durante as obras de 2001' },
      galeria: [
        { src: 'img/timeline/2001-lisboa-rua-t.jpg', alt: 'Rua e edifício do primeiro espaço da Luz e Som em Lisboa, em 2001' }
      ]
    },
    {
      ano: '2007',
      marco: 'Loja emblemática em Lisboa',
      tag: 'Lisboa ganha uma loja fabulosa.',
      det: 'Loja emblemática em Lisboa, com fachada iluminada. Neste período, cerca de 1.400 m² de showrooms entre Porto e Lisboa e mais de 40 colaboradores.',
      nota: 'Números 2006-2007 por confirmar. Fonte: HISTORIAL 2 (2013), slides 43-45; Apresentação 2015',
      foto: { src: 'img/timeline/2007-lisboa-fachada-noite.jpg', alt: 'Fachada iluminada da loja da Luz e Som em Lisboa, à noite, em 2007' },
      galeria: [
        { src: 'img/timeline/2007-lisboa-montra-t.jpg', alt: 'Montra da loja da Luz e Som em Lisboa, em 2007' },
        { src: 'img/timeline/2007-lisboa-convidados-t.jpg', alt: 'Convidados na inauguração da loja de Lisboa, em 2007' }
      ]
    },
    {
      ano: '2010',
      marco: 'Edifício Transparente + primeira Bang & Olufsen',
      tag: 'A marca dinamarquesa ganha casa no Porto.',
      det: 'Primeira loja Bang & Olufsen, no Edifício Transparente, no Porto, junto ao Estádio do Dragão, inaugurada em 2010 apesar de um temporal.',
      nota: 'CORREÇÃO: CSV indicava 2011 para a 1.ª B&O — apresentação data-a de 2010. Fonte: HISTORIAL 2 (2013), slides 46-51',
      foto: { src: 'img/timeline/2010-edificio-transparente-fachada.jpg', alt: 'Fachada do Edifício Transparente, no Porto, com as lojas Luz e Som e Bang & Olufsen' },
      galeria: [
        { src: 'img/timeline/2010-edificio-transparente-noite-t.jpg', alt: 'Fachada da loja Bang & Olufsen no Edifício Transparente, à noite' },
        { src: 'img/timeline/2010-inauguracao-t.jpg', alt: 'Inauguração da loja Bang & Olufsen no Edifício Transparente, em 2010' }
      ]
    },
    {
      ano: '2011',
      marco: 'Bang & Olufsen Braga',
      tag: 'A B&O conquista o norte.',
      det: 'Abertura da loja Bang & Olufsen em Braga, em 2011.',
      nota: 'Fonte: HISTORIAL 2 (2013), slides 52-54',
      foto: { src: 'img/timeline/2011-bo-braga-interior.jpg', alt: 'Interior do showroom Bang & Olufsen de Braga, aberto em 2011' },
      galeria: [
        { src: 'img/timeline/2011-bo-braga-fachada-t.jpg', alt: 'Fachada da loja Bang & Olufsen de Braga' },
        { src: 'img/timeline/2011-bo-braga-interior2-t.jpg', alt: 'Showroom da loja Bang & Olufsen de Braga' }
      ]
    },
    {
      ano: '2011',
      marco: 'Nova sede na Rua do Ouro (Porto)',
      tag: 'Uma nova casa para a marca.',
      det: 'Com as obras na Roberto Ivens, a sede e a loja principal mudam para a Rua do Ouro, no Porto, com showroom modularsystem e salas de cinema em casa.',
      nota: 'Fonte: HISTORIAL 2 (2013), slides 55-63',
      foto: { src: 'img/timeline/2011-rua-do-ouro-cinema.jpg', alt: 'Sala de cinema em casa no showroom da Rua do Ouro, no Porto, em 2011' },
      galeria: [
        { src: 'img/timeline/2011-rua-do-ouro-fachada-t.jpg', alt: 'Fachada da sede da Luz e Som na Rua do Ouro, no Porto' },
        { src: 'img/timeline/2011-rua-do-ouro-showroom-t.jpg', alt: 'Interior do showroom da Rua do Ouro, no Porto' },
        { src: 'img/timeline/2011-rua-do-ouro-claraboias-t.jpg', alt: 'Claraboias do espaço da Rua do Ouro, no Porto' }
      ]
    },
    {
      ano: '2013',
      marco: 'Light Design e ad notam',
      tag: 'A luz passa a ter loja própria.',
      det: 'Iluminação profissional, com a abertura da loja Light Design no Porto, e representação da marca ad notam (Mirror TV).',
      nota: 'Não coberto pela apresentação HISTORIAL 2, que termina em 2011 — fonte: Apresentação 2015; CSV/Word 6.1. Sem fotos disponíveis.',
      semFoto: 'Sem fotografia de arquivo'
    },
    {
      ano: '2014–2019',
      marco: 'Projetos e feiras',
      tag: null,
      det: 'Sugestões do site antigo: Casa da Arquitectura, Auditório EPAL, Porto Gran Cruz, hotéis Meliã e Skyna, Semanas de Reabilitação Urbana, TEDx Matosinhos 2015.',
      nota: 'POR PREENCHER. Pergunta em aberto para o Carlos: o que destacar deste período? Fonte: notícias do site antigo (títulos). Sem fotos.',
      porValidar: true,
      semFoto: 'Sem fotografia de arquivo'
    },
    {
      ano: '2020–2024',
      marco: 'O que mudou?',
      tag: null,
      det: 'Período ainda por definir com a Luz e Som.',
      nota: 'POR PREENCHER. Perguntas em aberto para o Carlos: pandemia? Novas marcas? Obras emblemáticas? Fecho do showroom de Lisboa e das lojas B&O/Light Design — confirmar quando e como contar. Fonte: por confirmar com Carlos. Sem fotos.',
      porValidar: true,
      semFoto: 'Sem fotografia de arquivo'
    },
    {
      ano: '2025',
      marco: '40 anos',
      tag: 'Quatro décadas de luz e som.',
      det: 'Aniversário dos 40 anos — marco natural para fechar a linha do tempo e lançar o novo site.',
      nota: 'Pergunta em aberto para o Carlos: houve celebração ou projeto emblemático a assinalar os 40 anos? Fonte: por confirmar com Carlos. Sem fotos.',
      semFoto: 'Sem fotografia de arquivo'
    }
  ],

  marcas: [
    { n: 'Artcoustic', logo: 'img/marcas/artcoustic.png' },
    { n: 'Audion', logo: 'img/marcas/audion.png' },
    { n: 'Bose', logo: 'img/marcas/bose.png' },
    { n: 'Cineak', logo: 'img/marcas/cineak.png' },
    { n: 'Cloud', logo: 'img/marcas/cloud.png' },
    { n: 'Crestron', logo: 'img/marcas/crestron.png' },
    { n: 'Domintell', logo: 'img/marcas/domintell.png' },
    { n: 'Electro-Voice', logo: 'img/marcas/electro-voice.png' },
    { n: 'Future Automation', logo: 'img/marcas/future-automation.png' },
    { n: 'Hikvision', logo: 'img/marcas/hikvision.png' },
    { n: 'LG', logo: 'img/marcas/lg.png' },
    { n: 'Logitech', logo: 'img/marcas/logitech.png' },
    { n: 'Optoma', logo: 'img/marcas/optoma.png' },
    { n: 'Oray', logo: 'img/marcas/oray.png' },
    { n: 'Polycom', logo: 'img/marcas/polycom.png' },
    { n: 'Rasike', logo: 'img/marcas/rasike.png' },
    { n: 'Salto Systems', logo: 'img/marcas/salto-systems.png' },
    { n: 'Samsung', logo: 'img/marcas/samsung.png' },
    { n: 'Sennheiser', logo: 'img/marcas/sennheiser.png' },
    { n: 'Shure', logo: 'img/marcas/shure.png' },
    { n: 'Sonance', logo: 'img/marcas/sonance.png' },
    { n: 'Sony', logo: 'img/marcas/sony.png' }
  ],

  // Three marquee rows, alternating direction. Split roughly evenly.
  clientes: [
    [
      { n: 'ADP', logo: 'img/clientes/adp.png' },
      { n: 'APDL', logo: 'img/clientes/apdl.png' },
      { n: 'Casino Estoril', logo: 'img/clientes/casino-estoril.png' },
      { n: 'Casino Figueira', logo: 'img/clientes/casino-figueira.png' },
      { n: 'Câmara Municipal do Porto', logo: 'img/clientes/cm-porto.png' },
      { n: 'FC Porto', logo: 'img/clientes/fc-porto.png' },
      { n: 'FinTrU', logo: 'img/clientes/fintru.png' }
    ],
    [
      { n: 'ISS', logo: 'img/clientes/iss.png' },
      { n: 'Luís Pato', logo: 'img/clientes/luis-pato.png' },
      { n: 'McDonald\'s', logo: 'img/clientes/mcdonalds.png' },
      { n: 'Metro do Porto', logo: 'img/clientes/metro-do-porto.png' },
      { n: 'RAR', logo: 'img/clientes/rar.png' },
      { n: 'Revolut', logo: 'img/clientes/revolut.png' },
      { n: 'Skyna Hotels', logo: 'img/clientes/skyna-hotels.png' }
    ],
    [
      { n: 'SL Benfica', logo: 'img/clientes/sl-benfica.png' },
      { n: 'Sodexo', logo: 'img/clientes/sodexo.png' },
      { n: 'Solverde', logo: 'img/clientes/solverde.png' },
      { n: 'Symington', logo: 'img/clientes/symington.png' },
      { n: 'Taylor\'s', logo: 'img/clientes/taylors.png' },
      { n: 'Vidago Palace', logo: 'img/clientes/vidago-palace.png' },
      { n: 'Vodafone', logo: 'img/clientes/vodafone.png' }
    ]
  ],

  projetos: [
    { n: 'EDP', d: 'Integração audiovisual de auditório e salas técnicas.' },
    { n: 'Meliã Braga', d: 'Som, imagem e controlo em ambiente hoteleiro.' },
    { n: 'Caves Cálem', d: 'Experiência audiovisual no espaço de visitas.' }
  ]
};
