import "./style.scss";

const Map = () => {
    let mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.3722410695304!2d35.05100821891979!3d48.46633399216102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3537835b681%3A0xf645e668302f9942!2sWork.%20Most-City!5e0!3m2!1sru!2sua!4v1659987842567!5m2!1sru!2sua';
    let map = `
    <div class='map-wrapper'>
        <iframe class='map' src=${mapSrc}></iframe>
    </div>`

    let wrap = document.querySelector('.wrapper-map');
    wrap.innerHTML = map;
}

export default Map;