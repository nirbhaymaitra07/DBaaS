import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import ArrowLeft from "./images/Arrow Left.svg"
import AddBtn from "./images/Add.svg"
import Coding from "./images/Coding.svg"
import NotesClock from "./images/Notes Clock.svg"
import Rotate from "./images/Rotate.svg"
import RotateHorizontal from "./images/Rotate Horizontal.svg"
import View from "./images/View 1.svg"
import RotationGraph from "./images/RotationGraph.svg"
import Remove from "./images/Remove.svg"
import ArrowRight from "./images/Arrow Right.svg"
import "./Cast_Environment.css"
const Cast_Environment = () => {
    const location = useLocation();
    const navigate=useNavigate()
    const imgSrc = location.state?.imgSrc;
    const [zoomed, setZoomed] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);

    if (clickCount % 2 === 0) {
      // First click: Zoom in
      setZoomed(true);
    } else {
      // Second click: Navigate to another route
      navigate('/cast/Apps');
    }
  };
  return (
    <div className='Cast_Environment_parent'>
        <div className='Cast_Environment_parent_Header'>
             <img src={ArrowLeft} alt="arrowleft" id='arrowleft' className='repeated_size'/>
             <img src={AddBtn} alt="AddBtn"  id='AddBtn' className='repeated_size'/>
             <img src={Coding} alt="Coding"  id='Coding' className='repeated_size'/>
             <img src={NotesClock} alt="NotesClock" id='NotesClock' className='repeated_size'/>
            <p className='Cast_Environment_parent_Header_contnet'>Daily - Common area</p>
        </div>
        <div className='Cast_Environment_parent_Rotation_Area'>
           <img src={Rotate} alt="Rotate"  id='Rotate' className='Cast_Environment_parent_Rotation_Sub_heading'/>
           <img src={RotateHorizontal} alt="RotateHorizontal"  id='RotateHorizontal' className='Cast_Environment_parent_Rotation_Sub_heading'/>
           <img src={View} alt="View" 
           id='View'
           className='Cast_Environment_parent_Rotation_Sub_heading'
           onClick={()=>navigate("/cast/preview",{ state: { imgSrc } })}
           />
            <img src={imgSrc} 
            alt="imgSrc"  
            className='Cast_Environment_parent_Rotation_Area_Img' 
            onClick={handleClick}
            id={zoomed ? 'zoomed' : ''}
            />
        </div>
        <div className='Cast_Env_Rotation_img'>
            <img src={RotationGraph} alt="RotationGraph"  className='RotationGraph'/>
        </div>
        <div className='Discard_CastNow_Btn'>
           <div>
            <img src={Remove} alt="Remove" className=''/>
            <p className='Discard' onClick={()=>navigate("/cast")}>Discard</p>
           </div>
           <div style={{backgroundColor:"#13027C"}}>
            <p className='CastNow'>Cast now </p>
            <img src={ArrowRight} alt="ArrowRight"/>
           </div>
        </div>
    </div>
  )
}

export default Cast_Environment