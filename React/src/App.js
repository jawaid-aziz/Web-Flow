import React from "react";
import Header from "./components/Header";
import TodoItem from './components/TodoItem';
import Button from "./components/Button";
import "./style.css";
import Counter from "./components/counter";

function App() {
  return (
    <div className="todo-container">
      <Counter />
      <Header/>
      <TodoItem todo="Drink"/>
      <TodoItem todo="Eat"/>
      <TodoItem complete="true" todo="Study"/>
      <TodoItem todo="Play"/>
      <TodoItem todo="Sleep"/>
      <Button/>
    </div>
  );
}

export default App;
