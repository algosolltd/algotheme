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

The CSS references Inter, Space Grotesk, and JetBrains Mono but does not bundle
font files. Consumers remain responsible for loading those fonts.

## Development

Run the package-content check before publishing:

```sh
npm run check
```
