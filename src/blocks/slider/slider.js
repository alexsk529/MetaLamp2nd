import ionRangeSlider from 'ion-rangeslider';

class Slider {
    constructor (el, options) {

        writeVal = writeVal.bind(el);
        $(el).ionRangeSlider(options)
    }
}

let start, end;
function writeVal() {
    function separator(str) {
        str = String(str)
        if (str.length < 4) return str
        if (str.length >= 4 && str.length < 5) return str[0] + ' ' + str.slice(1) + '₽'
        else return str.slice(0, 2) + ' ' + str.slice(2) + '₽'
    }

    let el = $(this).parent().parent().find('.slider__range').find('i')


    el.eq(0).text(separator(start));
    el.eq(1).text(' - ');
    el.eq(2).text(separator(end));
}
let options = {
    type: 'double',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    step: 250,
    keyboard: true,
    hide_min_max: true,
    hide_from_to: true,
    skin: 'big',
    onStart: function (data) {
        ({from: start, to: end} = data);
        writeVal();
    },
    onChange: function (data) {
        ({from: start, to: end} = data);
        writeVal();
    }
}

for (let el of $('.js-range-slider')){
    new Slider($(el),options)
}


