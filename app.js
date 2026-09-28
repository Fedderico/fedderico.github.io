// Cambia entre español e inglés y recuerda la elección.
const html = document.documentElement;
const boton = document.getElementById("cambiar-idioma");

function aplicarIdioma(idioma) {
  html.lang = idioma;
  boton.textContent = idioma === "es" ? "EN" : "ES";
  try { localStorage.setItem("idioma", idioma); } catch (e) { /* sin storage */ }
}

let inicial = "es";
try {
  inicial = localStorage.getItem("idioma") || (navigator.language.startsWith("es") ? "es" : "en");
} catch (e) { /* sin storage */ }
aplicarIdioma(inicial);

boton.addEventListener("click", () => aplicarIdioma(html.lang === "es" ? "en" : "es"));
