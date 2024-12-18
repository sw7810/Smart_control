import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Schedule.css";

const Schedule = () => {
  const [selectedLight, setSelectedLight] = useState("light1"); // 선택된 Light
  const [light1Schedule, setLight1Schedule] = useState({ turnOn: "", turnOff: "" });
  const [light2Schedule, setLight2Schedule] = useState({ turnOn: "", turnOff: "" });
  const [airConditionerTime, setAirConditionerTime] = useState({ turnOn: "", turnOff: "" });
  const [computerTime, setComputerTime] = useState({ turnOn: "", turnOff: "" });

  const handleLightSelection = (light) => {
    setSelectedLight(light);
  };

  const handleTimeChange = (device, type, value) => {
    if (device === "light1") {
      setLight1Schedule((prev) => ({ ...prev, [type]: value }));
    } else if (device === "light2") {
      setLight2Schedule((prev) => ({ ...prev, [type]: value }));
    } else if (device === "airConditioner") {
      setAirConditionerTime((prev) => ({ ...prev, [type]: value }));
    } else if (device === "computer") {
      setComputerTime((prev) => ({ ...prev, [type]: value }));
    }
  };

  const saveSchedule = (device) => {
    const schedule =
      device === "light1"
        ? light1Schedule
        : device === "light2"
        ? light2Schedule
        : device === "airConditioner"
        ? airConditionerTime
        : computerTime;

    if (!schedule.turnOn && !schedule.turnOff) {
      alert("등록된 스케줄 없음");
    } else {
      alert(`스케줄 설정이 완료되었습니다`);
    }
  };

  const renderTimeInfo = (time) => {
    if (!time.turnOn && !time.turnOff) {
      return "등록된 스케줄 없음";
    }
    return `Turn On: ${time.turnOn || "미지정"} ~ Turn Off: ${time.turnOff || "미지정"}`;
  };

  return (
    <div className="schedule-container">
      <Link to="/dashboard" className="back-button">
        <img src="/img/back-arrow.png" alt="Back" className="back-icon" />
      </Link>

      <h1 className="schedule-title">
        <span>Device</span>
        <span>Schedule</span>
        <span>Settings</span>
      </h1>

      {/* Light Section */}
      <div className="device-section light-section">
        <h2>Set Schedule for Light</h2>
        <div className="light-selector">
          <span
            className={selectedLight === "light1" ? "selected" : "unselected"}
            onClick={() => handleLightSelection("light1")}
          >
            Light1
          </span>
          <span
            className={selectedLight === "light2" ? "selected" : "unselected"}
            onClick={() => handleLightSelection("light2")}
          >
            Light2
          </span>
        </div>
        <p className="schedule-info">
          {selectedLight === "light1" ? renderTimeInfo(light1Schedule) : renderTimeInfo(light2Schedule)}
        </p>
        <div className="time-selector">
          <input
            type="time"
            value={selectedLight === "light1" ? light1Schedule.turnOn : light2Schedule.turnOn}
            onChange={(e) =>
              handleTimeChange(selectedLight, "turnOn", e.target.value)
            }
          />
          <span> ~ </span>
          <input
            type="time"
            value={selectedLight === "light1" ? light1Schedule.turnOff : light2Schedule.turnOff}
            onChange={(e) =>
              handleTimeChange(selectedLight, "turnOff", e.target.value)
            }
          />
          <button
            className="save-schedule-button"
            onClick={() => saveSchedule(selectedLight)}
          >
            Save Schedule
          </button>
        </div>
      </div>

      {/* Air Conditioner Section */}
      <div className="device-section air-conditioner-section">
        <h2>Set Schedule for Air Conditioner</h2>
        <p className="schedule-info">{renderTimeInfo(airConditionerTime)}</p>
        <div className="time-selector">
          <input
            type="time"
            value={airConditionerTime.turnOn}
            onChange={(e) => handleTimeChange("airConditioner", "turnOn", e.target.value)}
          />
          <span> ~ </span>
          <input
            type="time"
            value={airConditionerTime.turnOff}
            onChange={(e) => handleTimeChange("airConditioner", "turnOff", e.target.value)}
          />
          <button
            className="save-schedule-button"
            onClick={() => saveSchedule("airConditioner")}
          >
            Save Schedule
          </button>
        </div>
      </div>

      {/* Computer Section */}
      <div className="device-section computer-section">
        <h2>Set Schedule for Computer</h2>
        <p className="schedule-info">{renderTimeInfo(computerTime)}</p>
        <div className="time-selector">
          <input
            type="time"
            value={computerTime.turnOn}
            onChange={(e) => handleTimeChange("computer", "turnOn", e.target.value)}
          />
          <span> ~ </span>
          <input
            type="time"
            value={computerTime.turnOff}
            onChange={(e) => handleTimeChange("computer", "turnOff", e.target.value)}
          />
          <button
            className="save-schedule-button"
            onClick={() => saveSchedule("computer")}
          >
            Save Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

