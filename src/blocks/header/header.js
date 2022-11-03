let $burgerBtns = $('.header__burger')

function handleBurgerMenuClick(event) {
    $(event.currentTarget).toggleClass('header__burger_active')
    $(event.currentTarget).next().toggleClass('header__menu_active')
}

$burgerBtns.each((i, btn) => {
    $(btn).on('click.burgerMenu', (event) =>
    handleBurgerMenuClick(event))
})
