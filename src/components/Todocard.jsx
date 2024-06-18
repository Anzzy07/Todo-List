import React from "react";

function Todocard({ children, handleDelete, index, handleEdit }) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEdit(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDelete(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Todocard;
