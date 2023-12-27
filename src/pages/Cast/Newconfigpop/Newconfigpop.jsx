import React from 'react'
import "./newconfigpop.css"
import { useNavigate } from 'react-router-dom'
const Newconfigpop = () => {
  let navigate=useNavigate()
  return (
    <div className='Pop-Container'>
      <div className="selection" onClick={()=>navigate("/cast/layouts")}>
        <h4>Choose from layouts</h4>
      </div>
      <div className="selection">
        <h4>Choose from templates</h4>
      </div>
      <div className="selection">
        <h4>Create new layout</h4>
      </div>
    </div>
  )
}

export default Newconfigpop
