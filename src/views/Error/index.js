import "./style.scss"
import { createElem } from "../../helper/createElem";

const Error = () => {
    const wrap = document.getElementById('main');

    createElem('h1', 'error', '404', wrap);
};
export default Error;