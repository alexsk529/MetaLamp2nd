import '../../libs/_scripts.js'

import './room-details.scss'

const reviews = document.querySelectorAll('.review');
console.log(reviews)

const revCounter = document.querySelector('.room-details__reviews .room-details__title span');

function declOfNum(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

revCounter.innerHTML = `${reviews.length} ${declOfNum(reviews.length, ['отзыв','отзыва','отзывов'])}`;