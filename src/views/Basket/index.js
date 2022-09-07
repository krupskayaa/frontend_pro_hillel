import React, { useEffect } from "react";
import Header from "components/Header"
import Footer from "components/Footer";
import ItemBasket from "components/ItemBasket";

const Basket = () => {  
    return (
        <>
        <Header />
        <main>
            <ItemBasket />
        </main>
        <Footer />
        </>
    )
}

export default Basket;