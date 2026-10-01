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
      (entries) => {
        const visibleElements = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);

        visibleElements.forEach((element) => observer.unobserve(element));

        if (visibleElements.length) {
          window.requestAnimationFrame(() => {
            visibleElements.forEach((element) =>
              element.classList.add("is-visible"),
            );
          });
        }
      },
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
    const updateToggleIcon = (isOpen) => {
      toggle.innerHTML = `<span class="nav-toggle-icon${isOpen ? " is-close" : ""}" aria-hidden="true"></span>`;
    };

    updateToggleIcon(false);
    links.before(toggle);

    const setMenuState = (isOpen) => {
      links.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      updateToggleIcon(isOpen);
    };

    toggle.addEventListener("click", () => {
      const willOpen = !links.classList.contains("nav-open");
      setMenuState(willOpen);

      if (willOpen) links.querySelector("a")?.focus();
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

    let pointerFrame = 0;
    let latestPointerEvent;

    element.addEventListener("pointermove", (event) => {
      latestPointerEvent = event;

      if (pointerFrame) return;

      pointerFrame = window.requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();

        element.style.setProperty(
          "--pointer-x",
          `${((latestPointerEvent.clientX - bounds.left) / bounds.width) * 100}%`,
        );
        element.style.setProperty(
          "--pointer-y",
          `${((latestPointerEvent.clientY - bounds.top) / bounds.height) * 100}%`,
        );
        pointerFrame = 0;
      });
    });
  };

  const tiltCards = (selector) => {
    if (reduceMotion || !finePointer) return;

    document.querySelectorAll(selector).forEach((card) => {
      let tiltFrame = 0;
      let latestPointerEvent;

      card.addEventListener("pointermove", (event) => {
        latestPointerEvent = event;

        if (tiltFrame) return;

        tiltFrame = window.requestAnimationFrame(() => {
          const bounds = card.getBoundingClientRect();
          const x =
            (latestPointerEvent.clientX - bounds.left) / bounds.width - 0.5;
          const y =
            (latestPointerEvent.clientY - bounds.top) / bounds.height - 0.5;

          card.style.setProperty("--tilt-x", `${x * 5}deg`);
          card.style.setProperty("--tilt-y", `${y * -5}deg`);
          tiltFrame = 0;
        });
      });

      card.addEventListener("pointerleave", () => {
        if (tiltFrame) {
          window.cancelAnimationFrame(tiltFrame);
          tiltFrame = 0;
        }

        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  };

  window.SiteUI = Object.freeze({ pointerGlow, tiltCards });
})();

(() => {
  const vlibrasScript = document.querySelector("script[data-vlibras-widget]");

  if (!vlibrasScript) {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.dataset.vlibrasWidget = "true";
    script.addEventListener("load", () => {
      if (window.VLibras?.Widget && !document.querySelector("[vw]")) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    });
    document.head.append(script);
  }

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    if (
      event.target.closest(
        ".vw-access-button, .vw-plugin-top-wrapper, [vw]",
      )
    ) {
      document.body.classList.add("text-selection-enabled");
    }
  });
})();

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-pressed");
    window.setTimeout(() => button.classList.remove("is-pressed"), 180);
  });
});

(() => {
  const galleryLinks = [...document.querySelectorAll("[data-lightbox]")];

  if (!galleryLinks.length) return;

  const dialog = document.createElement("dialog");
  dialog.className = "site-lightbox";
  dialog.setAttribute("aria-labelledby", "site-lightbox-caption");
  dialog.innerHTML = `
    <div class="site-lightbox-shell">
      <button class="site-lightbox-close" type="button" aria-label="Fechar imagem ampliada">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <figure class="site-lightbox-figure">
        <img class="site-lightbox-image" alt="" />
        <figcaption id="site-lightbox-caption">
          <span class="site-lightbox-caption"></span>
          <span class="site-lightbox-count" aria-live="polite"></span>
        </figcaption>
      </figure>
      <button class="site-lightbox-previous" type="button" aria-label="Imagem anterior">
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button class="site-lightbox-next" type="button" aria-label="Próxima imagem">
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
  `;
  document.body.append(dialog);

  if (typeof dialog.showModal !== "function") return;

  const lightboxImage = dialog.querySelector(".site-lightbox-image");
  const lightboxCaption = dialog.querySelector(".site-lightbox-caption");
  const lightboxCount = dialog.querySelector(".site-lightbox-count");
  const closeButton = dialog.querySelector(".site-lightbox-close");
  const previousButton = dialog.querySelector(".site-lightbox-previous");
  const nextButton = dialog.querySelector(".site-lightbox-next");
  let currentIndex = 0;
  let returnFocus = null;

  const showItem = (index) => {
    currentIndex = (index + galleryLinks.length) % galleryLinks.length;
    const link = galleryLinks[currentIndex];
    const sourceImage = link.querySelector("img");

    lightboxImage.src = link.getAttribute("href");
    lightboxImage.alt = sourceImage?.alt || "Fotografia ampliada";
    lightboxCaption.textContent =
      link.dataset.lightboxCaption || sourceImage?.alt || "Fotografia";
    lightboxCount.textContent = `${currentIndex + 1} / ${galleryLinks.length}`;
  };

  const openLightbox = (index, link) => {
    returnFocus = link;
    showItem(index);
    dialog.showModal();
    document.body.classList.add("site-lightbox-open");
    closeButton.focus();
  };

  galleryLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openLightbox(index, link);
    });
  });

  const hasMultipleImages = galleryLinks.length > 1;
  previousButton.hidden = !hasMultipleImages;
  nextButton.hidden = !hasMultipleImages;
  lightboxCount.hidden = !hasMultipleImages;

  closeButton.addEventListener("click", () => dialog.close());
  previousButton.addEventListener("click", () => showItem(currentIndex - 1));
  nextButton.addEventListener("click", () => showItem(currentIndex + 1));

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && hasMultipleImages) {
      event.preventDefault();
      showItem(currentIndex - 1);
    }

    if (event.key === "ArrowRight" && hasMultipleImages) {
      event.preventDefault();
      showItem(currentIndex + 1);
    }
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("site-lightbox-open");
    returnFocus?.focus();
  });
})();
