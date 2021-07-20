$(document).ready(function () {
  //Функиця разбивающая число на разряды
  function divided (str) {
    return String(str).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
  }

  function manualInput (el) {
    var amount = Number(removeSpaces(el.val()))
    if (isNaN(amount)) {
      amount = 0
    }

    if (el.siblings('.fragmentation-slider').length > 0) {
      el.siblings('.fragmentation-slider').slider('setValue', amount) //Подставляем
      // значение
      // в
      // слайдер?
      // если
      // он
      // существует.
      // Для
      // синхронизации
      // значений
      // при изменении ползунком/печатью
    }

    el.val(divided(amount))
  }

  $('.fragmentation-input').each(function (index, element) {

    if (!empty($(this).val())) {
      manualInput($(this))
    }
  })

  $(document)
    //Функция позволяющая вводить только цифры в текстовые инпуты
    .on('keydown', '.numeric', function (event) {
      if (event.shiftKey) {
        return event.preventDefault()
      }
      // Разрешаем: Enter
      if ((event.keyCode === 13)) {
        event.preventDefault()
        return true
      }
      else if (
        // Разрешаем: ","
        event.keyCode === 188 ||
        // Разрешаем: backspace, delete, tab и escape
        event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 ||
        event.keyCode === 27 ||
        // Разрешаем: Ctrl+A
        (event.keyCode === 65 && event.ctrlKey === true) ||
        // Разрешаем: home, end, влево, вправо
        (event.keyCode >= 35 && event.keyCode <= 39)) {
        // Ничего не делаем
        return true
      }
      else {
        // Убеждаемся, что это цифра, и останавливаем событие keypress
        if ((event.keyCode < 48 || event.keyCode > 57) &&
          (event.keyCode < 96 || event.keyCode > 105)) {
          event.preventDefault()
        }
      }
    })

    //Ввод данных руками
    .on('keyup', '.fragmentation-input', function () {
      manualInput($(this))
    }).on('focusout', '.fragmentation-input', function () {
    manualInput($(this))
  })

    //Ввод данных слайдером
    .on('slideStop', '.fragmentation-slider', function (slideEvt) {
      var value = slideEvt.type === 'change'
        ? slideEvt.value.newValue
        : slideEvt.value
      $(this).siblings('.fragmentation-input').val(divided(value))
    })
})