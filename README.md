# algotheme

Shared Algorithmica visual themes and CSS components, extracted from
`algosolltd/algowebsite`.

The package deliberately exposes two areas:

- `theme/` contains design tokens and brand variants.
- `components/` contains the existing website reset, layout, and component
  selectors.

## Install

```sh
npm install @algosolltd/algotheme
```

## Use

Import one self-contained theme first, followed by the matching component
stylesheet:

```css
@import "@algosolltd/algotheme/theme/solutions.css";
@import "@algosolltd/algotheme/components/solutions.css";
```

The available pairs are:

| Area | Theme | Components |
| --- | --- | --- |
| Algorithmica Solutions | `theme/solutions.css` | `components/solutions.css` |
| AI | `theme/ai.css` | `components/ai.css` |
| ALGO | `theme/algo.css` | `components/algo.css` |

All themes inherit the shared primitives from `theme/core.css`. The ALGO theme
also preserves the existing `light-gray`, `white`, and `ice` variants selected
with `data-theme` on the `html` element.

Fonts are bundled: import `theme/fonts.css` to load Inter, Space Grotesk and
JetBrains Mono. The woff2 files live in `assets/fonts/` and are self-hosted, so
they work offline and under a strict CSP (`default-src 'self'`).

## Auth / login module

Reusable Google-only login and landing, framework-agnostic:

- `theme/core.css` + `components/auth.css` (styles: `.alg-auth*`, `.alg-landing*`)
- `templates/login.html` (copy/adapt as the login page)
- `assets/logo.png`, `assets/favicon.ico`
- `client/firebase-auth.js` (Firebase popup → `POST /api/auth/session`)

The host app must expose:

- `GET /api/auth/firebase-config` → Firebase web config (public)
- `POST /api/auth/session` with `{ idToken }` → creates the session

React tools can import `components/auth.css` and reuse the same markup/classes.
Python tools can serve `templates/login.html` and mount `client/firebase-auth.js`
as static assets.

## Development

Run the package-content check before publishing:

```sh
npm run check
```
