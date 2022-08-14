import "./style.scss";
import { createElem } from "../../helper/createElem";
import Description from "../../components/Main/Description";
import Advantages from "../../components/Main/Advantages";
import Catalog from "../../components/Main/Catalog";
import Peculiarities from "../../components/Main/Peculiarities";
import TestDrive from "../../components/Main/TestDrive";
import Clients from "../../components/Main/Clients";
import Reviews from "../../components/Main/Reviews";
import Questions from "../../components/Questions";
import Map from "../../components/Map";

const Main = () => {
    const main = document.getElementById('main');
    createElem('section', 'description', null, main);
    Description();

    createElem('section', 'advantages', null, main);
    Advantages();
    
    const container = createElem('div', 'container', null, main);
    const catalog = createElem('section', 'catalog', null, container);
    createElem('h2', 'catalog__title', 'Каталог кресел', catalog);
    Catalog();
    const list = document.querySelector('.catalog__list');
    const filters = document.querySelector('.catalog__filters');
    catalog.append(filters);
    catalog.append(list);

    createElem('section', 'peculiarities', null, main);
    Peculiarities();

    createElem('section', 'drive', null, main);
    TestDrive();

    createElem('section', 'clients', null, main);
    Clients();

    createElem('section', 'reviews', null, main);
    Reviews();

    createElem('section', 'questions', null, main);
    Questions();

    createElem('section', 'wrapper-map', null, main);
    Map();

}
export default Main;

