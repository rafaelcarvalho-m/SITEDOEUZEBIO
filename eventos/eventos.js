/*
  CADASTRO DE EVENTOS

  Para publicar um novo evento:
  1. Salve a imagem na pasta eventos/.
  2. Duplique um objeto abaixo.
  3. Preencha image, alt, width e height. Os demais campos são opcionais.

  Campos opcionais: titulo, descricao, data (AAAA-MM-DD), ano (AAAA), categoria,
  local, objectPosition e variant. Use variant: "logo" para artes que devem aparecer
  inteiras. Datas, categorias e locais não devem ser estimados.
*/

const siteEvents = [
   {
    image: "eventos/post_terceiroes_cascaneia.png",
    alt: "Post de evento dos terceirões para passeio ao Cascaneia",
    caption: "Passeio ao Cascaneia",
    titulo: "Passeio ao Cascaneia",
    ano: "2026",
    categoria: "Passeio dos terceirões",
    width: 1600,
    height: 1063,
    variant: "poster",
  },
];

const siteEventCategories = [
  "Clube de Ciências",
  "Passeio dos terceirões",
];

window.SiteEvents = Object.freeze({
  items: siteEvents,
  categories: siteEventCategories,
});

const eventsPrefix = document.body.dataset.eventsPrefix || "";
const eventImageUrl = (event) => `${eventsPrefix}${event.image}`;
const homeEventsGrid = document.querySelector("[data-events-home-grid]");
const homeEventTemplate = document.querySelector("#event-home-card-template");
const eventsGrid = document.querySelector("[data-events-grid]");
const eventTemplate = document.querySelector("#event-card-template");

if (homeEventsGrid && homeEventTemplate) {
  const homeEvents = siteEvents.slice(0, 4);
  homeEventsGrid.dataset.count = String(homeEvents.length);
  homeEvents.forEach((event, index) => {
    const card = homeEventTemplate.content.cloneNode(true);
    const link = card.querySelector(".event-showcase-card");
    const image = card.querySelector("img");
    const label = card.querySelector(".event-showcase-label");

    link.classList.toggle("is-featured", index === 0);
    link.classList.toggle("is-logo", event.variant === "logo");
    link.classList.toggle("is-poster", event.variant === "poster");
    link.href = "eventos/eventos.html";
    link.setAttribute(
      "aria-label",
      `${event.caption || event.alt}. Ver todos os eventos.`,
    );
    image.src = eventImageUrl(event);
    image.alt = "";
    image.width = event.width;
    image.height = event.height;
    image.loading = index === 0 ? "eager" : "lazy";
    if (index === 0) image.fetchPriority = "high";
    image.style.objectPosition = event.objectPosition || "center";
    label.textContent = event.caption || event.titulo || event.alt;
    homeEventsGrid.append(card);
  });
}

if (eventsGrid && eventTemplate) {
  siteEvents.forEach((event, index) => {
    const card = eventTemplate.content.cloneNode(true);
    const article = card.querySelector(".event-card");
    const imageLink = card.querySelector(".events-page-image-link");
    const image = card.querySelector(".events-page-image img");
    const title = card.querySelector(".event-card-title");
    const metadata = card.querySelector(".event-card-metadata");

    article?.classList.toggle("event-logo-card", event.variant === "logo");
    article?.classList.toggle("event-poster-card", event.variant === "poster");
    if (article) article.dataset.eventIndex = String(index);
    imageLink.href = eventImageUrl(event);
    imageLink.dataset.lightboxCaption = event.caption || event.alt;
    image.src = eventImageUrl(event);
    image.alt = event.alt;
    image.width = event.width;
    image.height = event.height;
    image.style.objectPosition = event.objectPosition || "center";

    if (title && event.titulo) title.textContent = event.titulo;
    else title?.remove();
    if (metadata) {
      if (event.data) {
        const time = document.createElement("time");
        time.dateTime = event.data;
        time.textContent = new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "long",
        }).format(new Date(`${event.data}T12:00:00`));
        metadata.append(time);
      }

      if (event.categoria) {
        const span = document.createElement("span");
        span.className = "event-card-category";
        span.textContent = event.categoria;
        metadata.append(span);
      }

      if (event.local) {
        const span = document.createElement("span");
        span.className = "event-card-location";
        span.textContent = event.local;
        metadata.append(span);
      }

      if (!metadata.childElementCount) metadata.remove();
    }

    eventsGrid.append(card);
  });
}
