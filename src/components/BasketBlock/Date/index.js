import "./style.scss";

const Date = () => {
    return `
    <div class="date">
        <div class="container">
            <div class="date__wrapper">
                <h2 class="date__title">Ваш заказ</h2>
                <p class="date__text">Заполните все обязательные поля, чтобы мы смогли с вами связаться для уточнения заказа</p>
                <input class="date__input" type="text" placeholder="Ваше имя">
                <input class="date__input" type="email" placeholder="Электронная почта (не обязательно)">
                <input class="date__input" type="tel" placeholder="Телефон">
            </div
        </div>
    </div>`
}

export default Date;