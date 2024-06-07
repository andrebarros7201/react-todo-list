import "../styles/CreateTodo.css";

export default function CreateToDo({ todoData, handleSubmit, updateField }) {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create a ToDo</legend>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={todoData.title}
            required="true"
            onChange={(e) => updateField("title", e.currentTarget.value)}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            required="true"
            value={todoData.description}
            onChange={(e) => updateField("description", e.currentTarget.value)}
          />

          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            value={todoData.priority}
            defaultValue="low"
            required="true"
            onChange={(e) => updateField("priority", e.currentTarget.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low" selected="true">
              Low
            </option>
          </select>

          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={todoData.dueDate}
            required="true"
            onChange={(e) => updateField("dueDate", e.currentTarget.value)}
          />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
