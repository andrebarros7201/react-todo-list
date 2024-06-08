import "../styles/DisplayTodos.css";

export default function DisplayToDo({
  todoList,
  isEditing,
  handleEditing,
  deleteTodo,
}) {
  return (
    <div className="displayTodos">
      <h2>ToDO List</h2>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <div className="todo" key={todo.id}>
            <h2 className="title">{todo.todoData.title}</h2>
            <p className="description">{todo.todoData.description}</p>
            <p className="priority">Priority: {todo.todoData.priority}</p>
            <p className="dueDate">Due Date: {todo.todoData.dueDate}</p>
            <p className="complete">
              Complete: {todo.todoData.complete ? "✔️" : "❌"}
            </p>
            <button
              className="update"
              onClick={handleEditing}
              disabled={isEditing}
            >
              Update
            </button>
            <button className="toggleStatus">
              Mark as {todo.todoData.complete ? "Incomplete" : "Complete"}
            </button>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <h4>There are no ToDo items</h4>
      )}
    </div>
  );
}
