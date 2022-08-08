import AirDatepicker from 'air-datepicker';
import './date-dropdown.scss';
import $ from "jquery";

$('#start').val('ДД.ММ.ГГГГ');
$('#end').val('ДД.ММ.ГГГГ');

let confirm = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) => {
        dp.hide()
    }
}

let dp = new AirDatepicker ("#start", {
    container: 'div.date-dropdown',
    range: true,
    onSelect({date, formattedDate, datepicker }) {
        // fnSelect(formattedDate, datepicker)
        if ( formattedDate.length == 0 ) {
            $('#start').val('ДД.ММ.ГГГГ');
            $('#end').val('ДД.ММ.ГГГГ');
        }
        if ( formattedDate.length == 1 ) {
            $('#start').val(formattedDate[0]);
            $('#end').val('ДД.ММ.ГГГГ');
        }

        if ( formattedDate.length == 2 ) {
            $('#start').val(formattedDate[0]);
            $('#end').val(formattedDate[1]);
        }

        // alert (formattedDate);
    },
    buttons: ['clear', confirm],
    prevHtml: '<span class="material-icons arrow-back">&#xE5C4</span>',
    nextHtml: '<span class="material-icons arrow-forward">&#xE5C8</span>',
    multipleDatesSeparator: " ",
    navTitles: {days: "MMMM yyyy", months: "yyyy", years: "yyyy1 - yyyy2"},
});

$('.date-dropdown').find('#end').click(function (event) {
     $(this).parent().parent().parent().find('#start').focus();
})

$('.date-dropdown__item').find('span').click(function () {
    $('#start').focus();
})

$('.date-dropdown__item').find('span').hover(function (){
    $(this).parent().find('input').addClass("date-dropdown__field_hover")
}, function () {
    $(this).parent().find('input').removeClass("date-dropdown__field_hover")
})

$('.date-dropdown').find('#start').focus(function () {
    $(this).parent().parent().parent().find('#end').addClass("date-dropdown__field_hover")});
$('.date-dropdown').find('#start').blur(function () {
    $(this).parent().parent().parent().find('#end').removeClass("date-dropdown__field_hover")});

$('.date-dropdown air-datepicker-navigation').find('svg').remove();

// } else $('#end').removeClass("date-dropdown__field_hover")

// $(document).click(function (){dp.hide()})
//
// $('#end, #start, .air-datepicker').click(function (event) {
//     event.stopPropagation();
//     dp.show();
// });
//
//
// $('.date-dropdown__item').find('span').click(function () {
//     event.stopPropagation();
//     dp.show();
// })








