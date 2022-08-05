import "./style.scss"

const List = () => {

    // let list = `
    // <div class='container'>
    //     <div class='advantages__wrapper'>
    //         <article class='advantages__item item-delivery'>
    //             <p class='advantages__txt'><span class='advantages__txt-bold'>Бесплатная доставка</span> по Днепру и области — от 3 шт.</p>
    //             <a class='advantages__link' href="#">Как получить?</a>
    //         </article>
    //         <article class='advantages__item item-sales'>
    //             <p class='advantages__txt'><span class='advantages__txt-bold'>Индивидуальные скидки</span> при заказе от 3 шт.</p>
    //             <a class='advantages__link' href="#">Смотреть условия</a>
    //         </article>
    //         <article class='advantages__item item-conditions'>
    //             <p class='advantages__txt'>Для юридических лиц действуют <span class='advantages__txt-bold'>особые условия</span></p>
    //             <a class='advantages__link' href="#">Узнать подробнее</a>
    //         </article>
    //     </div>
    // </div>`

    let wrap = document.querySelector('.list');
    wrap.innerHTML = list;
}

export default List;