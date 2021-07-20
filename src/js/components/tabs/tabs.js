(function () {
  var clickItem = '.tabs-terms__list-link',
      parentClickItem = '.tabs-terms__list-item',
      hiddenBlockClass = '.tabs-terms__content-inside',
      activeClass = 'active';

  function swithcTabs (
    clickItem, parentClickItem, hiddenBlockClass, activeClass, e) {
    e.preventDefault()
    var ths = clickItem
    var parentClick = ths.parent(parentClickItem)
    var href = ths.attr('href')
    var hiddenBlock = $(href)

    $(parentClickItem + '.' + activeClass).removeClass(activeClass)
    parentClick.addClass(activeClass)
    $(hiddenBlockClass + '.' + activeClass).removeClass(activeClass)
    hiddenBlock.addClass(activeClass)
  }

  $(document).on('click', clickItem, function (e) {
    swithcTabs($(this), parentClickItem, hiddenBlockClass, activeClass, e)
  })
})();

