import React from 'react'
import "./cast.css"
const Cast = ({islive}) => {
  return (
    <div className='cast-container' style={{backgroundColor:`${islive?"rgb(255, 85, 85,0.1)":"rgb(19, 2, 124,0.1)"}`}}>
      <span className='time'>02:00 pm - 04:00 pm </span>
      <h4 className='cast-name'>Engineering dashboard</h4>
      <h6 className='author'>Jose Anitt</h6>
    </div>
  )
}

export default Cast
