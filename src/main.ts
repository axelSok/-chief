import './style.scss'
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <button id="counter"/>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
