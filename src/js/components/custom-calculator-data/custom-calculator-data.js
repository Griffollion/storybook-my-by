(function () {
  $(document).on('click', '.custom-calculator-data__head', function () {
    $(this).toggleClass('opened')
    $(this).
      closest('.custom-calculator-data__item').
      find('.custom-calculator-data__body').
      collapse('toggle')
  })
})()