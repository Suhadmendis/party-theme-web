// Seasonal effects — each effect activates only in its configured month.
// To add a new seasonal effect, call registerSeasonalEffect() before the
// DOM loads, then loadSeasonalEffects() runs them all at DOMContentLoaded.
//
// Example — adding a hearts effect for February:
//   registerSeasonalEffect({
//     month: 2, name: 'hearts', css: '_css/hearts.css',
//     activate() { /* inject HTML */ }
//   });

const SEASONAL_EFFECTS = [];

function registerSeasonalEffect(config) {
  SEASONAL_EFFECTS.push(config);
}

function loadSeasonalEffects() {
  const month = new Date().getMonth() + 1; // 1 = Jan, 12 = Dec
  SEASONAL_EFFECTS.forEach(function (effect) {
    if (effect.month === month) {
      if (effect.css) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = effect.css;
        document.head.appendChild(link);
      }
      if (effect.activate) effect.activate();
    }
  });
}

// Snow effect — December only
registerSeasonalEffect({
  month: 12,
  name: 'snow',
  css: '_css/snowflakes.css',
  activate: function () {
    var container = document.createElement('div');
    container.className = 'snowflakes';
    container.setAttribute('aria-hidden', 'true');
    ['❄', '❅', '❆', '❄', '❅', '❆'].forEach(function (flake) {
      var div = document.createElement('div');
      div.className = 'snowflake';
      div.textContent = flake;
      container.appendChild(div);
    });
    document.body.appendChild(container);
  }
});

document.addEventListener('DOMContentLoaded', loadSeasonalEffects);
