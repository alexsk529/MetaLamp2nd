import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';



let dp = new AirDatepicker ("#start", {
    container: 'div.date-dropdown',
    range: true,

});

$('#end').click(function () {
    dp.show()
});
console.log(dp.selectedDates[0],dp.selectedDates[1]);






