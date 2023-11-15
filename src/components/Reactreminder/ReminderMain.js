import React from 'react';
import Reminder from './Reminder';
import './RemBG.css'
import Animation from './Animation';





function ReminderMain() {
  return (
    <div className="App">
      
      <Reminder />
      <Animation />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
    </div>
  );
}

export default ReminderMain;

