import './App.css';
import TitleMain from "./components/TitleMain";
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import CheckLogin from './components/CheckLogin';
import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [login, setLogin] = useState('');

  useEffect(() => {
    if(login) {
      sessionStorage.setItem(login, JSON.stringify(todos));
    }
  }, [todos])

  return (
    <div>
      {login ? (
        <div className="to-do">
          <TitleMain class="to-do__title" title="to do list"></TitleMain>
          <ToDoForm todos={todos} setTodos={setTodos} />
          <ToDoList todos={todos} setTodos={setTodos} />
        </div>
      ) : (
          <CheckLogin setTodos={setTodos} setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;