// import './styles/index.scss'
// Import all of Bootstrap's JS
import 'bootstrap'

const mainHeader = document.querySelector<HTMLDivElement>('.main-header')
const bannerHeader = document.querySelector<HTMLDivElement>('.banner-header')

window.addEventListener('scroll', () => {
    if (!bannerHeader || !mainHeader) {
        return
    }

    const scrollPosition: number = window.scrollY;

    if (scrollPosition > bannerHeader.offsetHeight) {
        mainHeader.classList.add('main-header--sticky');
        bannerHeader.classList.add('banner-header--hidden')
    } else {
        mainHeader.classList.remove('main-header--sticky');
        bannerHeader.classList.remove('banner-header--hidden')
    }
});

const navbarSideCollapse = document.querySelector<HTMLDivElement>('#navbar-side-collapse')

navbarSideCollapse?.addEventListener('click', () => {
    const navbarItems = document.querySelector<HTMLDivElement>('#navbar-items')
    navbarItems?.classList.toggle('open')
})


