import "./style.scss";
import React, {useEffect, useContext, useState} from "react";
import { ContextBasket, ContextBasketCounter } from "../../store/context";
import { useParams } from "react-router-dom";
import Header from "components/Header"
import Footer from "components/Footer"
import Title from "components/Title"
import Button from "../../components/Button";

const Product = () => {
    const {basket, setBasket} = useContext(ContextBasket);
    const {basketCount, setBasketCount} = useContext(ContextBasketCounter);
    const [product, setProduct] = useState({})    
    let {productId} = useParams();

    useEffect (()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }, [productId])

    const addToBasket = () => {
        let newBasket = basket;
        const elemIndex = basket.findIndex(elem => elem.id === product.id);
        if (elemIndex > -1) {
            ++newBasket[elemIndex].count;
        } else {
            newBasket.push({
                ...product,
                count: 1,
            })
        }
        setBasket(newBasket);
        alert('Added to basket');
        setBasketCount(basketCount+1);
        sessionStorage.setItem("items", JSON.stringify(basket));
    }

    return (
        <>
        <Header />
        <div className="container">
            <section className="product">
                <div className="product__img-wrap">
                    <img className="product__img" src={product.image}/>
                </div>
                <div className="product__info">
                    <Title text={product.title}></Title>
                    <p className="product__about">{product.description}</p>
                    <p className="product__price">{product.price}$</p>
                    <Button className="btn-green" text="Add to basket" onClick={addToBasket}></Button>
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}

export default Product;