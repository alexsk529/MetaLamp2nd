import slick from "slick-carousel/slick/slick";

import '../../libs/slick.scss'
import '../../libs/slick-theme.scss'

const $cardRoomContainers = $('.card-room__img-container');

if ($cardRoomContainers) {
    for (let roomContainer of $cardRoomContainers) {
        $(roomContainer).slick({
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="material-icons chevron_left">&#xE5CB</span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="material-icons chevron_right">&#xE5CC</span></button>',
        });
    }
}



