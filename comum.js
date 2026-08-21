(() => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  const revealElements = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
  }

  const nav = document.querySelector(".topbar");
  const links = nav?.querySelector(".nav-links");

  if (nav && links) {
    const toggle = document.createElement("button");

    if (!links.id) links.id = "primary-navigation";

    toggle.className = "nav-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Abrir menu");
    toggle.setAttribute("aria-controls", links.id);
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML =
      '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    nav.append(toggle);

    const setMenuState = (isOpen) => {
      links.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      toggle.innerHTML = `<i class="fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}" aria-hidden="true"></i>`;
    };

    toggle.addEventListener("click", () => {
      setMenuState(!links.classList.contains("nav-open"));
    });

    links.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenuState(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && links.classList.contains("nav-open")) {
        setMenuState(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) setMenuState(false);
    });
  }

  const pointerGlow = (selector) => {
    const element = document.querySelector(selector);

    if (!element || reduceMotion || !finePointer) return;

    element.addEventListener("pointermove", (event) => {
      const bounds = element.getBoundingClientRect();

      element.style.setProperty(
        "--pointer-x",
        `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
      );
      element.style.setProperty(
        "--pointer-y",
        `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
      );
    });
  };

  const tiltCards = (selector) => {
    if (reduceMotion || !finePointer) return;

    document.querySelectorAll(selector).forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        card.style.setProperty("--tilt-x", `${x * 5}deg`);
        card.style.setProperty("--tilt-y", `${y * -5}deg`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  };

  window.SiteUI = Object.freeze({ pointerGlow, tiltCards });
})();
