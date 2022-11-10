let pagination = require('paginationjs')

let paginators = document.querySelectorAll('.pagination')
if (paginators) {
    $(document).ready(function () {
        class Pagination {
            constructor(el) {
                $(el).pagination(this.options)
            }
            options = {
                dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                pageSize: 1,
                callback: function(data, pagination) {
                    pagination.el
                        .find('.paginationjs-pages li:last-child > a')
                        .replaceWith("<span class='material-icons arrow-forward'>&#xE5C8</span>")
                },
                showPrevious: false,
                pageRange: 1,
            }
        }

        for (let paginator of paginators) {
            new Pagination(paginator)
        }
    })


}





//
// $('.pagination').pagination({
//     dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//     pageSize: 1,
//     callback: function(data, pagination) {
//         $('.paginationjs .paginationjs-pages li:last-child > a').replaceWith("<span class='material-icons arrow-forward'>&#xE5C8</span>");
//     },
//     showPrevious: false,
//     pageRange: 1,
// })
//
// $('.paginationjs .paginationjs-pages li:last-child > a').replaceWith("<span class='material-icons arrow-forward'>&#xE5C8</span>");