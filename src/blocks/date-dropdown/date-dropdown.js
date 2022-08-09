import AirDatepicker from 'air-datepicker';
import './date-dropdown.scss';
import $ from "jquery";

let confirm = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: dp => {dp.hide()}
}

class Datedropdown {
    constructor(el) {

        this.opts = {
            container: 'div.date-dropdown',
            range: true,
            onSelect({date, formattedDate, datepicker }) {
                // fnSelect(formattedDate, datepicker)
                if ( formattedDate.length == 0 ) {
                    $('#start').val('ДД.ММ.ГГГГ');
                    $('#end').val('ДД.ММ.ГГГГ');
                }
                if ( formattedDate.length == 1 ) {
                    $('#start').val(formattedDate[0]);
                    $('#end').val('ДД.ММ.ГГГГ');
                    $('.-range-from-').addClass('-range-to-');
                }

                if ( formattedDate.length == 2 ) {
                    $('#start').val(formattedDate[0]);
                    $('#end').val(formattedDate[1]);
                }
            },
            buttons: ['clear', confirm],
            prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
            nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
            multipleDatesSeparator: " ",
            navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
        }

        let dp = new AirDatepicker (el, this.opts);
        let wrapper = $('.date-dropdown__wrapper');
        let start = $('#start');
        let end = $('#end');

        start.val('ДД.ММ.ГГГГ');
        end.val('ДД.ММ.ГГГГ');

        // end.click(function () {
        //     start.focus();
        // })

        end.click(function () {
            dp.visible || dp.show();
        })

        end.blur(function () {
            dp.inFocus || dp.visible || dp.opts.isMobile || dp.hide()
        })

        wrapper.find('span').click(function () {
            start.focus();
        })

        wrapper.find('span').hover(function (){
            $(this).parent().find('input').addClass("date-dropdown__field_hover")
        }, function () {
            $(this).parent().find('input').removeClass("date-dropdown__field_hover")
        })

        start.focus(function () {
            end.addClass("date-dropdown__field_hover")});
        start.blur(function () {
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








