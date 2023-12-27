import React, { useState } from "react";
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
import CalendarBody from "./images/Calendar-body.svg";
import LineBody from "./images/Line-body.svg";
import Add from "./images/Add.svg";
import Frame from "./images/Frame.svg";

const ScheduleCasting = () => {
  const [addTimeSlot, setAddTimeSlot] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "option1", label: "Friday" },
    { value: "option2", label: "Saturday" },
    { value: "option3", label: "Sunday" },
    // Add more options as needed
  ];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option in state
  };

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
            <img
              src={DetailedLightCalendar}
              className="detailed-calendar-image"
            />
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
          <img src={TimeLine} className="timeline-calendar-image" />
        </div>
      </div>

      <div className="casting-body">
        <div className="casting-upper">
          <p className="daily-para">Daily</p>
          <p className="change-para">Change</p>
        </div>

        <div className="date-div">
          <p className="date-heading">Start Date</p>
          <div className="date-subdiv">
            <input
              className="date-input"
              type="text"
              placeholder="01/06/2023"
            />
            <img className="date-input-image" src={CalendarBody} />
          </div>

          <p className="date-heading">End Date (Optional)</p>
          <div className="date-subdiv">
            <input
              className="date-input"
              type="text"
              placeholder="01/06/2023"
            />
            <img className="date-input-image" src={CalendarBody} />
          </div>
          <img className="line-body" src={LineBody} />
        </div>

        <div className="day-div">
          <p className="day">Day</p>
          <div>
            <select
              className="custom-dropdown"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option className="val" value="Thursday">
                Thursday
              </option>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* {selectedOption && <p>Selected option: {selectedOption}</p>} Show the selected option */}
          </div>
        </div>

        <div className="time-div">
          <p className="time-heading">Start Time</p>
          <div className="time-subdiv">
            <div className="time-subdiv-info">
              <input
                className="time-subdiv-info-input"
                type="text"
                placeholder="12"
              />
              <img className="time-subdiv-info-image" src={Frame} alt="frame" />
            </div>
            <div className="time-subdiv-info">
              <input
                className="time-subdiv-info-input"
                type="text"
                placeholder="00"
              />
              <img className="time-subdiv-info-image" src={Frame} alt="frame" />
            </div>
            <div className="time-subdiv-info">
              <input
                className="time-subdiv-info-input"
                type="text"
                placeholder="AM"
              />
              <img className="time-subdiv-info-image" src={Frame} alt="frame" />
            </div>
          </div>

          <p className="time-heading">End Time (Optional)</p>
          <div className="time-subdiv">
            <div className="time-subdiv-info">
              <input
                className="time-subdiv-info-input"
                type="text"
                placeholder="12"
              />
              <img className="time-subdiv-info-image" src={Frame} alt="frame" />
            </div>
            <div className="time-subdiv-info">
              <input
                className="time-subdiv-info-input"
                type="text"
                placeholder="00"
              />
              <img className="time-subdiv-info-image" src={Frame} alt="frame" />
            </div>
            <div className="time-subdiv-info">
              <input
                className="time-subdiv-info-input"
                type="text"
                placeholder="AM"
              />
              <img className="time-subdiv-info-image" src={Frame} alt="frame" />
            </div>
          </div>

          {/* <div className="lower-body-text-div"  onClick={() => setAddTimeSlot(true)}>
            <img className="lower-body-img" src={Add} />
            <p className="lower-body-text">Add another time slot</p>
          </div> */}
        </div>
      </div>

      <div className="casting-footer">
        <div className="casting-footer-discard">
          <img className="casting-footer-discard-img" src={Remove} />
          <button className="discard-btn">DISCARD</button>
        </div>
        <button className="schedule-btn">SCHEDULE</button>
      </div>

      <div
        className="wrap-up-background-image"
        style={
          addTimeSlot
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(102%)" }
        }
      >
        <div
          className="time-slot-popup"
          style={
            addTimeSlot
              ? { transform: "translateY(0%)" }
              : { transform: "translateY(102%)" }
          }
        >
          <div className="time-slot-popup-options">
            <p className="time-slot-popup-options-para">Weekdays(Mon-Fri)</p>
          </div>
          <div className="time-slot-popup-options">
            <p className="time-slot-popup-options-para">Weekends(Sat-Sun)</p>
          </div>
          <div className="time-slot-popup-options">
            <p className="time-slot-popup-options-para">Custom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCasting;
