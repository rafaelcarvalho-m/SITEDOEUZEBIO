/*
  GALERIAS DOS CLUBES

  Reaproveita os arquivos e descrições cadastrados em ../dados/galeria.js.
  Cada categoria forma um grupo independente no lightbox.
*/
(() => {
  const items = window.SiteGallery?.items || [];
  const projectInfo = {
    "friends-solar": {
      title: "Carrinho solar",
      label: "Protótipos e registros do carrinho solar",
    },
    "friends-soap": {
      title: "Sabão com óleo usado",
      label: "Etapas do trabalho com reaproveitamento de óleo",
    },
    "friends-chalk": {
      title: "Giz reciclado",
      label: "Etapas da produção e uso do giz reciclado",
    },
    "friends-biohybrid": {
      title: "Robô biohíbrido",
      label: "Circuito e sensor do trabalho biohíbrido",
    },
    "friends-3d": {
      title: "Impressão 3D",
      label: "Registro de atividade com impressão 3D",
    },
    "friends-rocket": {
      title: "Foguetes de garrafa",
      label: "Planejamento, protótipos e testes de foguetes de garrafa",
    },
    "little-rockets": {
      title: "Minifoguetes e reflorestamento",
      label: "Registros do projeto de minifoguetes",
    },
    "little-sensory": {
      title: "Jardim das Sensações",
      label: "Registros do Jardim das Sensações",
    },
    "little-garden": {
      title: "Horta Escolar e Compostagem",
      label: "Canteiros, cultivo e compostagem",
    },
    "little-bees": {
      title: "Casa das Abelhas",
      label: "Registros da Casa das Abelhas",
    },
    "little-greenhouse": {
      title: "Estufa",
      label: "Registros da estufa escolar",
    },
  };

  const makeImageLink = (item, group, title) => {
    const link = document.createElement("a");
    link.className = "marlene-gallery-card-image-link";
    link.href = `../${item.image}`;
    link.dataset.lightbox = "";
    link.dataset.lightboxGroup = group;
    link.dataset.lightboxCaption = `${title} — ${item.caption}`;
    link.setAttribute("aria-label", `Ampliar imagem: ${item.alt}`);

    const image = document.createElement("img");
    image.src = `../${item.preview}`;
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
    image.loading = "lazy";
    image.decoding = "async";
    image.sizes = "(min-width: 1000px) 31vw, (min-width: 641px) 46vw, 100vw";
    image.srcset =
      item.image === item.preview
        ? `../${item.preview} ${item.width}w`
        : `../${item.preview} ${item.width}w, ../${item.image} ${item.imageWidth || 1600}w`;
    link.append(image);
    return link;
  };

  const populateCard = (card) => {
    const key = card.dataset.projectGallery;
    const info = projectInfo[key];
    if (!info) return;

    const projectItems = items.filter((item) => item.category === key);
    if (!projectItems.length) return;

    let mainLink = card.querySelector(".marlene-gallery-card-image-link");
    if (!mainLink) {
      mainLink = document.createElement("div");
      mainLink.className = "marlene-gallery-card-image-link";
      card.prepend(mainLink);
    }

    mainLink.replaceWith(makeImageLink(projectItems[0], key, info.title));
    if (projectItems.length > 1) {
      const photos = document.createElement("div");
      photos.className = "club-gallery-thumbnails";
      photos.setAttribute("aria-label", info.label);
      projectItems
        .slice(1)
        .forEach((item) => photos.append(makeImageLink(item, key, info.title)));
      const copy = card.querySelector(".marlene-gallery-card-copy");
      if (copy) copy.before(photos);
      else card.append(photos);
    }
  };

  document.querySelectorAll("[data-project-gallery]").forEach(populateCard);

  if (document.body.classList.contains("gabriele-page")) {
    const grid = document.querySelector(
      ".friends-project-gallery .marlene-gallery-grid",
    );
    Object.entries(projectInfo)
      .filter(([key]) => key.startsWith("friends-"))
      .filter(
        ([key]) => !grid?.querySelector(`[data-project-gallery="${key}"]`),
      )
      .forEach(([key, info]) => {
        const card = document.createElement("article");
        card.className = "marlene-gallery-card reveal";
        card.dataset.projectGallery = key;
        card.innerHTML = `<div class="marlene-gallery-card-copy"><h3>${info.title}</h3><p>${info.label}.</p></div>`;
        grid?.append(card);
        populateCard(card);
      });
  }
})();
