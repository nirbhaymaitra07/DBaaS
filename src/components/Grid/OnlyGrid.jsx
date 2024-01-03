import React, { useState, useEffect, useContext } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css"; // Import grid layout styles
import "react-resizable/css/styles.css"; // Import resizable styles
import html2canvas from "html2canvas";
import { DataProvider } from "../../Context/ContextProvider";

const ResponsiveGridLayout = WidthProvider(Responsive);
let finallayout = [];
const OnlyGrid = ({ showCastingdevices, castingScreen }) => {
  let { gridLayoutform, NewLayout } = useContext(DataProvider);
  const [uniqueLayoutId, setUniqueLayoutId] = useState("");
  const containerStyle = {
    border: "solid 1px black",
    background: "#f0f0f0",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  function generateUniqueLayoutId() {
    let length = 10;
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    var id = [];
    var randomCharacterIndex = Math.floor(Math.random() * 52);
    id.push(characters.charAt(randomCharacterIndex));
    for (var i = 1; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charactersLength);
      id.push(characters.charAt(randomIndex));
    }
    setUniqueLayoutId(id.join("")); // Use the state setter function
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
    layout.forEach((item) => {
      console.log(
        `Container ${item.i}: x=${item.x}, y=${item.y}, w=${item.w}, h=${item.h}`
      );
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


  const containers = NewLayout.map((layout, i) => (
    <div
      key={i}
      data-grid={layout}
      style={containerStyle}
      onClick={() => {
        showCastingdevices(i);
        console.log("ok");
      }}
    >
      {i}
      {layout?.castDevice && layout?.castDevice}
    </div>
  ));
 

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: NewLayout }}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 20 }}
      rowHeight={20}
      onLayoutChange={onLayoutChange}
      style={{ width: "100%", height: "100%", color: "black" }} 
      margin={[1, 1]} // Remove gaps between layouts
      compactType={null}
    >
      {containers}
    </ResponsiveGridLayout>
  );
};

export default OnlyGrid;
