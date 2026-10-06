(() => {
  const events = window.SiteEvents?.items || [];
  const grid = document.querySelector("[data-events-grid]");
  const tools = document.querySelector("[data-events-tools]");
  const searchWrap = document.querySelector("[data-events-search-wrap]");
  const search = document.querySelector("[data-events-search]");
  const categoryFilters = document.querySelector("[data-category-filters]");
  const yearFilters = document.querySelector("[data-year-filters]");
  const emptyState = document.querySelector("[data-events-empty]");
  const status = document.querySelector("[data-events-status]");
  const datedEvents = events.filter((event) => event.data);
  const categories = [...new Set(events.map((event) => event.categoria).filter(Boolean))];
  const years = [...new Set(datedEvents.map((event) => event.data.slice(0, 4)))].sort(
    (first, second) => Number(second) - Number(first),
  );
  const titledEvents = events.some((event) => event.titulo?.trim());
  let activeCategory = "all";
  let activeYear = "all";

  const createPill = (label, value, group, onSelect) => {
    const button = document.createElement("button");
    button.className = "events-filter-pill";
    button.type = "button";
    button.textContent = label;
    button.setAttribute("aria-pressed", String(value === "all"));
    button.addEventListener("click", () => onSelect(value, group));
    return button;
  };

  const categoryPills = document.querySelector("[data-category-pills]");
  const yearPills = document.querySelector("[data-year-pills]");

  if (titledEvents && searchWrap && search) searchWrap.hidden = false;
  if (categories.length && categoryPills && categoryFilters) {
    categoryFilters.hidden = false;
    const selectCategory = (value) => {
      activeCategory = value;
      categoryPills.querySelectorAll("button").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.value === value));
      });
      updateResults();
    };
    ["all", ...categories].forEach((category) => {
      const button = createPill(
        category === "all" ? "Todas" : category,
        category,
        "category",
        selectCategory,
      );
      button.dataset.value = category;
      categoryPills.append(button);
    });
  }

  if (years.length && yearPills && yearFilters) {
    yearFilters.hidden = false;
    const selectYear = (value) => {
      activeYear = value;
      yearPills.querySelectorAll("button").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.value === value));
      });
      updateResults();
    };
    ["all", ...years].forEach((year) => {
      const button = createPill(
        year === "all" ? "Todos" : year,
        year,
        "year",
        selectYear,
      );
      button.dataset.value = year;
      yearPills.append(button);
    });
  }

  if (tools) tools.hidden = !(titledEvents || categories.length || years.length);

  if (datedEvents.length && grid) {
    const dateGroups = document.querySelector("[data-date-groups]");
    const upcomingGrid = document.querySelector("[data-upcoming-grid]");
    const pastGrid = document.querySelector("[data-past-grid]");
    const undatedGrid = document.querySelector("[data-undated-grid]");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    grid.querySelectorAll(".events-page-card").forEach((card, index) => {
      const event = events[index];
      if (!event?.data) {
        undatedGrid?.append(card);
        return;
      }
      const eventDate = new Date(`${event.data}T00:00:00`);
      (eventDate >= today ? upcomingGrid : pastGrid)?.append(card);
    });

    grid.hidden = true;
    dateGroups.hidden = false;
    document.querySelector("[data-upcoming-group]").hidden =
      !upcomingGrid?.childElementCount;
    document.querySelector("[data-past-group]").hidden =
      !pastGrid?.childElementCount;
    document.querySelector("[data-undated-group]").hidden =
      !undatedGrid?.childElementCount;
  }

  function updateResults() {
    const query = search?.value.trim().toLocaleLowerCase("pt-BR") || "";
    let visibleCount = 0;

    document.querySelectorAll(".events-page-card").forEach((card) => {
      const index = Number(card.dataset.eventIndex);
      const event = events[index];
      const matchesQuery = !query || event.titulo?.toLocaleLowerCase("pt-BR").includes(query);
      const matchesCategory =
        activeCategory === "all" || event.categoria === activeCategory;
      const matchesYear = activeYear === "all" || event.data?.startsWith(activeYear);
      const isVisible = matchesQuery && matchesCategory && matchesYear;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    ["[data-upcoming-group]", "[data-past-group]", "[data-undated-group]"].forEach(
      (selector) => {
        const group = document.querySelector(selector);
        if (!group || group.hidden) return;
        const visibleCards = [...group.querySelectorAll(".events-page-card")].some(
          (card) => !card.hidden,
        );
        group.hidden = !visibleCards;
      },
    );

    if (emptyState) emptyState.hidden = visibleCount > 0;
    if (status) {
      status.textContent = `${visibleCount} ${visibleCount === 1 ? "evento encontrado" : "eventos encontrados"}.`;
    }
  }

  document.querySelectorAll(".events-page-card").forEach((card, index) => {
    card.dataset.eventIndex = String(index);
  });
  search?.addEventListener("input", updateResults);
  updateResults();
})();
