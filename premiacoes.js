(() => {
  const items = window.SchoolAwards?.items || [];
  const grid = document.querySelector("[data-awards-grid]");
  const template = document.querySelector("#award-card-template");
  if (!grid || !template) return;

  const setFigureLink = (link, image, alt, caption) => {
    if (!image) return;
    link.href = image;
    link.dataset.lightboxCaption = caption || alt;
    const thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.alt = alt || "";
    thumbnail.loading = "lazy";
    thumbnail.decoding = "async";
    link.append(thumbnail);
  };

  const createCard = (item) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".award-card");
    const title = fragment.querySelector("[data-award-title]");
    const placement = fragment.querySelector("[data-award-placement]");

    fragment.querySelector("[data-award-year]").textContent =
      item.year || "Ano não informado";
    fragment.querySelector("[data-award-category]").textContent =
      item.category || "Reconhecimento institucional";
    placement.textContent = item.placement || "Conquista reconhecida";
    fragment.querySelector("[data-award-group]").textContent =
      item.group || "";
    title.textContent = item.title || "Conquista escolar";
    fragment.querySelector("[data-award-institution]").textContent =
      item.institution || "Entidade responsável não informada";
    fragment.querySelector("[data-award-project-title]").textContent =
      item.projectTitle || "";
    fragment.querySelector("[data-award-description]").textContent =
      item.description || "";

    const projectLink = fragment.querySelector("[data-award-project-link]");
    if (item.projectLink) projectLink.href = item.projectLink;
    else projectLink.hidden = true;

    const projectImageLink = fragment.querySelector(
      "[data-award-project-image-link]",
    );
    setFigureLink(
      projectImageLink,
      item.projectImage,
      item.projectImageAlt,
      item.projectImageCaption,
    );
    fragment.querySelector("[data-award-project-caption]").textContent =
      item.projectImageCaption || "";

    const prizeList = fragment.querySelector("[data-award-prizes]");
    (item.prizes || []).forEach((prize) => {
      const listItem = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = prize.name;
      listItem.append(name);
      if (prize.note) {
        const note = document.createElement("span");
        note.textContent = prize.note;
        listItem.append(note);
      }
      prizeList.append(listItem);
    });

    setFigureLink(
      fragment.querySelector("[data-award-prize-image-link]"),
      item.prizeImage,
      item.prizeImageAlt,
      item.prizeImageCaption,
    );
    fragment.querySelector("[data-award-prize-caption]").textContent =
      item.prizeImageCaption || "";

    const photoGallery = fragment.querySelector("[data-award-photos]");
    (item.photos || []).forEach((photo) => {
      const figure = document.createElement("figure");
      figure.className = "award-figure";
      const link = document.createElement("a");
      link.dataset.lightbox = "";
      setFigureLink(link, photo.image, photo.alt, photo.caption);
      const caption = document.createElement("figcaption");
      caption.textContent = photo.caption || photo.alt || "";
      figure.append(link, caption);
      photoGallery.append(figure);
    });

    return fragment;
  };

  items.forEach((item) => grid.append(createCard(item)));
})();
