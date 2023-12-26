import React from 'react'
import "./customlayoutcard.css"
import testlayout from "./images/testlayout.svg"
import { useLocation,useNavigate, } from 'react-router-dom';
const CustomLayoutcard = ({item}) => {
  console.log(item);
  let Navigate=useNavigate()
  let location=useLocation()
  const handleClick = (imgSrc) => {
    Navigate('/cast/castenvironment', { state: { imgSrc } });
  };
  return (
    <div className='custom-layout' onClick={location.pathname==="/cast/layouts"?()=>{Navigate("/cast/newapp",{layoutName:item.Area})}:() => handleClick(item?.img)}>
      <div className="layout-section">
        <img src={item?.img} alt=""  />
      </div>
      <div className="layout-details">
        <h5 className="layout-name">{item?.Area}</h5>
        <div className="created-container">
            <span>Created by {item?.CreatedBy}</span>
            <span>Created on:{item?.createon}</span>
        </div>
        <div className="lastused-container">
            <span>Last used: {item?.LastUsed}</span>
            <div className='hotspotcontainer'>
              {location.pathname==="/cast" && <img src={item?.HotSpot} alt='hotspot'/>}
            <span>{item?.devices} 5 Devices</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomLayoutcard
