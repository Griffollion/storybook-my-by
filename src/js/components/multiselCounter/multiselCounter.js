(function () {

  //Функция скрывающая название выбранных элементов списка и заменяющяя их на
  // счетчик. Вызывается у селектов с классом select2
  function multiselCounter (el) {
    var chosedElsContainer = el.closest('.multisel-count').
      siblings('.select2-container--upd-sel')

    chosedElsContainer.find('.select2-selection__rendered').
      css({ 'opacity': 0 })
    chosedElsContainer.find('.multisel-count__counter').remove()

    var counter = chosedElsContainer.find('.select2-selection__choice').length

    if (counter > 1) {
      chosedElsContainer.find('.select2-selection__rendered').
        after('<div class=\'multisel-count__counter\'>Выбрано: ' + counter +
          '</div>')
    }
    else {
      chosedElsContainer.find('.multisel-count__counter').remove()
      chosedElsContainer.find('.select2-selection__rendered').
        css({ 'opacity': 1 })
    }
  }

  //Сеттаймаут чтобы даже после перезагрузки станицы, если в селекте что-то
  // есть, у нас выводился счетчик.
  setTimeout(function () {
    if ($('.multisel-count option:selected').length > 1) {
      multiselCounter($('select.multisel-count'))
    }
  }, 400)

  $('.multisel-count').on('select2:select', function () {
    multiselCounter($(this))
  })
  $('.multisel-count').on('select2:unselect', function () {
    multiselCounter($(this))
  })
})()