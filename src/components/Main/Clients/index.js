import "./style.scss";

const Clients = () => {
    let logos = [require("../../../img/sport-life-logo.png"), require("../../../img/nova-poshta.png"), require("../../../img/varus-logo.png"), require("../../../img/synevo-logo.png"), require("../../../img/silpo-logo.png"), require("../../../img/vodafone-logo.png")]
    let clients = `
    <div class='container'>
        <h2 class='clients__title'>Наши клиенты</h2>
        <div class='clients__wrapper'>
            ${logos.map((el) => 
                `<img class='clients__img' src=${el}>`
            ).join("")}
        </div>
    </div>`
    
    let wrap = document.querySelector('.clients');
    wrap.innerHTML = clients;
}

export default Clients;