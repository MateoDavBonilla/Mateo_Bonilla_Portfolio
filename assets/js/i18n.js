document.addEventListener("DOMContentLoaded", async () => {
    // Idioma por defecto: inglés
    const savedLang = localStorage.getItem("preferredLang") || "en";

    await loadLanguage(savedLang);
    createLangButton();
});

async function loadLanguage(lang) {
    try {
        const res = await fetch(`/assets/locales/${lang}/translation.json`);
        const translations = await res.json();

        await i18next.init({
            lng: lang,
            debug: false,
            resources: {
                [lang]: { translation: translations },
            },
        });

        updateContent();
        console.log(`✅ Idioma cargado: ${lang}`);
    } catch (err) {
        console.error("❌ Error cargando idioma:", err);
    }
}

function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = i18next.t(el.getAttribute("data-i18n"));
    });
}

function createLangButton() {
    const toggle = document.createElement("button");
    toggle.id = "lang-toggle";
    toggle.className = "btn btn-outline-danger";

    // Mostrar el idioma opuesto al actual
    toggle.textContent = i18next.language === "en" ? "ES" : "EN";
    document.body.appendChild(toggle);

    toggle.addEventListener("click", async () => {
        const newLang = i18next.language === "en" ? "es" : "en";
        await loadLanguage(newLang);
        toggle.textContent = newLang === "en" ? "ES" : "EN";
        localStorage.setItem("preferredLang", newLang);
    });
}
