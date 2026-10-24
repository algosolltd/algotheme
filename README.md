# algotheme

Shared Algorithmica visual themes and CSS components, extracted from
`algosolltd/algowebsite`.

The package exposes several areas:

- `theme/` contains design tokens and brand variants.
- `components/` contains the website reset, layout, app shell and UI
  primitives.
- `templates/` and `client/` contain the optional login/landing module.
- `assets/` bundles the logos, favicon and self-hosted fonts.
- `demo/` contains static previews (`demo/login.html`,
  `demo/components.html`).

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
with `data-theme` on the `html` element. `theme/site.css` is a standalone dark
marketing theme, and `theme/scope.css` exposes the same tokens scoped under
`.alg-theme` to avoid `:root` collisions when embedding.

## App UI

For application screens (dashboards, internal tools) import the shared tokens
plus the UI primitives and the shell:

```css
@import "@algosolltd/algotheme/theme/core.css";
@import "@algosolltd/algotheme/components/ui.css";
@import "@algosolltd/algotheme/components/shell.css";
```

`theme/core.css` already imports `theme/fonts.css`, so the CRM fonts are applied
without any extra import.

`components/ui.css` provides: cards/stat cards, inputs (`.alg-input` including
textarea, select and `.is-invalid` state), buttons, sidebar links, modals and
dialogs (`.alg-modal-*`, `.alg-dialog`), tables (`.alg-table`,
`.alg-table--sticky`, `.alg-table--zebra`, `.alg-table-wrap--scroll`),
pagination, semantic badges (`badge-watch`, `badge-pass`, `badge-good`,
`badge-bad`, `badge-neutral` plus the colour set), banners, toasts, charts and
dark form controls (`.alg-field`, `.alg-check`, `.alg-switch`).

`components/shell.css` provides the app shell (`.alg-app`, `.alg-rail`,
`.alg-topbar`, `.alg-main`), base element styles, dark overrides for Tailwind
utility classes and scrollbars.

See `demo/components.html` in the repository for a static preview of all of the
above.

Fonts are bundled and use the same families as the CRM: Inter (sans), Space
Grotesk (display) and JetBrains Mono (mono). They are loaded automatically by
`theme/core.css`, `theme/site.css` and `theme/scope.css` through
`theme/fonts.css`; no Google Fonts request is made. The woff2 files live in
`assets/fonts/` and are self-hosted, so they work offline and under a strict CSP
(`default-src 'self'`). `components/shell.css` also makes buttons, inputs,
selects and textareas inherit the sans font, so the CRM typography applies to
the whole UI.

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
