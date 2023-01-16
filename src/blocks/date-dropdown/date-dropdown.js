import AirDatepicker from 'air-datepicker';

import './date-dropdown.scss';

//'div.date-dropdown'
const $firstInputs = $('.start');
if ($firstInputs) {
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
        position({$datepicker, $target, $points}) {
            if (window.innerWidth < 420) {
                console.log('tick');
                $datepicker.style.top = '115px';
                $datepicker.style.left = '-10px';
                $datepicker.style.transform = 'scale(0.85)';
            }
            else {
                $datepicker.style.top = '165px';
                $datepicker.style.left = '29px';
            }
        }
    }

    class Datedropdown extends AirDatepicker {
        start = $(this);
        end = $(this).parent().parent().parent().find('.end');

        constructor(el, opts) {
            super(el, opts)
            const start = $(el);
            const end = $(el).parent().parent().parent().find('.end');
            const wrapper = $(el).parent().parent().parent().find('.date-dropdown__wrapper');

            start.val('ДД.ММ.ГГГГ');
            end.val('ДД.ММ.ГГГГ');

            end.click(() => {
                this.visible || this.show();
                start.addClass("item_hover");
            })

            end.blur(() => {
                this.inFocus || !this.visible || this.hide();
                start.removeClass("item_hover");
            })

            wrapper.find('span').click(() => {
                start.focus()
            })

            wrapper.find('span').hover(function (){
                $(this).parent().find('input').addClass("item_hover")
            }, function () {
                $(this).parent().find('input').removeClass("item_hover")
            })

            start.focus(() => {
                end.addClass("item_hover")});
            start.blur(() => {
                end.removeClass("item_hover")});

            $('.date-dropdown .air-datepicker-navigation').find('svg').remove();
        }
    }

    let datedropArr = [];
    for (let firstInput of $firstInputs) {
        opts.container = firstInput.closest('.date-dropdown');
        let dp = new Datedropdown(firstInput, opts);
        console.log(dp);
        datedropArr.push(dp);
    }
}













