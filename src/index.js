import 'styles/all.scss';
import { createElem } from "./helper/createElem";
import { onLocation } from "./helper/route.js";
import Header from 'components/Header';
import Footer from './components/Footer';

const root = document.getElementById('root');

Header();
createElem('div', null, null, root, 'id', 'main');

createElem('footer', 'footer', null, root);
Footer();

onLocation();