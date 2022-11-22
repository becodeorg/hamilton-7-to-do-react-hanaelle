//import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import React, { useState } from "react";


function App() {
  const initialTodos = [
    { texte: "Learn react", check: false },
    { texte: "Be awesome", check: false },
  ]; //Ds le tableau on peut rajouter des elements

  const [todos, setTodos] = useState(initialTodos);
  return (
    <main className="App">
      <Header />
      <Form todos={todos} setTodoList={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} /> 
    </main>
  );
}

  /*Transfere le tableau et sa fonction dans Todolist*/

export default App;
