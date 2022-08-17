import '../../libs/inputmask';


$(document).ready( function() {
    let im = new Inputmask({
        alias: "datetime",
        inputFormat: "dd.mm.yyyy",
        clearMaskOnLostFocus: false,
        placeholder: "ДД.ММ.ГГГГ"
    });
    im.mask($('.masked-text-field__field'))

    $('.masked-text-field__field').addClass('masked-text-field__field_unhover');
    $('.masked-text-field__field').hover(function () {
        $('.masked-text-field__field').removeClass('masked-text-field__field_unhover')
    }, function () {
        $('.masked-text-field__field').addClass('masked-text-field__field_unhover')
    });

});