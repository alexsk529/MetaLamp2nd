
import './form-elements.scss'
import '../../blocks/iqdropdown/iqdropdown';
import '../../blocks/masked-text-field/masked-text-field';
import '../../blocks/date-dropdown/date-dropdown';
import '../../blocks/filter-date-dropdown/filter-date-dropdown';
import '../../blocks/subscription-text-field/subscription-text-field';
import $ from "jquery";

let arr = [];
arr.push($('.box-and-label__label:not(:first)'));
for (let el of arr) {
    el.find('input').trigger('click');
}














