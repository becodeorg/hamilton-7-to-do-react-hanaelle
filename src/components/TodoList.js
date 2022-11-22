import React from "react";

function TodoList(props) {

  return (
    <div>
      {props.todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id="checkbox-todo-1"
            name="scales"
            defaultChecked={todo.state}
            onChange={() => {
              const newTodos = [...props.todos];
              newTodos[index].state = !newTodos[index].state;
              props.setTodos(newTodos);
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
