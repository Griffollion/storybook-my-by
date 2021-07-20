$(document).ready(function () {
    function dropDownContent(activeBlockClass, activeClass, dropDownBlockClass, parentBlockClass) {

        $(activeBlockClass).on('click', function () {
            var ths = $(this);
            var parentBlock = $(this).closest(parentBlockClass);
            var  dropDownBlock = parentBlock.children(dropDownBlockClass);

            ths.toggleClass(activeClass);
            $(dropDownBlock).slideToggle();
        });
    };

    dropDownContent('.sidebar-fixed__top', 'active', '.sidebar-fixed__dropdown', '.sidebar-fixed');
    dropDownContent('.often-questions__text-toggle', 'active', '.often-questions__text-hidden', '.often-questions__list-item');
});