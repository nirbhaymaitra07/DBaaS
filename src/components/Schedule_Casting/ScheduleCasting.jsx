import React from 'react'
import './ScheduleCasting.css';
import Arrow from './images/Arrow-left.png';

const ScheduleCasting = () => {
  return (
    <div className='main-container'>
        <div className='arrow-image'>
            <img src={Arrow} /> 
        </div>
        <div className='heading'>
            Schedule Casting
        </div>
      
    </div>
  )
}

export default ScheduleCasting
