import "./style.scss";

const Peculiarities = () => {
    const imgChair = require('../../../img/pecul-chair.png');
    let peculiarities = `
    <div class='container'>
        <div class='peculiarities__description'>
            <h2 class='peculiarities__title'>Особенности кресел Самурай</h2>
            <p class='peculiarities__txt'>Здесь будет более подробно развернуто ключевое преимущество. Четвертое поколение Samurai, выпускаемое с сентября 2020 года. <span class="txt--bold">Исправлены десятки недочетов</span> предыдущих поколений</p>
        </div>
        <div class='peculiarities__wrapper'>
            <div class='peculiarities__col-1'>
                <div class='peculiarities__opt'>
                    <h3 class="peculiarities__opt-title">Индивидуальные настройки</h3>
                    <p class="peculiarities__opt-text">Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
                </div>
                <div class='peculiarities__opt active'>
                    <h3 class="peculiarities__opt-title">Индивидуальные настройки</h3>
                    <p class="peculiarities__opt-text">Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
                </div>
                <div class='peculiarities__opt'>
                    <h3 class="peculiarities__opt-title">Индивидуальные настройки</h3>
                    <p class="peculiarities__opt-text">Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
                </div>
                <div class='peculiarities__opt'>
                    <h3 class="peculiarities__opt-title">Индивидуальные настройки</h3>
                    <p class="peculiarities__opt-text">Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
                </div>
            </div>
            <div class='peculiarities__img'>
                <img src="${imgChair}">
            </div>
            <div class='peculiarities__col-3'>
                <div class='peculiarities__opt'>
                    <h3 class='peculiarities__opt-title'>Индивидуальные настройки</h3>
                    <p class='peculiarities__opt-text'>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
                </div>
                <div class='peculiarities__opt'>
                    <h3 class='peculiarities__opt-title'>Индивидуальные настройки</h3>
                    <p class='peculiarities__opt-text'>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
                </div>
                <div class='peculiarities__opt'>
                    <h3 class='peculiarities__opt-title'>Индивидуальные настройки</h3>
                    <p class='peculiarities__opt-text'>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
                </div>
                <div class='peculiarities__opt'>
                    <h3 class='peculiarities__opt-title'>Индивидуальные настройки</h3>
                    <p class='peculiarities__opt-text'>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
                </div>
            </div>
        </div>
    </div>`

    let wrap = document.querySelector('.peculiarities');
    wrap.innerHTML = peculiarities;
}

export default Peculiarities;