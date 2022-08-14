import "./style.scss"
import { createElem } from "../../../../helper/createElem";

const Filters = () => {
    let opt = [
        {
            name: 'Спинка',
            option: 'Сетка',
            src: require("../../../../img/opt-1.png")
        },
        {
            name: 'Сиденье',
            option: 'Кожзам',
            src: require("../../../../img/opt-2.png")
        },
        {
            name: 'Подголовник',
            option: '3D',
            src: require("../../../../img/opt-3.png")
        },
        {
            name: 'Подлокотники',
            option: 'Все',
            src: null
        }
    ]
    
    let wrap = document.querySelector('.catalog__filters');

    opt.forEach((el) => {
        if(el.src) {
            createElem('div', 'catalog__filters-wrapper', 
            `<span class="catalog__filters-title">${el.name}</span>
            <div class="catalog__filters-area">
                <div class="catalog__filters-img">
                    <img src=${el.src}>
                </div>
                <select name="select-back" id="select-back">
                    <option value="grid">${el.option}</option>
                </select>
            </div>`, wrap)
        } else {
            createElem('div', 'catalog__filters-wrapper', 
            `<span class="catalog__filters-title">${el.name}</span>
            <div class="catalog__filters-area">
                <select name="select-back" id="select-back">
                    <option value="grid">${el.option}</option>
                </select>
            </div>`, wrap)
        }
    })

}

export default Filters;