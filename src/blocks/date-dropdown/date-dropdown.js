import AirDatepicker from 'air-datepicker';
import './date-dropdown.scss';
import $ from "jquery";



class Datedropdown {
    start = $(this);
    end = $(this).parent().parent().parent().find('#end');
    clearCustom = {
        content: 'очистить'.toUpperCase(),
        className: 'custom-button-classname',
        onClick: dp => {
            dp.clear()
            dp.hide();
            this.start.removeClass("date-dropdown__field_hover");
            this.end.removeClass("date-dropdown__field_hover");
        }
    }
    confirm = {
        content: 'Применить'.toUpperCase(),
        className: 'custom-button-classname',
        onClick: dp => {
            dp.hide();
            this.start.removeClass("date-dropdown__field_hover");
            this.end.removeClass("date-dropdown__field_hover");
        }
    }
    constructor(el) {
        let start = $(el);
        let end = $(el).parent().parent().parent().find('#end');
        let wrapper = $(el).parent().parent().parent().find('.date-dropdown__wrapper');
        let opts = {
            container: 'div.date-dropdown',
            range: true,
            onSelect({date, formattedDate, datepicker }) {
                switch(formattedDate.length) {
                    case 0:
                        start.val('ДД.ММ.ГГГГ');
                        end.val('ДД.ММ.ГГГГ');
                        break;
                    case 1:
                        start.val(formattedDate[0]);
                        end.val('ДД.ММ.ГГГГ');
                        $('.-range-from-').addClass('-range-to-');
                        break;
                    case 2:
                        start.val(formattedDate[0]);
                        end.val(formattedDate[1]);
                }
            },
            buttons: [this.clearCustom, this.confirm],
            prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
            nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
            multipleDatesSeparator: " ",
            navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
        }

        let dp = new AirDatepicker (el, opts);


        start.val('ДД.ММ.ГГГГ');
        end.val('ДД.ММ.ГГГГ');

        // end.click(function () {
        //     start.focus();
        // })

        end.click(() => {
            dp.visible || dp.show();
            start.addClass("date-dropdown__field_hover");
        })

        end.blur(() => {
            dp.inFocus || !dp.visible || dp.hide();
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

        $('.date-dropdown air-datepicker-navigation').find('svg').remove();

        return dp;
    }
}

for (let el of $('.date-dropdown #start')) {
    new Datedropdown('#start')
}




// } else $('#end').removeClass("date-dropdown__field_hover")

// $(document).click(function (){dp.hide()})
//
// $('#end, #start, .air-datepicker').click(function (event) {
//     event.stopPropagation();
//     dp.show();
// });
//
//
// $('.date-dropdown__item').find('span').click(function () {
//     event.stopPropagation();
//     dp.show();
// })








