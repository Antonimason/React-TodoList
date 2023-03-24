import React, { useState } from "react";
import Card from "./Components/Card/Card";
import { MdDeleteOutline } from "react-icons/md";
import "./Task.css";

function Task() {
  const [task, setTask] = useState("");
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  if (tasks) {
    let hui = [];
    for (let i = 0; i < tasks.length; i++) {
      hui.push(
        <Card
          label={tasks[i].label}
          name={tasks[i].title}
          task={tasks[i].description}
          date={tasks[i].date}
          key={tasks[i].id}
          image={<MdDeleteOutline />}
        />
      );
    }
    if (tasks.length > 0)
      return (
        <div className="task-box" onClick={(e) => setTask(hui)}>
          {hui}
        </div>
      );
    else
      return (
        <div className="no-task">
          <h3>There's no task</h3>
        </div>
      );
  } else {
    return (
      <div className="no-task">
        <h3>There's no task</h3>
      </div>
    );
  }
}

export default Task;