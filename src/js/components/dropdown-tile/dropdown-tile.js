// (function () {
//   var moreParamsBtn = '[data-js=\'more-params\']'
//   var moreParamsContainer = '.deposits-additional-terms'
//   var paramsText = '.deposits-filter__params-text'
//   var checkedAdditionalTerms = 0
//   var additionalTermsCb = '.deposits-additional-terms__item
// .custom-checkbox.jq - checkbox '  function changeInnertext (el,
// checkedItemsCount) { if (checkedItemsCount == 0) { $(el).text('+ Ещё
// параметры') } else { $(el).text('Выбрано: ' + checkedItemsCount) } }
// function changeTermsCount (el) { if (el) { checkedAdditionalTerms++
// changeInnertext(paramsText, checkedAdditionalTerms) } else {
// checkedAdditionalTerms-- changeInnertext(paramsText, checkedAdditionalTerms)
// } }  $(additionalTermsCb).each(function () { if
// ($(this).hasClass('checked')) { checkedAdditionalTerms++
// changeInnertext(paramsText, checkedAdditionalTerms) } })
// $(document).on('click', moreParamsBtn, function () {
// $(this).toggleClass('active')
// $(this).find(moreParamsContainer).toggleClass('active')
// changeInnertext(paramsText, checkedAdditionalTerms) }).on('click',
// moreParamsContainer, function (e) { e.stopPropagation() }).on('click',
// '.deposits-additional-terms__item .custom-checkbox label', function () { var
// isChecked = $(this).siblings('.jq-checkbox').hasClass('checked')
// changeTermsCount(isChecked) }).on('click', '.deposits-additional-terms__item
// .custom-checkbox .jq-checkbox', function () { var isChecked =
// $(this).hasClass('checked') changeTermsCount(isChecked) }) //
// $(document).mouseup(function (e) { var additionalTerms =
// $('.deposits-filter__item--more-params') if (!additionalTerms.is(e.target)
// && additionalTerms.has(e.target).length === 0) {
// additionalTerms.find('.deposits-additional-terms').removeClass('active') }
// }) }) ()

(function () {
  var toggleBtn = '[data-dropdown="btn"]'
  var container = '[data-dropdown="container"]'
  var content = '[data-dropdown="content"]'
  var text = '[data-dropdown="text"]'
  var isOpen = false

  function closeDropdownTile (tgt) {
    $(tgt).removeClass('active')
    isOpen = false
  }

  function toggleDropdownTile (el, root, tgt) {
    el.closest(root).find(tgt).toggleClass('active')
    isOpen = !isOpen
  }

  function checkSelectedInputs (el, root, container) {
    var count = 0
    var inputs = el.closest(root).find(container).find('input')
    inputs.each(function () {
      $(this).prop('checked') ? count++ : ''
    })
    return count
  }

  function changeBtnText (el, root, tgt, itemsCount) {
    var textContainer = el.closest(root).find(tgt),
      defaultText = textContainer.attr('data-dropdown-text')

    if (itemsCount > 0) {
      textContainer.text('Выбрано элементов: ' + itemsCount)
    }
    else {
      textContainer.text(defaultText)
    }
  }

  $(document).on('click', toggleBtn, function () {
    toggleDropdownTile($(this), container, content)
  }).on('click', container, function () {
    var itemsCount = checkSelectedInputs($(this), container, content)
    changeBtnText($(this), container, text, itemsCount)
  }).click(function (e) {
    if (!$(container).is(e.target)
      && $(container).has(e.target).length === 0 && isOpen) {
      closeDropdownTile(content)
    }
  }).on('keyup', function (e) {
    if (e.keyCode == 27) {
      closeDropdownTile(content)
    }
  })
})()