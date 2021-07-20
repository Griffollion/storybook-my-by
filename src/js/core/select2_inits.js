$(document).ready(function () {
    $('.select2').select2({
        dropdownAutoWidth: true,
        "language": {
            "noResults": function(){
                return "Результаты не найдены";
            }
        },
        placeholder: function(){
            $(this).data('placeholder');
        }
    });

    $('.select2_clear').select2({
        dropdownAutoWidth: true,
        allowClear: true,
        "language": {
            "noResults": function(){
                return "Результаты не найдены";
            }
        },
        placeholder: function(){
            $(this).data('placeholder');
        }
    });

    $('.multisel-new').select2({
        theme : 'upd-sel',
        width: '100%',
        containerCssClass: 'disable-input',
        dropdownAutoWidth: true,
        multiple: 'true',
        closeOnSelect: false,
        "language": {
            "noResults": function() {
                return "Результаты не найдены"
            }
        },
        placeholder: function() {
            $(this).data('placeholder');
        },

        allowClear: true
    });

    $('.select-new-style').select2({
        theme : 'upd-sel',
        width: '100%',
        minimumResultsForSearch: -1
    });

    // Отключение поиска в селекте
    $('.disable-search').on('select2:opening select2:closing', function( event ) {
        var $searchfield = $(this).parent().find('.select2-search__field');
        $searchfield.prop('disabled', true);
    });
});