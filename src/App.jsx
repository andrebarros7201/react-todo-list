import { useEffect, useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo.jsx";
import DisplayToDo from "./components/DisplayToDo.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const defaultTodo = {
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    complete: false,
  };

  const [todoList, setTodoList] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todoList"));
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [todoData, setTodoData] = useState(defaultTodo);
  /*
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    todoData.complete = false;
    setTodoList((prevState) => [...prevState, { id: id, todoData: todoData }]);
    setTodoData(defaultTodo);
  };

  const updateField = (field, value) => {
    setTodoData((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <div className="app">
      <CreateToDo
        todoData={todoData}
        handleSubmit={handleSubmit}
        updateField={updateField}
      />
      <DisplayToDo todoList={todoList} />
    </div>
  );
}

export default App;
