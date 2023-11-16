import React from 'react'
import './Animation.css'
import Rocket from './Rocket/Rocket'

const Animation = () => {
  return (
    <>
    <div class="container">
    <div class="moon">
        <div class="crater crater-1"></div>
        <div class="crater crater-2"></div>
        <div class="crater crater-3"></div>
        <div class="crater crater-4"></div>
        <div class="crater crater-5"></div>
        <div class="shadow"></div>
    </div>
    <Rocket/>
</div>
    </>
  )
}

export default Animation