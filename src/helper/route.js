import Error from "../views/Error";
import Main from "../views/Main";
import Catalog from "../views/Catalog";
import Product from "../views/Product"
import Basket from "../views/Basket"
const onHandleRoute = (e) => {
    e = e || e.window;
    e.preventDefault();
    window.history.pushState({}, '', e.target.href);
    onLocation();
}

const routes = {
    '404': Error,
    '/': Main,
    '/catalog': Catalog,
    '/product': Product,
    '/basket': Basket,
}

const onLocation = () => {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    const main = document.getElementById('main')
    main.innerHTML = '';
    route()
}

window.onpopstate = onLocation;
window.route = onHandleRoute;

export { onHandleRoute, onLocation }