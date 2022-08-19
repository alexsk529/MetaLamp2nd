class Expandable {
    constructor(el) {
        $(el).click(function () {
            $(el).find('.expand-arrow').toggleClass('expandable-checkbox__arrow-180');
            $(el).find('.expandable-checkbox__menu').toggleClass('expandable-checkbox__menu-open');
        })
    }
}

for (let el of $('.expandable-checkbox')) {
    new Expandable(el)
}