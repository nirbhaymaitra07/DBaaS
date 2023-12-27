import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./untitled.css";
import add from "./images/add.svg";
import back from "./images/back.svg";
import hotspot from "./images/hotspot.svg";
import eye from "./images/eye.svg";
import rotate from "./images/rotate.svg";
import close from "./images/close.svg";
import ok from "./images/ok.svg";
import arrow from "./images/arrow.svg";
import layout1 from "./images/layout.svg";
import hotspotarrow from "./images/hotspotarrow.svg";
import rotate_horizontal from "./images/rotate_horizontal.svg";
import rotate_bar from "./images/rotate_bar.svg";
import rotateall from "./images/rotateall.svg";
import Monitor from "./images/Monitor.svg";
import Calendar from "./images/Calendar.svg";
import Castingdevice from "../../CastingDevice/Castingdevice";
import WifiDevices from "../../Wifi_Devices/WifiDevices";
import Addnewdisplay from "../../AddNewDisplay/Addnewdisplay";
import Newdisplay from "../../Newdisplay/Newdisplay";
import Newbackground from "../../Newbackground/Newbackground";
import { useNavigate, useLocation } from "react-router-dom";
import Casting from "../../../Schedule_Casting/Casting";
import { DataProvider } from "../../../../Context/ContextProvider";
import OnlyGrid from "../../../Grid/OnlyGrid";
const Untitled = () => {
  let location = useLocation();
  let { layout, gridLayoutform } = useContext(DataProvider);
  let navigate = useNavigate();

  setTimeout(() => {
    if (
      location.pathname === "/layouts/untitled" &&
      !gridLayoutform.NoOfDevices
    ) {
      navigate("/layouts");
    }
  }, 0);
  let rotatebar = useRef(null);
  let [showcastingdevices, setshowcastingdevices] = useState(false);
  let [showwifidevices, setshowwifidevices] = useState(false);
  let [wifinetwork, setwifinetwork] = useState("");
  let [addnewdiplay, setAddnewdiplay] = useState(false);
  let [showNewDisplay, setshowNewDisplay] = useState(false);
  let [NewBackgroundPopup, setNewBackgroundPopUp] = useState(false);
  let [rotatedegree, setrotatedegree] = useState(0);
  let [castingScreen, setcastingScreen] = useState("");
  let [rotatemodeon, setRotateModeOn] = useState(false);
  let [rotatemode, setRotateMode] = useState(false);
  let [fullrotatemode, setfullrotatemode] = useState(false);
  let [schedulecasting, setschedulecasting] = useState(false);

  function selectWifiNetwork(wifi) {
    setshowwifidevices(false);
    setwifinetwork(wifi);
  }
  function backToWifiDevices() {
    setshowwifidevices(true);
    setshowcastingdevices(false);
  }
  function showCastingdevices() {
    if (wifinetwork) {
      setshowcastingdevices(true);
    }
  }
  function selectCastingDevice(castingdevice) {
    setcastingScreen(castingdevice);
    setshowcastingdevices(false);
  }

  function showNewDisplayPop() {
    setshowNewDisplay(true);
  }
  function hideNewDisplayPop() {
    setshowNewDisplay(false);
    setAddnewdiplay(true);
  }
  function showNewBackgroundPop() {
    setNewBackgroundPopUp(true);
  }
  function hideNewBackgroundPop() {
    setNewBackgroundPopUp(false);
    setAddnewdiplay(true);
  }
  let hideschedulecasting = useCallback(() => {
    setschedulecasting(false);
  }, []);

  let Castingdevices = [
    {
      casting_name: "Chrome Cast(1)",
      isAvailabel: true,
    },
    {
      casting_name: "Chrome Cast(3)",
      isAvailabel: true,
    },
    {
      casting_name: "Chrome Cast(5)",
      isAvailabel: true,
    },
    {
      casting_name: "Chrome Cast(6)",
      isAvailabel: true,
    },
    {
      casting_name: "Chrome Cast(8)",
      isAvailabel: true,
    },
    {
      casting_name: "Chrome Cast(2)",
      isAvailabel: false,
    },
    {
      casting_name: "Chrome Cast(4)",
      isAvailabel: false,
    },
    {
      casting_name: "Chrome Cast(7)",
      isAvailabel: false,
    },
  ];

  let wifiDevices = [
    {
      wifiname: "Gaian Solutions_5G+",
    },
    {
      wifiname: "CEO Room Wifi",
    },
    {
      wifiname: "Training Room_GS",
    },
    {
      wifiname: "Common Area_GS",
    },
  ];

  return (
    <div className="untitled-container">
      <div className="top-section">
        <div className="top-icons">
          <img
            src={back}
            alt=""
            onClick={
              location.pathname === "/layouts/untitled"
                ? rotatemode? () => setRotateMode(false):() => navigate("/layouts")
                : () => navigate("/cast/layouts")
            }
          />
          <div
            className="right"
            style={
              location.pathname === "/cast/configuration"
                ? { width: "30%" }
                : { width: "20%" }
            }
          >
            <img src={add} alt="" onClick={() => setAddnewdiplay(true)} />
            {location.pathname !== "/cast/configuration" ? (
              <img
                src={hotspot}
                alt=""
                onClick={() => setshowwifidevices(true)}
              />
            ) : (
              <>
                <img src={Monitor} alt="" />
                <img
                  src={Calendar}
                  alt=""
                  onClick={() => setschedulecasting(true)}
                />
              </>
            )}
          </div>
        </div>
        <h4>Untitled</h4>
      </div>
      <div className="bottom-section">
        <div className="top">
          {rotatemodeon ? (
            <div className="rotateall-container">
              <img src={rotateall} alt="" />{" "}
              <span
                onClick={() => {
                  setfullrotatemode(true), setRotateMode(false);
                }}
                style={{ color: "#13027C" }}
              >
                Rotate all display
              </span>
            </div>
          ) : (
            <>
              <div className="left">
                <img
                  src={rotate}
                  alt=""
                  onClick={() => {
                    setRotateModeOn(true);
                    setRotateMode(true);
                  }}
                />
                <img src={rotate_horizontal} alt="" />
              </div>
              <div className="right">
                <img src={eye} alt="" />
              </div>
            </>
          )}
        </div>
        <div className="layout-container" style={{ transform: `rotate(${rotatedegree}deg)`,background:"red" }} >
          {location.pathname === "/cast/configuration" ? (
            <img src={layout.img} alt="" />
          ) : (
            // <img
            //   src={layout?layout:layout1}
            //   alt=""
            //   onClick={showCastingdevices}
            //   style={{ transform: `rotate(${rotatedegree}deg)` }}
            // />
            <OnlyGrid   showCastingdevices={showCastingdevices}/>
          )}
        </div>
        <div className="angle-container">
          <div
            className="rotate-bar"
            ref={rotatebar}
            style={
              fullrotatemode ? { overflowX: "scroll" } : { overflowX: "hidden" }
            }
            onScroll={() => setrotatedegree(rotatebar?.current.scrollLeft)}
          >
            <img src={rotate_bar} alt="rotate_bar" />
            <img src={rotate_bar} alt="rotate_bar" />
          </div>
          {rotatemode && (
            <div className="singlecastingrotateangle-container">
              <div className="castingname">
                <span>{castingScreen}</span>
              </div>
              <div className="right-section">
                <div className="angle">
                  <span>55"</span>
                </div>
                <div className="angle-icon">
                  <img src={rotate} alt="" />
                </div>
                <div className="angle-degree">
                  <span>0&deg;</span>
                </div>
              </div>
            </div>
          )}
          {fullrotatemode && (
            <div className="rotateallcontainer">
              <div className="left">
                <img
                  src={close}
                  alt=""
                  className="cancel"
                  onClick={() => {
                    setfullrotatemode(false);
                    setRotateMode(true);
                    setRotateModeOn(false);
                  }}
                />
                <img src={rotate} alt="" className="rotate" />
              </div>
              <div className="right">
                <span>30&deg;</span>
                <img src={ok} alt="" className="ok" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="buttons">
        {location.pathname === "/layouts/untitled" ? (
          <div className="left" onClick={() => navigate("/layouts/newlayout")}>
            <img src={close} alt="close" />
            <span>Discard</span>
          </div>
        ) : (
          <div
            className="left"
            onClick={() => navigate("/cast/newconfiguation")}
          >
            <img src={close} alt="close" />
            <span>Discard</span>
          </div>
        )}
        {location.pathname === "/layouts/untitled" ? (
          <>
            {castingScreen ? (
              <div className="right">
                <span>Save</span>
                <img src={arrow} alt="next" />
              </div>
            ) : (
              <div className="right">
                <span>Next</span>
                <img src={arrow} alt="next" />
              </div>
            )}
          </>
        ) : (
          <div className="right">
            <span>Cast now</span>
            <img src={arrow} alt="next" />
          </div>
        )}
      </div>
      <div
        className="wifi-container"
        style={
          showwifidevices
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(102%)" }
        }
        onClick={() => setshowwifidevices(false)}
      >
        <div
          className="wifi-devices-conatiner"
          style={
            showwifidevices
              ? { transform: "translateY(0%)" }
              : { transform: "translateY(102%)" }
          }
        >
          <div className="top-wifi-title">
            <span>Select a WIFI network:</span>
          </div>
          <div className="wifi-devices-conatiner-bottom">
            {wifiDevices.map((item) => (
              <WifiDevices
                key={item.wifiname}
                item={item}
                selectWifiNetwork={selectWifiNetwork}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="casting-section"
        style={
          showcastingdevices
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(102%)" }
        }
      >
        <div
          className="castingdevice-container"
          style={
            showcastingdevices
              ? { transform: "translateY(0%)" }
              : { transform: "translateY(102%)" }
          }
        >
          <div className="top-wifi-name">
            <img src={hotspotarrow} alt="" onClick={backToWifiDevices} />
            <span>{wifinetwork}:</span>
          </div>
          <div className="casting-container-bottom">
            {Castingdevices.map((device) => (
              <Castingdevice
                key={device.casting_name}
                device={device}
                selectCastingDevice={selectCastingDevice}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="addnewdisplay-container"
        style={
          addnewdiplay
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(102%)" }
        }
        onClick={() => setAddnewdiplay(false)}
      >
        <Addnewdisplay
          showNewDisplayPop={showNewDisplayPop}
          showNewBackgroundPop={showNewBackgroundPop}
        />
      </div>
      <div
        className="new-display-container"
        style={
          showNewDisplay
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(102%)" }
        }
        onClick={() => setshowNewDisplay(false)}
      >
        <Newdisplay hideNewDisplayPop={hideNewDisplayPop} />
      </div>
      <div
        className="newbackground"
        style={
          NewBackgroundPopup
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(102%)" }
        }
      >
        <Newbackground hideNewBackgroundPop={hideNewBackgroundPop} />
      </div>
      <Casting
        schedulecasting={schedulecasting}
        hideschedulecasting={hideschedulecasting}
      />
    </div>
  );
};

export default Untitled;
