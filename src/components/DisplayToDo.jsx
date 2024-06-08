import "../styles/DisplayTodos.css";

export default function DisplayToDo({ todoList }) {
  return (
    <div className="displayTodos">
      <h2>ToDO List</h2>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <div className="todo" key={todo.id}>
            <h2 className="title">{todo.todoData.title}</h2>
            <p className="description">{todo.todoData.description}</p>
            <p className="priority">{todo.todoData.priority}</p>
            <p className="dueDate">{todo.todoData.dueDate}</p>
            <p className="complete">
              Complete: {todo.todoData.complete ? "✔️" : "❌"}
            </p>
            <button className="update">Update</button>
            <button className="delete">Delete</button>
          </div>
        ))
      ) : (
        <h2>There are no ToDo items</h2>
      )}
    </div>
  );
}
