import React from "react";

function Checkbox() {
  const todos = ["Learn react", "Be awesome"];//Ds le tableau on peut rajouter des elements 
  

  return (
    <div>
      {todos.map((todo)=>( 
      <div>
        <input type="checkbox" id="checkbox-todo-1" name="scales" />
        <label htmlFor="scales">{todo}</label>
      </div>
      ))}
    </div>  
  );
}
export default Checkbox;

// Map est un type de structure de données ou de collection de données 
// qui est utilisé pour stocker les données sous la forme de paires de clés et de valeurs.
//  Chaque paire a une clé unique dans une map, 
// et la valeur stockée dans chaque paire doit être mappée à sa clé unique.
