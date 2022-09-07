import "./style.scss";
import React, {useEffect, useContext} from "react";
import { ContextCatalog } from "../../store/context";
import CatalogItem from "../CatalogItem";
import Title from "components/Title"

const CatalogList = () => {
    const {catalog, setCatalog} = useContext(ContextCatalog)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setCatalog(json))
    },[])
    return (
        <div className="container">
            <section className="catalog">
                <Title text="Catalog"/>
                <div className="catalog__wrapper">
                    {catalog?.map((elem) => {
                        return (
                            <CatalogItem key={elem.id} id={elem.id} title={elem.title} price={elem.price} image={elem.image}/>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}

export default CatalogList;