(() => {
  const events = [...(window.SchoolAwards?.items || [])];
  const reportages = [...(window.SchoolAwards?.reportages || [])];
  const grid = document.querySelector("[data-awards-grid]");
  const reportagesSection = document.querySelector("[data-awards-reportages]");
  const reportagesGrid = document.querySelector("[data-reportages-grid]");
  if (!grid) return;

  const monthNumbers = {
    janeiro: 0, fevereiro: 1, março: 2, marco: 2, abril: 3, maio: 4,
    junho: 5, julho: 6, agosto: 7, setembro: 8, outubro: 9, novembro: 10,
    dezembro: 11,
  };
  const eventDateOrder = (event) => {
    const match = event.date?.toLocaleLowerCase("pt-BR").match(/\b\d{1,2}\s+(?:a\s+\d{1,2}\s+)?de\s+([a-zçã]+)/);
    const month = match && monthNumbers[match[1]];
    const day = event.date?.match(/\b(\d{1,2})\b/);
    return month === undefined || !day ? null : new Date(event.year, month, Number(day[1])).getTime();
  };
  events.sort((first, second) => {
    const yearDifference = Number(second.year) - Number(first.year);
    if (yearDifference) return yearDifference;
    const firstDate = eventDateOrder(first);
    const secondDate = eventDateOrder(second);
    if (firstDate === null || secondDate === null) {
      if (firstDate === secondDate) return 0;
      return firstDate === null ? 1 : -1;
    }
    return secondDate - firstDate;
  });

  const addText = (parent, tag, className, value) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = value;
    parent.append(element);
    return element;
  };

  const yearGroups = new Map();
  events.forEach((event, eventIndex) => {
    const year = String(event.year || "Ano não informado");
    let yearGroup = yearGroups.get(year);
    if (!yearGroup) {
      yearGroup = document.createElement("section");
      yearGroup.className = "award-year-group";
      yearGroup.dataset.year = year;
      const yearHeading = document.createElement("div");
      yearHeading.className = "award-year-heading";
      addText(yearHeading, "h2", "", year);
      const rule = document.createElement("span");
      rule.setAttribute("aria-hidden", "true");
      yearHeading.append(rule);
      yearGroup.append(yearHeading);
      const yearEvents = document.createElement("div");
      yearEvents.className = "award-year-events";
      yearGroup.append(yearEvents);
      yearGroups.set(year, yearGroup);
      grid.append(yearGroup);
    }
    const article = document.createElement("article");
    article.className = "award-event reveal";
    article.dataset.category = event.filterCategory || "scientific";
    const heading = document.createElement("header");
    heading.className = "award-card-heading";
    const meta = document.createElement("div");
    meta.className = "award-card-meta";
    addText(meta, "span", "", String(event.year));
    addText(meta, "span", "", event.category);
    heading.append(meta);
    addText(heading, "h2", "", event.event);
    if (event.group) addText(heading, "p", "award-group", event.group);
    const eventDetails = [event.date, event.location].filter(Boolean).join(" · ");
    if (eventDetails) addText(heading, "p", "award-institution", eventDetails);
    if (event.description) addText(heading, "p", "award-event-description", event.description);
    article.append(heading);

    const works = document.createElement("div");
    works.className = "award-work-list";
    event.works.forEach((work) => {
      const card = document.createElement("article");
      card.className = `award-work${work.award ? " award-work-recognized" : ""}`;
      card.dataset.lightboxGroup = `event-${eventIndex}`;
      const copy = document.createElement("div");
      copy.className = "award-work-copy";
      if (work.award) {
        const badge = addText(copy, "p", "award-placement", work.award);
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-trophy";
        icon.setAttribute("aria-hidden", "true");
        badge.prepend(icon);
      }
      addText(copy, "h3", "", work.title);
      if (work.description) addText(copy, "p", "award-work-description", work.description);
      if (work.projectLink) {
        const projectLink = document.createElement("a");
        projectLink.className = "award-project-link";
        projectLink.href = work.projectLink;
        projectLink.append(document.createTextNode("Conheça o Friends of Science "));
        const arrow = document.createElement("i");
        arrow.className = "fa-solid fa-arrow-right";
        arrow.setAttribute("aria-hidden", "true");
        projectLink.append(arrow);
        copy.append(projectLink);
      }
      if (work.authors?.length) {
        addText(copy, "p", "award-authors-label", "Autores e participantes");
        const authors = document.createElement("ul");
        authors.className = "award-authors";
        work.authors.forEach((author) => addText(authors, "li", "", author));
        copy.append(authors);
      }
      if (work.affiliation) {
        const affiliation = document.createElement("p");
        affiliation.className = "award-work-details";
        affiliation.textContent = work.affiliation;
        copy.append(affiliation);
      }
      if (work.contactEmail) {
        const contact = document.createElement("p");
        contact.className = "award-work-details";
        contact.append(document.createTextNode("Contato: "));
        const email = document.createElement("a");
        email.href = `mailto:${work.contactEmail}`;
        email.textContent = work.contactEmail;
        contact.append(email);
        copy.append(contact);
      }
      if (work.keywords?.length) {
        addText(
          copy,
          "p",
          "award-work-details",
          `Palavras-chave: ${work.keywords.join("; ")}.`,
        );
      }
      if (work.prizes?.length) {
        addText(copy, "p", "award-authors-label", "Prêmios recebidos");
        const prizes = document.createElement("ul");
        prizes.className = "award-prize-list";
        work.prizes.forEach((prize) => {
          const item = document.createElement("li");
          addText(item, "strong", "", prize);
          prizes.append(item);
        });
        copy.append(prizes);
      }
      card.append(copy);

      const addPhoto = (photo, caption) => {
        const figure = document.createElement("figure");
        figure.className = "award-figure award-work-figure";
        const link = document.createElement("a");
        link.href = photo.image;
        link.dataset.lightbox = "";
        link.dataset.lightboxGroup = `event-${eventIndex}`;
        link.dataset.lightboxCaption = photo.caption || caption || photo.alt;
        const image = document.createElement("img");
        image.src = photo.image;
        image.alt = photo.alt;
        if (Number.isFinite(photo.width) && photo.width > 0) image.width = photo.width;
        if (Number.isFinite(photo.height) && photo.height > 0) image.height = photo.height;
        image.loading = "lazy";
        image.decoding = "async";
        link.append(image);
        figure.append(link);
        addText(figure, "figcaption", "", photo.caption || caption || "");
        return figure;
      };
      card.append(addPhoto({
        image: work.image,
        alt: work.imageAlt,
        width: work.imageWidth,
        height: work.imageHeight,
        caption: work.caption || work.title,
      }));
      if (work.prizeImage) {
        const prizePhotoSection = document.createElement("section");
        prizePhotoSection.className = "award-extra-photo";
        addText(prizePhotoSection, "h4", "", "Registro dos prêmios");
        prizePhotoSection.append(addPhoto({
          image: work.prizeImage,
          alt: work.prizeImageAlt,
          width: work.prizeImageWidth,
          height: work.prizeImageHeight,
          caption: work.prizeCaption,
        }));
        card.append(prizePhotoSection);
      }
      if (work.photos?.length) {
        const photos = document.createElement("div");
        photos.className = `award-extra-photos${
          work.photoLayout === "compact-last" ? " award-extra-photos-compact-last" : ""
        }`;
        work.photos.forEach((photo) => photos.append(addPhoto(photo)));
        card.append(photos);
      }
      works.append(card);
    });
    article.append(works);
    yearGroup.querySelector(".award-year-events").append(article);
  });

  reportages.forEach((reportage) => {
    const card = document.createElement("article");
    card.className = "award-reportage-card";
    card.dataset.year = String(reportage.year || "");
    card.dataset.search = JSON.stringify(reportage);

    const source = document.createElement("p");
    source.className = "award-reportage-source";
    const icon = document.createElement("i");
    icon.className = reportage.platform === "YouTube"
      ? "fa-brands fa-youtube"
      : "fa-brands fa-instagram";
    icon.setAttribute("aria-hidden", "true");
    source.append(icon, document.createTextNode(` ${reportage.source} · ${reportage.year}`));
    card.append(source);

    addText(card, "h3", "", reportage.title);
    addText(card, "p", "award-reportage-description", reportage.description);

    const link = document.createElement("a");
    link.className = "award-reportage-link";
    link.href = reportage.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(document.createTextNode(
      reportage.platform === "YouTube" ? "Assistir no YouTube " : "Assistir reportagem ",
    ));
    const arrow = document.createElement("i");
    arrow.className = "fa-solid fa-arrow-up-right-from-square";
    arrow.setAttribute("aria-hidden", "true");
    link.append(arrow);
    card.append(link);
    reportagesGrid?.append(card);
  });

  const filters = document.querySelector("[data-awards-filters]");
  const yearFilters = document.querySelector("[data-awards-years]");
  const search = document.querySelector("[data-awards-search]");
  const count = document.querySelector("[data-awards-count]");
  const emptyState = document.querySelector("[data-awards-empty]");
  const categories = [
    { id: "all", label: "Todos os prêmios" },
    { id: "friends", label: "Friends of Science" },
    { id: "little-scientists", label: "Little Scientists" },
    { id: "reportages", label: "Reportagens" },
  ];
  const years = [
    { id: "all", label: "Todos os anos" },
    ...[...new Set([...events, ...reportages].map((item) => String(item.year)).filter(Boolean))]
      .sort((first, second) => Number(second) - Number(first))
      .map((year) => ({ id: year, label: year })),
  ];
  let activeCategory = "all";
  let activeYear = "all";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "awards-category-button";
    button.dataset.category = category.id;
    button.textContent = category.label;
    button.setAttribute("aria-pressed", String(category.id === activeCategory));
    filters?.append(button);
  });

  years.forEach((year) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "awards-category-button awards-year-button";
    button.dataset.year = year.id;
    button.textContent = year.label;
    button.setAttribute("aria-pressed", String(year.id === activeYear));
    yearFilters?.append(button);
  });

  const normalize = (value) => value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
  const updateResults = () => {
    const query = normalize(search?.value.trim() || "");
    const showingReportages = activeCategory === "reportages";
    if (grid) grid.hidden = showingReportages;
    if (reportagesSection) reportagesSection.hidden = !showingReportages;
    let visibleItems = 0;

    reportagesGrid?.querySelectorAll(".award-reportage-card").forEach((card) => {
      const matchesYear = activeYear === "all" || card.dataset.year === activeYear;
      const matchesSearch = !query || normalize(card.dataset.search || "").includes(query);
      const visible = showingReportages && matchesYear && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleItems += 1;
    });

    grid.querySelectorAll(".award-event").forEach((card, index) => {
      const event = events[index];
      const matchesCategory = !showingReportages && (activeCategory === "all" || event.filterCategory === activeCategory);
      const matchesYear = activeYear === "all" || String(event.year) === activeYear;
      const matchesSearch = !query || normalize(JSON.stringify(event)).includes(query);
      const visible = matchesCategory && matchesYear && matchesSearch;
      card.hidden = !visible;
      card.querySelectorAll("[data-lightbox]").forEach((link) => {
        link.dataset.lightboxDisabled = String(!visible);
      });
      if (visible) visibleItems += 1;
    });
    grid.querySelectorAll(".award-year-group").forEach((group) => {
      group.hidden = !group.querySelector(".award-event:not([hidden])");
    });
    const itemLabel = showingReportages
      ? (visibleItems === 1 ? "reportagem" : "reportagens")
      : (visibleItems === 1 ? "evento" : "eventos");
    if (count) count.textContent = `${visibleItems} ${itemLabel}`;
    if (emptyState) emptyState.hidden = visibleItems > 0;
  };

  filters?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    filters.querySelectorAll("button[data-category]").forEach((filter) => {
      filter.setAttribute("aria-pressed", String(filter === button));
    });
    updateResults();
  });
  yearFilters?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-year]");
    if (!button) return;
    activeYear = button.dataset.year;
    yearFilters.querySelectorAll("button[data-year]").forEach((filter) => {
      filter.setAttribute("aria-pressed", String(filter === button));
    });
    updateResults();
  });
  search?.addEventListener("input", updateResults);
  updateResults();
})();
