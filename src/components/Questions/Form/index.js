import "./style.scss";
import { createBtn } from "../../../helper/createElem";

const Form = () => {
    return `
    <form class="form">
        <div class="questions__input-name">
            <input class='questions__name' type='text' placeholder='Ваше имя'>
        </div>
        <div class="questions__input-phone">
            <input class='questions__phone' type='tel' placeholder='Телефон для связи'>
        </div>
        ${createBtn("btn-blue", "Заказать звонок")}
    </form>
    `
}

export default Form;