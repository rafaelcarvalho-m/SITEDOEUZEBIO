/*
  CADASTRO DE EVENTOS

  Para publicar um novo evento:
  1. Salve a imagem na pasta eventos/.
  2. Duplique um objeto abaixo.
  3. Atualize image, alt, caption, title, description, width e height.

  Use variant: "event-logo-card" quando a imagem for uma logo ou arte que
  precisa aparecer inteira. Para fotografias comuns, não informe variant.
*/

const siteEvents = [
  {
    image: "eventos/evento-clube-de-ciencias-teste.webp",
    alt: "Sala do Clube de Ciências do Colégio Estadual Euzébio da Mota",
    caption: "Espaço do Clube de Ciências",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nibh at libero fermentum convallis.",
    width: 1600,
    height: 1063,
  },
  {
    image: "eventos/logo-clube-de-ciencias-gabriele.webp",
    alt: "Logo do Clube de Ciências orientado pela professora Gabriele",
    caption: "Logo do Clube de Ciências",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero eget lorem aliquet placerat.",
    width: 864,
    height: 864,
    variant: "event-logo-card",
  },
];

const eventsGrid = document.querySelector("[data-events-grid]");
const eventTemplate = document.querySelector("#event-card-template");

if (eventsGrid && eventTemplate) {
  siteEvents.forEach((event) => {
    const card = eventTemplate.content.cloneNode(true);
    const article = card.querySelector(".event-card");
    const imageLink = card.querySelector(".event-image-link");
    const image = card.querySelector(".event-image img");
    const title = card.querySelector(".event-card-copy h3");
    const description = card.querySelector(".event-card-panel p");

    article?.classList.toggle(
      "event-logo-card",
      event.variant === "event-logo-card",
    );
    imageLink.href = event.image;
    imageLink.dataset.lightboxCaption = event.caption;
    image.src = event.image;
    image.alt = event.alt;
    image.width = event.width;
    image.height = event.height;
    title.textContent = event.title;
    description.textContent = event.description;

    eventsGrid.append(card);
  });
}
