let pullers = document.querySelectorAll('.sidebar__puller')
if (pullers) {
    class Sidebar {
        constructor(el) {
            el.addEventListener('click', e => this.handlerPullerClick(e))
        }
        handlerPullerClick(event) {
            event.currentTarget.parentElement.classList.toggle('sidebar_active')
        }
    }

    for (let puller of pullers) {
        new Sidebar(puller)
    }


}

