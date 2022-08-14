import "./style.scss";

const Payment = () => {
    return `
    <div class="payment">
        <div class="container">
            <div class="payment__wrapper">
                <h2 class="delivery__title">Оплата</h2>
                <div class="payment__wrap">
                    <input class="payment__input" type="radio" placeholder="">
                    <h4 class="payment__input-title">Безналичный расчет для юр.лиц (счет на оплату)</h4>
                </div>
                <div class="payment__wrap">
                    <input class="payment__input" type="radio" placeholder="">
                    <h4 class="payment__input-title">Оплата наличными</h4>
                </div>
                <div class="payment__wrap">
                    <input class="payment__input" type="radio" placeholder="">
                    <h4 class="payment__input-title">Оплата Банковской картой (VISA, MasterCard) без комиссии при доставке через платежный терминал</h4>
                </div>
            </div
        </div>
    </div>`
}

export default Payment;