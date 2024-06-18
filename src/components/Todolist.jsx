import React from "react";
import Todocard from "./Todocard";

function Todolist({ todo, handleDelete, handleEdit }) {
  return (
    <ul className="main">
      {todo.map((todo, index) => {
        return (
          <Todocard
            key={index}
            handleDelete={handleDelete}
            index={index}
            handleEdit={handleEdit}
          >
            <p>{todo}</p>
          </Todocard>
        );
      })}
    </ul>
  );
}

export default Todolist;
