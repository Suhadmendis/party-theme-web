# Seasonal Effects

Seasonal effects are managed by `_js/seasonal.js`. The module uses a registry pattern — effects are registered with a target month and only activate when the user's local date matches that month. CSS and HTML are injected dynamically, so no seasonal resources are loaded during other months.

## How it works

1. `registerSeasonalEffect(config)` adds an effect to the registry.
2. `loadSeasonalEffects()` runs on `DOMContentLoaded`, checks `new Date().getMonth() + 1`, and activates any effects whose `month` matches.
3. If an effect has a `css` path, a `<link>` element is injected into `<head>` at runtime.
4. The effect's `activate()` function is called to inject any required HTML into the page.

## Current effects

| Effect | Month | CSS file | Pages |
|--------|-------|----------|-------|
| Snow | 12 (December) | `_css/snowflakes.css` | `index.html` |

## Adding a new seasonal effect

Add a `registerSeasonalEffect()` call in `_js/seasonal.js` before the `DOMContentLoaded` listener:

```js
registerSeasonalEffect({
  month: 2,           // February
  name: 'hearts',
  css: '_css/hearts.css',   // optional — omit if no dedicated CSS needed
  activate: function () {
    // inject any HTML the effect needs
    var el = document.createElement('div');
    el.className = 'hearts-container';
    document.body.appendChild(el);
  }
});
```

Then include `_js/seasonal.js` on whichever pages should show the effect, and create the matching CSS file.

## Snowflake CSS (`_css/snowflakes.css`)

Defines `.snowflakes` (fixed full-screen container, `z-index: 1000`, pointer-events none) and `.snowflake` (falling animation via `@keyframes fall`). Six snowflakes are spaced horizontally using `:nth-child` selectors with varying `animation-duration` values (8 s – 15 s).
