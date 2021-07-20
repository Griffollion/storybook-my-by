(function () {
    var btn = '[data-js="back-to-top"]';
    var body = $("html, body");
    $(document).on('click', btn, function () {
        body.stop().animate({scrollTop: 0}, 500, 'swing', function () {
            $(btn).addClass('invisible');
        });
    })
})()