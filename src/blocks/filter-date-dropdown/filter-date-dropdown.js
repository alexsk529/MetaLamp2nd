import AirDatepicker from 'air-datepicker';

import './filter-date-dropdown.scss';


const $filterDateInputs = $('.filter-date-dropdown input');

if ($filterDateInputs) {
    let clearCustom = {
        content: 'очистить'.toUpperCase(),
        className: 'custom-button-round-classname',
        onClick: dp => {
            dp.clear()
            dp.hide();
            $(dp.$el).removeClass("date-dropdown__field_hover");
            $(dp.$el).parent().parent().parent().find('#end').removeClass("date-dropdown__field_hover");
        }
    }
    let confirm = {
        content: 'Применить'.toUpperCase(),
        className: 'custom-button-round-classname',
        onClick: dp => {
            dp.hide();
            $(dp.$el).removeClass("date-dropdown__field_hover");
            $(dp.$el).parent().parent().parent().find('#end').removeClass("date-dropdown__field_hover");
        }
    }

    let opts = {
        minDate: new Date(),
        range: true,
        onSelect({date, formattedDate, datepicker }) {
            switch(formattedDate.length) {
                case 1:
                    $('.-range-from-').addClass('-range-to-');
                    $(datepicker.$el).val(formattedDate[0].toLowerCase());
                    break;
                case 2:
                    $(datepicker.$el).val(formattedDate[0].toLowerCase() + ' - ' + formattedDate[1].toLowerCase())
            }
        },
        buttons: [clearCustom, confirm],
        prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
        nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
        multipleDatesSeparator: " - ",
        navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
        dateFormat: 'd MMM',
        altFieldDateFormat: 'd MMM',
    }

    class Filterdp extends AirDatepicker {

        constructor(el, opts) {
            super(el, opts);
            $(el).val('19 авг - 23 авг')
            let span = $(el).parent().find('span');
            span.click(() => {
                this.visible || this.show();
                $(el).focus();
            })
            span.hover(() => $(this.$el).addClass("filter-date-dropdown__field_hover"),
                () => $(this.$el).removeClass("filter-date-dropdown__field_hover")
            )

            $('.date-dropdown .air-datepicker-navigation').find('svg').remove();
        }
    }

    for (let input of $filterDateInputs) {
        opts.container = input.closest('.filter-date-dropdown');
        new Filterdp (input, opts)
    }

}
