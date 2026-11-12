/*
  EXIBIÇÃO DO CALENDÁRIO ESCOLAR

  Lê os dados de dados/calendario.js e atualiza a Home e a referência da SEED.
  O HTML mantém links de reserva para o caso de o JavaScript estar desativado.
*/
(() => {
  const calendar = window.SiteCalendar;
  const scriptUrl = document.currentScript?.src;

  if (!calendar || !scriptUrl) return;

  const pdfUrl = new URL(
    `pdfs-do-site/${calendar.pdfFile}`,
    new URL("./", scriptUrl),
  ).href;

  document.querySelectorAll("[data-calendar-year]").forEach((element) => {
    element.textContent = String(calendar.year);
  });

  const embeddedCalendar = document.querySelector("[data-calendar-embed]");
  if (embeddedCalendar) {
    embeddedCalendar.src = pdfUrl;
    embeddedCalendar.title = `Calendário escolar ${calendar.year}`;
  }

  const downloadLink = document.querySelector("[data-calendar-download]");
  if (downloadLink) {
    downloadLink.href = pdfUrl;
    downloadLink.download = calendar.pdfFile;
  }

  const openLink = document.querySelector("[data-calendar-open]");
  if (openLink) {
    openLink.href = pdfUrl;
    openLink.setAttribute(
      "aria-label",
      `Abrir calendário escolar ${calendar.year} em nova aba`,
    );
  }

  const sourceLink = document.querySelector("[data-calendar-source]");
  if (sourceLink) {
    sourceLink.href = calendar.officialUrl;
    sourceLink.textContent = `Secretaria da Educação do Paraná — Calendário Escolar ${calendar.year}`;
  }

  const note = document.querySelector("[data-calendar-note]");
  if (note) note.textContent = calendar.officialNote;
})();
