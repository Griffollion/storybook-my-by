var isSendRequest = false

function delete_ok_mass () {
  $('.online-request-form__form').html(
    '<div class="online-request-form__form-content">' +
    '<div class="online-request-form__form-success">' +
    '<img src="/files_content/img/icons/thank-icon.svg" alt="иконка с галкой" />' +
    '<div class="online-request-form__form-success-text">' +
    'Ваша заявка отправлена! ' +
    'Сотрудник банка свяжется с вами в рабочее время' +
    '</div>' +
    '</div>' +
    '</div>'
  )
}

function validatePhone (phone) {
  var regEx = /^(29|25|44|33)-(\d{3})-(\d{2})-(\d{2})$/gi
  if (regEx.test(phone)) {
    return true
  }
  else {
    return false
  }
}

function selectErrorText (fieldName) {
  var customErrorText = $(`[name="${fieldName}"]`).attr('data-error')
  if (fieldName == 'Request[tel]') {
    return 'Необходимо корректно заполнить телефон. Доступные коды 29, 25, 44, 33'
  }
  else {
    return 'Необходимо заполнить «' + customErrorText + '»'
  }

}

function clearErrors (selector, errorTextContainer) {
  $(selector).each(function () {
    $(this).removeClass('error')
    $(this).find(errorTextContainer).text('')
  })
}

function preChkeckForm (formId) {
  var formIdSelector = '#' + formId
  var formData = $(formIdSelector + ' :input').serializeArray()
  var emptyVal = false
  var emptyFields = []
  var root = '.online-request-form__form-row'
  var errorTextContainer = '.online-request-form__form-error-text'

  clearErrors(root, errorTextContainer)

  formData.forEach(function (item) {
    if (empty(item['value'])) {
      emptyFields.push(item)
      emptyVal = true
    }
    if (item.name == 'Request[tel]' &&
      !validatePhone($(formIdSelector + ' [name = "Request[tel]"]').val())) {
      emptyFields.push(item)
      emptyVal = true
    }
  })
  console.log(emptyVal)
  if (emptyVal == true) {
    emptyFields.forEach(function (field) {
      $(formIdSelector + ' [name="' + field.name + '"]').
        closest(root).
        addClass('error')
      $(formIdSelector + ' [name="' + field.name + '"]').
        closest(root).
        find(errorTextContainer).
        text(selectErrorText(field.name))
    })
  }
  else {
    $.ajax({
      type: 'POST',
      url: '/request-yii2/pre-check-mass-form',
      cache: !1,
      async: false,
      data: formData,
      success: function (object) {
        result = $.parseJSON(object)

        if (isSendRequest && result.isBanks == true) {
          var form = formData.slice(0)
          $.ajax({
            type: 'POST',
            url: '/request-yii2/send',
            cache: !1,
            async: false,
            data: $.param(form),
            success: function (a) {
              $('#onl_st_sidebar').append(a)
            },
          })
        }
        else {
          $('.online-request-bank-result').html(result.content)
        }
      },
    })
  }
}

$(document).ready(function () {

  $(document).on('click', '.request-form', function () {
    isSendRequest = true
    var formId = $(this).closest('form').attr('id')
    preChkeckForm(formId)
  })

  $(document).on('click', '.pre-check-form', function () {
    isSendRequest = false
    var formId = $(this).closest('form').attr('id')
    preChkeckForm(formId)
  })

})