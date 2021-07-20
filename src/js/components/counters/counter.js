(function () {
  //для работы события 'counter' => ['class' => CounterAction::class]
  $(document).on('click', '.js-our-counter', function () {
    var elem = $(this), relation_id = (elem.data('relation_id') ==
    Object(elem.data('relation_id'))
      ? JSON.stringify(elem.data('relation_id'))
      : elem.data('relation_id'))
    var localStorageName = '' + elem.data('category_id') + '_' + relation_id
    if (!getlocalStorage(localStorageName)) {
      $.ajax({
        url: '/ajaxnew/counter',
        data: {
          category_id: elem.data('category_id'),
          relation_id: relation_id,
          type: elem.data('type'),
        },
        success: function (data) {
          if ('counter' in data && 'status' in data && data.status === 'OK') {
            setlocalStorage(localStorageName, 'true')
            $(elem).prop('disabled', true).siblings().prop('disabled', true)
          }
        },
      })

    }
  });

  function getlocalStorage (name) {
    return localStorage.getItem(name)
  }

  function setlocalStorage (name, val) {
    return localStorage.setItem(name, val)
  }
})();