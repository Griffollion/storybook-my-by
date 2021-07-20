(function () {
  var root = '.link-copy-btn',
    btn = '.link-copy-btn__text',
    message = '.link-copy-btn__message'

  $(document).on('click', btn, function () {
    var url = window.location.origin + window.location.pathname +
        window.location.search,
      messageContainer = $(this).closest(root).find(message)

    messageContainer.addClass('active')
    setTimeout(function () {
      messageContainer.removeClass('active')
    }, 1500)
    copyLink(url)
  })
})()