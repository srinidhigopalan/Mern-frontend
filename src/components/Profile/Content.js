import React, { useState, useEffect } from 'react';
import './Profile.css';
import Taskrow from './Taskrow';
import Axios from "axios";
import Completedrow from './Completedrow';

function Content() {
  //to toggle
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  //for get requests of pending and completes tasks
  const [curr, setCurr] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  //for create task
  const [task_name, setTaskName] = useState("");
  const [task_desc, setTaskDesc] = useState("");
  const [star, setStar] = useState(false);
  const [priority_number, setPriorityNumber] = useState(); //SET PRIORITY
  const [reminder_active, setReminderActive] = useState(false);
  const [reminder_time, setReminderTime] = useState("");
  const [completed, setCompleted] = useState(false);

  //create task axios
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      task_name: task_name,
      task_description: task_desc,
      star: star,
      priority_number: priority_number,
      reminder_active: reminder_active,
      reminder_time: reminder_time,
      completed: completed
    }
    Axios.post("http://localhost:8000/tasks/task/create-task", data)
      .then((res) => {
        if (res.status === 200)
          alert("record added successfully");
        else
          Promise.reject();
      })
      .catch((err) => alert(err))
    event.target.reset();
  }

  //fetch pending tasks
  useEffect(() => {
    Axios.get("https://localhost:8000/tasks/task/pending-tasks")
      .then((res) => {
        if (res.status === 200)
          setCurr(res.data);
        else
          Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  //fetch completed tasks
  useEffect(() => {
    Axios.get("https://localhost:8000/tasks/task/completed-tasks")
      .then((res) => {
        if (res.status === 200)
          setCompletedTasks(res.data);
        else
          Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  //display task row
  const pendingItems = () => {
    return curr.map((val, ind) => {
      return <Taskrow obj={val} />
    })
  }

  const completedItems = () => {
    return completedTasks.map((val, ind) => {
      return <Completedrow obj={val} />
    })
  }


  return (
    <div className="App">


      <div className="todo-wrapper">

        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              value={task_name}
              onChange={e => setTaskName(e.target.value)}
              placeholder="Enter title "
            />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              value={task_desc}
              onChange={e => setTaskDesc(e.target.value)}
              placeholder="Enter description "
            />
          </div>
          <div className="todo-input-item">
            <button
              className="primary-btn"
              type="button"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen(false)}
          >
            To Do
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {isCompletedScreen === false && pendingItems()}
          {isCompletedScreen === true && completedItems()}

        </div>
      </div>
    </div>
  );
}

export default Content;