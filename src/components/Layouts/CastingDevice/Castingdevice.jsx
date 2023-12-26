import React from 'react'
import "./castingdevice.css"
const Castingdevice = ({device,selectCastingDevice}) => {
  return (
    <div className='casting-device-container' onClick={()=>selectCastingDevice(device.casting_name)}>
      <h4 className={`${device?.isAvailabel?"":"not-active"}`}>{device?.casting_name}</h4>
      <span className={`${device?.isAvailabel?"":"not-availabel"}`}>{device?.isAvailabel?"Available":"Not available"}</span>
    </div>
  )
}

export default Castingdevice
