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
    for (let el of $('.iqdropdown_width_wide')) {
        let options = {
            el: el,
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
                $(el).find('.iqdropdown-clean').click(function () {
                    $(el).find('.iqdropdown-item-controls').each(function () {
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
                if (g == 1) firstPart = `${g} гость`
                else if (g < 5) firstPart = `${g} гостя`
                else firstPart = `${g} гостей`

                if (i == 1) secondPart = `${i} младенец`
                else if (g < 5) secondPart = `${i} младенца`
                else secondPart = `${i} младенцев`

                if (totalItems == 0) return 'Сколько гостей'
                else if (arr[0] == 0 && (i > 0 || arr[1] > 0)) return 'Добавьте взрослых'
                else if (g > 0 && i == 0) return firstPart
                else if (g > 0 && i > 0) return `${firstPart}, ${secondPart}`

            },
        }
        options.onChange = options.onChange.bind(options);
        // options.updateDisplay2 = options.updateDisplay2.bind(options);
        new guestDropdown(el, options)
    }



// //confirm button
//     let counter = 0;
//     $('.iqdropdown-menu').append("<div class='iqdropdown-button-container'><button class='iqdropdown-confirm-button label label_color_purple'>Применить</button></div>");
// //iqdropdown initialization
//     $('.iqdropdown').iqDropdown({
//         maxItems: 20,
//         onChange: (id, count, totalItems) => {
//             let guests;
//             let infants;
// //reset button
//             counter = counter + 1;
//             if (totalItems != 0 && counter == 1) {
//                 $('.iqdropdown-button-container').prepend("<button class='iqdropdown-clean iqdropdown-confirm-button label label_color_purple'>Очистить</button>");
//                 $('.iqdropdown-button-container').addClass('iqdropdown-multiple-container')
//             }
//
//             if ( totalItems == 0 ) {
//                 $('.iqdropdown-button-container button:first-child').remove();
//                 $('.iqdropdown-button-container').removeClass('iqdropdown-multiple-container');
//                 counter = 0
//             }
// //function of conjugation adults
//             function string1 (item) {
//                 let str = String(item);
//                 if ((item >= 5 && item <= 20) || (Number(str[str.length - 1]) >= 5 && Number(str[str.length - 1]) <= 9) || (Number(str[str.length - 1]) == 0)) {
//                     guests = item + " гостей";
//                 } else if (Number(str[str.length - 1]) >= 2 && Number(str[str.length - 1]) <= 4) {
//                     guests = item + " гостя";
//                 } else if (Number(str[str.length - 1]) == 1) {
//                     guests = item + " гость";
//                 }
//             }
// //function of conjugation infants
//             function string2 (item) {
//                 let str = String(item);
//                 if ((item >= 5 && item <= 20) || (Number(str[str.length - 1]) >= 5 && Number(str[str.length - 1]) <= 9) || (Number(str[str.length - 1]) == 0)) {
//                     infants = item + " младенцев";
//                 } else if (Number(str[str.length - 1]) >= 2 && Number(str[str.length - 1]) <= 4) {
//                     infants = item + " младенца";
//                 } else if (Number(str[str.length - 1]) == 1) {
//                     infants = item + " младенец";
//                 }
//             }
//
//             if ( $("div[data-id='infants'] span.counter").html() == 0 ) {
//                 string1(totalItems);
//                 $('.iqdropdown-selection').html(guests)
//             }
//             else if ( $("div[data-id='infants'] span.counter").html() != 0 ) {
//                 let countGuests = Number($("div[data-id='adults'] span.counter").html()) + Number($("div[data-id='children'] span.counter").html());
//                 let countInf = Number($("div[data-id='infants'] span.counter").html());
//                 string1(countGuests);
//                 string2(countInf);
//                 $('.iqdropdown-selection').html(guests + ', ' + infants)
//             }
//             if (totalItems == 0) {
//                 $('.iqdropdown-selection').html('Сколько гостей');
//             }
//             console.log('On change count', id, count, totalItems, 'counter', counter);
// //put reset on Очистить
//             $('button.iqdropdown-clean').click(function () {
//                 $('.iqdropdown-item-controls').each(function () {
//                     $('.button-decrement').click()
//                 })
//             });
// //inactive buttons activations
//
//                 $('[data-id]').each(function () {
//                     if (count != 0) {
//                         $('[data-id=' + id + ']').find('.button-decrement').removeClass('iqdropdown-button_inactive')
//                     } else {
//                         $('[data-id=' + id + ']').find('.button-decrement').addClass('iqdropdown-button_inactive')
//                     }
//                 });
//
// //onchange ending
//         },
//     });
// //iqdropdown ending
//
//     $('.button-decrement').addClass('iqdropdown-button_inactive')
//     $('.iqdropdown-selection').html('Сколько гостей');
//
//     $('.iqdropdown-button-container').click(event => event.stopPropagation())
//     $('.iqdropdown-menu').click(event => event.stopPropagation())
// //put toggle on Применить
//     $('.iqdropdown-button-container button:last-child').click(function () {
//         $('.iqdropdown').toggleClass('menu-open')
//     });
// //hover on div.iqdropdown
//     $('.iqdropdown').hover(function (){
//         $(this).addClass('iqdropdown-hover')
//     }, function () {
//         $(this).removeClass('iqdropdown-hover')
//     });
// //setting styles
//     $('.iqdropdown-selection').after("<span class='material-icons expand-arrow'>&#xE5CF</span>")
//     $('.iqdropdown-item').addClass("label");
//     $('.counter').addClass("label");
//     $('.icon-decrement').html('-');
//     $('.icon-increment').html('+');
//

