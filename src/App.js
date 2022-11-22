//import "./App.css";
import React, { useState, useEffect } from "react"; //useEffect enregistre nos taches dans localStorage ==> 
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

//const LSKEY = "MyTodoApp";

function App() {
  const initialTodos = [
    { texte: "Learn react", check: false },
    { texte: "Be awesome", check: false },
  ]; //Ds le tableau on peut rajouter des elements

  useEffect(() => {
    //(useEffect) permet de dire a react qu a chause mise a jour  de notre composent Appjs copie nos taches et enregistre le dans localStorage
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  } /*[todos] */ ); //on applique notre changelent dans le tableau  ex [todos]

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
