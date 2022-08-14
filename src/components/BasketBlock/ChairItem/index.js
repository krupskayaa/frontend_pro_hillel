import "./style.scss";
import Counter from "../../Counter";

const ChairItem = () => {
    let imgDelete = require('../../../img/delete-icon.svg');
    let imgItem = require('../../../img/chair-item.jpg');
    return `<div class="basket__item">
      <img class="basket__item-img" src="${imgItem}">
      <div class="basket__item-about">
        <h3 class="basket__item-title">Кресло Samurai KL-1.04</h3>
        <p class="basket__item-txt">Характеристики, цвет, механизм и прочее. Артикул: 266-460</p>
      </div>
      ${Counter()}
      <div class="basket__item-price">
        <p class="basket__item-price-new">4 999 грн</p>
        <p class="basket__item-price-old">7 000 грн</p>
      </div>
      <div class="basket__item-delete">
        <img src="${imgDelete}">
      </div>
    </div>`;
};
  
export default ChairItem;
