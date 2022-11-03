class ExpandableList {
    constructor(el) {
        $(el).on('click.expandableList', (event)=>{
            this.handleExpandableListClick(event)
        })
    }
    handleExpandableListClick = function(event) {
        $(event.currentTarget).find('.expandable-list').toggleClass('expandable-list_active')
    }
}

const $expandableLists = $('.navigation__expandable-link');
$expandableLists.each((i, el)=> {
    new ExpandableList(el);
})

