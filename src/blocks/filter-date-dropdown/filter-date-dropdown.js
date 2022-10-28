import AirDatepicker from 'air-datepicker';

import './filter-date-dropdown.scss';

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
    container: 'div.date-dropdown',
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
    // dateFormat(date) {
    //     return date.toLocaleString([], {
    //         day: "2-digit",
    //         month: "long"
    //     });
    // },
    altFieldDateFormat: 'd MMM',
    // selectedDates: [new Date('2022-08-19'), new Date('2022-08-23')],
}

class Filterdp extends AirDatepicker {

    constructor(el, opts) {
        super(el, opts);
        // let months = {
        //     0: 'янв',
        //     1: "фев",
        //     2: "мар",
        //     3: "апр",
        //     4: "май",
        //     5: "июн",
        //     6: "июл",
        //     7: "авг",
        //     8: "сен",
        //     9: "окт",
        //     10: "ноя",
        //     11: "дек",
        // }
        // let dp = this;
        // let arr = [new Date('2022-08-19'), new Date('2022-08-23')];
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

for (let item of $('.filter-date-dropdown input')) {
    new Filterdp (item, opts)
}

// let confirm = {
//     content: 'Применить',
//     className: 'custom-button-round-classname',
//     onClick: dp => {dp.hide()}
// }
//
// class Filterdp {
//     clearCustom = {
//         content: 'очистить'.toUpperCase(),
//         className: 'custom-button-round-classname',
//         onClick: dp => {
//             dp.clear()
//             dp.hide();
//             $(this).removeClass("filter-date-dropdown__field_hover");
//         }
//     }
//     confirm = {
//         content: 'Применить'.toUpperCase(),
//         className: 'custom-button-round-classname',
//         onClick: dp => {
//             dp.hide();
//             $(this).removeClass("filter-date-dropdown__field_hover");
//         }
//     }
//     constructor(el) {
//         let opts = {
//             container: 'div.filter-date-dropdown',
//             range: true,
//             onSelect({date, formattedDate, datepicker }) {
//                 switch(formattedDate.length) {
//                     case 1:
//                         $('.-range-from-').addClass('-range-to-');
//                         $(el).val(formattedDate[0].toLowerCase())
//                         break;
//                     case 2:
//                         $(el).val(formattedDate[0].toLowerCase() + ' - ' + formattedDate[1].toLowerCase())
//                 }
//             },
//             buttons: [this.clearCustom, this.confirm],
//             prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
//             nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
//             multipleDatesSeparator: " - ",
//             navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
//             dateFormat: 'd MMM',
//             altFieldDateFormat: 'd MMM',
//         }
//         let dp = new AirDatepicker (el, opts);
//
//         let span = $(el).parent().find('span');
//         span.click(function() {
//             dp.visible || dp.show();
//             $(el).focus();
//         })
//         span.hover(function () {
//                 $(this).parent().find('input').addClass("filter-date-dropdown__field_hover")
//             }, function() {
//                 $(this).parent().find('input').removeClass("filter-date-dropdown__field_hover")
//             },
//         )
//         return dp;
//
//     }
// }
//
// for (let item of $('.filter-date-dropdown input')) {
//     new Filterdp (item)
// }