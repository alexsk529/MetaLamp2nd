/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/item-quantity-dropdown/item-quantity-dropdown.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/item-quantity-dropdown/item-quantity-dropdown.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var item_quantity_dropdown_lib_item_quantity_dropdown_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! item-quantity-dropdown/lib/item-quantity-dropdown.min */ "./node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js");
/* harmony import */ var item_quantity_dropdown_lib_item_quantity_dropdown_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(item_quantity_dropdown_lib_item_quantity_dropdown_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_quantity_dropdown_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-quantity-dropdown.scss */ "./src/blocks/item-quantity-dropdown/item-quantity-dropdown.scss");



jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  var counter = 0;
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-menu').append("<div class='iqdropdown-button-container'><button class='iqdropdown-confirm-button label label_color_purple'>Применить</button></div>"); //iqdropdown initialization

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown').iqDropdown({
    onChange: function onChange(id, count, totalItems) {
      var guests;
      var infants; //reset button

      counter = counter + 1;

      if (totalItems != 0 && counter == 1) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-button-container').prepend("<button class='iqdropdown-clean iqdropdown-confirm-button label label_color_purple'>Очистить</button>");
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-button-container').addClass('iqdropdown-multiple-container');
      }

      if (totalItems == 0) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-button-container button:first-child').remove();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-button-container').removeClass('iqdropdown-multiple-container');
        counter = 0;
      } //function of conjugation for adults


      function string1(item) {
        var str = String(item);

        if (item >= 5 && item <= 20 || Number(str[str.length - 1]) >= 5 && Number(str[str.length - 1]) <= 9 || Number(str[str.length - 1]) == 0) {
          guests = item + " гостей";
        } else if (Number(str[str.length - 1]) >= 2 && Number(str[str.length - 1]) <= 4) {
          guests = item + " гостя";
        } else if (Number(str[str.length - 1]) == 1) {
          guests = item + " гость";
        }
      } //function of conjugation for infants


      function string2(item) {
        var str = String(item);

        if (item >= 5 && item <= 20 || Number(str[str.length - 1]) >= 5 && Number(str[str.length - 1]) <= 9 || Number(str[str.length - 1]) == 0) {
          infants = item + " младенцев";
        } else if (Number(str[str.length - 1]) >= 2 && Number(str[str.length - 1]) <= 4) {
          infants = item + " младенца";
        } else if (Number(str[str.length - 1]) == 1) {
          infants = item + " младенец";
        }
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("div[data-id='infants'] span.counter").html() == 0) {
        string1(totalItems);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-selection').html(guests);
      } else if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("div[data-id='infants'] span.counter").html() != 0) {
        var countGuests = Number(jquery__WEBPACK_IMPORTED_MODULE_1___default()("div[data-id='adults'] span.counter").html()) + Number(jquery__WEBPACK_IMPORTED_MODULE_1___default()("div[data-id='children'] span.counter").html());
        var countInf = Number(jquery__WEBPACK_IMPORTED_MODULE_1___default()("div[data-id='infants'] span.counter").html());
        string1(countGuests);
        string2(countInf);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-selection').html(guests + ', ' + infants);
      }

      if (totalItems == 0) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-selection').html('Сколько гостей');
      }

      console.log('On change count', id, count, totalItems, 'counter', counter); //put reset on Очистить

      jquery__WEBPACK_IMPORTED_MODULE_1___default()('button.iqdropdown-clean').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-item-controls').each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.button-decrement').click();
        });
      }); //inactive buttons activations

      jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-id]').each(function () {
        if (count != 0) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-id=' + id + ']').find('.button-decrement').removeClass('iqdropdown-button_inactive');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-id=' + id + ']').find('.button-decrement').addClass('iqdropdown-button_inactive');
        }
      }); //onchange ending
    }
  }); //iqdropdown ending

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.button-decrement').addClass('iqdropdown-button_inactive');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-selection').html('Сколько гостей');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-button-container').click(function (event) {
    return event.stopPropagation();
  }); //put toggle on Применить

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-button-container button:last-child').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown').toggleClass('menu-open');
  }); //hover on div.iqdropdown

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('iqdropdown-hover');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('iqdropdown-hover');
  }); //setting styles

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-selection').after("<span class='material-icons expand-arrow'>&#xE5CF</span>");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iqdropdown-item').addClass("label");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.counter').addClass("label");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.icon-decrement').html('-');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.icon-increment').html('+');
});

/***/ }),

/***/ "./src/blocks/masked-text-field/masked-text-field.js":
/*!***********************************************************!*\
  !*** ./src/blocks/masked-text-field/masked-text-field.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  // const selectElement = document.querySelector('.dropdown__select');
  // const edd = easydropdown(selectElement);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.masked-text-field__field').inputmask({
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    inputmode: 'numeric',
    placeholder: 'ДД/ММ/ГГГГ'
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.masked-text-field__field').addClass('masked-text-field__field_unhover');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.masked-text-field__field').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.masked-text-field__field').removeClass('masked-text-field__field_unhover');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.masked-text-field__field').addClass('masked-text-field__field_unhover');
  });
});

/***/ }),

/***/ "./src/pages/form-elements/form-elements.js":
/*!**************************************************!*\
  !*** ./src/pages/form-elements/form-elements.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_elements_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-elements.scss */ "./src/pages/form-elements/form-elements.scss");
/* harmony import */ var _blocks_item_quantity_dropdown_item_quantity_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/item-quantity-dropdown/item-quantity-dropdown */ "./src/blocks/item-quantity-dropdown/item-quantity-dropdown.js");
/* harmony import */ var _blocks_masked_text_field_masked_text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/masked-text-field/masked-text-field */ "./src/blocks/masked-text-field/masked-text-field.js");
/* harmony import */ var _node_modules_inputmask_lib_jquery_inputmask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/inputmask/lib/jquery.inputmask */ "./node_modules/inputmask/lib/jquery.inputmask.js");






/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/blocks/item-quantity-dropdown/item-quantity-dropdown.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/blocks/item-quantity-dropdown/item-quantity-dropdown.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".iqdropdown {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 320px;\n  height: 44px;\n  margin: 0 0 20px 0;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  padding-left: 15px;\n  padding-right: 10px;\n  border-radius: 4px;\n  border: 1px rgba(31, 32, 65, 0.25) solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n}\n\n.iqdropdown-hover {\n  border-color: rgba(31, 32, 65, 0.5);\n  outline: none;\n}\n\n.iqdropdown * {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.iqdropdown *::after, .iqdropdown *::before {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\n.iqdropdown *:not(input) {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.iqdropdown *:focus {\n  outline: none;\n}\n\n.iqdropdown h1, .iqdropdown h2, .iqdropdown h3, .iqdropdown h4, .iqdropdown h5, .iqdropdown h6 {\n  margin: 0;\n}\n\n.iqdropdown p {\n  margin: 0;\n}\n\n.iqdropdown ul, .iqdropdown ol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.iqdropdown a {\n  cursor: pointer;\n}\n\n.iqdropdown button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n}\n\n.iqdropdown select::-ms-expand {\n  display: none;\n}\n\n.iqdropdown input::-ms-clear {\n  display: none;\n  height: 0;\n  width: 0;\n}\n\n.iqdropdown .icon-decrement {\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 400;\n}\n\n.iqdropdown .iqdropdown-menu {\n  background-color: #FFFFFF;\n  cursor: default;\n  display: none;\n  left: 0;\n  border: 1px rgba(31, 32, 65, 0.5) solid;\n  border-radius: 0 0 4px 4px;\n  border-top: none;\n  margin: 1px -1px -1px;\n  padding-top: 7px;\n  padding-left: 15px;\n  padding-bottom: 13px;\n  position: absolute;\n  right: 0;\n  top: 100%;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  z-index: 99999;\n}\n\n.iqdropdown .iqdropdown-menu-option {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 30px;\n  margin-right: 7px;\n  margin-bottom: 7px;\n}\n\n.iqdropdown .iqdropdown-menu-close {\n  color: #002674;\n  font-size: 14px;\n  font-weight: 600;\n  height: 20px;\n  margin: 20px 0;\n  padding: 0 15px;\n  text-align: right;\n  width: 100%;\n}\n\n.iqdropdown.menu-open .iqdropdown-menu {\n  display: block;\n}\n\n@media only screen and (max-width: 640px) {\n  .iqdropdown .iqdropdown-menu.mobile-top-menu {\n    top: -285px;\n  }\n}\n.iqdropdown-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-right: 10px;\n}\n\n.iqdropdown .iqdropdown-item-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 92px;\n}\n\n.counter {\n  line-height: 30px;\n}\n\n.iqdropdown-button-container {\n  padding-top: 13px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: end;\n  margin-right: 7px;\n}\n\n.iqdropdown-multiple-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.iqdropdown-confirm-button {\n  display: block;\n}\n\n.iqdropdown .iqdropdown-item-controls button {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  text-align: center;\n}\n\n.button-decrement, .button-increment {\n  border-color: rgba(31, 32, 65, 0.5);\n  color: rgba(31, 32, 65, 0.5);\n}\n\n.iqdropdown .iqdropdown-button_inactive {\n  border-color: rgba(31, 32, 65, 0.25);\n  color: rgba(31, 32, 65, 0.25);\n  cursor: auto;\n}\n\n.iqdropdown .iqdropdown-selection {\n  color: rgba(31, 32, 65, 0.75);\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n}\n\n.iqdropdown.menu-open {\n  border-color: rgba(31, 32, 65, 0.5);\n  border-radius: 4px 4px 0px 0px;\n}", "",{"version":3,"sources":["webpack://./src/blocks/item-quantity-dropdown/item-quantity-dropdown.scss"],"names":[],"mappings":"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","sourcesContent":["//html {\r\n//    box-sizing: border-box\r\n//}\r\n//\r\n//html * {\r\n//    box-sizing: inherit\r\n//}\r\n//\r\n//html *::after, html *::before {\r\n//    box-sizing: inherit\r\n//}\r\n//\r\n//body {\r\n//    margin: 0;\r\n//    position: inherit\r\n//}\r\n\r\n.iqdropdown {\r\n    -webkit-tap-highlight-color: transparent;\r\n    box-sizing: border-box;\r\n    width: 320px;\r\n    height: 44px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 13px;\r\n    padding-bottom: 13px;\r\n    padding-left: 15px;\r\n    padding-right: 10px;\r\n    border-radius: 4px;\r\n    border: 1px rgba(31, 32, 65, 0.25) solid;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.iqdropdown-hover {\r\n    border-color: rgba(31, 32, 65, 0.5);\r\n    outline: none;\r\n}\r\n\r\n.iqdropdown * {\r\n    -webkit-tap-highlight-color: transparent;\r\n    box-sizing: border-box\r\n}\r\n\r\n.iqdropdown *::after, .iqdropdown *::before {\r\n    box-sizing: inherit\r\n}\r\n\r\n.iqdropdown *:not(input) {\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none\r\n}\r\n\r\n.iqdropdown *:focus {\r\n    outline: none\r\n}\r\n\r\n.iqdropdown h1, .iqdropdown h2, .iqdropdown h3, .iqdropdown h4, .iqdropdown h5, .iqdropdown h6 {\r\n    margin: 0\r\n}\r\n\r\n.iqdropdown p {\r\n    margin: 0\r\n}\r\n\r\n.iqdropdown ul, .iqdropdown ol {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n.iqdropdown a {\r\n    cursor: pointer\r\n}\r\n\r\n.iqdropdown button {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: none;\r\n    border: 0;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.iqdropdown select::-ms-expand {\r\n    display: none\r\n}\r\n\r\n.iqdropdown input::-ms-clear {\r\n    display: none;\r\n    height: 0;\r\n    width: 0\r\n}\r\n\r\n.iqdropdown .icon-decrement {\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    font-weight: 400;\r\n}\r\n\r\n.iqdropdown .iqdropdown-menu {\r\n    background-color: #FFFFFF;\r\n    cursor: default;\r\n    display: none;\r\n    left: 0;\r\n    border: 1px rgba(31, 32, 65, 0.5) solid;\r\n    border-radius: 0 0 4px 4px;\r\n    border-top: none;\r\n    margin: 1px -1px -1px;\r\n    padding-top: 7px;\r\n    padding-left: 15px;\r\n    padding-bottom: 13px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 100%;\r\n    transition: all 0.2s ease-in-out;\r\n    z-index: 99999\r\n}\r\n\r\n.iqdropdown .iqdropdown-menu-option {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 30px;\r\n    margin-right: 7px;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.iqdropdown .iqdropdown-menu-close {\r\n    color: #002674;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    height: 20px;\r\n    margin: 20px 0;\r\n    padding: 0 15px;\r\n    text-align: right;\r\n    width: 100%\r\n}\r\n\r\n.iqdropdown.menu-open .iqdropdown-menu {\r\n    display: block\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n    .iqdropdown .iqdropdown-menu.mobile-top-menu {\r\n        top: -285px\r\n    }\r\n}\r\n\r\n.iqdropdown-content {\r\n    flex: 1;\r\n    padding-right: 10px\r\n}\r\n\r\n.iqdropdown .iqdropdown-item-controls {\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: space-between;\r\n    width: 92px;\r\n}\r\n\r\n.counter {\r\n    line-height: 30px;\r\n}\r\n\r\n.iqdropdown-button-container {\r\n    padding-top: 13px;\r\n    display: flex;\r\n    justify-content: end;\r\n    margin-right: 7px;\r\n}\r\n\r\n.iqdropdown-multiple-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.iqdropdown-confirm-button {\r\n    display: block;\r\n}\r\n\r\n.iqdropdown .iqdropdown-item-controls button {\r\n    align-items: center;\r\n    border: 1px solid;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    transition: all 0.2s ease-in-out;\r\n    text-align: center;\r\n}\r\n\r\n.button-decrement, .button-increment {\r\n    border-color: rgba(31, 32, 65, 0.5);\r\n    color: rgba(31, 32, 65, 0.5);\r\n}\r\n\r\n.iqdropdown .iqdropdown-button_inactive {\r\n    border-color: rgba(31, 32, 65, 0.25);\r\n    color: rgba(31, 32, 65, 0.25);\r\n    cursor: auto;\r\n}\r\n\r\n.iqdropdown .iqdropdown-selection {\r\n    color: rgba(31, 32, 65, 0.75);\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 18px;\r\n    flex: 1;\r\n    position: relative\r\n}\r\n\r\n.iqdropdown.menu-open {\r\n    border-color: rgba(31, 32, 65, 0.5);\r\n    border-radius: 4px 4px 0px 0px;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Montserrat-Regular.ttf */ "./src/fonts/Montserrat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Montserrat-Regular.woff */ "./src/fonts/Montserrat-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Montserrat-Regular.svg */ "./src/fonts/Montserrat-Regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Montserrat-ExtraBold.ttf */ "./src/fonts/Montserrat-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Montserrat-ExtraBold.woff */ "./src/fonts/Montserrat-ExtraBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Montserrat-ExtraBold.svg */ "./src/fonts/Montserrat-ExtraBold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/MaterialIcons.ttf */ "./src/fonts/MaterialIcons.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/MaterialIcons.woff */ "./src/fonts/MaterialIcons.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/MaterialIcons.svg */ "./src/fonts/MaterialIcons.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"svg\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Material Icons\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"svg\");\n  font-weight: 400;\n  font-style: normal;\n}\nbody {\n  font-family: \"Montserrat\", sans-serif;\n}\n\ninput, textarea, button, i {\n  font-family: inherit;\n}\n\n.body {\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.75;\n  line-height: 24px;\n}\n\n.widget {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 29px;\n}\n\n.widget-inside {\n  font-size: 19px;\n  font-weight: 700;\n  line-height: 23px;\n}\n\n.label {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  line-height: 15px;\n}\n\n.label_color_purple {\n  color: #BC9CFF;\n}\n\n.label-25 {\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n  line-height: 15px;\n  opacity: 0.25;\n}\n\n.material-icons {\n  font-family: \"Material Icons\", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px; /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  -webkit-font-feature-settings: \"liga\";\n          font-feature-settings: \"liga\";\n}\n\n.form {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n.form__content {\n  margin: 32px 141px auto 140px;\n  display: grid;\n  grid-template: 636px 100px 265px 54px 281px 1fr/1fr;\n}\n.form__1stBlock {\n  width: 100%;\n  grid-row: 1/2;\n  display: grid;\n  grid-template: 1fr/320px 126px 260px 133px 320px;\n}\n.form__1stBlock .form__uBlock:nth-child(2) {\n  grid-column: 3/4;\n}\n.form__1stBlock .form__uBlock:nth-child(3) {\n  grid-column: 5/6;\n}\n.form__2ndBlock {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template: 1fr/266px 181px 320px 72px 320px;\n  grid-row: 3/4;\n}\n.form__2ndBlock .form__uBlock:nth-child(2) {\n  grid-column: 3/4;\n}\n.form__2ndBlock .form__uBlock:nth-child(3) {\n  grid-column: 5/6;\n}\n.form__3rdBlock {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template: 1fr/266px 180px 266px 126px 292px 29px;\n  grid-row: 5/6;\n}\n.form__3rdBlock .form__uBlock:nth-child(2) {\n  grid-column: 3/4;\n}\n.form__3rdBlock .form__uBlock:nth-child(3) {\n  grid-column: 5/6;\n}\n.form__uBlock {\n  display: grid;\n  grid-auto-flow: row;\n}\n\n.text-field {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-template-areas: \"a b c\" \"d d d\";\n}\n.text-field__label {\n  grid-area: a;\n  margin-bottom: 5px;\n}\n.text-field__label2 {\n  grid-area: c;\n  margin-bottom: 5px;\n  grid-column: 3/4;\n}\n.text-field__field {\n  grid-area: d;\n  width: 320px;\n  height: 44px;\n  margin: 0 0 20px 0;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  padding-left: 15px;\n  border-radius: 4px;\n  border: 1px rgba(31, 32, 65, 0.25) solid;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(31, 32, 65, 0.75);\n  line-height: 18px;\n}\n.text-field__field:hover, .text-field__field:focus, .text-field__field:active {\n  border-color: rgba(31, 32, 65, 0.5);\n  outline: none;\n}\n.text-field__field::-webkit-input-placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n}\n.text-field__field::-moz-placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n}\n.text-field__field:-ms-input-placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n}\n.text-field__field::-ms-input-placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n}\n.text-field__field::placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n}\n\n.uiKit__header {\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  grid-template-columns: 30px 1fr;\n  height: 108px;\n  width: 100vh;\n}\n.uiKit__logo {\n  grid-column: 2/3;\n}\n.uiKit__foter {\n  display: grid;\n  grid-template: 160px 130px/140px 280px 145px 715px 1fr;\n}\n\n.dropdown__label {\n  margin-bottom: 5px;\n}\n.dropdown__select {\n  width: 320px;\n  height: 44px;\n  margin: 0 0 20px 0;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  padding-left: 15px;\n  border-radius: 4px;\n  border: 1px rgba(31, 32, 65, 0.25) solid;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  line-height: 18px;\n  -moz-text-align-last: left;\n       text-align-last: left;\n  vertical-align: center;\n}\n[dir=\"ltr\"] .dropdown__item {\n  text-align: left;\n}\n[dir=\"rtl\"] .dropdown__item {\n  text-align: right;\n}\n.dropdown__item {\n  padding: 0;\n  line-height: 18px;\n}\n.dropdown__select:hover {\n  border-color: rgba(31, 32, 65, 0.5);\n}\n.dropdown__select:focus {\n  outline: rgba(31, 32, 65, 0.5);\n}\n\n.masked-text-field__label {\n  margin-bottom: 5px;\n}\n.masked-text-field__field {\n  width: 320px;\n  height: 44px;\n  margin: 0 0 20px 0;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  padding-left: 15px;\n  border-radius: 4px;\n  border: 1px rgba(31, 32, 65, 0.25) solid;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(31, 32, 65, 0.75);\n  line-height: 18px;\n}\n.masked-text-field__field_unhover {\n  color: rgba(31, 32, 65, 0.25);\n}\n.masked-text-field__field::-webkit-input-placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.masked-text-field__field::-moz-placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.masked-text-field__field:-ms-input-placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.masked-text-field__field::-ms-input-placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.masked-text-field__field::placeholder {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #1F2041;\n  opacity: 0.25;\n  line-height: 18px;\n  text-transform: uppercase;\n}\n.masked-text-field__field:hover {\n  border-color: rgba(31, 32, 65, 0.5);\n}\n.masked-text-field__field:focus {\n  outline: rgba(31, 32, 65, 0.5);\n}\n\n.expand-arrow {\n  color: rgba(31, 32, 65, 0.5);\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 24px;\n}\n\nhtml {\n  width: 1440px;\n  height: 1853px;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./src/reset.scss","webpack://./src/pages/form-elements/form-elements.scss","webpack://./src/fonts/_fonts.scss","webpack://./src/text/text.scss","webpack://./src/blocks/form/form.scss","webpack://./src/blocks/text-field/text-field.scss","webpack://./src/blocks/uiKit/uiKit.scss","webpack://./src/blocks/dropdown/dropdown.scss","webpack://./src/blocks/masked-text-field/masked-text-field.scss","webpack://./src/blocks/expand-arrow/expand-arrow.scss"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}","@use \"../../reset\";\r\n@use \"../../text/text\";\r\n@use '../../blocks/form/form';\r\n@use \"../../blocks/text-field/text-field\";\r\n@use \"../../blocks/uiKit/uiKit\";\r\n@use \"../../blocks/dropdown/dropdown\";\r\n@use \"../../blocks/masked-text-field/masked-text-field\";\r\n@use \"../../blocks/expand-arrow/expand-arrow\";\r\n\r\n\r\nhtml {\r\n  width: 1440px;\r\n  height: 1853px;\r\n\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}","@font-face {\r\n  font-family: 'Montserrat';\r\n  src: url(\"../../fonts/Montserrat-Regular.ttf\") format(\"truetype\"),\r\n       url(\"../../fonts/Montserrat-Regular.woff\") format(\"woff\"),\r\n       url(\"../../fonts/Montserrat-Regular.svg\") format(\"svg\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Montserrat';\r\n  src: url(\"../../fonts/Montserrat-ExtraBold.ttf\") format(\"truetype\"),\r\n  url(\"../../fonts/Montserrat-ExtraBold.woff\") format(\"woff\"),\r\n  url(\"../../fonts/Montserrat-ExtraBold.svg\") format(\"svg\");\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Material Icons';\r\n  src: url(\"../../fonts/MaterialIcons.ttf\") format(\"truetype\"),\r\n       url(\"../../fonts/MaterialIcons.woff\") format(\"woff\"),\r\n       url(\"../../fonts/MaterialIcons.svg\") format(\"svg\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}","@use \"../fonts/fonts\";\r\n\r\nbody {\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\ninput, textarea, button, i {\r\n  font-family: inherit;\r\n}\r\n\r\n.body {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  color: #1F2041;\r\n  opacity: 0.75;\r\n  line-height: 24px;\r\n}\r\n\r\n.widget {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 29px;\r\n}\r\n\r\n.widget-inside {\r\n  font-size: 19px;\r\n  font-weight: 700;\r\n  line-height: 23px;\r\n}\r\n\r\n.label {\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  line-height: 15px;\r\n}\r\n\r\n.label_color_purple {\r\n  color: #BC9CFF;\r\n}\r\n\r\n.label-25 {\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  line-height: 15px;\r\n  opacity: 0.25;\r\n}\r\n\r\n.material-icons {\r\n  font-family: 'Material Icons', sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;  /* Preferred icon size */\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n\r\n  /* Support for all WebKit browsers. */\r\n  -webkit-font-smoothing: antialiased;\r\n  /* Support for Safari and Chrome. */\r\n  text-rendering: optimizeLegibility;\r\n\r\n  /* Support for Firefox. */\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  /* Support for IE. */\r\n  font-feature-settings: 'liga';\r\n}\r\n",".form {\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  &__content{\r\n    margin: 32px 141px auto 140px;\r\n    display: grid;\r\n    grid-template: 636px 100px 265px 54px 281px 1fr / 1fr;\r\n    }\r\n  &__1stBlock {\r\n    width: 100%;\r\n    grid-row: 1 / 2;\r\n    display: grid;\r\n    grid-template: 1fr / 320px 126px 260px 133px 320px;\r\n      .form__uBlock:nth-child(2) {\r\n        grid-column: 3 / 4;\r\n      }\r\n      .form__uBlock:nth-child(3) {\r\n        grid-column: 5 / 6;\r\n      }\r\n  }\r\n  &__2ndBlock {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template: 1fr / 266px 181px 320px 72px 320px;\r\n    grid-row: 3 / 4;\r\n      .form__uBlock:nth-child(2) {\r\n        grid-column: 3 / 4;\r\n      }\r\n      .form__uBlock:nth-child(3) {\r\n        grid-column: 5 / 6;\r\n      }\r\n  }\r\n  &__3rdBlock {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template: 1fr / 266px 180px 266px 126px 292px 29px;\r\n    grid-row: 5 / 6;\r\n      .form__uBlock:nth-child(2) {\r\n        grid-column: 3 / 4;\r\n      }\r\n      .form__uBlock:nth-child(3) {\r\n        grid-column: 5 / 6;\r\n      }\r\n  }\r\n  &__uBlock {\r\n    display: grid;\r\n    grid-auto-flow: row;\r\n  }\r\n}",".text-field{\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  grid-template-areas: \"a b c\"\r\n                       \"d d d\";\r\n  &__label {\r\n    grid-area: a;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  &__label2 {\r\n    grid-area: c;\r\n    margin-bottom: 5px;\r\n    grid-column: 3 / 4;\r\n  }\r\n\r\n  &__field {\r\n    grid-area: d;\r\n    width: 320px;\r\n    height: 44px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 13px;\r\n    padding-bottom: 13px;\r\n    padding-left: 15px;\r\n    border-radius: 4px;\r\n    border: 1px rgba(31, 32, 65, 0.25) solid;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: rgba(31, 32, 65, 0.75);\r\n    line-height: 18px;\r\n  }\r\n\r\n  &__field:hover, &__field:focus, &__field:active  {\r\n    border-color: rgba(31, 32, 65, 0.5);\r\n    outline: none;\r\n  }\r\n\r\n  //&__field:focus {\r\n  //  border-color: rgba(31, 32, 65, 0.5);\r\n  //  outline: none;\r\n  //}\r\n\r\n  &__field::placeholder {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #1F2041;\r\n    opacity: 0.25;\r\n    line-height: 18px;\r\n  }\r\n\r\n}",".uiKit {\r\n  &__header {\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 30px 1fr;\r\n    height: 108px;\r\n    width: 100vh;\r\n  }\r\n  &__logo {\r\n    grid-column: 2 / 3;\r\n  }\r\n  &__foter {\r\n    display: grid;\r\n    grid-template: 160px 130px / 140px 280px 145px 715px 1fr;\r\n  }\r\n\r\n  }",".dropdown {\r\n\r\n  &__label {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  &__select {\r\n    width: 320px;\r\n    height: 44px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 13px;\r\n    padding-bottom: 13px;\r\n    padding-left:   15px;\r\n    border-radius: 4px;\r\n    border: 1px rgba(31, 32, 65, 0.25) solid;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #1F2041;\r\n    line-height: 18px;\r\n    text-align-last: left;\r\n    vertical-align: center;\r\n  }\r\n\r\n  &__item {\r\n    padding: 0;\r\n    text-align: start;\r\n    line-height: 18px;\r\n    //width: 320px;\r\n    //height: 44px;\r\n    //margin: 0 0 20px 0;\r\n    //padding-top: 13px;\r\n    //padding-bottom: 13px;\r\n    //padding-left: 15px;\r\n    //border-radius: 4px;\r\n    //border: 1px rgba(31, 32, 65, 0.25) solid;\r\n    //font-family: 'Montserrat', sans-serif;\r\n    //font-size: 14px;\r\n    //font-weight: 400;\r\n    //color: #1F2041;\r\n  }\r\n\r\n  &__select:hover {\r\n    border-color: rgba(31, 32, 65, 0.5);\r\n  }\r\n\r\n  &__select:focus {\r\n    outline: rgba(31, 32, 65, 0.5);\r\n  }\r\n}",".masked-text-field {\r\n\r\n  &__label {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  &__field {\r\n    width: 320px;\r\n    height: 44px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 13px;\r\n    padding-bottom: 13px;\r\n    padding-left: 15px;\r\n    border-radius: 4px;\r\n    border: 1px rgba(31, 32, 65, 0.25) solid;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: rgba(31, 32, 65, 0.75);\r\n    line-height: 18px;\r\n  }\r\n\r\n  &__field_unhover {\r\n    color: rgba(31, 32, 65, 0.25);\r\n  }\r\n\r\n  &__field::placeholder {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #1F2041;\r\n    opacity: 0.25;\r\n    line-height: 18px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n\r\n  &__field:hover {\r\n    border-color: rgba(31, 32, 65, 0.5);\r\n  }\r\n\r\n  &__field:focus {\r\n    outline: rgba(31, 32, 65, 0.5);\r\n  }\r\n}",".expand-arrow {\r\n  color: rgba(31, 32, 65, 0.5);\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  line-height: 24px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/item-quantity-dropdown/item-quantity-dropdown.scss":
/*!***********************************************************************!*\
  !*** ./src/blocks/item-quantity-dropdown/item-quantity-dropdown.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_item_quantity_dropdown_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./item-quantity-dropdown.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/blocks/item-quantity-dropdown/item-quantity-dropdown.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_item_quantity_dropdown_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_item_quantity_dropdown_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_item_quantity_dropdown_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_item_quantity_dropdown_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/form-elements/form-elements.scss":
/*!****************************************************!*\
  !*** ./src/pages/form-elements/form-elements.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./form-elements.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/fonts/MaterialIcons.svg":
/*!*************************************!*\
  !*** ./src/fonts/MaterialIcons.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f0d15283a8408b88cd70.svg";

/***/ }),

/***/ "./src/fonts/MaterialIcons.ttf":
/*!*************************************!*\
  !*** ./src/fonts/MaterialIcons.ttf ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/02aafe15b98928fdaa38.ttf";

/***/ }),

/***/ "./src/fonts/MaterialIcons.woff":
/*!**************************************!*\
  !*** ./src/fonts/MaterialIcons.woff ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/97246f3c55ec08f37604.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-ExtraBold.svg":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-ExtraBold.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7ce02fee077a63a0d2aa.svg";

/***/ }),

/***/ "./src/fonts/Montserrat-ExtraBold.ttf":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-ExtraBold.ttf ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0697040c56e0a596472b.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-ExtraBold.woff":
/*!*********************************************!*\
  !*** ./src/fonts/Montserrat-ExtraBold.woff ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/bfa0f5c5f8776454227b.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.svg":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d9021af3d631c5191ce1.svg";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.ttf ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/317b418ed317e258b173.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b4b8dfebda28ec94b585.woff";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"form-elements": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_practice"] = self["webpackChunkwebpack_practice"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-978f76","vendors-node_modules_inputmask_lib_jquery_inputmask_js-node_modules_item-quantity-dropdown_li-840073"], function() { return __webpack_require__("./src/pages/form-elements/form-elements.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=form-elements,0f5bfffd6a37d6b4aa19.js.map