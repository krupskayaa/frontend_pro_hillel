import React from "react";
import './styles/all';
import {Routes, Route} from "react-router-dom"
import Main from "./views/Main";
import Catalog from "./views/Catalog";
import Product from "./views/Product";
import Basket from "./views/Basket";
import ErrorPage from "./views/ErrorPage";

const App = () => {
    return (
         <div>
             <Routes>
                <Route path='/' element={<Main/>}/>
                <Route exact path='/catalog' element={<Catalog/>}/>
                <Route path='/catalog/:productId' element={<Product/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='*' element={<ErrorPage/>}/>
             </Routes>
         </div>
    )
}

export default App;
