import "./style.scss"
import { useContext, useEffect } from "react";
import {ContextBasket, ContextBasketCounter} from "../../store/context";
import {Link} from "react-router-dom";
import Title from "components/Title";
import Button from "components/Button";

const ItemBasket = () => {
    const {basketCount, setBasketCount} = useContext(ContextBasketCounter);
    const {basket, setBasket} = useContext(ContextBasket);

    useEffect(() => {
        sessionStorage.setItem("items", JSON.stringify(basket));
    }, [basket]);

    const minusProduct = (id) => {
        const newBasket = basket.map((elem) => {
            if (elem.id === id && elem.count > 1) {
              elem.count --;
            }
            return elem;
        });
        setBasket(newBasket);
        setBasketCount(basketCount-1);
    }

    const addProduct = (id) => {
        const newBasket = basket.map((elem) => {
            if (elem.id === id) elem.count ++;
            return elem;
        });
        setBasket(newBasket);
        setBasketCount(basketCount+1);
    }

    let result = basket.reduce((sum, current) => sum + current.price * current.count, 0);

    return (
        <div className="container">
            <div className="basket">
                <Title text="Basket"/>
                <div className="basket__wrapper-items">
                    {basket?.map((el) => {
                        return (
                            <div key={el.id} className="basket__item">
                                <Link to={`/catalog/${el.id}`} className="basket__item-image">
                                    <img className="basket__item-image" src={el.image}/>
                                </Link>
                                <div className="basket__item-info">
                                    <Link to={`/catalog/${el.id}`} className="basket__item-title">{el.title}</Link>
                                    <p className="basket__item-description">{el.description}</p>
                                </div>
                                <div className="counter">
                                    {el.count > 1 &&
                                        <Button className="btn-count" text="-" onClick={() => minusProduct(el.id)}></Button>
                                    }
                                    <span className="product-count">{el.count}</span>
                                    <Button className="btn-count" text="+" onClick={() => addProduct(el.id)}></Button>
                                </div>
                                <p className="basket__item-price">${el.price}</p>
                            </div>
                        );
                    })}
                </div>
                <p className="basket__all">Total: {result.toFixed(2)} </p>
            </div>
        </div>
        
    );
}

export default ItemBasket;