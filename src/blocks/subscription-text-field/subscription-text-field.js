


const $subscriptionTextFields = $('.subscription-text-field');

if ($subscriptionTextFields) {
    class Subscription {
        constructor (el) {
            $(el).find('span').hover(function () {
                    $(this).parent().find('input').addClass("subscription-text-field__field_hover")
                }, function() {
                    $(this).parent().find('input').removeClass("subscription-text-field__field_hover")
                },
            )
        }
    }
    for (let el of $subscriptionTextFields) {
        new Subscription(el)
    }

}

