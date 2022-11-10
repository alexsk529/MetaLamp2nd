
import './form-elements.scss'
import '../../libs/_scripts.js'


$('.text-field').eq(1).find('input').addClass('text-field__field_hover'); //hover to the text-field forcefully

$('.click-me').eq(1).addClass('click-me_hover')
$('.click-me').eq(3).addClass('click-me_hover')
$('.button_style_without-border').eq(1).addClass('button_style_without-border_hover')


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


















