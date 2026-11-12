/*
  EXIBIÇÃO DA GALERIA

  Os registros editáveis ficam em ../dados/galeria.js. Este arquivo converte
  esses dados em cards para a prévia da Home e para a página completa.
*/

const schoolGallery = window.SiteGallery?.items || [];
const siteGalleryCategories = window.SiteGallery?.categories || [];

const galleryGrid = document.querySelector(
  "[data-gallery-preview], [data-gallery-grid]",
);
const galleryTemplate = document.querySelector("#gallery-card-template");

if (galleryGrid && galleryTemplate) {
  const pathPrefix = document.body.dataset.galleryPrefix || "";
  const isPreview = galleryGrid.hasAttribute("data-gallery-preview");
  const galleryItems = isPreview ? schoolGallery.slice(0, 9) : schoolGallery;
  const filters = document.querySelector("[data-gallery-filters]");
  const count = document.querySelector("[data-gallery-count]");
  let activeCategory = "all";

  if (!isPreview && filters) {
    siteGalleryCategories.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-category-button";
      button.textContent = category.label;
      button.dataset.category = category.id;
      button.setAttribute(
        "aria-pressed",
        String(category.id === activeCategory),
      );
      filters.append(button);
    });
  }

  galleryItems.forEach((item) => {
    const card = galleryTemplate.content.cloneNode(true);
    const imageLink = card.querySelector(".gallery-card-image-link");
    const imageFrame = card.querySelector(".gallery-image");
    const image = card.querySelector(".gallery-image img");

    if (isPreview) {
      imageLink.replaceWith(imageFrame);
    } else {
      imageLink.href = `${pathPrefix}${item.image}`;
      imageLink.dataset.lightboxCaption = item.caption;
      imageLink.dataset.lightboxGroup = item.category;
    }

    imageFrame?.classList.toggle(
      "gallery-image--portrait",
      item.variant === "portrait",
    );
    image.src = `${pathPrefix}${item.preview}`;
    image.srcset =
      item.image === item.preview
        ? `${pathPrefix}${item.preview} ${item.width}w`
        : `${pathPrefix}${item.preview} ${item.width}w, ${pathPrefix}${item.image} ${item.imageWidth || 1600}w`;
    image.sizes = isPreview
      ? "(min-width: 1200px) 31vw, (min-width: 801px) 30vw, 100vw"
      : "(min-width: 1000px) 31vw, (min-width: 641px) 46vw, 100vw";
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
    galleryGrid.append(card);
  });

  const visibleItems = () => {
    const cards = [...galleryGrid.querySelectorAll(".gallery-card")];
    let visible = 0;
    cards.forEach((card, index) => {
      const item = galleryItems[index];
      const matches =
        activeCategory === "all" || item.category === activeCategory;
      card.hidden = !matches;
      const link = card.querySelector("[data-lightbox]");
      if (link) link.dataset.lightboxDisabled = String(!matches);
      if (matches) visible += 1;
    });
    if (count)
      count.textContent = `${visible} ${visible === 1 ? "fotografia" : "fotografias"}`;
  };

  if (!isPreview && filters) {
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-category]");
      if (!button) return;
      activeCategory = button.dataset.category;
      filters.querySelectorAll("button[data-category]").forEach((filter) => {
        filter.setAttribute("aria-pressed", String(filter === button));
      });
      visibleItems();
    });
    visibleItems();
  }
}
