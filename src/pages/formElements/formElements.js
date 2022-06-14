import './formElements.scss'
import '../../jqueryLibs/EasyDropDownTheme.scss'
import $ from "jquery";
import easydropdown from 'easydropdown'

$(document).ready(function () {
  const selectElement = document.querySelector('.dropdown__select');
  const edd = easydropdown(selectElement);
  // easydropdown.all();
});



