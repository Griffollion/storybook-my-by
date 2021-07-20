(function () {
  var root = '[data-accordion="root"]',
    switchBtn = '[data-accordion="switch"]',
    switchTarget = '[data-accordion="switch-target"]'

  $(document).on('click', switchBtn, function () {
    var that = $(this),
      target = that.closest(root).find(switchTarget)

    that.toggleClass('toggled')
    target.stop().slideToggle('medium',function () {
      target.toggleClass('active')
    })
  })
})()