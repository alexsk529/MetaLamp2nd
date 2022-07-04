import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import $ from "jquery";
import './item-quantity-dropdown.scss'

$(document).ready( function() {
    $('.iqdropdown').iqDropdown({

        onChange: (id, count, totalItems) => {

            let guests;
            let infants;
            let counter;
            counter =+1;
            if (totalItems != 0 && counter == 1) {
                $('.iqdropdown-confirm-buttons').prepend("<span>Очистить</span>")
            }

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
        },


    });

    $('.iqdropdown-menu').append("<div class='iqdropdown-confirm-buttons'></div>").append("<span>Применить</span>");
    $('.iqdropdown-selection').html('Сколько гостей');
});