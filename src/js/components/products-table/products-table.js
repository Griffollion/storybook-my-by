(function () {
  var rootItem = 'products-table__body-item',
    additionalContentContainer = '.products-table__additional-content',
    showBtn = '[data-handler=\'show-additional-content\']',
    closeBtn = '[data-handler=\'close-additional-content\']',
    toggleBtn = '[data-handler=\'toggle-additional-content\']'

  function getRoot (tgt) {
    var root = tgt.hasClass(rootItem) ? tgt : tgt.closest('.' + rootItem)
    return root
  }

  function showAdditionalContent (root) {
    var additionalContent = root.find(additionalContentContainer)

    if (root.hasClass('mob')) {
      $('body').addClass('blocked')
    }
    else if (root.hasClass('desk')) {
      additionalContent.stop().slideDown('medium')
    }

    root.addClass('active')
    additionalContent.addClass('active')
  }

  function closeAdditionalContent (root) {
    var additionalContent = root.find(additionalContentContainer)

    if (root.hasClass('mob')) {
      $('body').removeClass('blocked')
    }
    else if (root.hasClass('desk')) {
      additionalContent.stop().slideUp('medium')
    }

    root.removeClass('active')
    additionalContent.removeClass('active')
  }

  function toggleAdditionalContent (root) {
    var additionalContent = root.find(additionalContentContainer)

    if (root.hasClass('mob')) {
      $('body').toggleClass('blocked')
    }
    else if (root.hasClass('desk')) {
      additionalContent.stop().slideToggle('medium')
    }

    root.toggleClass('active')
    additionalContent.toggleClass('active')
  }

  $(document).on('click', showBtn, function () {
    showAdditionalContent(getRoot($(this)))
  }).on('click', closeBtn, function () {
    closeAdditionalContent(getRoot($(this)))
  }).on('click', toggleBtn, function () {
    toggleAdditionalContent(getRoot($(this)))
  })
})()