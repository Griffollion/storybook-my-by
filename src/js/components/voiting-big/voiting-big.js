;(function () {

  var bool = true
  $(document).on('click', '.voiting-big__btn', function () {

    if (bool) {
      $(this).addClass('active')
      $('.voiting-big__btn').not($(this)).addClass('deactive')

      var min_icon = $(this).find('.voiting-big__icon').clone()
      min_icon.addClass('voiting-big__icon--min')
      $(this).find('.voiting-big__icon-wrap').append(min_icon)

      bool = false

      min_icon.animate({
        opacity: '0',
        top: '-70',
      }, 500, 'linear', function () {
        $(this).remove()
      })
    }

  })
})()
