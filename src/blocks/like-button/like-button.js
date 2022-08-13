import $ from "jquery";


class LikeButton {
    constructor(el) {
      let counter = $(el).find('.like-button__counter');
      let heart = $(el).find('.like-button__heart');
      let icon = $(el).find('.like-button__icon');
      counter.text(this.counter);
      this.array.push(icon);
      this.array.push(heart);
      this.array.push(counter);
      $(el).click(() => {
          this.increment();
          $(el).find('.like-button__counter').text(this.counter)
      });
    }
    array = [];
    increment () {
        this.counter ++;

        if (this.counter > 2) {
            this.array[1].text('favorite')
            for (let el of this.array) {
                let className = $(el).attr('class')
                className = className
                    .split(' ')
                    .map(function(item,index){
                        if (index == 0) return item + '_liked'
                    })
                    .join(' ');
                $(el).addClass(className)
            }
        }
    }
    counter = 0;
}
for (let el of $('.like-button')) {
    new LikeButton(el)
}