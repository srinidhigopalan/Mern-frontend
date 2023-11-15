import React from 'react';
import './Animation.css';

const Animation = () => {
  return (
    <div className='App'>
    <div className="astronaut" data-js="astro">
      <div className="head"></div>
      <div className="arm arm-left"></div>
      <div className="arm arm-right"></div>
      <div className="body">
        <div className="panel"></div>
      </div>
      <div className="leg leg-left"></div>
      <div className="leg leg-right"></div>
      <div className="schoolbag"></div>
    </div>

    <div class="moon">
        <div class="crater crater-1"></div>
        <div class="crater crater-2"></div>
        <div class="crater crater-3"></div>
        <div class="crater crater-4"></div>
        <div class="crater crater-5"></div>
        <div class="shadow"></div>
    </div>

    

    </div>
  );
}

export default Animation;
