# Seasonal Effects

Seasonal effects are managed by `_js/seasonal.js` using Vue.js components, following the same `new Vue({ el: '#...' })` pattern used throughout the project. Each effect is a registered Vue component that activates only in its configured month. CSS and HTML are injected only when needed, so no seasonal resources load during other months.

## Architecture

- Each seasonal effect is a **Vue component** registered with `Vue.component()`.
- A dedicated Vue instance mounts to `<div id="seasonal-effects">` in `index.html`.
- The component's `data()` checks `new Date().getMonth()` to determine whether it is active.
- If active, the component's `created()` hook dynamically injects the effect's CSS `<link>` into `<head>`.
- The component's `template` uses `v-if="active"` so no DOM nodes are created outside the active month.

## Current effects

| Effect | Month | Component | CSS file | Mount point |
|--------|-------|-----------|----------|-------------|
| Snow | 12 (December) | `<snow-effect>` | `_css/snowflakes.css` | `index.html` |

## Adding a new seasonal effect

**Step 1** — Register a Vue component in `_js/seasonal.js`:

```js
Vue.component('hearts-effect', {
  data: function () {
    return {
      active: new Date().getMonth() === 1  // February
    };
  },
  created: function () {
    if (this.active) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '_css/hearts.css';
      document.head.appendChild(link);
    }
  },
  template: '<div v-if="active" class="hearts" aria-hidden="true"></div>'
});
```

**Step 2** — Add the component tag to the `#seasonal-effects` Vue instance template in `seasonal.js`:

```js
new Vue({
  el: '#seasonal-effects',
  template: `
    <div>
      <snow-effect></snow-effect>
      <hearts-effect></hearts-effect>
    </div>
  `
});
```

**Step 3** — Create the matching CSS file (e.g. `_css/hearts.css`).

No changes to any HTML file are needed — the `<div id="seasonal-effects">` mount point in `index.html` handles all effects.

## Snowflake CSS (`_css/snowflakes.css`)

Defines `.snowflakes` (fixed full-screen container, `z-index: 1000`, pointer-events none) and `.snowflake` (falling animation via `@keyframes fall`). Six snowflakes are spaced horizontally using `:nth-child` selectors with varying `animation-duration` values (8 s – 15 s).
