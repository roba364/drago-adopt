const state = {
  translations: {},
  lang: localStorage.getItem("drago-lang") || pickLanguage()
};

function pickLanguage() {
  const code = (navigator.language || "en").slice(0, 2).toLowerCase();
  return ["ru", "sr"].includes(code) ? code : "en";
}

async function loadTranslations() {
  const response = await fetch("i18n.json");
  state.translations = await response.json();
  applyLanguage(state.lang);
}

function applyLanguage(lang) {
  state.lang = state.translations[lang] ? lang : "en";
  localStorage.setItem("drago-lang", state.lang);
  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = state.translations[state.lang][key] || key;
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.dataset.full;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  });
});

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  lightboxImg.src = "";
}

loadTranslations().catch(() => applyLanguage("en"));
