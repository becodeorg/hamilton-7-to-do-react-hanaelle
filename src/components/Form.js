import React, {useRef} from "react";

function Form(props) {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current; //crée le lien entre la balise input et la variable inputElement. (inputElement.value) contient la valeur que je tape dans la case du site par coucou
    const newTodo = { texte: inputElement.value, check: false }; //crée le nouveau objet(ici ce sera un mot) qui doit etre push dans le nouveau tableau

    //const newFruits = JSON.parse(JSON.stringify(fruits)); // autre possibilité que le ligne 11 (const newTodoList = [...props.todos];), agit de la meme facon. elle prends en compte plusieurs possibilite mais a ce stade il n y a pas d interet. 
    const newTodoList = [...props.todos]; // ✅  we "shallow clone" the array // newTodoList c'est nouveau tableau qui est une copie l'ancien tableau
    newTodoList.push(newTodo); // ✅  we add the item to the cloned array // on rajoute le nouveau objet au nouveau tableau
    props.setTodoList(newTodoList); // ✅  we use the cloned array // on écrase l ancien tableau qu on remplace par le nouveau tableau
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a next todo " />
      <br />
      <button onClick={clickHandler}>Add Todo</button>
    </div>
  );
}
export default Form;
