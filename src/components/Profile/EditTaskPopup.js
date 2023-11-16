import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const EditTaskPopup = ({modal, toggle, taskObj}) => {
    const [task_name, setTaskName] = useState("");
    const [task_desc, setDescription] = useState("");
    const [reminder_active,setReminderActive]=useState(false);
    const [reminder_time,setReminderTime]=useState("");
    const [star,setStar]=useState(taskObj.star);


    useEffect(() => {
        setTaskName(taskObj.task_name)
        setDescription(taskObj.task_description)
        setReminderActive(taskObj.reminder_active)
        setReminderTime(taskObj.reminder_time)
    },[])

    function sendDateTime() {
        const datetimeInput = document.getElementById("datetime");
        const selectedDateTime = new Date(datetimeInput.value);
    
        const monthNamesShort = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
    
        const month = monthNamesShort[selectedDateTime.getMonth()];
        const day = String(selectedDateTime.getDate()).padStart(2, '0');
        const year = selectedDateTime.getFullYear();
        const hours = String(selectedDateTime.getHours()).padStart(2, '0');
        const minutes = String(selectedDateTime.getMinutes()).padStart(2, '0');
        const seconds = String(selectedDateTime.getSeconds()).padStart(2, '0'); // Add seconds
    
        const formattedDateTime = `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`;
        setReminderTime(formattedDateTime)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const task = {
              task_id: taskObj._id,
              task_name: task_name,
              task_description: task_desc,
              star: taskObj.star,
              priority_number: taskObj.priority_number,
              reminder_active: reminder_active,
              reminder_time: reminder_time,
              completed: taskObj.completed
            }
        Axios.put("http://localhost:8000/tasks/task/edit-task",task)
        .then((res)=>{
            if(res.data.status===500){
                console.log("error")
            }else{
                console.log("success")
            }
        }).catch((err)=>alert(err))
        
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "Input" value = {taskObj.task_name} onChange = {(e)=>setTaskName(e.target.value)} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "Input" value = {taskObj.task_description} onChange = {(e)=>setDescription(e.target.value)} name = "description"></textarea>
                    </div>
                    {/* debug for checkbox toggle T/F */}
                    <div className="form-group">
                    <input class="form-check-input" type="checkbox" value = {taskObj.reminder_active} onChange={(e)=>setReminderActive(e.target.value)} id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    {'  '}    Would you like a reminder?
                    </label>
                </div>
                <div className="form-group">
                    <input type="datetime-local" id="datetime" className="form-control" value = {taskObj.reminder_time}/>
                    <button onClick={sendDateTime} >Set Reminder</button>

                </div>
                
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;
