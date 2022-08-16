
import './form-elements.scss'
import '../../blocks/iqdropdown/iqdropdown';
import '../../blocks/masked-text-field/masked-text-field';
import '../../blocks/date-dropdown/date-dropdown';
import '../../blocks/filter-date-dropdown/filter-date-dropdown';
import '../../blocks/subscription-text-field/subscription-text-field';
import '../../blocks/like-button/like-button';
import '../../blocks/rate-button/rate-button';
import '../../blocks/slider/slider';
import $ from "jquery";



$('.text-field').eq(1).find('input').addClass('text-field__field_hover');

let arr = [];
arr.push($('.box-and-label__label:not(:first)'));
for (let el of arr) {
    el.find('input').trigger('click');
}

$('.toggle__item:first').find('input').trigger('click');

for (let i = 1; i < 3; i++) {
    $('.like-button').eq(0).trigger('click')
}

for (let i = 1; i < 13; i++) {
    $('.like-button').eq(1).trigger('click')
}











