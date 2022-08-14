import "./style.scss";
import ChairItem from "./ChairItem";
import Date from "./Date"
import Delivery from "./Delivery"
import Payment from "./Payment";
import Checkout from "./Checkout";

const BasketBlock = () => {
    let basket = `
    <div class="container">
        <h2 class="basket__title">Ваш заказ</h2>
        <div class="basket__list-wrapper">
            ${ChairItem()}
            ${ChairItem()}
            ${ChairItem()}
        </div>
        <p class="basket__all">Итого:<span class='basket__all all-line'> 14997грн </span>21000грн</p>
    </div>
    ${Date()}
    ${Delivery()}
    ${Payment()}
    ${Checkout()}`

    let wrap = document.querySelector('.basket');
    wrap.innerHTML = basket;
}

export default BasketBlock;