var lazy_load_started = false;

var lazy_events = [
  {
    selector:'.load_image',
    coeff:1.5,
    callback:function (t) {
      !(t.data('url-img-bg'))
        ? t.attr("src", t.data('url-img'))
        : t.css({'background-image': 'url('+t.data('url-img-bg')+')'});
    }
  }
];

//Объект с параметрами для ленивой загрузки изображений
var lazy_observer_event = {
  selector: '.load_image',
  callback: function (entry) {
    if (entry.isIntersecting) {
      if (typeof entry.isVisible === 'undefined') {
        entry.isVisible = true;
      }
      if (!entry.target.classList.contains('load_done') && (!entry.target.classList.contains('blocked') || entry.isVisible)) {
        entry.target.classList.add('load_done');
        if (typeof entry.target.dataset.urlImg != "undefined") {
          entry.target.setAttribute("src", entry.target.dataset.urlImg);
        } else if (typeof entry.target.dataset.urlImgBg != "undefined") {
          entry.target.style['background-image'] = 'url(' + entry.target.dataset.urlImgBg + ')'
        }
      }
    }
  }
};

// добавляем ленивую загрузку для блоков(виджетов)
addLazyEvent(
  '.load_block',
  function (entry) {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains('load_done')) {
        entry.target.classList.add('load_done');

        var route = $(entry.target).data('route');
        var controller = $(entry.target).data('controller');
        var view = $(entry.target).data('view');
        var params = $(entry.target).data('params');

        if(!view)
          return;

        if(!route)
          route = 'render-block';

        if(!controller)
          controller = 'ajax';

        $.ajax({
          url:'/'+ controller +'/' + route,
          type: 'POST',
          data: Object.assign({ params: params, view: view }, getCsrf()),
          success:function(res) {
            res = JSON.parse(res);
            $(entry.target).html(res.content);
          }
        });
      }
    }
  }
);

/**
 * Анимированно скролит страницу к началу элемента, с заданным таймаутом, и корректирует после скрола
 * @param elem
 * @param time
 * @param correction
 */
function scrollToElem(elem, time, correction){
  time = time || 800;
  correction = correction || 0;
  $('body,html').stop().animate({scrollTop: elem.offset().top - correction}, time, function () {
    setTimeout(function () {
      $('body,html').stop().animate({scrollTop: elem.offset().top - correction}, time / 5);
    }, 100);
  });
}

/**
 * Добавление обертки для ленивой загрузки
 * @param selector
 * @param callback
 * @param coeff
 */
function addLazyEvent(selector, callback, coeff){
  coeff = coeff || 1.2;
  if (_checkBrowser()) {
    _lazyObserver(selector, callback);
  } else {
    lazy_events.push({
      selector:selector,
      coeff:coeff,
      callback:callback
    });
  }
}

function _lazyLoad() {
  lazy_events.forEach(function (lazy_event) {
    $(lazy_event.selector + ":not(.load_done)").each(function () {
      var t = $(this), offset = t.offset();
      if (($(window).scrollTop() + $(window).height() * lazy_event.coeff) >= offset.top) {
        t.addClass('load_done');
        lazy_event.callback(t);
      }
    })
  });
}

/**
 * Функция инициализации observer
 * По умолчанию используются значения объекта lazy_observer_event
 * @param selector
 * @param callback
 */
function _lazyObserver(selector, callback){
  if (typeof selector == "undefined"){
    selector = lazy_observer_event.selector;
  }
  if (typeof callback == "undefined") {
    callback = lazy_observer_event.callback;
  }

  var onIntersection = function (entries) {
    for (var key in entries) {
      if(entries.hasOwnProperty(key))
        callback(entries[key]);
    }
  };
  addObserver(selector, onIntersection, {
    trackVisibility: true,
    delay: 100
  });
}

function _checkBrowser(){
  return navigator.userAgent.indexOf("Trident") < 0;
}

/**
 * Функция инициализирует _lazyObserver() или _lazyLoad() в зависимости от браузера
 * В IE observer не работает
 */
function lazyinit() {
  if (_checkBrowser()) {
    _lazyObserver();
  } else if (!lazy_load_started){
    setInterval(function () {
      _lazyLoad();
    }, 50);
    lazy_load_start = true;
  }
}

lazyinit();

/*загружаются изображения, пришедшие по ajax*/
$(document).ajaxSuccess(function( event, xhr, settings ) {
  if(xhr.responseText !== undefined && xhr.responseText.indexOf('load_image') >= 0){
    lazyinit();
  }
});