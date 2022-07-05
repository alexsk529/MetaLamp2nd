import $ from "jquery";
import './form-elements.scss'
import '../../blocks/item-quantity-dropdown/item-quantity-dropdown';
import inputmask from '../../../node_modules/inputmask/lib/jquery.inputmask';




$(document).ready( function() {
  // const selectElement = document.querySelector('.dropdown__select');
  // const edd = easydropdown(selectElement);
    $('.masked-text-field__field').inputmask("99/99/9999",{ "placeholder": "ДД/ММ/ГГГГ", clearMaskOnLostFocus: false, inputFormat: "dd/mm/yyyy" });
});





