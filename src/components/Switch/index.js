import "./style.scss";
import IconDesign from "./IconDesign";
import { onHandleRoute } from "../../helper/route";
let elem = '';
const Switch = (product = false, text, href) => {
    if(product) {
        elem = `<div class="container">
            <div class="switch__wrapper">
                <a class="switch__link" href="/">Главная</a>
                ${IconDesign()}
                <a class="switch__link link-route" href=${href}>${text}</a>
                ${IconDesign()}
                <a class="switch__link active" href="#">Кресло Samurai S-2.04</a>
            </div>
        </div>`
    } else {
        elem = `<div class="container">
        <div class="switch__wrapper">
            <a class="switch__link" href="/">Главная</a>
            ${IconDesign()}
            <a class="switch__link active link-route" href="${href}">${text}</a>
        </div>
    </div>`
    }

    let wrap = document.querySelector('.switch');
    wrap.innerHTML = elem;

    let route = document.querySelectorAll('.link-route');
    route.forEach((el) => {
        el.addEventListener('click', onHandleRoute);
    })
}

export default Switch;