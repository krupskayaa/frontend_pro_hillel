import './App.css';
import TitleMain from "./components/TitleMain";
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="to-do">
      <TitleMain class = "to-do_title" title = "TO DO LIST"></TitleMain>
      <ToDoForm todos = {todos} setTodos = {setTodos}/>
      <ToDoList todos = {todos}/>
    </div>
  );
}

export default App;