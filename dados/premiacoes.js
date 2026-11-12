/*
  CADASTRO DE PREMIAÇÕES E CONQUISTAS

  Adicione um objeto por conquista confirmada. Guarde imagens em
  premiacoes/imagens/ e certificados em premiacoes/documentos/. Não cadastre
  estimativas, datas ou entidades que não tenham sido confirmadas pela escola.

  Campos: title, year, category, institution, description, image, imageAlt,
  certificate (opcional). `image` e `certificate` são caminhos desde a raiz.
*/
window.SchoolAwards = Object.freeze({
  items: [
    {
      title: "Conquista na FECCI 2026",
      year: 2026,
      category: "Cultura Oceânica",
      placement: "1º lugar",
      group: "Friends of Science",
      institution:
        "FECCI 2026 — Feira de Cultura Científica Paraná Faz Ciência",
      projectTitle:
        "Giz Sustentável: Reaproveitamento e reconstituição de sobras de giz de lousa",
      description:
        "O trabalho investigou o reaproveitamento de resíduos de giz de lousa para criar novos materiais de escrita, a partir da reconstituição de sobras e pó de giz.",
      projectLink: "projetos/clube-gabriele.html",
      projectImage:
        "premiacoes/imagens/WhatsApp Image 2026-11-12 at 17.54.47.jpeg",
      projectImageAlt:
        "Integrantes do Friends of Science junto ao estande e ao cartaz do projeto de giz sustentável na FECCI 2026",
      projectImageCaption:
        "O cartaz do projeto de giz sustentável no estande da FECCI 2026.",
      prizes: [{ name: "Celular" }, { name: "MacBook" }, { name: "Tablet" }],
      prizeImage:
        "premiacoes/imagens/WhatsApp Image 2026-11-12 at 17.54.15.jpeg",
      prizeImageAlt:
        "Três integrantes do grupo mostram as caixas do celular, do MacBook e dos tablets recebidos",
      prizeImageCaption:
        "Os integrantes apresentam os prêmios recebidos pelo grupo.",
      photos: [
        {
          image:
            "premiacoes/imagens/WhatsApp Image 2026-11-12 at 17.50.47.jpeg",
          alt: "Equipe do Friends of Science com certificados diante do painel da FECCI 2026",
          caption:
            "Integrantes do Friends of Science registram a conquista na FECCI 2026.",
        },
      ],
    },
  ],
});
