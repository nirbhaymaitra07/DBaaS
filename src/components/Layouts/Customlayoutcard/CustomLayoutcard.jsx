import React from 'react'
import "./customlayoutcard.css"
import testlayout from "./images/testlayout.svg"
const CustomLayoutcard = ({item}) => {
  return (
    <div className='custom-layout'>
      <div className="layout-section">
        <img src={testlayout} alt="" />
      </div>
      <div className="layout-details">
        <h5 className="layout-name">{item?.Layout_Name}</h5>
        <div className="created-container">
            <span>Created by {item?.created_by}</span>
            <span>Created on: 23/01/2023</span>
        </div>
        <div className="lastused-container">
            <span>Last used: {item?.last_used}</span>
            <span>{item?.devices} Devices</span>
        </div>
      </div>
    </div>
  )
}

export default CustomLayoutcard
