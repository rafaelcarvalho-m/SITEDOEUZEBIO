const fs = require("node:fs");

async function main() {
  const tabs = await (await fetch("http://127.0.0.1:9223/json")).json();
  const target = tabs.find((tab) => tab.type === "page");
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  let nextId = 0;
  const pending = new Map();
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
  });

  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const id = ++nextId;
      pending.set(id, resolve);
      socket.send(JSON.stringify({ id, method, params }));
    });
  const evaluate = async (expression) => {
    const response = await send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (response.error) throw new Error(JSON.stringify(response.error));
    if (response.result?.exceptionDetails) {
      throw new Error(response.result.exceptionDetails.text);
    }
    return response.result?.result?.value;
  };
  const pause = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
  const base = "file:///C:/Users/rafae/OneDrive/Desktop/SITEDOEUZEBIO/";
  const sizes = [
    [390, 844],
    [768, 900],
    [1440, 1000],
    [1920, 1080],
    [3840, 2160],
  ];

  for (const [width, height] of sizes) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600,
    });
    await send("Page.navigate", { url: `${base}eventos/eventos.html` });
    await pause(700);
    const metrics = await evaluate(`(() => {
      const rect = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return null;
        const box = element.getBoundingClientRect();
        return { left: Math.round(box.left), right: Math.round(box.right), width: Math.round(box.width) };
      };
      return {
        viewport: innerWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
        h1Count: document.querySelectorAll("h1").length,
        cards: document.querySelectorAll(".events-page-card").length,
        loadedImages: [...document.querySelectorAll(".events-page-card img")].map((image) => image.complete && image.naturalWidth > 0),
        searchVisible: !document.querySelector("[data-events-search-wrap]").hidden,
        categoryVisible: !document.querySelector("[data-category-filters]").hidden,
        yearVisible: !document.querySelector("[data-year-filters]").hidden,
        heading: rect(".events-page-heading"),
        search: rect(".events-tools"),
        grid: rect(".events-page-grid"),
        firstCard: rect(".events-page-card")
      };
    })()`);
    console.log(`EVENTS ${width}: ${JSON.stringify(metrics)}`);

    if (width === 390) {
      const screenshot = await send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
        fromSurface: true,
      });
      fs.writeFileSync(
        "C:/Users/rafae/AppData/Local/Temp/sitedoeuzebio-events-390-top.png",
        Buffer.from(screenshot.result.data, "base64"),
      );
      console.log(
        "SEARCH " +
          JSON.stringify(
            await evaluate(`(() => {
              const input = document.querySelector("[data-events-search]");
              input.value = "no-event-matches";
              input.dispatchEvent(new Event("input", { bubbles: true }));
              return {
                emptyVisible: !document.querySelector("[data-events-empty]").hidden,
                visibleCards: [...document.querySelectorAll(".events-page-card")].filter((card) => !card.hidden).length
              };
            })()`),
          ),
      );
      console.log(
        "LIGHTBOX OPEN " +
          JSON.stringify(
            await evaluate(`(() => {
              const input = document.querySelector("[data-events-search]");
              input.value = "";
              input.dispatchEvent(new Event("input", { bubbles: true }));
              document.querySelector(".events-page-image-link").click();
              return {
                open: document.querySelector(".site-lightbox").open,
                count: document.querySelector(".site-lightbox-count").textContent,
                imageAlt: document.querySelector(".site-lightbox-image").alt
              };
            })()`),
          ),
      );
      console.log(
        "LIGHTBOX NAV " +
          JSON.stringify(
            await evaluate(`(() => {
              document.querySelector(".site-lightbox-next").click();
              const afterArrow = document.querySelector(".site-lightbox-count").textContent;
              document.querySelector(".site-lightbox").dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }));
              const afterKeyboard = document.querySelector(".site-lightbox-count").textContent;
              document.querySelector(".site-lightbox").close();
              return { afterArrow, afterKeyboard, closed: !document.querySelector(".site-lightbox").open };
            })()`),
          ),
      );
    }
  }

  await send("Page.navigate", { url: `${base}index.html` });
  await pause(900);
  for (const [width, height] of sizes) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600,
    });
    const metrics = await evaluate(`(() => {
      document.querySelector("#eventos").scrollIntoView();
      return {
        viewport: innerWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        cardCount: document.querySelectorAll("[data-events-home-grid] .event-showcase-card").length,
        allCardsLeadToPage: [...document.querySelectorAll("[data-events-home-grid] .event-showcase-card")].every((card) => card.href.endsWith("/eventos/eventos.html")),
        gridWidth: Math.round(document.querySelector("[data-events-home-grid]").getBoundingClientRect().width)
      };
    })()`);
    console.log(`HOME ${width}: ${JSON.stringify(metrics)}`);
    if (width === 390) {
      const screenshot = await send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
        fromSurface: true,
      });
      fs.writeFileSync(
        "C:/Users/rafae/AppData/Local/Temp/sitedoeuzebio-home-events-390.png",
        Buffer.from(screenshot.result.data, "base64"),
      );
    }
  }

  socket.close();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
