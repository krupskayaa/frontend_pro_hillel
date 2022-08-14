import "./style.scss";

const Delivery = () => {
    return `
    <div class="delivery">
        <div class="container">
            <div class="delivery__wrapper">
                <h2 class="delivery__title">Доставка</h2>
                <div class="delivery__wrap">
                    <input class="delivery__input" type="radio" placeholder="">
                    <div class="delivery__input-wrap">
                        <h4 class="delivery__input-title">Самовывоз</h4>
                        <p class="delivery__input-txt">г.Днепр, ул. Глинки, 2</p>
                    </div>
                </div>
                <div class="delivery__wrap">
                    <input class="delivery__input" type="radio" placeholder="">
                    <div class="delivery__input-wrap">
                        <h4 class="delivery__input-title">Доставка курьером Новой Почты</h4>
                        <p class="delivery__input-txt">Услуги НП оплачиваются отдельно при получении</p>
                    </div>
                </div>
                <div class="delivery__wrap">
                    <input class="delivery__input" type="radio" placeholder="">
                    <div class="delivery__input-wrap">
                        <h4 class="delivery__input-title">Отделение Новой Почты</h4>
                        <p class="delivery__input-txt">Услуги НП оплачиваются отдельно при получении</p>
                    </div>
                </div>
                <h3 class="delivery__title">Адрес доставки</h3>
                <p class="delivery__text">Уточните только город доставки. Остальные детали мы уточним по телефону</p>
                <input class="delivery__input-address" type="text" placeholder="Город">
                <div class="delivery__load">
                    <a class="delivery__load-link" href="#">Загрузить реквизиты</a>
                </div>
            </div
        </div>
    </div>`
}

export default Delivery;