import "../styles/DisplayTodos.css";

export default function DisplayToDo({ todoList }) {
  return (
    <div className="displayTodos">
      {todoList.map((todo) => (
        <div className="todo" key={todo.id}>
          <h2>{todo.todoData.title}</h2>
          <p>{todo.todoData.description}</p>
          <p>{todo.todoData.priority}</p>
          <p>{todo.todoData.dueDate}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
