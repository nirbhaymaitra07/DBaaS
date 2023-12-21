import React from "react";
import "./home.css";
import live from "./images/live.svg";
import Cast from "../../components/Home/Cast/Cast";
// import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  return (
    <div className="home-container">
      <div className="top-title">
        <h4>Today’s schedule</h4>
      </div>
      <div className="bottom-container">
        <div className="live-container">
            <div className="live-top">
              <img src={live} alt="live" />
              <h4>Currently Displaying</h4>
            </div>
            <Cast islive={true} />
        </div>
        <div className="scheduled-cast">
            <div className="scheduled-top">
              <h4>Scheduled Casts</h4>
            </div>
            <Cast/>
        </div>
        <div className="expire-cast">
            <div className="expire-top">
              <h4>Expired Casts</h4>
            </div>
            <Cast/>
            <Cast/>
            <Cast/>
            <Cast/>
            <Cast/>
        </div>
      </div>
      {/* <Navbar/> */}
    </div>
  );
};

export default Home;
