import React from 'react'
import "./addnewdisplay.css"
const Addnewdisplay = ({showNewDisplayPop,showNewBackgroundPop}) => {
  return (
    <div className='Addnewdisplay-container'>
      <h4 onClick={showNewDisplayPop}>Add new display</h4>
      <h4 onClick={showNewBackgroundPop}>Add background</h4>
    </div>
  )
}

export default Addnewdisplay
