import React, { useState,useEffect, useContext } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css'; // Import grid layout styles
import 'react-resizable/css/styles.css'; // Import resizable styles
import html2canvas from 'html2canvas';
import { DataProvider } from '../../Context/ContextProvider';

const ResponsiveGridLayout = WidthProvider(Responsive);
let finallayout=[]
const OnlyGrid =({showCastingdevices}) => {
  // const [containerCount, setContainerCount] = useState(6);
  let {gridLayoutform}=useContext(DataProvider)
  
  const [uniqueLayoutId,setUniqueLayoutId]= useState("")
  const containerStyle = {
    border: 'solid 1px black',
    background: '#f0f0f0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  const layouts = Array.from({ length: gridLayoutform.NoOfDevices }, (_, i) => ({
    i: i.toString(),
    x: i * 2 % 20,
    y: Math.floor(i / 6) * 2,
    w: 4,
    h: 2,
    isResizable: true, // Enable resize
    
  }));

  function generateUniqueLayoutId() {
    let length = 10;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var id = [];
    var randomCharacterIndex = Math.floor(Math.random() * 52);
    id.push(characters.charAt(randomCharacterIndex));
    for (var i = 1; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charactersLength);
    id.push(characters.charAt(randomIndex));
    }
    setUniqueLayoutId(id.join('')); // Use the state setter function
    }
  
    
    // Generate unique ID on component loading
useEffect(() => {
  generateUniqueLayoutId();
}, []);

// Log uniqueLayoutId whenever it changes
useEffect(() => {
  console.log("uniqueLayoutId = " + uniqueLayoutId);
}, [uniqueLayoutId]); // Pass uniqueLayoutId as a dependency
    

  const onLayoutChange = (layout) => {
    // handle layout change
   console.log(layout);
    layout.forEach(item => {
      console.log(`Container ${item.i}: x=${item.x}, y=${item.y}, w=${item.w}, h=${item.h}`);
    });
  
    // Capture screenshot
    // const gridElement = document.querySelector('.layout'); // replace with your grid's selector
    // html2canvas(gridElement).then(canvas => {
    //   // You can then either download the image
    //   const link = document.createElement('a');
    //   link.download = 'layout.png';
    //   link.href = canvas.toDataURL();
    //   link.click();
    //   // console.log(link.href);
  
    //   // Or set it as source to an img element
    //   // document.querySelector('#screenshot').src = canvas.toDataURL();
    // });
  };

  const containers = layouts.map((layout, i) => (
    <div  key={i} data-grid={layout} style={containerStyle}>
      Container {i + 1}
      
    </div>
    
  ));
  useEffect(()=>{
    finallayout=containers
  },[])

  return (
    <ResponsiveGridLayout
    
      className="layout"
      layouts={{ lg: layouts }}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 20 }}
      rowHeight={20}
      onLayoutChange={onLayoutChange}
      style={{background:"yellow"}} // Change canvas color to yellow
      margin={[1, 1]} // Remove gaps between layouts
      compactType={null}
    >
      {containers}
    </ResponsiveGridLayout>
  );
};

export default OnlyGrid;
