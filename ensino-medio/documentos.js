const documents = window.SiteTeachingDocuments || [];
const documentGrid = document.querySelector("[data-teaching-documents]");
const documentTemplate = document.querySelector("#teaching-document-template");

if (documentGrid && documentTemplate) {
  documents.forEach((documentItem) => {
    const card = documentTemplate.content.cloneNode(true);
    const article = card.querySelector(".teaching-document-card");
    const title = card.querySelector("h2");
    const description = card.querySelector(".teaching-document-description");
    const viewer = card.querySelector("iframe");
    const openLink = card.querySelector("[data-document-open]");
    const downloadLink = card.querySelector("[data-document-download]");
    const source = documentItem.file;

    article.id = documentItem.id;
    title.textContent = documentItem.title;
    description.textContent = documentItem.description;
    viewer.src = source;
    viewer.title = `Pré-visualização do documento: ${documentItem.title}`;
    openLink.href = source;
    openLink.setAttribute(
      "aria-label",
      `Abrir ${documentItem.title} em nova aba`,
    );
    downloadLink.href = source;
    downloadLink.download = documentItem.file.split("/").pop();

    documentGrid.append(card);
  });
}
