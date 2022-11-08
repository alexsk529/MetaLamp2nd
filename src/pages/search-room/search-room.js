import '../../libs/_scripts.js'

import './search-room.scss'

let pagination = require('paginationjs')


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