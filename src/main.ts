// import './styles/index.scss'
// Import all of Bootstrap's JS
import 'bootstrap'
import { Popover } from 'bootstrap'

document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => new Popover(popover, {
        trigger: 'focus'
    }))

// const header = document.querySelector<HTMLDivElement>('.header')

// window.addEventListener('scroll', () => {
//     if (!header) {
//         return
//     }

//     const scrollPosition: number = window.scrollY;

//     if (scrollPosition > 1) {
//         header.classList.add('header--scrolled')
//     } else {
//         header.classList.remove('header--scrolled')
//     }
// });

// const navbarSideCollapse = document.querySelector<HTMLDivElement>('#navbar-side-collapse')

// navbarSideCollapse?.addEventListener('click', () => {
//     const navbarItems = document.querySelector<HTMLDivElement>('#navbar-items')
//     navbarItems?.classList.toggle('open')
// })


