import React from "react";

const Todoinput = ({ handleAddTodos, todoValue, setTodoValue }) => {
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter TODO...."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default Todoinput;
