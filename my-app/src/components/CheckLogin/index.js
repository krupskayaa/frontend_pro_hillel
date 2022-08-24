import "./style.css";
import Input from '../Input';
import Button from '../Button';
import React, { useState } from "react";


function CheckLogin({setLogin, setTodos}) {

    const [inputValue, setInputValue] = useState('');

    const change = e => {
        setInputValue(e.target.value);
    }

    const submit = e => {
        e.preventDefault();
    
        setTodos(JSON.parse(sessionStorage.getItem(inputValue)) || []);
        setLogin(inputValue);
    }

    return (
        <form className="to-do__form-check" onSubmit={submit}>
            <Input class="to-do__input-check" type="text" placeholder="Enter your login" value={inputValue} setInput={change}/>
            <Button class="to-do__btn-check" type="submit" text="Continue"/>
        </form>
    );
}

export default CheckLogin;