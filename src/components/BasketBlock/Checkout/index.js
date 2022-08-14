import "./style.scss";
import {createBtn} from "../../../helper/createElem"

const Checkout = () => {
    return `
    <div class="checkout">
        <div class="container">
            <div class="checkout__wrapper">
                ${createBtn("btn-blue", "Оформить заказ")}
                <p class="checkout__text">Нажимая «Оформить заказ», вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</p>
            </div
        </div>
    </div>`
}

export default Checkout;