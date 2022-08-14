import "./style.scss";
import { createBtn } from "../../../../helper/createElem";
import { onHandleRoute } from "../../../../helper/route";

const List = () => {
    const items = [
        {
          src: require("../../../../img/catalog-chair-1.png"),
          text: "Samurai KL-1.04 Темно-коричневый",
          priceNew: "5 599 грн",
          priceOld: "7 000 грн",
          btn: createBtn("btn-blue", "Добавить в корзину"),
        },
        {
          src: require("../../../../img/catalog-chair-2.png"),
          text: "Samurai KL-1.04 Темно-коричневый",
          priceNew: "5 499 грн",
          priceOld: "6 800 грн",
          btn: createBtn("btn-blue", "Добавить в корзину"),
        },
        {
          src: require("../../../../img/catalog-chair-2.png"),
          text: "Samurai KL-1.04 Темно-коричневый",
          priceNew: "5 499 грн",
          priceOld: "6 800 грн",
          btn: createBtn("btn-blue", "Добавить в корзину"),
        },
        {
          src: require("../../../../img/catalog-chair-2.png"),
          text: "Samurai KL-1.04 Темно-коричневый",
          priceNew: "5 499 грн",
          priceOld: "6 800 грн",
          btn: createBtn("btn-blue", "Добавить в корзину"),
        },
        {
          src: require("../../../../img/catalog-chair-2.png"),
          text: "Samurai KL-1.04 Темно-коричневый",
          priceNew: "5 499 грн",
          priceOld: "6 800 грн",
          btn: createBtn("btn-blue", "Добавить в корзину"),
        },
        {
          src: require("../../../../img/catalog-chair-2.png"),
          text: "Samurai KL-1.04 Темно-коричневый",
          priceNew: "5 499 грн",
          priceOld: "6 800 грн",
          btn: createBtn("btn-blue", "Добавить в корзину"),
        },
        {
          src: require("../../../../img/catalog-chair-2.png"),
          text: "Samurai KL-1.04 Темно-коричневый",
          priceNew: "5 499 грн",
          priceOld: "6 800 грн",
          btn: createBtn("btn-blue", "Добавить в корзину"),
        },
        {
          src: require("../../../../img/catalog-chair-2.png"),
          text: "Samurai KL-1.04 Темно-коричневый",
          priceNew: "5 499 грн",
          priceOld: "6 800 грн",
          btn: createBtn("btn-blue", "Добавить в корзину"),
        },
    ];
    let list =  `
    ${items.map((el) => `
      <div class="catalog__list-item">
        <img class="catalog__list-img" src=${el.src}>
        <a class="catalog__list-title" href="/product">${el.text}</a>
        <p class="catalog__list-price-new">${el.priceNew}</p>
        <p class="catalog__list-price-old">${el.priceOld}</p>
        ${el.btn}
      </div>`
    ).join("")}
    ${createBtn("btn-grey", "Показать все")}`

    let wrap = document.querySelector('.catalog__list');
    wrap.innerHTML = list;

    let el = document.querySelectorAll('.catalog__list-title');
    el.forEach((e) => {
      e.addEventListener('click', onHandleRoute);
    })
}

export default List;