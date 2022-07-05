import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import $ from "jquery";
import './item-quantity-dropdown.scss'

$(document).ready( function() {
    let counter = 0;
    $('.iqdropdown-menu').append("<div class='iqdropdown-confirm-buttons'><button>Применить</button></div>");
//iqdropdown initialization
    $('.iqdropdown').iqDropdown({

        onChange: (id, count, totalItems) => {

            let guests;
            let infants;
//reset button
            counter = counter + 1;
            if (totalItems != 0 && counter == 1) {
                $('.iqdropdown-confirm-buttons').prepend("<button class='iqdropdown-clean'>Очистить</button>")
            }

            if ( totalItems == 0 ) {
                $('.iqdropdown-confirm-buttons button:first-child').remove();
                counter = 0
            }
//function of conjugation for adults
            function string1 (item) {
                let str = String(item);
                if ((item >= 5 && item <= 20) || (Number(str[str.length - 1]) >= 5 && Number(str[str.length - 1]) <= 9) || (Number(str[str.length - 1]) == 0)) {
                    guests = item + " гостей";
                } else if (Number(str[str.length - 1]) >= 2 && Number(str[str.length - 1]) <= 4) {
                    guests = item + " гостя";
                } else if (Number(str[str.length - 1]) == 1) {
                    guests = item + " гость";
                }
            }
//function of conjugation for infants
            function string2 (item) {
                let str = String(item);
                if ((item >= 5 && item <= 20) || (Number(str[str.length - 1]) >= 5 && Number(str[str.length - 1]) <= 9) || (Number(str[str.length - 1]) == 0)) {
                    infants = item + " младенцев";
                } else if (Number(str[str.length - 1]) >= 2 && Number(str[str.length - 1]) <= 4) {
                    infants = item + " младенца";
                } else if (Number(str[str.length - 1]) == 1) {
                    infants = item + " младенец";
                }
            }

            if ( $("div[data-id='infants'] span.counter").html() == 0 ) {
                string1(totalItems);
                $('.iqdropdown-selection').html(guests)
            }
            else if ( $("div[data-id='infants'] span.counter").html() != 0 ) {
                let countGuests = Number($("div[data-id='adults'] span.counter").html()) + Number($("div[data-id='children'] span.counter").html());
                let countInf = Number($("div[data-id='infants'] span.counter").html());
                string1(countGuests);
                string2(countInf);
                $('.iqdropdown-selection').html(guests + ', ' + infants)
            }
            if (totalItems == 0) {
                $('.iqdropdown-selection').html('Сколько гостей');
            }
            console.log('On change count', id, count, totalItems, 'counter', counter);
            $('button.iqdropdown-clean').click(function () {
                $('.iqdropdown-item-controls').each(function () {
                    $('.button-decrement').click()
                })
            });
//onchange ending
        },
    });
//iqdropdown ending
    $('.iqdropdown-selection').html('Сколько гостей');

    $('.iqdropdown-confirm-buttons').click(event => event.stopPropagation())
//put toggle on Применить
    $('.iqdropdown-confirm-buttons button:last-child').click(function () {
        $('.iqdropdown').toggleClass('menu-open')
    });
//put reset on Очистить



});