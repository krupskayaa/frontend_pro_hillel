import "./style.scss";

const Footer = () => {
    let footerLogo = require('../../img/logo-footer.png');
    let footer = `
    <div class="container">
        <div class="footer__wrap">
            <div class="footer__author">
                <img class="footer__logo" src="${footerLogo}">
                <p class="footer__text">Политика конфиденциальности</p>
                <p class="footer__text">© 2021 Все права защищены</p>
            </div>
            <ul class="footer__menu">
                <li>
                    <a class="footer__direction" href="#">О продукте</a>
                </li>
                <li>
                    <a class="footer__direction" href="#">Отзывы</a>
                </li>
                <li>
                    <a class="footer__direction" href="#">Доставка и оплата</a>
                </li>
                <li>
                    <a class="footer__direction" href="#">Контакты</a>
                </li>
            </ul>
            <ul class="footer__contact">
                <li>
                    <a class="footer__phone phone" href="tel:+380954235495">+380 95-423-54-95</a>
                </li>
                <li>
                    <a class="footer__mail" href="mailto:alyona.krupskaya@gmail.com">alyona.krupskaya@gmail.com</a>
                </li>
                <li>
                    <p class="footer__address address">ул. Глинки, 2</p>                
                </li>
            </ul>
        </div>
    </div>`;

    const wrap = document.querySelector('.footer')
    wrap.innerHTML = footer;
}

export default Footer;