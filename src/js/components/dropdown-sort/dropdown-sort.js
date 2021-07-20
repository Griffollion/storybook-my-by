$(document).ready(function () {
    function changeSortMode(el, icon, textContainer) {
        var params = {
            text: '',
            mode: ''
        };

        params.text = el.text();
        params.mode = el.closest('.dropdown-sort__dropdown-list').find('li.active').attr('class').split(" ");
        icon.attr('data-sort-mode', params.mode[0]);
        textContainer.text(params.text);
    }
    function closeOutsideContainer(container,changedClass) {
        $(document).mouseup(function (e){
            var currencyContainer = $(container);
            if (!currencyContainer.is(e.target)
                && currencyContainer.has(e.target).length === 0) {
                currencyContainer.removeClass(changedClass);
            }
        });
    }

    var mainContainer = '.dropdown-sort',
        filterMode = '.dropdown-sort__dropdown-list li',
        icon = '.dropdown-sort__select-icon--sort',
        text = '.dropdown-sort__select-text';

    $(document).on('click', mainContainer, function () {
        $(this).toggleClass('opened');
    });

    $(document).on('click', filterMode, function () {
        change($(this));
    });

    function change(ob) {
        var iconContainer = ob.closest(mainContainer).find(icon),
            textContainer = ob.closest(mainContainer).find(text);

        ob.closest(mainContainer).find(filterMode).each(function () {
            $(this).removeClass('active');
        });
        ob.addClass('active');

        changeSortMode(ob, iconContainer, textContainer);
    }

    closeOutsideContainer(mainContainer,'opened');

    function init() {
        var url = new URL(location.href),
            sort;

        if(url.searchParams.get('sort')) {
            sort = url.searchParams.get('sort');
        }

        if(sort) {
            change($('.dropdown-sort__dropdown-list li[data-value="'+sort+'"]'));
        }
    }
    init();
});