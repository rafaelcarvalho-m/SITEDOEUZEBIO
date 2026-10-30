/*
  RESERVA OFFLINE DO SITE

  Este arquivo não guarda as páginas normais. Ele guarda offline.html para que
  o navegador possa mostrá-la quando uma navegação falhar por falta de conexão.
  Aumente a versão do cache quando alterar a página offline.
*/
const OFFLINE_CACHE = "euzebio-offline-v3";
const OFFLINE_URL = new URL("offline.html", self.registration.scope).href;
const NOT_FOUND_URL = new URL("404.html", self.registration.scope).href;
const PRECACHE_URLS = [
  OFFLINE_URL,
  NOT_FOUND_URL,
  new URL("paginas.css?v=20261030-maintenance", self.registration.scope).href,
  new URL("style.css?v=20261030-maintenance", self.registration.scope).href,
  new URL("imgs-home-index/logo-escola.png", self.registration.scope).href,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(OFFLINE_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("euzebio-offline-") &&
                cacheName !== OFFLINE_CACHE,
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.status !== 404) return response;

          const notFoundPage = await caches.match(NOT_FOUND_URL);
          if (!notFoundPage) return response;

          return new Response(notFoundPage.body, {
            status: 404,
            statusText: "Not Found",
            headers: notFoundPage.headers,
          });
        })
        .catch(async () => {
          const cachedPage = await caches.match(OFFLINE_URL);
          return (
            cachedPage ||
            new Response("Sem conexão. Confira a internet e tente novamente.", {
              status: 503,
              headers: { "Content-Type": "text/plain; charset=utf-8" },
            })
          );
        }),
    );
    return;
  }

  // Usa a cópia guardada para os arquivos visuais da tela offline e da 404.
  event.respondWith(
    caches.match(request).then((cachedFile) => cachedFile || fetch(request)),
  );
});
