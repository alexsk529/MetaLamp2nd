

const $expandableLists = $('.navigation__expandable-link');
if ($expandableLists) {
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

    for (let expandableList of $expandableLists) {
        new ExpandableList(expandableList)
    }
}

