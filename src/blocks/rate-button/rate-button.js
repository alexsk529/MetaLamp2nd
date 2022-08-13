import $ from "jquery";

let obj = $('.rate-button').eq(0).find('span');
let arr = [];
for (let el of obj) {
    arr.push(el);
}
obj.hover(
    function() {
        let index = arr.indexOf(this);
        for (let i = 0; i <= index; i++) {
            $(arr[i]).attr('data-before','star')
        }
    }, function () {
        let index = arr.indexOf($(this));
        for (let i = arr.length; i > index; i--) {
            $(arr[i]).attr('data-before','star_border')
        }
    });

obj.click(function () {
    let index = arr.indexOf(this);
    for (let i = 0; i <= index; i++) {
        $(arr[i]).attr('data-before','star')
    }
})
