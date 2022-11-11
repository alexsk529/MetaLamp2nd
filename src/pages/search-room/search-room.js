import '../../libs/_scripts.js'

import './search-room.scss'

$(document).ready(function () {
    const $iqdropdowns = $('.iqdropdown');
    for (let i = 0; i < 2; i++) {
        const $increments = $iqdropdowns.eq(i).find('.icon-increment');
        if (i == 0) {
            $increments.eq(0).click()
            $increments.eq(0).click()
            $increments.eq(0).click()
            $increments.eq(2).click()
        }
        if (i == 1) {
            $increments.eq(0).click()
            $increments.eq(0).click()
            $increments.eq(1).click()
            $increments.eq(1).click()
        }
    }

})










