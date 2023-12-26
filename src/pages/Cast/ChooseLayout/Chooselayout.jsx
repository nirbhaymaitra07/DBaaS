import React from 'react'
import "./chooselayout.css"
import back from "./images/back.svg"
import chavron from "./images/chavron.svg"
import hotspot from "./images/hotspot.svg"
import CustomLayoutcard from '../../../components/Layouts/Customlayoutcard/CustomLayoutcard'
import { useNavigate } from 'react-router-dom'
const Chooselayout = () => {
    let navigate=useNavigate()
    const DataConfiguration = [
        {
          img: chavron,
          Area: "Daily - Common area",
          CreatedBy: "Jose Anitt",
          createon: "23/01/2023",
          LastUsed: "28/05/2023",
          HotSpot: hotspot, // Assuming PersonalHotspot is a variable
        },
        {
          img: chavron,
          Area: "June Menu",
          CreatedBy: "Jose Anitt",
          createon: "23/01/2023",
          LastUsed: "28/05/2023",
          HotSpot: hotspot, // Assuming PersonalHotspot is a variable
        },
        {
          img: chavron,
          Area: "Cafeteria",
          CreatedBy: "Jose Anitt",
          createon: "23/01/2023",
          LastUsed: "28/05/2023",
          HotSpot: hotspot, // Assuming PersonalHotspot is a variable
        },
      ];
  return (
    <div className='chooselayout-container'>
      <div className="top-section">
        <div className="top-icons" onClick={()=>navigate("/cast")}>
          <img
            src={back}
            alt=""
          />
        </div>
        <h4>Choose a layout</h4>
      </div>
      <div className="layouts-container">
      {DataConfiguration.map((item)=><CustomLayoutcard item={item}/>)  }
      </div>
    </div>
  )
}

export default Chooselayout
