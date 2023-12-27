import React, { useContext } from 'react'
import "./customlayoutcard.css"
import testlayout from "./images/testlayout.svg"
import { useLocation,useNavigate, } from 'react-router-dom';
import { DataProvider } from '../../../Context/ContextProvider';
const CustomLayoutcard = ({item}) => {
  let {selectLayout}=useContext(DataProvider)
  let Navigate=useNavigate()
  let location=useLocation()
  const handleClick = (imgSrc) => {
    Navigate('/cast/castenvironment', { state: { imgSrc } });
  };
  return (
    <div className='custom-layout' onClick={location?.pathname==="/cast/layouts"?()=>{Navigate("/cast/newapp");selectLayout(item)}:() => handleClick(item?.img)}>
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
