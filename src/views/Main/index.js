import "./style.scss";
import { createElem } from "../../helper/createElem";
import Description from "../../components/Main/Description";
import Advantages from "../../components/Main/Advantages";


const Main = () => {
    const main = document.getElementById('main')
    createElem('div', 'description', null, main)
    Description();
    createElem('div', 'advantages', null, main)
    Advantages()
}
export default Main;

