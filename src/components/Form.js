import React, {useRef} from "react";

function Form(inputTest) {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    console.log(inputElement.value);
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
