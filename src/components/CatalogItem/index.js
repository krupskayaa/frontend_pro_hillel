import "./style.scss";
import {Link, useLocation} from "react-router-dom";

const CatalogItem = ({price, title, id, image} ) => {
    let { pathname } = useLocation();
    return (
        <div id={id} className="catalog__item">
            <div className="catalog__wrap-img">
                <Link to={`${pathname}/${id}`} className="catalog__item-img-wrap"><img className="catalog__image" src={image}/></Link>
    
            </div>
            <div className="catalog__item-info">
                <Link to={`${pathname}/${id}`} className="catalog__item-title">{title}</Link>
                <p className="catalog__price">${price}</p>
            </div>
        </div>
    )

}

export default CatalogItem;