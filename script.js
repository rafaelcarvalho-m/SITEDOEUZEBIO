window.SiteUI.pointerGlow(".hero");
window.SiteUI.tiltCards(".content-card");

const navDropdown = document.querySelector(".nav-dropdown");

navDropdown?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navDropdown.open = false;
  });
});

document.addEventListener("click", (event) => {
  if (navDropdown?.open && !navDropdown.contains(event.target)) {
    navDropdown.open = false;
  }
});

navDropdown?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navDropdown.open = false;
    navDropdown.querySelector("summary")?.focus();
  }
});

const visitTabs = [...document.querySelectorAll("[data-visit-tab]")];
const visitViews = [...document.querySelectorAll("[data-visit-view]")];

if (visitTabs.length && visitViews.length) {
  const setVisitView = (selectedView) => {
    visitTabs.forEach((tab) => {
      const isSelected = tab.dataset.visitTab === selectedView;
      tab.classList.toggle("is-active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
    });

    visitViews.forEach((view) => {
      const isSelected = view.dataset.visitView === selectedView;
      view.classList.toggle("is-active", isSelected);
      view.hidden = !isSelected;
    });
  };

  visitTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setVisitView(tab.dataset.visitTab));

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

      event.preventDefault();
      const offset = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + offset + visitTabs.length) % visitTabs.length;
      visitTabs[nextIndex].focus();
      setVisitView(visitTabs[nextIndex].dataset.visitTab);
    });
  });
}
