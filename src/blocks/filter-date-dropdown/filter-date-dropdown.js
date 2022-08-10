import AirDatepicker from 'air-datepicker';
import './filter-date-dropdown.scss';
import $ from "jquery";

let confirm = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: dp => {dp.hide()}
}

class Filterdp {
    clearCustom = {
        content: 'очистить'.toUpperCase(),
        className: 'custom-button-classname',
        onClick: dp => {
            dp.clear()
            dp.hide();
            $(this).removeClass("filter-date-dropdown__field_hover");
        }
    }
    confirm = {
        content: 'Применить'.toUpperCase(),
        className: 'custom-button-classname',
        onClick: dp => {
            dp.hide();
            $(this).removeClass("filter-date-dropdown__field_hover");
        }
    }
    constructor(el) {
        this.opts = {
            container: 'div.filter-date-dropdown',
            range: true,
            onSelect({date, formattedDate, datepicker }) {
                switch(formattedDate.length) {
                    case 1:
                        $('.-range-from-').addClass('-range-to-');
                        $(el).val(formattedDate[0].toLowerCase())
                        break;
                    case 2:
                        $(el).val(formattedDate[0].toLowerCase() + ' - ' + formattedDate[1].toLowerCase())
                }
            },
            buttons: [this.clearCustom, this.confirm],
            prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
            nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
            multipleDatesSeparator: " - ",
            navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
            dateFormat: 'd MMM',
            altFieldDateFormat: 'd MMM',
        }
        let dp = new AirDatepicker (el, this.opts);

        let span = $(el).parent().find('span');
        console.log(span);
        console.log($(el));
        span.click(function() {
            dp.visible || dp.show();
            $(el).focus();
        })
        span.hover(function () {
            $(this).parent().find('input').addClass("filter-date-dropdown__field_hover")
            }, function() {
            $(this).parent().find('input').removeClass("filter-date-dropdown__field_hover")
            },
        )
        return dp;

    }
}

for (let item of $('.filter-date-dropdown input')) {
    new Filterdp (item)
}