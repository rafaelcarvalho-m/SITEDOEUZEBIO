/*
  CADASTRO DA GALERIA

  Para adicionar uma imagem:
  1. Salve uma versão otimizada e uma versão maior na pasta correspondente.
  2. Duplique um objeto abaixo.
  3. Atualize preview, image, alt, caption, width e height.

  O mesmo cadastro alimenta a prévia da Home e a página completa da galeria.
*/

const schoolGallery = [
  {
    preview: "sobrenos/imgs-sobrenos/img-saibamais600x398.webp",
    image: "sobrenos/imgs-sobrenos/img-saibamais1600x1063.webp",
    alt: "Pátio interno do Colégio Estadual Euzébio da Mota",
    caption: "Pátio interno do colégio",
    width: 600,
    height: 398,
  },
  {
    preview: "sobrenos/imgs-sobrenos/img-fotosmesas-saibamais600x399.webp",
    image: "sobrenos/imgs-sobrenos/img-fotosmesas-saibamais1600x1063.webp",
    alt: "Mesas e bancos em uma área de convivência da escola",
    caption: "Área de convivência",
    width: 600,
    height: 399,
  },
  {
    preview:
      "ensino-medio/imgs-ensinomedio/imgs-ensinotecnico/img-computadores-ensinotec600x399.webp",
    image:
      "ensino-medio/imgs-ensinomedio/imgs-ensinotecnico/img-computadores-ensinotec1600x1063.webp",
    alt: "Laboratório de informática com computadores do Ensino Técnico",
    caption: "Laboratório de informática do Ensino Técnico",
    width: 600,
    height: 399,
  },
  {
    preview:
      "ensino-medio/imgs-ensinomedio/imgs-ensinotecnico/img-digtacao-ensinotec600x399.webp",
    image:
      "ensino-medio/imgs-ensinomedio/imgs-ensinotecnico/img-digtacao-ensinotec1600x1063.webp",
    alt: "Mãos digitando em um computador durante uma atividade",
    caption: "Atividade de digitação no Ensino Técnico",
    width: 600,
    height: 399,
  },
  {
    preview:
      "ensino-medio/imgs-ensinomedio/imgs-ensinotecnico/img-pessoascomputador-ensinotec600x399.webp",
    image:
      "ensino-medio/imgs-ensinomedio/imgs-ensinotecnico/img-pessoascomputador-ensinotec1600x1063.webp",
    alt: "Estudantes usando computadores em uma atividade escolar",
    caption: "Estudantes em atividade no laboratório de informática",
    width: 600,
    height: 399,
  },
  {
    preview:
      "ensino-medio/imgs-ensinomedio/imgs-ensinotecnico/img-teclado-ensinotec600x399.webp",
    image:
      "ensino-medio/imgs-ensinomedio/imgs-ensinotecnico/img-teclado-ensinotec1600x1063.webp",
    alt: "Teclado de computador em ambiente de Ensino Técnico",
    caption: "Computadores do Ensino Técnico",
    width: 600,
    height: 399,
  },
  {
    preview: "biblioteca/imgs-biblioteca/biblioteca-livros1539x1022.webp",
    image: "biblioteca/imgs-biblioteca/biblioteca-livros1539x1022.webp",
    alt: "Livros organizados nas estantes da biblioteca escolar",
    caption: "Acervo da biblioteca",
    width: 1539,
    height: 1022,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/foto-fogueteclubedeciencias600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/foto-fogueteclubedeciencias1600x1063.webp",
    alt: "Registro de projeto do Clube de Ciências com um foguete experimental",
    caption: "Projeto do Clube de Ciências",
    width: 600,
    height: 399,
  },
  {
    preview: "projetos/imgs-projetos/imgs-robotica/imgrobotica-mexendorobo600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-robotica/imgrobotica-mexendorobo1600x1063.webp",
    alt: "Estudantes ajustando a estrutura de um robô",
    caption: "Montagem de um robô durante atividade de Robótica",
    width: 600,
    height: 399,
  },
  {
    preview: "projetos/imgs-projetos/imgs-rpg/img-rpg-mesa600x399.webp",
    image: "projetos/imgs-projetos/imgs-rpg/img-rpg-mesa1600x1063.webp",
    alt: "Ficha, dados e materiais de uma atividade de RPG",
    caption: "Materiais usados em uma atividade de RPG",
    width: 600,
    height: 399,
  },
  {
    preview: "biblioteca/imgs-biblioteca/biblioteca-globo.webp",
    image: "biblioteca/imgs-biblioteca/biblioteca-globo1539x1022.webp",
    alt: "Globo terrestre diante das estantes da biblioteca",
    caption: "Globo terrestre na biblioteca escolar",
    width: 600,
    height: 399,
  },
  {
    preview: "biblioteca/imgs-biblioteca/biblioteca-acervo.webp",
    image: "biblioteca/imgs-biblioteca/biblioteca-acervo1539x1022.webp",
    alt: "Estantes, mesas e cadeiras da biblioteca",
    caption: "Estantes e mesas da biblioteca",
    width: 600,
    height: 399,
  },
  {
    preview: "biblioteca/imgs-biblioteca/biblioteca-atendimento.webp",
    image: "biblioteca/imgs-biblioteca/biblioteca-atendimento1539x1022.webp",
    alt: "Área de apoio com computador, mesa e estantes na biblioteca",
    caption: "Área de apoio da biblioteca",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-horta600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-horta1600x1063.webp",
    alt: "Horta do Clube de Ciências com canteiros feitos a partir de pneus reutilizados",
    caption: "Horta do Clube de Ciências",
    width: 600,
    height: 399,
  },
  {
    preview: "sobrenos/imgs-sobrenos/img-fotosmesasoutroangulo-saibamais600x399.webp",
    image: "sobrenos/imgs-sobrenos/img-fotosmesasoutroangulo-saibamais1600x1063.webp",
    alt: "Pátio da escola visto de outro ângulo, com mesas e árvores",
    caption: "Pátio e área de convivência",
    width: 600,
    height: 399,
  },
  {
    preview: "sobrenos/imgs-sobrenos/img-partedaescola-saibamais600x399.webp",
    image: "sobrenos/imgs-sobrenos/img-partedaescola-saibamais1600x1063.webp",
    alt: "Parte externa do Colégio Estadual Euzébio da Mota",
    caption: "Espaço externo do colégio",
    width: 600,
    height: 399,
  },
  {
    preview: "sobrenos/imgs-sobrenos/img-saidadaescola2-saibamais600x399.webp",
    image: "sobrenos/imgs-sobrenos/img-saidadaescola2-saibamais1600x1063.webp",
    alt: "Área externa do colégio iluminada pelo sol do fim da tarde",
    caption: "Área externa do colégio",
    width: 600,
    height: 399,
  },
  {
    preview: "biblioteca/imgs-biblioteca/biblioteca-espaco-de-leitura.webp",
    image: "biblioteca/imgs-biblioteca/biblioteca-espaco-de-leitura1539x1022.webp",
    alt: "Espaço de leitura com mesas, cadeiras e estantes da biblioteca",
    caption: "Espaço de leitura da biblioteca",
    width: 600,
    height: 399,
  },
  {
    preview: "imgs-home-index/img-ensinomedio1000x664.webp",
    image: "imgs-home-index/img-ensinomedio1600x1063.webp",
    alt: "Estudantes usando computadores em um laboratório de informática",
    caption: "Aulas no laboratório de informática",
    width: 1000,
    height: 664,
  },
  {
    preview: "imgs-home-index/img-ensinoregular600x399.webp",
    image: "imgs-home-index/img-ensinoregular1600x1063.webp",
    alt: "Lousa de uma sala de aula com uma atividade de Física",
    caption: "Atividade em sala de aula",
    width: 600,
    height: 399,
  },
  {
    preview: "imgs-home-index/img-home1000x664.webp",
    image: "imgs-home-index/img-home1600x1063.webp",
    alt: "Pátio interno do colégio entre os blocos de salas",
    caption: "Pátio interno",
    width: 1000,
    height: 664,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/foto-clubedeciencias600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/foto-clubedeciencias1600x1063.webp",
    alt: "Sala do Clube de Ciências com mesas, materiais e projetos",
    caption: "Espaço do Clube de Ciências",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/img-clubedeciencias600x357.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/img-clubedeciencias1600x1063.webp",
    alt: "Materiais de experimentação organizados em uma mesa do Clube de Ciências",
    caption: "Materiais de experimentação",
    width: 600,
    height: 357,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/foto-garrafaspetclubedeciencias600x903.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/foto-garrafaspetclubedeciencias600x903.webp",
    alt: "Garrafas reutilizadas organizadas em uma estrutura do Clube de Ciências",
    caption: "Reutilização de garrafas PET",
    variant: "portrait",
    width: 600,
    height: 903,
  },
  {
    preview: "projetos/imgs-projetos/imgs-robotica/img-robotica600x400.webp",
    image: "projetos/imgs-projetos/imgs-robotica/img-robotica1600x1063.webp",
    alt: "Robô montado pelos estudantes em uma atividade de Robótica",
    caption: "Projeto de Robótica",
    width: 600,
    height: 400,
  },
  {
    preview: "projetos/imgs-projetos/imgs-robotica/imgrobotica-mexendorobo2600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-robotica/imgrobotica-mexendorobo2-hero1600x1064.webp",
    alt: "Estudante ajustando os componentes de um robô",
    caption: "Montagem de um robô",
    width: 600,
    height: 399,
  },
  {
    preview: "projetos/imgs-projetos/imgs-rpg/img-rpg600x400.webp",
    image: "projetos/imgs-projetos/imgs-rpg/img-rpg-hero1600x1064.webp",
    alt: "Dados e materiais de uma partida de RPG",
    caption: "Atividade de RPG",
    width: 600,
    height: 400,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-canteiros600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-canteiros1600x1063.webp",
    alt: "Canteiros do projeto de horta com pneus reutilizados",
    caption: "Canteiros da horta escolar",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-casinha600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-casinha1600x1063.webp",
    alt: "Estrutura colorida instalada entre as árvores do projeto",
    caption: "Estrutura do projeto Marlene",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-casinha-detalhe600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-casinha-detalhe600x399.webp",
    alt: "Detalhe da estrutura de observação do projeto Marlene",
    caption: "Detalhe do projeto Marlene",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-casinha-01-600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-casinha-01600x399.webp",
    alt: "Casinha de observação construída para o projeto Marlene",
    caption: "Casinha de observação",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-casinha-02-600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-casinha-02600x399.webp",
    alt: "Detalhe de uma casinha de observação do projeto Marlene",
    caption: "Detalhes da casinha de observação",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-estufa600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-estufa1600x1063.webp",
    alt: "Estufa do projeto Marlene no espaço externo da escola",
    caption: "Estufa do projeto Marlene",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-horta-luz600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-horta-luz600x399.webp",
    alt: "Horta escolar iluminada pelo sol entre os canteiros",
    caption: "Horta escolar ao fim da tarde",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-mudas600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-mudas600x399.webp",
    alt: "Mudas crescendo nos canteiros do projeto Marlene",
    caption: "Mudas nos canteiros",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-horta-02-600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-horta-02-600x399.webp",
    alt: "Canteiros de cultivo do projeto Marlene",
    caption: "Canteiros de cultivo",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-canteiro-01-600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-canteiro-01-600x399.webp",
    alt: "Canteiro de cultivo do projeto Marlene",
    caption: "Canteiro de cultivo",
    width: 600,
    height: 399,
  },
  {
    preview:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-canteiro-02-600x399.webp",
    image:
      "projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/marlene-canteiro-02-600x399.webp",
    alt: "Outro canteiro de cultivo do projeto Marlene",
    caption: "Mais um canteiro de cultivo",
    width: 600,
    height: 399,
  },
];

const galleryGrid = document.querySelector(
  "[data-gallery-preview], [data-gallery-grid]",
);
const galleryTemplate = document.querySelector("#gallery-card-template");

if (galleryGrid && galleryTemplate) {
  const pathPrefix = document.body.dataset.galleryPrefix || "";
  const isPreview = galleryGrid.hasAttribute("data-gallery-preview");
  const galleryItems = isPreview ? schoolGallery.slice(0, 8) : schoolGallery;

  galleryItems.forEach((item) => {
    const card = galleryTemplate.content.cloneNode(true);
    const imageLink = card.querySelector(".gallery-card-image-link");
    const imageFrame = card.querySelector(".gallery-image");
    const image = card.querySelector(".gallery-image img");

    imageLink.href = `${pathPrefix}${item.image}`;
    imageLink.dataset.lightboxCaption = item.caption;
    imageFrame?.classList.toggle(
      "gallery-image--portrait",
      item.variant === "portrait",
    );
    image.src = `${pathPrefix}${item.preview}`;
    image.srcset =
      item.image === item.preview
        ? `${pathPrefix}${item.preview} ${item.width}w`
        : `${pathPrefix}${item.preview} ${item.width}w, ${pathPrefix}${item.image} 1600w`;
    image.sizes = isPreview
      ? "(min-width: 1200px) 31vw, (min-width: 801px) 30vw, 100vw"
      : "(min-width: 1000px) 31vw, (min-width: 641px) 46vw, 100vw";
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
    galleryGrid.append(card);
  });
}
