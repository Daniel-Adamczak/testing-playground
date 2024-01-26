import React, { useState } from "react";
import { toast } from "react-toastify";

export const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <article>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Enter name of the task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          if (tasks.includes(task)) {
            toast("Hej taki task już istnieje!", { type: "error" });
          } else if (task.trim().length < 3) {
            toast("Ten task to nie słowo!", { type: "error" });
          } else {
            setTasks((prevTasks) => [...prevTasks, task]);
            setTask("");
          }
        }}
      >
        Submit
      </button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 && (
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                Nie dodałeś żadnego taska
              </td>
            </tr>
          )}
          {tasks.map((todo) => (
            <tr key={todo}>
              <td>{todo}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
