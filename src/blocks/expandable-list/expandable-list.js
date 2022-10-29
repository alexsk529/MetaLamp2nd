class ExpandableList {
    constructor(el) {
        $(el).on('click.expandableList', (event)=>{
            this.handleExpandableListClick(event)
        })
    }
    handleExpandableListClick = function(event) {
        $(event.currentTarget).find('.expandable-list').toggleClass('expandable-list_hidden');
    }
}

const $expandableLists = $('.navigation__item_expandable');
$expandableLists.each((i, el)=> {
    new ExpandableList(el);
})

