import "./style.scss";
import Form from "./Form";

const Questions = () => {
    let img = require('../../img/hand.png');
    let questions = `
    <div class='container'>
        <div class='questions__wrapper'>
            <div class='questions__info'>
                <h2 class='questions__title'>У вас остались вопросы?</h2>
                <p class='questions__text'>Оставьте контакты. Наш менеджер свяжется с вами и бесплатно проконсультирует</p>
            </div>
            <img class='questions__img' src='${img}'>
            ${Form()}
        </div>
    </div>`;

    let wrap = document.querySelector('.questions');
    wrap.innerHTML = questions;
}

export default Questions;