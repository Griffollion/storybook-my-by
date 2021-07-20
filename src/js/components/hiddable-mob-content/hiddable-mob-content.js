(function () {
  const root = '[data-hiddable-mob-content="root"]'
  const text = '[data-hiddable-mob-content="text"]'
  const btn = '[data-hiddable-mob-content="btn"]'

  $(document).on('click', btn, function () {
    var textContainer = $(this).closest(root).find(text)
    var height = textContainer.css({ 'height': 'auto' }).height()

    $(this).toggleClass('toggled')
    if ($(this).hasClass('toggled')) {
      textContainer.css({ 'height': '44px' })
      textContainer.animate({
        height: height,
      }, 250)
    }
    else {
      textContainer.animate({
        height: '44px',
      }, 250)
    }
  })
})()