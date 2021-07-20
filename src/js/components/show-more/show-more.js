$(document).ready(function () {
   function showMore(openText, hiddenText) {
       $(document).on('click', '[data-js="show-more-btn"]', function () {
          var ths = $(this);
          var parentBlock = ths.closest('[data-js="show-more-parent"]');
          var hiddenBlock = parentBlock.children('[data-js="show-more-hidden"]');
          var activeClass= 'active';

          hiddenBlock.slideToggle();
          ths.toggleClass(activeClass);

          if(ths.hasClass(activeClass)) {
              ths.html(hiddenText);
          } else {
              ths.html(openText);
          }
       });
   };

   showMore('Еще', 'Скрыть');
});