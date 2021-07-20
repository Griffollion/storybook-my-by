$(document).ready(function () {
    if ($(window).outerWidth() > 767) {
        var bannerContainer = "[data-js='temporarily-floating-banner']",
            fstStart = true,
            bannerLength = $(bannerContainer).find('div').length,
            isFloating = true;
        var zz = 0;

        function moveStart() {
            if (isFloating) {
                fstStart = false;
                var banner = $(bannerContainer).find('div');

                $(bannerContainer).css({'position': 'relative', 'height': '90px'});
                banner.css({'position': 'fixed', 'z-index': '10000'});

                var zz = setInterval(function () {
                    $('.main-nav').css({'top': '0'});
                    $('.main-nav.fixed').css({'top': '90px'});

                    if ($('.main-nav.fixed').length) {
                        setTimeout(function () {
                            isFloating = false;
                            clearInterval(zz);
                            banner.css({'position': 'static', 'z-index': '10000'});
                            $('.main-nav.fixed').css({'top': '0'});
                        }, 8000)
                    }
                }, 10);
            }
        }

        function checkBanner() {
            if (bannerLength) {
                if (fstStart) {
                    moveStart();
                }
            } else {
                bannerLength = $(bannerContainer).find('div').length;
            }
        }

        var timerId = setTimeout(function tick() {
            checkBanner();
            timerId = setTimeout(tick, 100);
        }, 100);
    }
});