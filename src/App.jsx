import { useEffect, useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo.jsx";
import DisplayToDo from "./components/DisplayToDo.jsx";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <CreateToDo setTodos={setTodos} />
      <DisplayToDo todos={todos} />
    </div>
  );
}

export default App;
