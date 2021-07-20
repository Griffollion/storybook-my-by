(function () {
  const root = '[data-filter-sticky-container="root"]'
  const toggleBtn = '[data-filter-sticky-container="toggle-btn"]'
  const headText = '[data-filter-sticky-container="head-text"]'
  const icon = '[data-filter-sticky-container="icon"]'
  const content = '[data-filter-sticky-container="content"]'

  //Сохраняем значения фильтра при загрузке
  if ($(root).length > 0) {
    const inputs = $(root).find('input')
    var initialFilterParams = []
    inputs.each(function () {
      initialFilterParams.push(
        { checked: $(this).prop('checked'), val: $(this).val() })
    })
  }

  function hasDifferencies (initialParams, currentValue) {
    let noCheckDifference = initialParams.checked ==
      $(currentValue).prop('checked')
    let noValueDifference = initialParams.val == $(currentValue).val()

    if (noCheckDifference && noValueDifference) {
      return false
    }

    return true
  }

  function getInputparamsAfterClick (tgt) {
    const inputs = tgt.find('input')
    return inputs
  }

  function toggleContent (root) {
    root.toggleClass('active')
    root.find(content).slideToggle()
  }

  $(document).on('click', toggleBtn, function (e) {
    const mainContainer = $(this).closest(root)
    toggleContent(mainContainer)

    //Проверяем изменилось ли хоть какое-то значение в инпутах фильтра
    if ($(root).length > 0) {
      let filterParamsAfterClick = getInputparamsAfterClick(mainContainer)
      let changes = []
      let diffCount = 0

      for (let i = 0; i < filterParamsAfterClick.length; i++) {
        changes.push(
          hasDifferencies(initialFilterParams[i], filterParamsAfterClick[i]))
      }

      changes.forEach(item => {
        item ? diffCount++ : null
      })

      //Если есть изменения в фильтре, добавляем метку на иконку фильтра
      diffCount > 0 ? $(icon).addClass('tagged') : $(icon).removeClass('tagged')
    }
  })

  //Надлюдатель для добавления класса, когда фильтр становится залипающим
  const observeFilterContainer = () => {
    if (document.querySelector(root)) {
      const stickyEl = document.querySelector(root)
      const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle('sticky', e.intersectionRatio < 1),
        {
          threshold: [1],
        },
      )

      observer.observe(stickyEl)
    }
  }

  observeFilterContainer()
})()