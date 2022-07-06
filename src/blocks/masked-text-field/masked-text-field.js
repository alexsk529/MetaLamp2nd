import $ from "jquery";

$(document).ready( function() {
    // const selectElement = document.querySelector('.dropdown__select');
    // const edd = easydropdown(selectElement);
    $('.masked-text-field__field').inputmask("99/99/9999",{ "placeholder": "ДД/ММ/ГГГГ", clearMaskOnLostFocus: false, inputFormat: "dd/mm/yyyy" });
    $('.masked-text-field__field').addClass('masked-text-field__field_unhover');
    $('.masked-text-field__field').hover(function () {
        $('.masked-text-field__field').removeClass('masked-text-field__field_unhover')
    }, function () {
        $('.masked-text-field__field').addClass('masked-text-field__field_unhover')
    });

});