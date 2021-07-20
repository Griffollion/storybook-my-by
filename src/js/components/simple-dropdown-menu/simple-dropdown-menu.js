(function () {
  const root = '[data-simple-dropdown-menu="root"]'
  const mainBtn = '[data-simple-dropdown-menu="btn"]'
  const mainMenu = '[data-simple-dropdown-menu="menu"]'
  const extendedRoot = '[data-simple-dropdown-menu="extended-item"]'
  const extendedBtn = '[data-simple-dropdown-menu="extended-toggler"]'
  const extendedMenu = '[data-simple-dropdown-menu="extended-menu"]'

  function toggleMenu (tgt, root, menu) {
    var rt = tgt.closest(root)
    rt.toggleClass('active')
    rt.find(menu).stop().slideToggle('fast')
  }

  $(document).on('click', mainBtn, function () {
    toggleMenu($(this), root, mainMenu)
  })
  $(document).on('click', extendedBtn, function () {
    toggleMenu($(this), extendedRoot, extendedMenu)
  })

  function hideMenu (event) {
    let dropdown = $(root)
    let dropdownBtn = $(mainBtn)
    let menu = $(mainMenu)
    if (!dropdownBtn.is(event.target) &&
      dropdownBtn.has(event.target).length === 0 &&
      !dropdown.is(event.target) &&
      !dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
      dropdown.removeClass('active')
      $(menu).stop().slideUp('fast')
    }
  }

  /*Закрытие выпадающего блока при клике вне его*/
  $(document).on('click', function (event) {
    hideMenu(event)
  })

  /*Закрытие выпадающего блока при клике вне его end*/
})()