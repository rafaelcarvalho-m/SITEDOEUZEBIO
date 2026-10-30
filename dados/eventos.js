/*
  CADASTRO DE EVENTOS

  Para publicar um novo evento:
  1. Salve a imagem na pasta eventos/.
  2. Copie um objeto completo e cole como novo item dentro de items.
  3. Preencha image (caminho desde a raiz do site), alt (descrição da imagem),
     width e height (dimensões originais em pixels).

  Campos opcionais: caption (texto curto exibido no card), titulo, descricao,
  data (AAAA-MM-DD), ano (AAAA quando não houver uma data exata), categoria,
  local, objectPosition e variant. Use variant: "logo" ou "poster" para artes
  que devem aparecer inteiras. Não invente datas, categorias ou locais.

  A ordem dos itens define a ordem dos cards. Os quatro primeiros também podem
  aparecer na Home. categories mantém opções de filtro mesmo quando ainda não há
  um evento cadastrado naquela categoria.
*/

(() => {
  const siteEvents = [
    {
      image: "eventos/post_terceiroes_cascaneia.png",
      alt: "Post de evento dos terceirões para passeio ao Cascaneia",
      caption: "Passeio ao Cascaneia", 
      titulo: "Passeio ao Cascaneia",
      ano: "2026",
      categoria: "Passeio dos terceirões",
      width: 1600,
      height: 1063,
      variant: "poster",
    },
  ];

  const siteEventCategories = ["Clube de Ciências", "Passeio dos terceirões"];

  window.SiteEvents = Object.freeze({
    items: siteEvents,
    categories: siteEventCategories,
  });
})();
