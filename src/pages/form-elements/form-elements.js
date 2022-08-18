
import './form-elements.scss'
import '../../blocks/iqdropdown/iqdropdown';
import '../../blocks/masked-text-field/masked-text-field';
import '../../blocks/date-dropdown/date-dropdown';
import '../../blocks/filter-date-dropdown/filter-date-dropdown';
import '../../blocks/subscription-text-field/subscription-text-field';
import '../../blocks/like-button/like-button';
import '../../blocks/rate-button/rate-button';
import '../../blocks/slider/slider';
var pagination = require('paginationjs')
// import '../../libs/jquery.simplePagination';
// import '../../libs/simplePagination.css';




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

$('.rate-button').eq(0).find('span:nth-child(4)').trigger('click')
$('.rate-button').eq(1).find('span:nth-child(5)').trigger('click')


    $('.pagination').pagination({
        dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        pageSize: 1,
        callback: function(data, pagination) {
            $('.paginationjs .paginationjs-pages li:last-child > a').replaceWith("<span class='material-icons arrow-forward'>&#xE5C8</span>");
        },
        showPrevious: false,
        pageRange: 1,
    })

    $('.paginationjs .paginationjs-pages li:last-child > a').replaceWith("<span class='material-icons arrow-forward'>&#xE5C8</span>");

for (let i = 0; i < 2; i++) {
    let dp = $('.iqdropdown_width_narrow').eq(1)
    if (i == 1) dp.click()

    dp.find('.icon-increment').eq(0).click()
    dp.find('.icon-increment').eq(1).click()
}














