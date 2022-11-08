import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

import './iqdropdown.scss'

    class guestDropdown {
        constructor (el, options) {

            $(el).iqDropdown(options)
            $(el).find('.button-decrement').addClass('iqdropdown-button_inactive')
            $(el)
                .find('.iqdropdown-menu')
                .append("<div class='iqdropdown-button-container'><button class='iqdropdown-confirm-button label label_color_purple'>Применить</button></div>");
            $(el).find('.iqdropdown-button-container').click(event => event.stopPropagation())
            $(el).find('.iqdropdown-menu').click(event => event.stopPropagation())


                //put toggle on confirm-button
            $(el).find('.iqdropdown-button-container button:last-child').click(function () {
                $(el).toggleClass('menu-open')
            });
                //hover on div.iqdropdown
            $(el).hover(function (){
                $(this).addClass('iqdropdown-hover')
            }, function () {
                $(this).removeClass('iqdropdown-hover')
            });
                //setting styles
            $(el).find('.iqdropdown-selection').after("<span class='material-icons expand-arrow'>&#xE5CF</span>")
            $(el).find('.iqdropdown-item').addClass("label");
            $(el).find('.counter').addClass("label");
            $(el).find('.icon-decrement').html('-');
            $(el).find('.icon-increment').html('+');
        }
    }

    class roomDropdown extends guestDropdown {
    constructor(el, options) {
        super(el, options);
        $(el).find('.iqdropdown-button-container').remove()
    }
    }

let options = {
    maxItems: 20,
    flag: false,
    onChange: function (id, count, totalItems) {
        //inactive buttons
        let data = 'data-id=' + '"' + id + '"';
        if (count != 0) $(this.el).find(`[${data}]`).find('.button-decrement').removeClass('iqdropdown-button_inactive')
        else $(this.el).find(`[${data}]`).find('.button-decrement').addClass('iqdropdown-button_inactive')
        if (totalItems == this.maxItems) $(this.el).find('.button-increment').addClass('iqdropdown-button_inactive')
        else $(this.el).find('.button-increment').removeClass('iqdropdown-button_inactive')
        // clean button initialization
        if (totalItems != 0 && this.flag === false) {
            $(this.el).find('.iqdropdown-button-container').prepend("<button class='iqdropdown-clean iqdropdown-confirm-button label label_color_purple'>Очистить</button>");
            $(this.el).find('.iqdropdown-button-container').addClass('iqdropdown-multiple-container')
            this.flag = true;
            //clean button event
            $(this.el).find('.iqdropdown-clean').click(() => {
                $(this.el).find('.iqdropdown-item-controls').each(function () {
                    while (($(this).find('.button-decrement').attr('class')) != 'button-decrement iqdropdown-button_inactive' ) {
                        $(this).find('.button-decrement').click();
                    }

                })
            });
        }

        if ( totalItems == 0 ) {
            $(this.el).find('.iqdropdown-button-container button:first-child').remove();
            $(this.el).find('.iqdropdown-button-container').removeClass('iqdropdown-multiple-container');
            this.flag = false;
        }

    },
    setSelectionText: function (itemCount, totalItems) {
        let arr = Object.values(itemCount)

        let g = arr[0] + arr[1];
        let i = arr[2];
        let firstPart = '';
        let secondPart = '';
        let message = [];
        if (g == 1) firstPart = `${g} гость`
        else if (g > 1 && g < 5) firstPart = `${g} гостя`
        else if (g >= 5 && g < 21) firstPart = `${g} гостей`

        message.push(firstPart);

        if (i == 1) secondPart = `${i} младенец`
        else if (i > 1 && i < 5) secondPart = `${i} младенца`
        else if (i >= 5 && i < 21) secondPart = `${i} младенцев`

        message.push(secondPart)

        message = message.filter(item => item != '').join(', ');

        if (totalItems == 0) return 'Сколько гостей'
        if (arr[0] == 0 && (i > 0 || arr[1] > 0)) return 'Добавьте взрослых'
        else return message;

    },
}
    for (let el of $('.iqdropdown[data-content="guests"]')) {
        let subOptions = Object.assign({}, options)
        subOptions.onChange = subOptions.onChange.bind(subOptions);
        subOptions.el = el
        // options.updateDisplay2 = options.updateDisplay2.bind(options);
        new guestDropdown(el, subOptions)
    }

    for (let el of $('.iqdropdown[data-content="rooms"]')) {
        let subOptions = Object.assign({}, options);
        subOptions.onChange = function (id, count, totalItems) {
            let data = 'data-id=' + '"' + id + '"';
            if (count != 0) $(this.el).find(`[${data}]`).find('.button-decrement').removeClass('iqdropdown-button_inactive')
            else $(this.el).find(`[${data}]`).find('.button-decrement').addClass('iqdropdown-button_inactive')
            if (totalItems == this.maxItems) $(this.el).find('.button-increment').addClass('iqdropdown-button_inactive')
            else $(this.el).find('.button-increment').removeClass('iqdropdown-button_inactive')
        }
        subOptions.onChange = subOptions.onChange.bind(subOptions);
        subOptions.el = el
        subOptions.setSelectionText = function (itemCount, totalItems) {
            let arr = Object.values(itemCount)
            let bedroom = '';
            let beds = '';
            let bathroom = '';
            let message = [];

            if (arr[0] == 1) bedroom = `${arr[0]} спальня`
            else if (arr[0] > 1 && arr[0] < 5) bedroom = `${arr[0]} спальни`
            else if (arr[0] >= 5 && arr[0] < 21) bedroom = `${arr[0]} спален`

            message.push(bedroom);

            if (arr[1] == 1) beds = `${arr[1]} кровать`
            else if (arr[1] > 1 && arr[1] < 5) beds = `${arr[1]} кровати`
            else if (arr[1] >= 5 && arr[1] < 21) beds = `${arr[1]} кроватей`

            message.push(beds);

            if (arr[2] == 1) bathroom = `${arr[2]} ванная комната`
            else if (arr[2] > 1 && arr[2] < 5) bathroom = `${arr[2]} ванные комнаты`
            else if (arr[2] >= 5 && arr[2] < 21) bathroom = `${arr[2]} ванных комнат`

            message.push(bathroom);
            message = message.filter(item => item != '').join(', ');
            if (message.length > 20) message = message.slice(0, 20) + '...';

            if (arr.every((e) => e == 0)) return 'Выберите комнаты'
            if (arr[0] == 0 && (arr[1] != 0 || arr[2] != 0)) return 'Выберите комнаты'
            else return message;
        }

        new roomDropdown(el, subOptions)
    }
