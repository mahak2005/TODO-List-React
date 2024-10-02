import React, { useState, useEffect, useRef } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState(""); // Category state
  const [deadline, setDeadline] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dt = props.edit ? props.edit.id : new Date().getTime();

    props.onSubmit({
      id: dt,
      text: input,
      priority, // Include priority in the todo item
      category, // Include category in the todo item
      deadline, // Include deadline in the todo item
    });

    // Reset the form fields
    setInput("");
    setPriority(""); // Reset priority
    setCategory(""); // Reset category
    setDeadline(""); // Reset deadline
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-input-form">
        {props.edit ? (
          <>
            <input
              placeholder="Update todo"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="todo-input-edit"
              maxLength={300}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <MdOutlineEditNote size={45} color="#031820" />
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
              maxLength={300}
              autoComplete="off"
            />

            {/* Priority dropdown */}
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              name="priority"
              className="todo-input"
            >
              <option value="" disabled>
                Select Priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            {/* Category dropdown */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="todo-input"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="work">Enjoy</option>
              <option value="work">Work</option>
              <option value="school">School</option>
              <option value="home">Home</option>
              <option value="college">College</option>
            </select>

            {/* Deadline input */}
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              name="deadline"
              className="todo-input"
            />
          </>
        )}
      </div>
      <button type="submit" className="add-todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
