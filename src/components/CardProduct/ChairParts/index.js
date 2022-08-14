import "./style.scss";

const ChairParts = () => {
    let parts = [require('../../../img/chair-part1.png'), require('../../../img/chair-part2.png'), require('../../../img/chair-part3.png'), require('../../../img/chair-part4.png')]
    return `<div class='chairs-parts'>
        ${parts.map((el) =>
            `<img class='chairs-parts__img' src=${el}></img>`
        ).join("")}
    </div>`;
}

export default ChairParts;