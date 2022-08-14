import "./style.scss";
import Colors from "./Colors";
import { createBtn } from "../../helper/createElem";
import Counter from "../Counter";
import ChairParts from "./ChairParts";

const CardProduct = () => {
    let imgMainChair = require('../../img/chair-product.png');
    let card = `<div class="container">
        <div class='product__wrapper'>
            <div class='product__box'>
                <img class='product__main-chair' src='${imgMainChair}'>
            </div>
            <div class='product__description'>
                <h2 class='product__title'>
                    Кресло Samurai S-2.04 плюс вторая строка
                </h2>
                <p class='product__chair-about'>Эргономичное офисное кресло с синхромеханизмом качания «MultiBlock» — раздельное синхронное отклонение спинки и сиденья кресла.</p>
                ${Colors()}
                <p class='product__chair-type'>Механизм</p>
                <p class='product__chair-about'>Эргономичное офисное кресло с синхромеханизмом качания «MultiBlock» — раздельное синхронное.</p>
                <p class='product__chair-price-old'>7000 грн</p>
                <p class='product__chair-price-new'>4999 грн</p>
                <div class='product__wrapper-opt'>
                    ${createBtn("btn-blue", "Добавить в корзину")}
                    ${Counter()}
                </div>
            </div>
        </div>
        ${ChairParts()}
        <div class='product__description-more'>
                <div class='product__col1'>
                    <h3 class='product__title-small'>Описание товара</h3>
                    <p class='product__text-about'>Здесь будет более подробно развернуто ключевое. У нас есть шоурумы в Москве и Санкт-Петербурге, где мы всегда рады. 
                        Дать профессиональную консультацию и поделиться экспертизой. У нас есть шоурумы в Москве и Санкт-Петербурге, где мы всегда рады видеть вас.
                    </p>
                    <a class='product__link-more'>Развернуть</a>
                </div>
                <div class='product__col2'>
                    <h3 class='product__title-small'>Характеристики</h3>
                    <div class='product__description-grid'>
                        <p class='product__feature feature-answer'>Высота кресла</p>
                        <p class='product__feature feature-answer'>1170-1230 мм</p>
                        <p class='product__feature feature-answer'>Высота сиденья</p>
                        <p class='product__feature feature-answer'>460-520 мм</p>
                        <p class='product__feature feature-answer'>Высота спинки</p>
                        <p class='product__feature feature-answer'>745 мм</p>
                        <p class='product__feature feature-answer'>Ширина сиденья</p>
                        <p class='product__feature feature-answer'>510 мм</p>
                    </div>
                    <a class='product__link-more'>Развернуть</a>
                </div>
            </div>
    </div>`

    let wrap = document.querySelector('.product');
    wrap.innerHTML = card;
}

export default CardProduct;