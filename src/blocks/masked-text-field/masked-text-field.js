import $ from "jquery";
import inputmask from '../../../node_modules/inputmask/lib/jquery.inputmask';
import '../../../node_modules/inputmask/lib/extensions/inputmask.date.extensions'

$(document).ready( function() {

    $('.masked-text-field__field').inputmask({
        alias: "datetime",
        inputFormat: "dd.mm.yyyy",
        clearMaskOnLostFocus: false,
        placeholder: "ДД.ММ.ГГГГ"
    });

    $('.masked-text-field__field').addClass('masked-text-field__field_unhover');
    $('.masked-text-field__field').hover(function () {
        $('.masked-text-field__field').removeClass('masked-text-field__field_unhover')
    }, function () {
        $('.masked-text-field__field').addClass('masked-text-field__field_unhover')
    });

});