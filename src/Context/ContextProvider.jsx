import React, { createContext, useCallback, useEffect, useState } from "react";
import Boxes from "./images/Boxes.svg";
import commonarea from "./images/commonarea.svg";
import cafetaria from "./images/cafetaria.svg";
import cafetaria1 from "./images/cafetaria1.svg";
import hotspot from "./images/hotspot.svg";
export let DataProvider = createContext();
const ContextProvider = ({ children }) => {
  let [layout, setLayout] = useState("");
  const [gridLayoutform, setGridLayoutform] = useState({
    layoutName: "",
    NoOfDevices: "",
  });
  const [selectedFrequency, setSelectedFrequency] = useState("");
  let [final, setFinal] = useState([]);

  function createLayout() {
    let layouts = Array.from(
      { length: gridLayoutform.NoOfDevices },
      (_, i) => ({
        i: i.toString(),
        x: (i * 2) % 20,
        y: Math.floor(i / 6) * 2,
        w: 4,
        h: 2,
        isResizable: true, // Enable resize
        // castDevice: "",
      })
    );
    setFinal(layouts);
  }

  let data = [
    {
      img: cafetaria1,
      Area: "Daily - Common area",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: hotspot, // Assuming PersonalHotspot is a variable
    },
    {
      img: commonarea,
      Area: "June Menu",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: hotspot, // Assuming PersonalHotspot is a variable
    },
    {
      img: cafetaria,
      Area: "Cafeteria",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: hotspot, // Assuming PersonalHotspot is a variable
    },
  ];
  return (
    <DataProvider.Provider
      value={{
        CastingLayoutConnfig: data,
        layout: layout,
        NewLayout: final,
        createLayout: createLayout,
        mapCastingDevice: (index, castingScreen) => {
          setFinal((prev) => {
            let data = [...prev];
            data.map((item, i) => {
              if (index === i && castingScreen) {
                item.castDevice = castingScreen;
              }
            });
            return data;
          });
        },
        selectedFrequency: selectedFrequency,
        gridLayoutform: gridLayoutform,
        selectLayout: (layout) => {
          setLayout(layout);
        },
        handleFrequencyChange: (f) => {
          setSelectedFrequency(f);
        },
        handleLayoutOnChange: (e) => {
          setGridLayoutform((prevValues) => ({
            ...prevValues,
            layoutName: e.target.value,
          }));
        },
        handleNoOfDevicesOnChange: useCallback(
          (value) => {
            setGridLayoutform((prevValues) => ({
              ...prevValues,
              NoOfDevices: value,
            }));
          },
          [gridLayoutform.NoOfDevices]
        ),
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};

export default ContextProvider;
