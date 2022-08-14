import "./style.scss";
import { createBtn } from "../../helper/createElem";

const Counter = () => {
    return `<div class='counter'>
        ${createBtn("counter__btn", "-")}
        <span class="product-count">1</span>
        ${createBtn("counter__btn", "+")}
    </div>`
}

export default Counter;