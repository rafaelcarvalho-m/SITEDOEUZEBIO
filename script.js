window.SiteUI.pointerGlow(".hero");
window.SiteUI.tiltCards(".content-card");

const navDropdown = document.querySelector(".nav-dropdown");

navDropdown?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navDropdown.open = false;
  });
});

document.addEventListener("click", (event) => {
  if (navDropdown?.open && !navDropdown.contains(event.target)) {
    navDropdown.open = false;
  }
});

document.querySelectorAll("[data-events-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".events-track");
  // Todos os cards presentes no HTML entram no carrossel; não há limite fixo.
  const slides = [...carousel.querySelectorAll("[data-event-slide]")];
  const previousButton = carousel.querySelector("[data-events-previous]");
  const nextButton = carousel.querySelector("[data-events-next]");
  const position = carousel.querySelector("[data-events-position]");

  if (!track || !slides.length || !previousButton || !nextButton || !position) {
    return;
  }

  let currentSlide = 0;
  const hasMultipleSlides = slides.length > 1;

  const showSlide = (index) => {
    currentSlide = Math.max(0, Math.min(index, slides.length - 1));
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    position.textContent = `${currentSlide + 1} / ${slides.length}`;
    previousButton.disabled = !hasMultipleSlides || currentSlide === 0;
    nextButton.disabled =
      !hasMultipleSlides || currentSlide === slides.length - 1;

    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== currentSlide));
      slide.toggleAttribute("inert", slideIndex !== currentSlide);
    });
  };

  previousButton.addEventListener("click", () => showSlide(currentSlide - 1));
  nextButton.addEventListener("click", () => showSlide(currentSlide + 1));
  showSlide(0);
});

navDropdown?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navDropdown.open = false;
    navDropdown.querySelector("summary")?.focus();
  }
});

const weatherTemperature = document.querySelector("[data-weather-temperature]");
const weatherCondition = document.querySelector("[data-weather-condition]");
const weatherDays = document.querySelector("[data-weather-days]");
const weatherIcon = document.querySelector(".weather-current > i");

const weatherDetails = (code) => {
  if (code === 0) return ["Céu limpo", "fa-sun"];
  if ([1, 2, 3].includes(code)) return ["Parcialmente nublado", "fa-cloud-sun"];
  if ([45, 48].includes(code)) return ["Neblina", "fa-smog"];
  if ([51, 53, 55, 56, 57].includes(code)) return ["Garoa", "fa-cloud-rain"];
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code))
    return ["Chuva", "fa-cloud-showers-heavy"];
  if ([71, 73, 75, 77, 85, 86].includes(code)) return ["Neve", "fa-snowflake"];
  if ([95, 96, 99].includes(code)) return ["Trovoadas", "fa-cloud-bolt"];
  return ["Condições variáveis", "fa-cloud"];
};

if (weatherTemperature && weatherCondition && weatherDays && weatherIcon) {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-25.503241&longitude=-49.253561&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&forecast_days=3",
  )
    .then((response) => {
      if (!response.ok) throw new Error("Previsão indisponível");
      return response.json();
    })
    .then((data) => {
      const [condition, icon] = weatherDetails(data.current.weather_code);

      weatherTemperature.textContent = `${Math.round(data.current.temperature_2m)}°C`;
      weatherCondition.textContent = condition;
      weatherIcon.className = `fa-solid ${icon}`;

      weatherDays.innerHTML = data.daily.time
        .map((date, index) => {
          const [dayCondition, dayIcon] = weatherDetails(
            data.daily.weather_code[index],
          );
          const label = new Intl.DateTimeFormat("pt-BR", {
            weekday: "short",
          }).format(new Date(`${date}T12:00:00`));

          return `
            <div class="weather-day">
              <span>${label}</span>
              <i class="fa-solid ${dayIcon}" aria-label="${dayCondition}"></i>
              <strong>${Math.round(data.daily.temperature_2m_max[index])}°</strong>
              <small>${Math.round(data.daily.temperature_2m_min[index])}°</small>
            </div>
          `;
        })
        .join("");
    })
    .catch(() => {
      weatherTemperature.textContent = "--°C";
      weatherCondition.textContent = "Previsão indisponível no momento.";
      weatherDays.textContent = "Tente novamente mais tarde.";
    });
}
