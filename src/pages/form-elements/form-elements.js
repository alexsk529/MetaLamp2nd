import $ from "jquery";
import './form-elements.scss'
// import '../../jqueryLibs/EasyDropDownTheme.scss'
// import easydropdown from 'easydropdown'
// import 'material-icons/iconfont/material-icons.css'
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';



$(document).ready( function() {
  // const selectElement = document.querySelector('.dropdown__select');
  // const edd = easydropdown(selectElement);

  $('.iqdropdown').iqDropdown({

    onChange: (id, count, totalItems) => {
      let str = String(totalItems);
      let adults;
      let infants;

        if ((totalItems >= 5 && totalItems <= 20) || (Number(str[str.length - 1]) >= 5 && Number(str[str.length - 1]) <= 9) || (Number(str[str.length - 1]) == 0)) {
          adults = totalItems + " гостей";
          $('.iqdropdown-selection').html(adults)
        } else if (Number(str[str.length - 1]) >= 2 && Number(str[str.length - 1]) <= 4) {
          adults = totalItems + " гостя";
          $('.iqdropdown-selection').html(adults)
        } else if (Number(str[str.length - 1]) == 1) {
          adults = totalItems + " гость";
          $('.iqdropdown-selection').html(adults)
        }
        if ( totalItems == 0 ) {
          $('.iqdropdown-selection').html('Сколько гостей');
        }

    },
  });
  $('.iqdropdown-selection').html('Сколько гостей');
});



