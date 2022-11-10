const $likeBtns = $('.like-button__icon');

if ($likeBtns) {
    class LikeButton {
        constructor(el) {
            let counter = $(el).find('.like-button__counter');
            let heart = $(el).find('.like-button__heart');
            let icon = $(el);
            this.counter = counter.data('initialCounter')
            counter.text(this.counter);
            this.array.push(icon);
            this.array.push(heart);
            this.array.push(counter);
            $(el).click(() => {
                this.clickIcon();
                counter.text(this.counter)
            });
        }
        array = [];
        counter;
        updateCounter = () => {
            this.array[2].text(this.counter)
        };
        clickIcon () {
            if (this.array[1].text() == 'favorite') this.array[1].text('favorite_border')
            else this.array[1].text('favorite')
            for (let el of this.array) {
                let className = $(el).attr('class')
                className = className
                    .split(' ')
                    .map(function(item,index){
                        if (index == 0) return item + '_liked'
                    })
                    .join(' ');
                $(el).toggleClass(className)
            }
            if (!this.array[0].attr('class').includes('_liked')) this.counter -=1
            else this.counter +=1;
        }
    }

    for (let likeBtn of $likeBtns) {
        new LikeButton(likeBtn)
    }
}




