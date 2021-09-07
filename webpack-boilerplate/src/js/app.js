import {sum} from './math.js'
import '../css/app.css'
import img from '../image/host.png'

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1>1 + 2 = ${sum(1,2)}</h1>
        <img src="${img}" alt="img"/>
    `
})