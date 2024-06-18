import { useState, useEffect } from "react";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const persistData = (newList) => {
    localStorage.setItem("todo", JSON.stringify({ todo: newList }));
  };

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todo, newTodo];
    persistData(newTodoList);
    setTodo(newTodoList);
  };

  const handleDelete = (index) => {
    const newTodoList = todo.filter((todos, todosIndex) => {
      return todosIndex !== index;
    });
    persistData(newTodoList);
    setTodo(newTodoList);
  };

  const handleEdit = (index) => {
    const editValue = todo[index];
    setTodoValue(editValue);
    handleDelete(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodo = localStorage.getItem("todo");
    if (!localTodo) {
      return;
    }
    localTodo = JSON.parse(localTodo).todo;
    setTodo(localTodo);
  }, []);

  return (
    <>
      <Todoinput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <Todolist
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        todo={todo}
      />
    </>
  );
}

export default App;
