(function () {
  var root = '[data-currency-detailed-change-card="root"]'
  var target = '[data-currency-detailed-change-card="target-to-switch"]'
  var switcher = '[data-currency-detailed-change-card="switcher"]'

  $(document).on('click', switcher, function () {
    var container = $(this).closest(root)
    container.find(target).stop().slideToggle('medium')
    container.toggleClass('toggled')
  })
})()