//Возможность проверки наличия атрибута у элемента
$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined
}

//Проверка на iOS
function iOS () {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
}

//Плавная прокрутка страницы к элементу
function onlyScroll (offset, id) {
  if ($(id).length > 0) {
    var menuHeight = offset,
      top = $(id).offset().top - menuHeight
    var containers = $('body,html')

    if (top >= 0) {
      containers.stop()
      containers.animate({ scrollTop: top, easing: 'ease' }, 500)
    }
  }
}

function slowScroll (event, el) {
  var offset = el.attr('data-offset')
    ? el.attr('data-offset')
    : 61 //61 - дефолтная высота мобильного меню
  console.log(offset)
  event.preventDefault()
  var id = el.hasAttr('href') ? el.attr('href') : el.attr('data-href')
  onlyScroll(offset, id)
}

$(document).
  on('click', '[data-js=\'slowly\'], [data-scroll=\'slowly\']',
    function (event) {
      slowScroll(event, $(this))
    })
//Плавная прокрутка к элементу //end

//Плавное скрытые/показ блока
function slideToggleItem (speed) {
  var btn = '[data-handler="toggle-item"]'

  $(document).on('click', btn, function (e) {
    var that = $(this),
      event = e,
      target = that.attr('href') ? that.attr('href') : that.attr(
        'data-target'),
      isScrolled = that.attr('data-after-scroll')

    that.toggleClass('toggled')
    if (isScrolled) {
      $(target).stop()
      $(target).slideToggle(speed, function () {
        slowScroll(event, that)
      })
    }
    else {
      console.log(target)
      $(target).stop()
      $(target).slideToggle(speed)
    }
  })
}

slideToggleItem('medium')
//Плавное скрытые/показ блока //end

//Атрибут для отмены всплытия
function dataEventHandler () {
  var tgt = '[data-event]'

  if ($(tgt).length > 0) {
    $(document).on('click', tgt, function (e) {
      var property = $(this).attr('data-event')
      switch (property) {
        case 'prevent':
          e.preventDefault()
          break
        case 'stop':
          e.stopPropagation()
          break
        default:
          console.log('Something wrong with data-event')
      }
    })
  }
}

dataEventHandler()

//Запуск прелоадера
function startPreloading (tgt) {
  var target = $(tgt) || $('.preloader')
  target.addClass('visible')
}

//Остановка прелоадера
function stopPreloading (tgt) {
  var target = $(tgt) || $('.preloader')
  target.removeClass('visible')
}

//Обработчики всплытия событий
$(document).on('click', '[data-event="stop"]', function (e) {
  e.stopPropagation()
})

$(document).on('click', '[data-event="prevent"]', function (e) {
  e.preventDefault()
})

$(document).on('click', '[data-event="stop-all"]', function (e) {
  e.preventDefault()
  e.stopPropagation()
})
//Обработчики всплытия событий end

//Глубокое сравнение свойств двух объектов
function deepCompare () {
  var i, l, leftChain, rightChain

  function compare2Objects (x, y) {
    var p

    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y ===
      'number') {
      return true
    }

    // Compare primitives and functions.
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes
    if (x === y) {
      return true
    }

    // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes
    if ((typeof x === 'function' && typeof y === 'function') ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)) {
      return x.toString() === y.toString()
    }

    // At last checking prototypes as good as we can
    if (!(x instanceof Object && y instanceof Object)) {
      return false
    }

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
      return false
    }

    if (x.constructor !== y.constructor) {
      return false
    }

    if (x.prototype !== y.prototype) {
      return false
    }

    // Check for infinitive linking loops
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
      return false
    }

    // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance
    for (p in y) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false
      }
      else if (typeof y[p] !== typeof x[p]) {
        return false
      }
    }

    for (p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false
      }
      else if (typeof y[p] !== typeof x[p]) {
        return false
      }

      switch (typeof (x[p])) {
        case 'object':
        case 'function':

          leftChain.push(x)
          rightChain.push(y)

          if (!compare2Objects(x[p], y[p])) {
            return false
          }

          leftChain.pop()
          rightChain.pop()
          break

        default:
          if (x[p] !== y[p]) {
            return false
          }
          break
      }
    }

    return true
  }

  if (arguments.length < 1) {
    return true //Die silently? Don't know how to handle such case, please
    // help...
    // throw "Need two or more arguments to compare";
  }

  for (i = 1, l = arguments.length; i < l; i++) {

    leftChain = [] //Todo: this can be cached
    rightChain = []

    if (!compare2Objects(arguments[0], arguments[i])) {
      return false
    }
  }

  return true
}

//Удаление пробелов из строки
function removeSpaces (str) {
  return String(str).replace(/\s/g, '')
}