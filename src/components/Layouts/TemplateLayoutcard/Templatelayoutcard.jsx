import React from 'react'
import "./templatelayoutcard.css"
import chevron from "./images/chevron.svg"
const Templatelayoutcard = () => {
  return (
    <div className='template-layout'>
      <div className="layout-section">
        <img src={chevron} alt="" />
      </div>
      <div className="layout-details">
        <h5 className="layout-name">Chevron</h5>
      </div>
    </div>
  )
}

export default Templatelayoutcard
