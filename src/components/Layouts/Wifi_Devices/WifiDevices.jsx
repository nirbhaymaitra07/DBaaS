import React from 'react'
import "./wifidevices.css"
import arrowright from "./images/arrow-right.svg"
const WifiDevices = ({item,selectWifiNetwork}) => {
  return (
    <div className='wifidevice' onClick={()=>selectWifiNetwork(item.wifiname)}>
      <h4 className="">{item.wifiname}</h4>
      <img src={arrowright} alt="arrow_right" />
    </div>
  )
}

export default WifiDevices
