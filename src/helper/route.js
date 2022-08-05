import Main from "../views/Main"
// import Product from "../views/product"
// import Catalog from "../views/catalog"
// import Basket from "../views/basket"
const onHandleRoute = (e) => {
    e = e || e.window;
    e.preventDefault();
    window.history.pushState({}, '', e.target.href);
    onLocation();
}

const routes = {
    '/': Main
    // '/about-product': Product,
    // '/basket': Basket,
    // '/catalog': Catalog,
}

const onLocation = () => {
    const { pathname } = window.location;
    const route = routes[pathname] || routes[404];
    const main = document.getElementById('main');
    main.innerHTML = '';
    route();
}

window.onpopstate = onLocation;
window.route = onHandleRoute;

export { onHandleRoute, onLocation }