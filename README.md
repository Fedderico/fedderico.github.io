# fedderico.github.io

Portfolio de Fede Fracchia: automatización, integraciones con ERP y agentes de IA. En español e inglés, con modo oscuro.

Sitio: https://fedderico.github.io

## Cómo funciona el CI/CD

```
push a main ──► Revisar (CI) ──────────► Publicar (CD)
                html-validate             GitHub Pages
                (si falla, se frena acá)
```

- En cada **push a `main`** valida el HTML y, si pasa, publica.
- En cada **pull request** solo valida: se ve si algo rompe antes de mergear.
- Se publica solo `index.html`; el README y la configuración no quedan en el sitio.

El historial de Actions muestra un ejemplo real: el primer deploy falló porque un `div` tenía `aria-label` sin un rol que lo permita (los lectores de pantalla lo ignoran). El CI frenó la publicación; se corrigió con `role="group"` y el siguiente push pasó.

## Decisiones

- **Un solo `index.html`, sin framework ni build**: es una página; un framework sumaría dependencias sin aportar nada.
- **GitHub Actions + Pages**: la web se publica solo si la validación pasa.
- **Traducción con un diccionario en JS**: el HTML queda en español y el botón reemplaza cada texto por su versión en inglés.
- **Fondo animado que respeta `prefers-reduced-motion`**: si el sistema pide menos movimiento, la animación se apaga.

## Correrlo local

```bash
npx html-validate "**/*.html"
npx serve .
```
