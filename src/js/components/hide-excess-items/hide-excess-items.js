$(document).ready(function () {
  function takeContainerSize (el) {
    return el.closest('[data-js=\'container-limiter\']').outerWidth()
  }

  function hideExcessItems (el, callback) {
    var maxWidth = callback(el) ,
        elsSum = 0,
        hiddenEls = [],
        additionalButtonWidth = 210;

    //Если ширина элементов списка больше ширины контейнера заносим лишние элементы в массив и вырезаем их из основного списка
    el.find('li').each(function () {
      if (maxWidth - additionalButtonWidth < elsSum) {
        hiddenEls.push($(this));
        $(this).remove();

      } else {
        elsSum += $(this).outerWidth(true);
      }
    })

    //При условии что ширина элементов списка больше ширины контенера, добавляем элементы в отдельный контейнер
    if (maxWidth - additionalButtonWidth < elsSum) {
      var hiddenElsMainContainer = $('<li />').attr('class', 'minimal-tabs__item minimal-tabs__item--more'),
        hiddenElsText = $('<span/>').attr('class', 'minimal-tabs__btn').text('Еще'),
        hiddenElsContainer = $('<div />').attr('class', 'minimal-tabs__hidden-list'),
        hiddenElsList = $('<ul />').attr('class', 'list-reset')

      hiddenElsMainContainer.append(hiddenElsContainer)
      hiddenElsMainContainer.append(hiddenElsText)
      hiddenElsContainer.append(hiddenElsList)

      for (var i = 0, endI = hiddenEls.length; i < endI; i++) {
        hiddenElsList.append(hiddenEls[i])
      }

      el.append(hiddenElsMainContainer)
    }

    el.addClass('visible');
  }

  try {
    if($(window).width() > 768) {
      hideExcessItems($("[data-js='hide-excess-items']"), takeContainerSize);
    }
  } catch (e) {
    console.log(e);
  }

  try {
    $(document).on('click', '.minimal-tabs__item--more', function () {
      $(this).toggleClass('opened')
      $(this).find('.minimal-tabs__hidden-list').toggleClass('opened')
    })
  } catch (e) {
    console.log(e)
  }
})


