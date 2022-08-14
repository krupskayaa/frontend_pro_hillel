import "./style.scss";

const Colors = () => {
    let colors = [require('../../../img/chair-black.png'), require('../../../img/chair-blue.png'), require('../../../img/chair-red.png'), require('../../../img/chair-green.png')]
    return `<div class='colors'>
        ${colors.map((el) =>
            `<img class='colors__img' src=${el}></img>`
        ).join("")}
    </div>`;
}

export default Colors;