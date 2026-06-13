// Seasonal effects — each effect is a Vue component, activated by month.
// To add a new seasonal effect:
//   1. Register a Vue component below (e.g. Vue.component('hearts-effect', { ... }))
//   2. Add <your-effect-component></your-effect-component> to the template
//      of the #seasonal-effects Vue instance at the bottom of this file.

// Snow effect — active only in December (month index 11)
Vue.component('snow-effect', {
  data: function () {
    return {
      active: new Date().getMonth() === 11,
      flakes: ['❄', '❅', '❆', '❄', '❅', '❆']
    };
  },
  created: function () {
    if (this.active) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '_css/snowflakes.css';
      document.head.appendChild(link);
    }
  },
  template: `
    <div v-if="active" class="snowflakes" aria-hidden="true">
      <div v-for="flake in flakes" class="snowflake">{{ flake }}</div>
    </div>
  `
});

// Mount a dedicated Vue instance to manage all seasonal effects.
// This follows the same new Vue({ el: '#...' }) pattern used on every page.
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('seasonal-effects');
  if (!el) return;
  new Vue({
    el: '#seasonal-effects',
    template: `
      <div>
        <snow-effect></snow-effect>
      </div>
    `
  });
});
