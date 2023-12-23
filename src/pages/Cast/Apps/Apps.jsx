import React from 'react'
import close_btn from "./images/Close.svg"
import ArrowDown_btn from "./images/Arrow Down 1.svg"
import "./Apps.css"
const Apps = () => {
  return (
    <div className='Apps_Parent'>
        <img src={close_btn} alt="close_btn" className='Apps_Close_Btn'/>
        <p className='Apps_Header_Content'>Apps</p>
        <div className='Apps_Screens_Header1'>
            <p className='Apps_Screens_Header_Content'>Boston 311 V2</p>
            <img src={ArrowDown_btn} alt="ArrowDown_btn" className='ArrowDown_btn'/>
        </div>
        <div className='Apps_Screens_Header2' >
            <p className='Apps_Screens_Header_Content'>Data Lake V3</p>
            <img src={ArrowDown_btn} alt="ArrowDown_btn" className='ArrowDown_btn'/>
        </div>
        <div className='Apps_Screens_Header3' >
            <p className='Apps_Screens_Header_Content'>SUHAaaS</p>
            <img src={ArrowDown_btn} alt="ArrowDown_btn" className='ArrowDown_btn'/>
        </div>
    </div>
  )
}

export default Apps