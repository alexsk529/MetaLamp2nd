
// const makeTitle = (key, object) => {
//     const element = Array.from(object.children).find(el => el.dataset.value === key);
//     const count = +element.dataset.count;
//     const color = (colors.find(el => el.key === key)).color;
//     const title = document.createElement('div')
//     title.className = 'diagram__title';
//     const subtitle = declOfNum(count, ['голос', 'голоса', 'голосов'])
//     title.innerHTML = `<span class='widget'>${count}</span><span class='label'>${subtitle}</span>`
//     for (let el of title.children) {
//         el.style.color = color;
//     }
//     return title;
// }

// const toggleClasses = (e, chart) => {
//     e.target.classList.toggle('bullet-list__span_hover');
//     const dataValue = e.target.dataset.value;
//     const segment = Array.from(chart.children).find(el => el.dataset.value === dataValue);
//     if (segment) segment.classList.toggle('diagram__segment_hover');
// }

// const changeTitle = (e, title, prevKey, chart, segment) => {
//     const count = +segment?.dataset.count;
//     if (e.type === 'mouseover' && count) title.replaceWith(makeTitle(dataValue, chart))
//     if (e.type === 'mouseout') {
//         console.log('tick');
//         console.log(prevKey);
//         title.replaceWith(makeTitle(prevKey, chart));
//     }
// }

// const handleHover = ({ e, chart, prevKey, title }) => {
//     if (!e.target.classList.contains('bullet-list__span')) return;
//     const dataValue = e.target.dataset.value;
//     const segment = Array.from(chart.children).find(el => el.dataset.value === dataValue);
//     toggleClasses(e, chart, dataValue, segment)
//     changeTitle(e, title, prevKey, chart, dataValue, segment)
// }

const declOfNum = (number, words) => {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

const colors = [
    { key: 'Великолепно', color: '#FFE39C' },
    { key: 'Хорошо', color: '#6FCF97' },
    { key: 'Удовлетворительно', color: '#BC9CFF' },
    { key: 'Разочарован', color: '#919191' }
]


// for (const diagram of diagrams) {
//     const circle = diagram.querySelector('.diagram__circle')
//     const chart = diagram.querySelector('.diagram__chart')

//     let prevKey = 'Удовлетворительно'

//     const title = makeTitle(prevKey, chart)
//     circle.append(title)

//     const bulletList = diagram.querySelector('.bullet-list')
//     for (const el of bulletList.children) {
//         el.style.cursor = 'pointer'
//     }
//     bulletList.addEventListener('mouseover', (e) => handleHover({ e, chart, prevKey, title }))
//     bulletList.addEventListener('mouseout', (e) => handleHover({ e, chart, prevKey, title }))
// }

class Diagram {
    circle;
    chart;
    currentKey = 'Удовлетворительно';
    bulletList;
    title;
    dataValue;
    segment;

    constructor(diagram) {
        this.handleHover = this.handleHover.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.circle = diagram.querySelector('.diagram__circle');
        this.chart = diagram.querySelector('.diagram__chart');
        this.bulletList = diagram.querySelector('.bullet-list');
        for (const el of this.bulletList.children) {
            el.style.cursor = 'pointer'
        }
        this.bulletList.addEventListener('mouseover', this.handleHover);
        this.bulletList.addEventListener('mouseout', this.handleHover);
        this.bulletList.addEventListener('click', this.handleClick);

        const title = this.makeTitle(this.currentKey, this.chart);
        this.circle.append(title);
        this.title = this.circle.querySelector('.diagram__title');
    }

    makeTitle(key) {
        const element = Array.from(this.chart.children).find(el => el.dataset.value === key);
        const count = +element.dataset.count;
        const color = (colors.find(el => el.key === key)).color;
        const title = document.createElement('div')
        title.className = 'diagram__title';
        const subtitle = declOfNum(count, ['голос', 'голоса', 'голосов'])
        title.innerHTML = `<span class='widget'>${count}</span><span class='label'>${subtitle}</span>`
        for (let el of title.children) {
            el.style.color = color;
        }
        return title;
    }

    toggleClasses(e) {
        e.target.classList.toggle('bullet-list__span_hover');
        if (this.segment) this.segment.classList.toggle('diagram__segment_hover');
    }

    changeTitle(e) {
        const count = +this.segment?.dataset.count;
        const that = this;
        const title = this.circle.querySelector('.diagram__title');
        if (e.type === 'mouseover' && count) {
            title.replaceWith(that.makeTitle(that.dataValue, that.chart));
        }
        if (e.type === 'mouseout' && count) {
            title.replaceWith(that.title)
        }
    }

    handleHover(e) {
        if (!e.target.classList.contains('bullet-list__span')) return;
        this.dataValue = e.target.dataset.value
        this.segment = Array.from(this.chart.children).find(el => el.dataset.value === this.dataValue);
        this.toggleClasses(e)
        this.changeTitle(e)
    }

    handleClick(e) {
        if (!e.target.classList.contains('bullet-list__span')) return;
        const title = this.circle.querySelector('.diagram__title');
        const count = +this.segment?.dataset.count;
        if (!count) return
        const that = this;
        title.replaceWith(that.makeTitle(that.dataValue, that.chart));
        this.title = this.makeTitle(this.dataValue, this.chart);
    }
}

const diagrams = document.querySelectorAll('.diagram')

for (const diagram of diagrams) {
    new Diagram(diagram);
}