import React from 'react'
import { useNavigate } from 'react-router-dom';
import remove from './images/Remove.svg'
import Next from './images/Arrow Right.svg'
import './footer.css'


function Footer() {
  return (
    <div>
    <div className="rectangle-parent6">
     
     <div className="group-child9" >
     <div className="remove-parent">
            <img className="remove-icon" alt="" src={remove} />
            <div className="add-more-devices">Discard</div>
          </div>
     </div>
    </div>
  <div className="group-parent2">
  <div className="rectangle-parent5">
  <div className="group-child8" />
<div className="arrow-right-parent">
<img
              className="arrow-right-icon"
              alt=""
              src={Next}
            />
            <div className="height" >Next</div>
</div>
  </div>


  </div>
</div>
  );


  }

export default Footer;