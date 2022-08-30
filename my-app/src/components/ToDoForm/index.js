import "./style.css";
import Input from "../Input";
import Button from "../Button";
import React, { useState } from "react";

function ToDoForm({todos, setTodos}) {
    const [input, setInput] = useState('');

    const submit = e => {
        e.preventDefault();
        if (input !== '') {
            const newTodos = [...todos, {
                id: todos.length + 1,
                text: input,
                done: false,
            }];
            setTodos(newTodos);
            setInput('');
        } else {
            alert("You haven't entered a task")
        }
    }

    return (
        <form className="to-do__form" onSubmit={submit}>
            <Input class="to-do__input" type="text" placeholder="Add new task" value={input} setInput={(e) => setInput(e.target.value)} />
            <Button class="to-do__btn" type="submit" text = "+"/>
        </form>
    );
}

export default ToDoForm;