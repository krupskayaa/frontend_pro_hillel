import "./style.scss"
import Switch from "../../components/Switch";
import Sort from "../../components/Main/Catalog/Sort";
import CatalogBlock from "../../components/Main/Catalog";
import Questions from "../../components/Questions";
import Map from "../../components/Map";
import { createElem } from "../../helper/createElem";

const Catalog = () => {
    const wrap = document.getElementById('main');

    createElem('section', 'switch', null, main);
    Switch(false, 'Каталог', '/catalog');

    const container = createElem('div', 'container', null, main);
    const catalog = createElem('section', 'catalog', null, container);

    const catalogWrap = createElem('div', 'catalog__wrapper', null, catalog)
    createElem('h2', 'catalog__title-small', 'Каталог кресел', catalogWrap);

    Sort();

    CatalogBlock();
    const list = document.querySelector('.catalog__list');
    const filters = document.querySelector('.catalog__filters');
    catalog.append(filters);
    catalog.append(list);


    createElem('section', 'questions', null, wrap);
    Questions();

    createElem('section', 'wrapper-map', null, wrap)
    Map();
}
export default Catalog;