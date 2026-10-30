/*
  Verificação local sem bibliotecas extras.

  Execute na raiz do projeto com: node ferramentas/validar-site.js
  O script procura links/arquivos locais quebrados e confere os cadastros de
  eventos, galeria e calendário. Ele apenas lê os arquivos; não altera o site.
*/
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const errors = [];

function listFiles(folder, extension) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(folder, entry.name);
    if (entry.isDirectory()) return listFiles(fullPath, extension);
    return entry.isFile() && entry.name.toLowerCase().endsWith(extension)
      ? [fullPath]
      : [];
  });
}

function reportMissing(source, reference) {
  errors.push(
    `${path.relative(root, source)} aponta para arquivo inexistente: ${reference}`,
  );
}

function localPath(source, reference) {
  const withoutQuery = reference.split(/[?#]/, 1)[0];
  if (!withoutQuery) return source;

  let target;
  if (withoutQuery.startsWith("/SITEDOEUZEBIO/")) {
    target = path.join(root, withoutQuery.slice("/SITEDOEUZEBIO/".length));
  } else if (withoutQuery.startsWith("/")) {
    target = path.join(root, withoutQuery.slice(1));
  } else {
    target = path.resolve(
      path.dirname(source),
      decodeURIComponent(withoutQuery),
    );
  }

  return target;
}

function checkReference(source, reference, checkFragment = false) {
  const value = reference.trim();
  if (
    !value ||
    value.includes("${") ||
    /^(?:[a-z][a-z0-9+.-]*:|\/\/|data:)/i.test(value)
  )
    return;

  const target = localPath(source, value);
  if (!fs.existsSync(target)) {
    reportMissing(source, value);
    return;
  }

  if (!checkFragment || !value.includes("#") || !target.endsWith(".html"))
    return;
  const fragment = decodeURIComponent(value.slice(value.indexOf("#") + 1));
  if (!fragment) return;
  const html = fs.readFileSync(target, "utf8");
  const ids = new Set(
    [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]),
  );
  if (!ids.has(fragment))
    reportMissing(source, `${value} (âncora #${fragment})`);
}

const htmlFiles = listFiles(root, ".html");
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(
    /\b(?:href|src|poster)=["']([^"']+)["']/gi,
  )) {
    checkReference(file, match[1], true);
  }

  for (const match of html.matchAll(/\bsrcset=["']([^"']+)["']/gi)) {
    for (const candidate of match[1].split(",")) {
      checkReference(file, candidate.trim().split(/\s+/, 1)[0]);
    }
  }

  // A página offline é intencionalmente independente do rodapé normal.
  if (path.basename(file).toLowerCase() !== "offline.html") {
    if (!/<footer\b/i.test(html)) {
      errors.push(`${path.relative(root, file)} não contém footer.`);
    }
    if (!/data-current-year/.test(html)) {
      errors.push(
        `${path.relative(root, file)} não tem o ano automático do rodapé.`,
      );
    }
  }
}

for (const file of listFiles(root, ".css")) {
  const css = fs.readFileSync(file, "utf8");
  for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/gi)) {
    checkReference(file, match[1]);
  }
}

function loadData(relativePath) {
  const sandbox = { window: {} };
  vm.runInNewContext(
    fs.readFileSync(path.join(root, relativePath), "utf8"),
    sandbox,
    { filename: relativePath },
  );
  return sandbox.window;
}

const events = loadData("dados/eventos.js").SiteEvents;
if (!events || !Array.isArray(events.items)) {
  errors.push("dados/eventos.js não publica a lista SiteEvents.items.");
} else {
  for (const [index, event] of events.items.entries()) {
    const label = `dados/eventos.js, evento ${index + 1}`;
    for (const field of ["image", "alt", "width", "height"]) {
      if (!event[field]) errors.push(`${label}: falta preencher ${field}.`);
    }
    if (event.image && !fs.existsSync(path.join(root, event.image))) {
      reportMissing(path.join(root, "dados/eventos.js"), event.image);
    }
  }
}

const gallery = loadData("dados/galeria.js").SiteGallery;
if (!gallery || !Array.isArray(gallery.items)) {
  errors.push("dados/galeria.js não publica a lista SiteGallery.items.");
} else {
  for (const [index, item] of gallery.items.entries()) {
    const label = `dados/galeria.js, foto ${index + 1}`;
    for (const field of ["preview", "image", "alt", "width", "height"]) {
      if (!item[field]) errors.push(`${label}: falta preencher ${field}.`);
    }
    for (const field of ["preview", "image"]) {
      if (item[field] && !fs.existsSync(path.join(root, item[field]))) {
        reportMissing(path.join(root, "dados/galeria.js"), item[field]);
      }
    }
  }
}

const calendar = loadData("dados/calendario.js").SiteCalendar;
if (!calendar || !Number.isInteger(calendar.year) || !calendar.pdfFile) {
  errors.push("dados/calendario.js precisa informar year e pdfFile.");
} else if (!fs.existsSync(path.join(root, "pdfs-do-site", calendar.pdfFile))) {
  reportMissing(path.join(root, "dados/calendario.js"), calendar.pdfFile);
}

for (const requiredFile of ["offline.html", "service-worker.js"]) {
  if (!fs.existsSync(path.join(root, requiredFile))) {
    errors.push(`Falta o arquivo necessário para o modo offline: ${requiredFile}`);
  }
}

console.log(`Páginas HTML verificadas: ${htmlFiles.length}`);
console.log(`Eventos cadastrados: ${events?.items?.length ?? 0}`);
console.log(`Fotos cadastradas na galeria: ${gallery?.items?.length ?? 0}`);
console.log(`Calendário configurado: ${calendar?.year ?? "não informado"}`);

if (errors.length) {
  console.error(`\nEncontrados ${errors.length} problema(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log("Links locais e dados cadastrados conferem.");
}
