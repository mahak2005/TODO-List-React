import React from "react";
import { MdCheckCircle, MdEdit, MdDelete } from "react-icons/md"; // Importing icons
import "./TodoListItem.css";

const TodoListItem = ({ todo, completeTodo, removeTodo, submitUpdate, edit, setEdit }) => {
  const handleComplete = () => {
    completeTodo(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleEdit = () => {
    setEdit({ id: todo.id, value: todo.text });
  };

  return (
    <div className="todo-item">
      <div className="todo-text">
        <span>{todo.text}</span>
        <span className="todo-priority">Priority: {todo.priority}</span>
        <span className="todo-category">Category: {todo.category}</span>
        <span className="todo-deadline">Deadline: {todo.deadline}</span>
      </div>
      <div className="todo-actions">
        <MdCheckCircle
          onClick={handleComplete}
          className="todo-icon complete-icon"
          title="Complete"
        />
        <MdEdit
          onClick={handleEdit}
          className="todo-icon edit-icon"
          title="Edit"
        />
        <MdDelete
          onClick={handleRemove}
          className="todo-icon delete-icon"
          title="Remove"
        />
      </div>
    </div>
  );
};

export default TodoListItem;
