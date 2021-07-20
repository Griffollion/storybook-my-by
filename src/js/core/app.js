$.ajax({
  url: '/ajaxnew/set-referrer',
  type: 'get',
  data: {
    referrer: document.referrer,
    location: window.location.href,
  },
})

function getCsrf () {
  var obj = {}
  obj[$('meta[name="csrf-param"]').attr('content')] = $(
    'meta[name="csrf-token"]').attr('content')
  return obj
}

function divided (str) {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
}

function isEmpty (value) {
  return inArray(value, [null, 0, '', 'undefined', undefined, '0'])
}

function inArray (need, array) {
  return $.inArray(need, array) !== -1
}

function clearObject (object) {
  var newObject = {}

  $.each(object, function (name, value) {
    if (!isEmpty(value)) {
      newObject[name] = value
    }
  })

  return newObject
}

Object.size = function (obj) {
  var size = 0, key
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++
    }
  }
  return size
}

function requestCounter (event) {
  if (typeof (yaCounter15781438) != 'undefined') {
    yaCounter15781438.reachGoal(event)
  }
}

function pluralForm (n, text_forms) {
  n = Math.abs(n) % 100
  var n1 = n % 10
  if (n > 10 && n < 20) { return text_forms[2] }
  if (n1 > 1 && n1 < 5) { return text_forms[1] }
  if (n1 == 1) { return text_forms[0] }
  return text_forms[2]
}

function empty (value) {
  return typeof (value) == 'undefined' || value == '' || value == null ||
    value == 0
}

function removeSpaces (str) {
  return str.replace(/\s/g, '')
}

function parseQueryString (queryString) {
  var params = {}, queries, temp, i, l
  // Split into key/value pairs
  queries = queryString.split('&')
  // Convert the array of strings into an object
  if (queryString.indexOf('?') != -1) {
    for (i = 0, l = queries.length; i < l; i++) {
      temp = queries[i].split('=')
      params[temp[0].replace('?', '')] = temp[1]
    }
  }
  return params
}

function objToString (obj) {
  var str = '',
    first = true,
    param = '?'
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str += param + p + '=' + obj[p]
      if (first === true) {
        first = false
        param = '&'
      }
    }
  }
  return str
}

function copyLink (url) {
  var container_link = $('.copy-link-container')
  window.getSelection().removeAllRanges()

  container_link.html('<span class="js-copylink">' + url + '</span>')
  // Выборка ссылки с электронной почтой
  var link = document.querySelector('.js-copylink')
  var range = document.createRange()
  range.selectNode(link)
  window.getSelection().addRange(range)

  try {
    // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
    var successful = document.execCommand('copy')
    var msg = successful ? 'successful' : 'unsuccessful'
    console.log('Copy link command was ' + msg)
  }
  catch (err) {
    console.log('Oops, unable to copy')
  }
  container_link.html('')
  // Снятие выделения
  window.getSelection().removeAllRanges()
}

function number_format (number, decimals, dec_point, thousands_sep) {
  // Strip all characters but numerical ones.
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec)
      return '' + Math.round(n * k) / k
    }
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

function getUrlParameter (sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=')

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1]
    }
  }
}

const isInStandaloneMode = (window.matchMedia(
  '(display-mode: standalone)').matches) || (window.navigator.standalone) ||
  document.referrer.includes('android-app://')

if (isInStandaloneMode) {
  requestCounter('js_pwa_link_open')
}

(function () {

  // ---------------------------------------------------------------------------
  // search logic
  // ---------------------------------------------------------------------------
  $('.main-nav_btn-search').on('click', function (ev) {
    $(this).toggleClass('active')
    $('.main-nav_search').toggleClass('active')
  })

  $(document).on('click', function (ev) {
    !$('.main-nav_btn-search').is(ev.target) &&
    !$('.main-nav_search').is(ev.target) &&
    $('.main-nav_search').removeClass('active') &&
    $('.main-nav_btn-search').removeClass('active')
  })

  // ---------------------------------------------------------------------------
  // fix menu
  // ---------------------------------------------------------------------------
  function observeMenu () {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }

    const menu = document.querySelector('.main-nav')
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.boundingClientRect.y < 0) {
          menu.classList.add('fixed')
        }
        else {
          menu.classList.remove('fixed')
        }
      })
    }, options)

    if (menu && !menu.classList.contains('main-nav--static')) {
      observer.observe(menu)
    }
  }

  observeMenu()

  // ---------------------------------------------------------------------------
  // media menu
  // ---------------------------------------------------------------------------
  var screen = window.matchMedia('screen and (min-width: 1024px)')
  screen.addListener(mainMenu)
  mainMenu(screen)

  function mainMenu (screen) {

    if (screen.matches) {
    }
    else {
      // ---------------------------------------------------------------------------
      // моб. срипты
      // ---------------------------------------------------------------------------
      $(document)

        // открытие меню
        .on('click', '[data-nav-btn]', openMobMenu)
        // открытие под меню
        .on('click', '.main-nav_item-sub', function () {
          $('.main-nav').css('overflow', 'hidden').scrollTop(0)
          $(this).children('.main-nav_sub').addClass('active')
          $('[data-nav-btnBack]').addClass('active')
        })

        // закрытие под меню
        .on('click', '[data-nav-btnBack]', function () {
          $('.main-nav').css('overflow', 'auto')
          $(this).removeClass('active')
          $('.main-nav_sub').removeClass('active')
        })

      function openMobMenu () {
        if ($('.main-nav').hasClass('active')) {
          $(this).removeClass('active')
          $('.main-nav').removeClass('active')
          $('.main-nav_sub').removeClass('active')
          $('[data-nav-btnBack]').removeClass('active')
          $('.overlay').removeClass('active')
          $('html, body').css('overflow', 'auto')
          $('.main-nav').css('overflow', 'auto')
          $('.wrap_mW').css('display', 'block')
        }
        else {
          $(this).addClass('active')
          $('.main-nav').addClass('active')
          $('.overlay').addClass('active')
          $('html, body').css('overflow', 'hidden')
          $('.wrap_mW').css('display', 'none')
        }
      }

      $('.overlay').on('click', overlayMobHide)

      function overlayMobHide () {
        $(this).removeClass('active')
        $('.main-nav').removeClass('active')
        $('.main-nav_sub').removeClass('active')
        $('[data-nav-btn]').removeClass('active')
        $('[data-nav-btnBack]').removeClass('active')
        $('.overlay').removeClass('active')
        $('html, body').css('overflow', 'auto')
      }
    }
  }

  $(document).on('click', '[data-js="slowly"]', function (I) {
    I.preventDefault(), $('html, body').
      animate({ scrollTop: $($(this).attr('href')).offset().top - 57 + 'px' }, {
        duration: 500,
        easing: 'swing',
      })
  }).on('change', '#sorter', function () {
    var val = $(this).val(),
      split = val.split('-'),
      sort_position = attr = split[0],
      attr = split[0],
      sort = split[1],
      sort_link = $('#sort_' + attr).attr('href')

    if (empty(sort_link)) {
      $('#sort_' + attr).click()
    }else{
      if (sort == 'desc') {
        sort_position = '-' + attr
      }

      params = sort_link.replace(new RegExp('sort=([^&=]+)'),
        'sort=' + sort_position)
      $('#sort_' + attr).attr('href', params)
      $('#sort_' + attr).trigger('click')
    }

  }).on('click', '.main-nav_link--straight', function (e) {
    e.stopPropagation()
  }).on('click', '[data-block-more="btn"]', function () {
    var ths = $(this)
    var block = ths.closest('[data-block-more="block"]')
    var blockIn = block.find('[data-block-more="block-in"]')
    var hide = block.find('[data-block-more="hide"]')
    var className = 'active'

    if (ths.hasClass(className)) {
      ths.removeClass(className)
      hide.removeClass(className)
      blockIn.removeClass(className)
    }
    else {
      ths.addClass(className)
      hide.addClass(className)
      blockIn.addClass(className)
    }
  }).on('click', '.encoded-link', function () {
    var t = $(this)
    if (t.data('url').length) {
      var url = atob(t.data('url'))
      if (t.hasClass('t_blank')) {
        window.open(url)
      }
      else {
        location.href = url
      }
      return false
    }
  })
  $('.filter-more').hover(function () {
    requestCounter('show_more')
  }, function () {})

  if ($('[data-slide-down-btn]').length) {
    $('[data-slide-down]').hide()

    $('[data-slide-down-btn]').on('click', function () {
      $(this).
        toggleClass('active').
        closest('.slideToggle-wrap').
        find('[data-slide-down]').
        slideToggle()
    })
  }

  if ($('[data-filter-sidebar-open-btn]').length) {
    $('[data-filter-sidebar-content]').hide()

    $('[data-filter-sidebar-open-btn]').on('click', function () {

      $(this).toggleClass('active')

      $(this).next('[data-filter-sidebar-content]').stop().slideToggle()
    })
  }

  var fb = $('div.fb'),
    vk = $('div.vk'),
    tw = $('div.tw'),
    ok = $('div.ok'),
    teleg = $('div.teleg'),
    rss = $('div.rss'),
    insta = $('div.instagram')
  fb.on('click', function () {
    window.open('https://www.facebook.com/Myfinby')
  }), vk.on('click', function () {
    window.open('https://vk.com/myfinby')
  }), tw.on('click', function () {
    window.open('https://twitter.com/Myfinby')
  }), ok.on('click', function () {
    window.open('https://www.ok.ru/myfinby')
  }), teleg.on('click', function () {
    window.open('https://t.me/myfin_news')
  }), rss.on('click', function () {
    window.open('https://myfin.by/rss'), ga('send', 'event', 'Buttons', 'click',
      'rss')
  }), insta.on('click', function () {
    window.open('https://www.instagram.com/myfinby/')
  })

})()

$('.credit_type_menu .icon').on('click', function () {
  $(this).hasClass('collapsed') ? ($(this).removeClass('collapsed'), $(this).
    closest('ul').
    find('.hidden-xs').
    addClass('hidden-xs-active').
    removeClass('hidden-xs')) : ($(this).addClass('collapsed'), $(this).
    closest('ul').
    find('.hidden-xs-active').
    addClass('hidden-xs').
    removeClass('hidden-xs-active'))
})

var lazy_events = [
  {
    selector: '.load_image',
    coeff: 1.5,
    callback: function (t) {
      if (!(t.hasClass('load_image_picture')) && !(t.data('url-img-bg'))) {
        t.attr('src', t.data('url-img'))
      }
      else if (t.hasClass('load_image_picture')) {
        t.attr('srcset', t.data('url-img'))
      }
      else {
        t.css({ 'background-image': 'url(' + t.data('url-img-bg') + ')' })
      }
    },
  },
]

$(document).on('click', '.tooltipster-close', function () {
  $('.tooltip-click').tooltipster('close')
})

if ($('.tooltip-click').length) {
  console.log('Tooltip is exist')
  $('.tooltip-click').tooltipster({
    trigger: 'click',
    animation: 'grow',
    contentAsHTML: true,
    repositionOnScroll: true,
    interactive: true,
    maxWidth: 240,
  })
}

function loadTooltipHover () {
  if ($('.tooltip-hover:not(.tooltipstered)').length) {

    $('.tooltip-hover:not(.tooltipstered)').tooltipster({
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        tap: true,
      },
      triggerClose: {
        mouseleave: true,
        tap: true,
      },
      animation: 'grow',
      contentAsHTML: true,
      repositionOnScroll: true,
      maxWidth: 240,
    })

  }
}

loadTooltipHover()






