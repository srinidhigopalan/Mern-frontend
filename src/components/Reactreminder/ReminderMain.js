import React from 'react';
import Reminder from './Reminder';
import './RemBG.css'
import Animation from './Animation';
import {useLocation} from 'react-router-dom';




function ReminderMain() {
  const location=useLocation();
  return (
    <div className="App">
      
      <Reminder data={location.state}/>
      <Animation />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
    </div>
  );
}

export default ReminderMain;

