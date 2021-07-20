(function () {
  var root = '.popular-links__list-sub-container',
    btn = '.popular-links__btn',
    additionalContent = '.popular-links__list-sub-wrapp'

  $(document).on('click', btn, function (e) {
    e.stopPropagation()
    e.preventDefault()
    console.log('clicked')
    var that = $(this)
    that.toggleClass('active')
    that.closest(root).find(additionalContent).toggleClass('active')
  })

  $(document).click(function (e) {

    if ($(additionalContent).has(e.target).length === 0) {
      $(additionalContent).removeClass('active')
      $(btn).removeClass('active')
    }
  })
})()