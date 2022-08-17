import ionRangeSlider from 'ion-rangeslider';

class Slider {
    constructor (el, options) {

        writeVal = writeVal.bind(el);
        $(el).ionRangeSlider(options)
    }
}

let start, end;
function writeVal() {
    $(this).parent().parent().find('.slider__range').find('i').eq(0).text(start + '₽');
    $(this).parent().parent().find('.slider__range').find('i').eq(1).text(' - ');
    $(this).parent().parent().find('.slider__range').find('i').eq(2).text(end + '₽');
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


