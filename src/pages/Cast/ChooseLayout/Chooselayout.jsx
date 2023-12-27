import React, { useContext } from 'react'
import "./chooselayout.css"
import back from "./images/back.svg"
import chavron from "./images/chavron.svg"
import hotspot from "./images/hotspot.svg"
import CustomLayoutcard from '../../../components/Layouts/Customlayoutcard/CustomLayoutcard'
import { useNavigate } from 'react-router-dom'
import { DataProvider } from '../../../Context/ContextProvider'
const Chooselayout = () => {
    let navigate=useNavigate()
    const {CastingLayoutConnfig} = useContext(DataProvider)
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
      {CastingLayoutConnfig.map((item)=><CustomLayoutcard item={item}/>)  }
      </div>
    </div>
  )
}

export default Chooselayout
