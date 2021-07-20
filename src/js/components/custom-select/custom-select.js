(function () {
    var selectContainer = '.custom-select',
        toggleBtn = '[data-js="select-toggle"]',
        listItem = '.custom-select .custom-select__list li',
        activeCls = 'active';


    $(document).on('click', toggleBtn, function () {
        $(this).closest(selectContainer).toggleClass(activeCls);
    });

    $(document).on('click', listItem, function () {
        $(this).closest(selectContainer).find('li').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');
    });

    $(document).mouseup(function (e){
        if (!$(toggleBtn).is(e.target) && $(selectContainer).has(e.target).length === 0) {
            $(selectContainer).removeClass(activeCls);
        }
        if ($(listItem).is(e.target) && $(listItem).has(e.target).length === 0) {
            $(selectContainer).removeClass(activeCls);
        }
    });
}());