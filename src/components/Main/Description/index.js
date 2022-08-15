import "./style.scss"

const Description = () => {
    const imgChair = require('../../../img/chair.png');
    const imgBlurChair = require('../../../img/chair-blur.png');
    let description = `
    <img class='description__chair-blur' src=${imgBlurChair} alt="кресло" width="318" height="414">
    <button class="description__slide slide-left"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7L7 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </button>
    <div class='container'>
        <div class='description__wrapper-all'>
            <div class='description__wrapper'>
                <h1 class='description__title'>Кресла Samurai на выгодных условиях по всей стране <span>💙💛</span></h1>
                <p class='description__txt'>Здесь вам не придется покупать товар в слепую — проведите тест-драйв перед покупкой</p>
                <button class='description__btn-main'>Запись на тест-драйв</button>
            </div>
            <div class='description__img'>
                <img class='description__chair-main' src=${imgChair} alt="кресло" width="438" height="629">
            </div>
        </div>
    </div>
    <button class="description__slide slide-right"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L1 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>                        
    </button>`

    let wrap = document.querySelector('.description');
    wrap.innerHTML = description;
}

export default Description;