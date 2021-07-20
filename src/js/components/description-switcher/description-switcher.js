(function () {
  var btn = '[data-js="switch-description"]',
      container = '.description-switcher',
      content = '.description-switcher__content';

  function toggleDescription(btn, container) {
    btn.closest(container).toggleClass('active')
    btn.closest(container).find(content).slideToggle();
  }

  $(document).on('click', btn, function () {
    toggleDescription($(this), container)
  })
})();