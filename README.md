# fedderico.github.io

Portfolio personal de Federico Fracchia (AI Automation Engineer), en español e inglés.

Sitio: https://fedderico.github.io

## Cómo funciona el CI/CD

```
push a main ──► validar ──────────────────────────► publicar
                ├─ html-validate (HTML correcto)     └─ GitHub Pages
                ├─ lychee (enlaces internos)
                └─ sin texto de relleno
```

- En cada **pull request** solo corre la validación: si algo falla, no se mergea roto.
- En cada **push a `main`** valida y, si todo pasa, publica.
- El paso de publicación solo copia los archivos del sitio (`index.html`, `estilos.css`, `app.js`), así nada del repo se filtra al sitio público.

## Decisiones

- **HTML + CSS + JS sin framework**: es un sitio de una página; un framework agregaría build y dependencias sin aportar nada.
- **GitHub Actions + Pages** en vez de la rama `gh-pages`: la publicación depende de que la validación pase.
- **Bilingüe con `data-lang`**: un solo archivo, el botón cambia `lang` en `<html>` y el CSS oculta el otro idioma.
- **Sin teléfono en el sitio**: dato personal que no hace falta publicar; el contacto es por mail.

## Correrlo local

```bash
npx html-validate "*.html"
npx serve .
```
