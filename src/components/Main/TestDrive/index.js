import "./style.scss";
import { createBtn } from "../../../helper/createElem";

const TestDrive = () => {
    const imgGirl = require('../../../img/girl.png');
    let test = `
    <div class='container'>
        <div class='drive__wrapper'>
            <div class='drive__description'>
                <h2 class='drive__title'>Посетите салон и проведите тест-драйв лично</h2>
                <p class='drive__text'>У нас есть шоурумы в Днепре и Киеве, где мы всегда рады видеть вас. Дать профессиональную консультацию и поделиться экспертизой</p>
                ${createBtn("btn-blue", "Запись на тест-драйв")}
            </div>
            <img class='drive__img' src='${imgGirl}'>
        </div>
    </div>`

    let wrap = document.querySelector('.drive');
    wrap.innerHTML = test;
}

export default TestDrive;