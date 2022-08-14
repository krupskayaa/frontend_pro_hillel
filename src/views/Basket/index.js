import "./style.scss";
import Switch from "../../components/Switch";
import BasketBlock from "../../components/BasketBlock";
import { createElem } from "../../helper/createElem";

const Basket = () => {
    createElem('section', 'switch', null, main);
    Switch(false, 'Корзина', '/basket')

    createElem('section', 'basket', null, main);
    BasketBlock()
}

export default Basket;