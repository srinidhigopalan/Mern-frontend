import Axios from "axios";
import './Profile.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineStar } from "react-icons/ai";

function Taskrow(props) {
  const { _id, user_email_id,
    task_name,
    task_desc,
    star,
    priority_number,
    reminder_active,
    reminder_time,
    completed } = props.obj; //Object destruction

  const handleToDoDelete = () => {
    Axios.delete("http://localhost:8000/tasks/task/delete-task", _id)
      .then((res) => {
        if (res.status === 200) {
          console.log("Record deleted successfully");
          window.location.reload();
        }
        else
          Promise.reject();
      })
      .catch((err) => alert(err));
  }

  const handleComplete = () => {
    const data = {
      task_id: _id,
      task_name: task_name,
      task_description: task_desc,
      star: star,
      priority_number: priority_number,
      reminder_active: false,
      reminder_time: reminder_time,
      completed: true
    }
    Axios.put("http://localhost:8000/tasks/task/edit-task", data)
      .then((res) => {
        if (res.status === 200)
          console.log("record updated")
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }


  const handleStarClick = () => {
    const data = {
      task_id: _id,
      task_name: task_name,
      task_description: task_desc,
      star: true,
      priority_number: priority_number,
      reminder_active: reminder_active,
      reminder_time: reminder_time,
      completed: completed
    }
    Axios.put("http://localhost:8000/tasks/task/edit-task", data)
      .then((res) => {
        if (res.status === 200)
        console.log("starred")
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }

  return (
    <div className="todo-list-item">
      <div>
        <h3>{task_name}</h3>
        <p>{task_desc}</p>

      </div>
      <div>
        <AiOutlineDelete
          title="Delete?"
          className="icon"
          onClick={() => handleToDoDelete()}
        />
        <BsCheckLg 
          title="Completed?"
          className=" check-icon"
          onClick={() => handleComplete()}
        />

        <AiOutlineStar
          className={star ? 'star clicked' : 'star'}
          onClick={() => handleStarClick()}
        />

      </div>
    </div>





  )
}
export default Taskrow;
