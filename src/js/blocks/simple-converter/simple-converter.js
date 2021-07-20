(function () {
  var root = '[data-simple-converter="root"]'
  var closeBtn = '[data-simple-converter="close-btn"]'
  var targetToShow = 'data-simple-converter-target'
  var showBtn = '[data-simple-converter="show-btn"]'

  $(document).on('click', showBtn, function () {
    var tgt = $(this).attr(targetToShow)
    $(tgt).addClass('active')
  })
  $(document).on('click', closeBtn, function () {
    $(this).closest(root).removeClass('active')
  })
})()