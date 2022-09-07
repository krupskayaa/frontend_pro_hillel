import React, { useState, useEffect } from "react";
import App from "./app";
import ReactDOM from 'react-dom';
import { ContextCatalog, ContextBasket, ContextBasketCounter } from "store/context";
import { BrowserRouter } from "react-router-dom";

function Init() {
    const [catalog, setCatalog] = useState([]);
    const [basket, setBasket] = useState([]);
    const [basketCount, setBasketCount] = useState(0);

    useEffect(() => {
        console.log('here');
        const products = JSON.parse(sessionStorage.getItem("items"));

        if (products?.length) {
            setBasket(products);
            setBasketCount(products.reduce((sum, current) => sum + current.count, 0))
        }
    }, []);

    return (
        <React.StrictMode>
            <BrowserRouter>
                <ContextCatalog.Provider value={{catalog, setCatalog}}>
                    <ContextBasket.Provider value={{basket, setBasket}}>
                        <ContextBasketCounter.Provider value={{basketCount, setBasketCount}}>
                            <App/>
                        </ContextBasketCounter.Provider>
                    </ContextBasket.Provider>
                </ContextCatalog.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

ReactDOM.render(<Init />, document.getElementById('root'));

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
