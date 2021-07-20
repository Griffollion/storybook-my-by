(function () {
    var tabsContainer = "[data-js='mob-collapse']",
        activeItem = "[data-js='mob-collapse'] li.active a",
        tabItem = "[data-js='mob-collapse'] li:not(.active)";

    $(document).on('click',activeItem, function (e) {
        e.preventDefault();
    })
        .on('click',tabItem, function (e) {
            e.stopPropagation()
        })

        .on('click',tabsContainer, function () {
            $(this).toggleClass('nav-tabs--collapse-show');
        });
}());