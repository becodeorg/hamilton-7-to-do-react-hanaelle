import React, { useState } from "react";

function TodoList({initialTodos}) {
  const initialTodos = [
    { texte: "Learn react", check: false },
    { texte: "Be awesome", check: false },
  ]; //Ds le tableau on peut rajouter des elements
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id="checkbox-todo-1"
            name="scales"
            defaultChecked={todo.state}
            onChange={() => {
              const newTodos = [...todos];
              newTodos[index].state = !newTodos[index].state;
              setTodos(newTodos);
            }}
          />
          <label htmlFor="scales">{todo.texte}</label>
        </div>
      ))}
    </div>
  );
}
export default TodoList;

// Map est un type de structure de données ou de collection de données 
// qui est utilisé pour stocker les données sous la forme de paires de clés et de valeurs.
//  Chaque paire a une clé unique dans une map, 
// et la valeur stockée dans chaque paire doit être mappée à sa clé unique.
