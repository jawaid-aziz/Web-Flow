import React from "react";
import Header from "./components/Header";
import TodoItem from './components/TodoItem';
import Button from "./components/Button";
import "./style.css";
import Counter from "./components/counter";
import { useEffect } from "react";
import Timer from "./components/timer";

function App() {
  return (
    <div className="todo-container">
      <Counter />
      <Timer/>
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
