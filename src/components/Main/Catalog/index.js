import Filters from './Filters';
import List from './List';
import { createElem } from "../../../helper/createElem";


const Catalog = () => {
    createElem('div', 'catalog__filters', null, main)
    Filters()
    createElem('div', 'catalog__list', null, main)
    List()
}

export default Catalog;