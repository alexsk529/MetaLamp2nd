$(document).ready(function () {
    const $iqdropdowns = $('.card-room-parameters .iqdropdown');
    for (let dropdown of $iqdropdowns) {
        const $increments = $(dropdown).find('.icon-increment');
        $increments.eq(0).click()
        $increments.eq(0).click()
        $increments.eq(0).click()
    }

    const $start = $('.card-room-parameters .start');
    const $end = $('.card-room-parameters .end');
    $start.val('19.08.2019');
    $end.val('23.08.2019');
})