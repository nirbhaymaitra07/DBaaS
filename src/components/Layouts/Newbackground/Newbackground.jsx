import React, { useState } from 'react'
import "./newbackground.css"
const Newbackground = ({hideNewBackgroundPop}) => {
    let [activetab,setActiveTab]=useState("ft")

  return (
    <div className='new-background-container'>
      <div className="topsection">
        <span>Background</span>
        <div className='scale-container'>
            <div className={`ft ${activetab==="ft"?"active":""}`} onClick={()=>setActiveTab("ft")}>ft.</div>
            <div className={`m ${activetab==="m"?"active":""}`} onClick={()=>setActiveTab("m")}>m.</div>
        </div>
      </div>
      <div className="height">
        <label htmlFor='height'>Height</label>
        <input type="number" id='height'/>
      </div>
      <div className="width">
        <label htmlFor='width'>Width</label>
        <input type="number" id='width'/>
      </div>
      <div className="new-background-actions">
            <button className='cancel' onClick={hideNewBackgroundPop}>Cancel</button>
            <button className='save'>Save</button>
        </div>
    </div>
  )
}

export default Newbackground
