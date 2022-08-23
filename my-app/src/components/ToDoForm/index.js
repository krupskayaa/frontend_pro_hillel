import "./style.css";
import Input from "./Input";
import Button from "./Button";
import React, { useState } from "react";

function ToDoForm({todos, setTodos}) {
    const [input, setInput] = useState('');

    const change = e => {
        setInput(e.target.value);
    }

    const submit = e => {
        e.preventDefault();
        todos.push({
            id: todos.length + 1,
            text: input.value,
            done: false,
        });
        setTodos(todos);
        console.log(todos)
        setInput('');
    }

    return (
        <form className="to-do_form" onSubmit={submit}>
            <Input class = "to-do_input" type = "text" placeholder = "Add new task" value = {input} setInput={change} />
            <Button class= "to-do_btn" type = "submit" text = "+"/>
        </form>
    );
}

export default ToDoForm;