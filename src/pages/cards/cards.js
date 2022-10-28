import AirDatepicker from "air-datepicker";
import slick from "slick-carousel/slick/slick";

import '../../libs/_scripts.js'

import './cards.scss'




let clearCustom = {
    content: 'очистить'.toUpperCase(),
    className: 'custom-button-round-classname',
    onClick: dp => {
        dp.clear()
    }
}
let confirm = {
    content: 'Применить'.toUpperCase(),
    className: 'custom-button-round-classname',

}

let singleOptions = {
    container: 'div.card-calendar',
    minDate: new Date(),
    range: true,
    buttons: [clearCustom, confirm],
    prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
    nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
    multipleDatesSeparator: " ",
    navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
}

new AirDatepicker('.card-calendar', singleOptions)

for (let el of $('.card-room__img-container')) {
    $(el).slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="material-icons chevron_left">&#xE5CB</span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="material-icons chevron_right">&#xE5CC</span></button>',
    });
}

