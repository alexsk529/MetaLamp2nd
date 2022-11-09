import AirDatepicker from 'air-datepicker';

import './date-dropdown.scss';

let clearCustom = {
    content: 'очистить'.toUpperCase(),
    className: 'custom-button-round-classname',
    onClick: dp => {
        dp.clear()
        dp.hide();
        $(dp.$el).removeClass("date-dropdown__field_hover");
        $(dp.$el).parent().parent().parent().find('.end').removeClass("date-dropdown__field_hover");
    }
}
let confirm = {
    content: 'Применить'.toUpperCase(),
    className: 'custom-button-round-classname',
    onClick: dp => {
        dp.hide();
        $(dp.$el).removeClass("date-dropdown__field_hover");
        $(dp.$el).parent().parent().parent().find('.end').removeClass("date-dropdown__field_hover");
    }
}

let opts = {
    container: 'div.date-dropdown',
    minDate: new Date(),
    range: true,
    onSelect({date, formattedDate, datepicker }) {
        switch(formattedDate.length) {
            case 0:
                $(datepicker.$el).val('ДД.ММ.ГГГГ');
                $(datepicker.$el).parent().parent().parent().find('.end').val('ДД.ММ.ГГГГ');

                break;
            case 1:
                $(datepicker.$el).val(formattedDate[0]);
                $(datepicker.$el).parent().parent().parent().find('.end').val('ДД.ММ.ГГГГ');
                $('.-range-from-').addClass('-range-to-');

                break;
            case 2:
                $(datepicker.$el).val(formattedDate[0]);
                $(datepicker.$el).parent().parent().parent().find('.end').val(formattedDate[1]);
        }
    },
    buttons: [clearCustom, confirm],
    prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
    nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
    multipleDatesSeparator: " ",
    navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
}

class Datedropdown extends AirDatepicker {
    start = $(this);
    end = $(this).parent().parent().parent().find('.end');

    constructor(el, opts) {
        super(el, opts)
        let start = $(el);
        let end = $(el).parent().parent().parent().find('.end');
        let wrapper = $(el).parent().parent().parent().find('.date-dropdown__wrapper');

        start.val('ДД.ММ.ГГГГ');
        end.val('ДД.ММ.ГГГГ');

        // end.click(function () {
        //     start.focus();
        // })

        end.click(() => {
            this.visible || this.show();
            start.addClass("date-dropdown__field_hover");
        })

        end.blur(() => {
            this.inFocus || !this.visible || this.hide();
            start.removeClass("date-dropdown__field_hover");
        })

        wrapper.find('span').click(() => {
            start.focus()
        })

        wrapper.find('span').hover(function (){
            $(this).parent().find('input').addClass("date-dropdown__field_hover")
        }, function () {
            $(this).parent().find('input').removeClass("date-dropdown__field_hover")
        })

        start.focus(() => {
            end.addClass("date-dropdown__field_hover")});
        start.blur(() => {
            end.removeClass("date-dropdown__field_hover")});

        $('.date-dropdown .air-datepicker-navigation').find('svg').remove();
    }
}
let datedropArr = [];
for (let el of $('.start')) {
    let dp = new Datedropdown(el, opts);
    datedropArr.push(dp);
}










