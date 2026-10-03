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
