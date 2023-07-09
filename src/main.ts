// import './styles/index.scss'
// Import all of Bootstrap's JS
import 'bootstrap'

const header = document.querySelector<HTMLDivElement>('.header')
const headerTopBar = document.querySelector<HTMLDivElement>('.header__top-bar')

window.addEventListener('scroll', () => {
    if (!headerTopBar || !header) {
        return
    }

    const scrollPosition: number = window.scrollY;

    if (scrollPosition > 97) {
        header.classList.add('header--scrolled')
        headerTopBar.classList.add('header__top-bar--hidden')
    } else {
        header.classList.remove('header--scrolled')
        headerTopBar.classList.remove('header__top-bar--hidden')
    }
});

const navbarSideCollapse = document.querySelector<HTMLDivElement>('#navbar-side-collapse')

navbarSideCollapse?.addEventListener('click', () => {
    const navbarItems = document.querySelector<HTMLDivElement>('#navbar-items')
    navbarItems?.classList.toggle('open')
})


