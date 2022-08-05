import 'styles/all.scss';
import { createElem } from "./helper/createElem";
import { onLocation } from "../src/helper/route.js";
import Header from 'components/Header';
const root = document.getElementById('root');
Header();
createElem('div', null, null, root, 'id', 'main');
onLocation();