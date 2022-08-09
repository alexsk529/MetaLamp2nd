import AirDatepicker from 'air-datepicker';
import './filter-date-dropdown.scss';
import $ from "jquery";

let confirm = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: dp => {dp.hide()}
}

class Filterdp {
    constructor(el) {
        this.opts = {
            container: 'div.filter-date-dropdown',
            range: true,
            onSelect({date, formattedDate, datepicker }) {
                if ( formattedDate.length == 1 ) {
                    $('.-range-from-').addClass('-range-to-');
                }
            },
            buttons: ['clear', confirm],
            prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
            nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
            multipleDatesSeparator: " - ",
            navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
            dateFormat(date) {
                return date.toLocaleString('ru-RU', {
                    day: '2-digit',
                    month: 'short',
                }).toLowerCase();
            }
        }
        let dp = new AirDatepicker (el, this.opts);

        let span = $(el).parent().find('span');
        console.log(span);
        console.log($(el));
        span.click(function() {
            dp.visible || dp.show();
            $(el).focus();
        })
        span.hover(function (el) {
            $(el).addClass("filter-date-dropdown__field_hover")
            }, function(el) {
            $(el).removeClass("filter-date-dropdown__field_hover")
            },
        )
        return dp;

    }
}

for (let item of $('.filter-date-dropdown input')) {
    new Filterdp (item)
}