import './form-elements.scss'
import '../../jqueryLibs/EasyDropDownTheme.scss'
import $ from "jquery";
import easydropdown from 'easydropdown'
import 'material-icons/iconfont/material-icons.css'

$(document).ready(function () {
  const selectElement = document.querySelector('.dropdown__select');
  const edd = easydropdown(selectElement);
  // easydropdown.all();
});



