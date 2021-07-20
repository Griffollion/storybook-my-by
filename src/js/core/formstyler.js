$(document).ready(function () {
    $('.formstyler').styler();

    $(document).ajaxComplete(function() {
        $('.formstyler').styler();
    })
});