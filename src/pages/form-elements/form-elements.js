
import './form-elements.scss'
import '../../libs/_scripts.js'
let pagination = require('paginationjs')
// import '../../libs/jquery.simplePagination';
// import '../../libs/simplePagination.css';


//iqdropdown

$('.text-field').eq(1).find('input').addClass('text-field__field_hover');


$('.toggle__item:first').find('input').attr('checked', 'checked');

for (let i = 0; i < 3; i++) {

    if (i == 0) window.likeButtons[i].counter = 2;
    else {
        window.likeButtons[i].counter = 11;
        window.likeButtons[i].array[0].trigger('click')
    }
    window.likeButtons[i].updateCounter();

}


$('.rate-button').eq(0).find('span:nth-child(4)').trigger('click')
$('.rate-button').eq(1).find('span:nth-child(5)').trigger('click')


$('.click-me').eq(1).addClass('click-me_hover')
$('.click-me').eq(3).addClass('click-me_hover')
$('.button_style_without-border').eq(1).addClass('button_style_without-border_hover')

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
    let dp = $('.iqdropdown_width_narrow')

    if (i == 1) dp.eq(1).click()
    for (let el of dp) {
        $(el).find('.icon-increment').eq(0).click()
        $(el).find('.icon-increment').eq(1).click()
    }
    dp.eq(0).off('click')
}

$('.expandable-checkbox').eq(0).off('click')
$('.expandable-checkbox').eq(1).click()

for (let i = 0; i < 2; i++) {
    let dp = $('.form__Block').eq(1).find('.iqdropdown_width_wide').eq(1);
    if (i == 0) {
        $('.form__Block').eq(1).find('.iqdropdown_width_wide').click();
        dp.find('.icon-increment').eq(1).click()
    }
    dp.find('.icon-increment').eq(0).click()
}
















