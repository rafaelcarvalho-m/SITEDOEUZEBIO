/*
  RESERVA OFFLINE DO SITE

  Este arquivo não guarda as páginas normais. Ele guarda offline.html para que
  o navegador possa mostrá-la quando uma navegação falhar por falta de conexão.
  Aumente a versão do cache quando alterar a página offline.
*/
const OFFLINE_CACHE = "euzebio-offline-v1";
const OFFLINE_URL = new URL("offline.html", self.registration.scope).href;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(OFFLINE_CACHE).then((cache) => cache.add(OFFLINE_URL)),
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

  // Só navegações para páginas HTML recebem a tela de reserva.
  if (request.method !== "GET" || request.mode !== "navigate") return;

  event.respondWith(
    fetch(request).catch(async () => {
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
});
