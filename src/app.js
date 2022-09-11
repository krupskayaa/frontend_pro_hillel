import React from "react";
import './styles/all';
import {Routes, Route} from "react-router-dom";
import Main from "./views/Main";
import Profile from "./views/Profile";
import Login from "./views/Login";
import News from "./views/News";

const App = () => {
    return (
         <div>
             <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path="/news" element = {<News/>}/>
                <Route path="/profile" element = {<Profile/>}/>
                <Route path="/login" element = {<Login/>}/>
             </Routes>
         </div>
    )
}

export default App;
