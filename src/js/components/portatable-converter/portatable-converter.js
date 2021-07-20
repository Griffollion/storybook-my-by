$(document).ready(function () {
    var main =  "[data-js='converter']",
        closeBtn = "[data-js='converter-close']",
        showBtn = "[data-js='converter-show']";


    $(document).on('click', showBtn, function () {
       $(main).addClass('active');
    })
    .on('click', closeBtn, function () {
       $(this).closest(main).removeClass('active');
    });
});

function Calculator(obj) {
    var id = obj.id || '';
    var from = obj.from || '';
    var to = obj.to || '';
    var class_items = obj.class_items || '';
    var btn_swap = obj.btn_swap || '';
    var subtext_from = obj.subtext_from || '';
    var subtext_to = obj.subtext_to || '';

    this.document = $(document);
    setParamCalc();

    this.document.on('keyup', '#' + from + ', #' + to, function () {
        changeVal(this);
    });

    this.document.on('click', class_items, function () {
        changeCurrency(this);
    });

    this.document.on('click', '#' + btn_swap, function () {
        swapCurrency();
    });

    function changeVal(target) {
        var obj = $(target),
            input = $('#' + (obj.attr('id') === from ? to : from)),
            currency = obj.parents('.xxx-convertor__input-block').prev().children('.xxx-convertor__curr-tabs-wrapper').find('.active'),
            another_currency = input.parents('.xxx-convertor__input-block').prev().children('.xxx-convertor__curr-tabs-wrapper').find('.active');

        var val = Math.round(currency.data('curse-val') / another_currency.data('curse-val') * obj.val() / currency.data('curse-multi') * another_currency.data('curse-multi') * 100) / 100,
            val_one = currency.data('curse-val') / another_currency.data('curse-val') / currency.data('curse-multi') * another_currency.data('curse-multi'),
            val_one_another = another_currency.data('curse-val') / currency.data('curse-val') / another_currency.data('curse-multi') * currency.data('curse-multi');

        input.val(val);

        $(subtext_from).html('1 ' + currency.data('curse-name') + ' = ' + val_one.toFixed(4) + ' ' + another_currency.data('curse-name'))
        $(subtext_to).html('1 ' + another_currency.data('curse-name') + ' = ' + val_one_another.toFixed(4) + ' ' + currency.data('curse-name'))

    }

    function changeCurrency(target) {
        var elem = $(target),
            elems = $(class_items + '.active');
        if (elems.length <= 2 && !elems.hasClass(elem.data('curse-name'))) {
            var from1 = !!~String(elem.attr('id')).indexOf('from') ? elem.attr('id') : $(elems[0]).attr('id'),
                to2 = !!~String(elem.attr('id')).indexOf('to') ? elem.attr('id') : $(elems[elems.length === 1 ? 0 : 1]).attr('id');
            setActives({from: from1, to: to2});
            changeVal('#' + from);
        }
    }

    function swapCurrency() {
        var input = $('#' + from),
            elems = $(class_items + '.active');
        if (elems.length === 2 && input) {
            var from1 = 'from' + elems[1].id.substring(elems[1].id.indexOf('_')),
                to2 = 'to' + elems[0].id.substring(elems[0].id.indexOf('_'));
            setActives({from: from1, to: to2});
            changeVal('#' + from);
        }
    }

    function setActives(obj) {
        $(class_items + '.active').removeClass('active');
        var elem_from = $(class_items).filter('#' + obj.from),
            elem_to = $(class_items).filter('#' + obj.to);

        elem_from.addClass('active');
        elem_to.addClass('active');
    }

    function setParamCalc() {
        var value = $('#'+from).length && $('#'+from).data('value') ? $('#'+from).data('value') : 100,
            elem = '#' + from;
        $(elem).val(+value);
        changeVal(elem, false);
    }

}

var calc = new Calculator({
    from: 'cbr_first',
    to: 'cbr_second',
    class_items: '.xxx-convertor__curr-tab',
    btn_swap: 'btn_swap',
    subtext_from: '.portatable-converter__subtext-from',
    subtext_to: '.portatable-converter__subtext-to',
    dropdown_items: '.xxx-dropdown-container__item',
    id: 'current-date'
});