
class RateButton {

    constructor (obj) {
        for (let el of obj) {
            this.arr.push(el);
        }
        for (let i = 0; i < this.arr.length; i++) {
            this.flags[i] = false;
        }
        let that = this;
        let hover = function () {
            obj.hover(function() {
                    let index = that.arr.indexOf(this);
                    for (let i = 0; i <= index; i++) {
                        if (!that.flags[i]) $(that.arr[i]).attr('data-before', 'star')
                    }
                }, function() {
                    for (let i = that.arr.length; i >= 0; i--) {
                        if (!that.flags[i]) $(that.arr[i]).attr('data-before', 'star_border')
                    }
                })
        }
        hover();
        obj.click(function() {
            let index = that.arr.indexOf(this);
            if (that.flags.includes(true) && (that.flags[index] !== false)) {
                for (let el of that.arr) {
                    $(el).attr('data-before','star_border');
                }
                that.flags = that.flags.map(() => false)
            } else {
                for (let i = 0; i <= index; i++) {
                    if (!that.flags[i]) {
                        $(that.arr[i]).off('mouseover');
                        $(that.arr[i]).off('mouseleave');
                        $(that.arr[i]).attr('data-before', 'star')
                        that.flags [i] = !that.flags[i]
                    }
                }
            }
            if (that.arr.indexOf(true) === -1) hover()
        })
    }
    arr= []
    flags= []
}

let obj = $('.rate-button');
for (let el of obj) {
    let rate = Number($(el).attr('data-rate'));
    new RateButton($(el).find('span'))
    $(el).find(`span:nth-child(${rate})`).trigger('click')
}
