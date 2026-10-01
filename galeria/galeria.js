/*
  CADASTRO DA GALERIA

  Para adicionar uma imagem:
  1. Salve uma versão otimizada e uma versão maior na pasta correspondente.
  2. Duplique um objeto abaixo.
  3. Atualize preview, image, alt, caption, title, description, width e height.

  O mesmo cadastro alimenta a prévia da Home e a página completa da galeria.
*/

const schoolGallery = [
  {
    preview: "sobrenos/imgs-sobrenos/img-saibamais600x398.webp",
    image: "sobrenos/imgs-sobrenos/img-saibamais1600x1063.webp",
    alt: "Pátio interno do Colégio Estadual Euzébio da Mota",
    caption: "Pátio interno do colégio",
    title: "Espaços da escola",
    description:
      "Ambientes que fazem parte da convivência e do cotidiano escolar.",
    width: 600,
    height: 398,
  },
  {
    preview: "sobrenos/imgs-sobrenos/img-fotosmesas-saibamais600x399.webp",
    image: "sobrenos/imgs-sobrenos/img-fotosmesas-saibamais1600x1063.webp",
    alt: "Mesas e bancos em uma área de convivência da escola",
    caption: "Área de convivência",
    title: "Convivência",
    description:
      "Lugares de encontro, conversa e participação ao longo do dia.",
    width: 600,
    height: 399,
  },
  {
    preview: "biblioteca/imgs-biblioteca/biblioteca-livros1539x1022.webp",
    image: "biblioteca/imgs-biblioteca/biblioteca-livros1539x1022.webp",
    alt: "Livros organizados nas estantes da biblioteca escolar",
    caption: "Acervo da biblioteca",
    title: "Biblioteca",
    description:
      "Um espaço de leitura, pesquisa e descoberta para a comunidade escolar.",
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
    title: "Projetos e descobertas",
    description:
      "Registros de experiências e projetos desenvolvidos pelos estudantes.",
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
  const galleryItems = isPreview ? schoolGallery.slice(0, 3) : schoolGallery;

  galleryItems.forEach((item) => {
    const card = galleryTemplate.content.cloneNode(true);
    const imageLink = card.querySelector(".gallery-card-image-link");
    const image = card.querySelector(".gallery-image img");
    const title = card.querySelector(".gallery-card-copy h3");
    const description = card.querySelector(".gallery-card-copy p");

    imageLink.href = `${pathPrefix}${item.image}`;
    imageLink.dataset.lightboxCaption = item.caption;
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
    title.textContent = item.title;
    description.textContent = item.description;

    galleryGrid.append(card);
  });
}
