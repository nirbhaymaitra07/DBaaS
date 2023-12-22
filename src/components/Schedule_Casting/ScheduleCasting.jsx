import React from "react";
import "./ScheduleCasting.css";
import Back from "./images/Back.svg";
import ArrowLeft from "./images/Arrow-Left.svg";
import ArrowRight from "./images/Arrow-Right.svg";
import DarkCalendar from "./images/Calendar-3.svg";
import LightCalendar from "./images/Calendar-4.svg";
import DetailedLightCalendar from "./images/Calendar-5.svg";
import Line from "./images/Line.svg";
import TimeLine from "./images/TimeLine.svg";
import Remove from "./images/Remove.svg";

const ScheduleCasting = () => {
  return (
    <div className="main-container">
      <div className="casting-header">
        <div className="back-image">
          <img src={Back} />
        </div>
        <div className="heading">Schedule Casting</div>
      </div>

      <div className="date-time-div">
        <div className="date-time-top-subdiv">

          <div className="date-time-topleft-subdiv">
            <img src={ArrowLeft} className="arrow-left" />
            <h5 className="date-heading">1 June</h5>
            <img src={ArrowRight} className="arrow-right" />
          </div>

          <div className="date-time-topright-subdiv">
            <img src={DarkCalendar} className="dark-calendar-image" />
            <img src={Line} className="line-calendar-image" />
            <img src={LightCalendar} className="light-calendar-image" />
            <img src={Line} className="line-calendar-image" />
            <img src={DetailedLightCalendar} className="detailed-calendar-image" />

          </div>
        </div>

        <div className="date-time-bottom-subdiv">
            <div className="timeline-number">
            <span>02:00</span>
            <span>04:00</span>
            <span>10:00</span>
            <span>14:00</span>
            <span>18:00</span>
            <span>22:00</span>
            </div>
            <img src={TimeLine} className="timeline-calendar-image"/>
        </div>
      </div>

      <div className="casting-body">

      </div>
      
      <div className="casting-footer">
        <button className="discard-btn">DISCARD</button>
        <button className="schedule-btn">SCHEDULE</button>
      </div>
    </div>
  );
};

export default ScheduleCasting;
