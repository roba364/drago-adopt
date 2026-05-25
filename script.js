const state = {
  translations: {},
  lang: localStorage.getItem("drago-lang") || pickLanguage(),
};

const ASSET_VERSION = "20260525-2100";

function pickLanguage() {
  const code = (navigator.language || "en").slice(0, 2).toLowerCase();
  return ["ru", "sr"].includes(code) ? code : "en";
}

async function loadTranslations() {
  try {
    const response = await fetch(`i18n.json?v=${ASSET_VERSION}`);
    state.translations = await response.json();
    applyLanguage(state.lang);
  } catch (error) {
    console.warn("i18n load failed", error);
    applyLanguage("en");
  }
}

function applyLanguage(lang) {
  state.lang = state.translations[lang] ? lang : "en";
  localStorage.setItem("drago-lang", state.lang);
  document.documentElement.lang = state.lang;

  const dict = state.translations[state.lang] || {};
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

/* ────────── HEADER SHADOW ON SCROLL ────────── */
const siteHeader = document.getElementById("siteHeader");
const floatingCta = document.getElementById("floatingCta");

function onScroll() {
  const y = window.scrollY;
  siteHeader.classList.toggle("scrolled", y > 12);
  if (floatingCta) floatingCta.classList.toggle("visible", y > 600);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ────────── REVEAL ON SCROLL ────────── */
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in-view"));
}

/* ────────── HEART BUTTON (decorative) ────────── */
document.querySelectorAll("[data-heart]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    button.classList.toggle("saved");
  });
});

/* ────────── LIGHTBOX ────────── */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".pin[data-full]").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.closest("[data-heart]")) return;
    openLightbox(item.dataset.full);
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

loadTranslations();
