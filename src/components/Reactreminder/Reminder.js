import React from 'react';
import './Reminder.css';


class Reminder extends React.Component {
  sendDateTime() {
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

   
    console.log("Formatted Date and Time:", formattedDateTime);
  }

  render() {
    return (
        <div className="reminder-container">
            <h2 style={{color: "azure"}}>Set your reminder here</h2>
        <label htmlFor="datetime"style={{color: "azure", marginTop:"50px"} } >Select Date and Time:</label>
        <input type="datetime-local" id="datetime" style={{marginTop:"50px"}} />
        <button onClick={this.sendDateTime} style={{marginLeft:"10px" , marginTop:"50px"}}>Send</button>
      </div>
    );
  }
}

export default Reminder;
