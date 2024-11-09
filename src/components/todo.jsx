import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    console.log(event.target.value);
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, done: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function doneTask(index) {
    // Create a new list of tasks
    const updatedTasks = tasks.map((task, i) => {
      // Check if the current task is the one we want to change
      if (i === index) {
        // If it is, create a new task with the opposite done status
        return { ...task, done: !task.done };
      }
      // If it's not the task we want to change, keep it the same
      return task;
    });

    // Update the tasks with the new list
    setTasks(updatedTasks);
  }
  return (
    <div className="to-do-list">
      <h2>To do list for </h2>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add task</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="done-btn" onClick={() => doneTask(index)}>
              {task.done ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
