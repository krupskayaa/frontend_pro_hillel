import "./style.scss"
import { onHandleRoute } from "../../helper/route";

const Header = () => {
    const header = `
        <header class='header'>
            <div class='container'>
                <div class='header__info1'>
                    <div class="header__wrapper-logo">
                        <a class="header__logo" href='/'>
                            <svg width="184" height="30" viewBox="0 0 184 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M37 6H184V28H37V6Z" fill="url(#pattern0)"/>
                                <path d="M0 0H30V30H0V0Z" fill="url(#pattern1)"/>
                                <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_68_415" transform="translate(-0.285714 -0.479545) scale(0.00442177 0.0295455)"/>
                                </pattern>
                                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_68_415" transform="translate(-0.233333 -0.218333) scale(0.0216667)"/>
                                </pattern>
                                <image id="image0_68_415" width="300" height="94" xlink:href="data:image/png;base64,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"/>
                                </defs>
                            </svg>
                            <p class='header__logo-txt'>Кресла Samurai</p>
                        </a>
                    </div>
                    <div class="header__input">
                        <input class='header__search' type='text' placeholder='Название модели или артикул'>
                    </div>
                    <div class="header__phone">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_68_390)">
                            <path d="M23.313 14.1063C23.0385 13.7076 22.5146 13.6132 22.1219 13.8777C21.7292 14.1422 21.6239 14.6785 21.8871 15.0703C22.6808 16.2484 22.6789 17.7728 21.8825 18.955L21.8818 18.9557C21.652 19.2954 21.6957 19.7531 21.9844 20.0419C22.0231 20.0806 22.0654 20.1158 22.1119 20.1482C22.5051 20.4099 23.0406 20.3053 23.3058 19.9119C24.4954 18.1463 24.4993 15.8679 23.313 14.1063Z" fill="#959AAE"/>
                            <path d="M25.7321 11.6012C25.597 11.4209 25.3919 11.3091 25.1655 11.2833C24.9342 11.2555 24.7062 11.3215 24.524 11.4686C24.1538 11.7641 24.0929 12.3052 24.3879 12.675C26.4243 15.223 26.4203 18.7903 24.3787 21.3474C24.1051 21.69 24.1311 22.1809 24.4395 22.4894C24.4627 22.5126 24.4867 22.5337 24.5128 22.5541C24.6917 22.6977 24.9152 22.7616 25.1438 22.7358C25.3717 22.7093 25.5757 22.5968 25.7192 22.4166C28.267 19.2266 28.2732 14.7797 25.7321 11.6012Z" fill="#959AAE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6278 17.0026C15.6286 22.6433 19.5309 20.0208 19.5321 23.6115C19.5326 27.0739 20.1809 28.4158 15.7941 28.4152C15.2985 28.3613 10.8959 29.2722 10.8942 17.0027C10.8925 4.73179 15.2953 5.63937 15.7909 5.58555C20.1891 5.58541 19.529 6.92716 19.5295 10.3896C19.53 13.981 15.627 11.362 15.6278 17.0026Z" fill="#959AAE"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_68_390">
                            <rect width="24" height="24" fill="white" transform="translate(17 0.0292969) rotate(45)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <a class="header__phone phone" href="++380954235495">+380 95-423-54-95</a>
                    </div>
                    <button type='button' class='header__button button'>Заказать звонок</button>
                </div>
                <div class='header__info2'>
                    <nav class='header__menu'>
                        <ul class='header__list'>
                            <li class='header__wrap-list'>
                                <a class='header__link link-catalog' href='/catalog'>Каталог</a>
                            </li>
                            <li class='header__wrap-list'>
                                <a class='header__link link-about' href='/about'>О продукте</a>
                            </li>
                            <li class='header__wrap-list'>
                                <a class='header__link link-reviews' href='/reviews'>Отзывы</a>
                            </li>
                            <li class='header__wrap-list'>
                                <a class='header__link link-delivery' href='/delivery'>Доставка и оплата</a>
                            </li>
                            <li class='header__wrap-list'>
                                <a class='header__link link-contact' href='/contact'>Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <div class='header__wrap-basket'>
                        <div class='header__location'>
                            <svg class='header__icon-location' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3337 1.6665L9.16699 10.8332" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.3337 1.6665L12.5003 18.3332L9.16699 10.8332L1.66699 7.49984L18.3337 1.6665Z" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <select class='header__option' name='local'>
                                <option value='Dnipro' selected>Днепр</option>
                            </select>
                        </div>
                        <div class='header__basket'>
                            <svg class='header__icon-basket' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_68_408)">
                                <path d="M7.50032 18.3334C7.96056 18.3334 8.33365 17.9603 8.33365 17.5001C8.33365 17.0398 7.96056 16.6667 7.50032 16.6667C7.04009 16.6667 6.66699 17.0398 6.66699 17.5001C6.66699 17.9603 7.04009 18.3334 7.50032 18.3334Z" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.6663 18.3334C17.1266 18.3334 17.4997 17.9603 17.4997 17.5001C17.4997 17.0398 17.1266 16.6667 16.6663 16.6667C16.2061 16.6667 15.833 17.0398 15.833 17.5001C15.833 17.9603 16.2061 18.3334 16.6663 18.3334Z" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M0.833008 0.833252H4.16634L6.39967 11.9916C6.47588 12.3752 6.6846 12.7199 6.98929 12.9652C7.29399 13.2105 7.67525 13.3407 8.06634 13.3333H16.1663C16.5574 13.3407 16.9387 13.2105 17.2434 12.9652C17.5481 12.7199 17.7568 12.3752 17.833 11.9916L19.1663 4.99992H4.99967" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_68_408">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <a class='header__basket-link' href='/basket'>
                                Моя корзина
                                <span class='header__basket-count'>+1</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>`;

    let root = document.getElementById('root');
    root.innerHTML = header;

    let main = document.querySelector('.header__logo');
    main.addEventListener('click', onHandleRoute);
}

export default Header;