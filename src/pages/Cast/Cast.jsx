import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CustomLayoutcard from '../../components/Layouts/Customlayoutcard/CustomLayoutcard'
import Boxes from "./images/Boxes.svg" 
import commonarea from "./images/commonarea.svg" 
import junemenu from "./images/junemenu.svg" 
import PersonalHotspot from "./images/PersonalHotspot.svg"
import AddBtn from "./images/Add.svg" 
import "./cast.css"
import { Outlet,useLocation } from 'react-router-dom'
const Cast = () => {
  let location=useLocation()
  const DataConfiguration = [
    {
      img: commonarea,
      Area: "Daily - Common area",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: PersonalHotspot // Assuming PersonalHotspot is a variable
    },
    {
      img: junemenu,
      Area: "June Menu",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: PersonalHotspot // Assuming PersonalHotspot is a variable
    },
    {
      img: Boxes,
      Area: "Cafeteria",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: PersonalHotspot, // Assuming PersonalHotspot is a variable
    },
  ];
// console.log(DataConfiguration);
  return (
    <>
       {location.pathname==="/cast"?<div className='Cast_App_Configuration'>
        <div className='Cast_App_Configuration_Header'>
           <img className='Cast_App_Configuration_Header_Plus_btn' src={AddBtn} alt='addbutton'/>
           <div className='Cast_App_Configuration_Header_Name'>App Configurations</div>  
         </div>
         <div className='Cast_App_Configuration_Cards_Container'>
           {DataConfiguration.map((item)=><CustomLayoutcard item={item}/>) }
         </div>
        </div>:
          <Outlet/>
        }
    </>
  )
}

export default Cast
