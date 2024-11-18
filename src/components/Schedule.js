// components/Schedule.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Schedule.css';

const Schedule = () => {
  const [selectedLight, setSelectedLight] = useState('light1');
  const [lightTime, setLightTime] = useState({ turnOn: '', turnOff: '' });
  const [airConditionerTime, setAirConditionerTime] = useState({ turnOn: '', turnOff: '' });
  const [computerTime, setComputerTime] = useState({ turnOn: '', turnOff: '' });

  const handleLightSelection = (light) => {
    setSelectedLight(light);
  };

  const handleTimeChange = (device, type, value) => {
    if (device === 'light') {
      setLightTime({ ...lightTime, [type]: value });
    } else if (device === 'airConditioner') {
      setAirConditionerTime({ ...airConditionerTime, [type]: value });
    } else if (device === 'computer') {
      setComputerTime({ ...computerTime, [type]: value });
    }
  };

  const saveSchedule = (device) => {
    console.log(`Saving schedule for ${device}`);
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
            className={selectedLight === 'light1' ? 'selected' : 'unselected'}
            onClick={() => handleLightSelection('light1')}
          >
            Light1
          </span>
          <span
            className={selectedLight === 'light2' ? 'selected' : 'unselected'}
            onClick={() => handleLightSelection('light2')}
          >
            Light2
          </span>
        </div>
        <div className="time-selector">
          <input
            type="time"
            value={lightTime.turnOn}
            onChange={(e) => handleTimeChange('light', 'turnOn', e.target.value)}
          />
          <span> ~ </span>
          <input
            type="time"
            value={lightTime.turnOff}
            onChange={(e) => handleTimeChange('light', 'turnOff', e.target.value)}
          />
          <button
            className="save-schedule-button"
            onClick={() => saveSchedule('light')}
          >
            Save Schedule
          </button>
        </div>
      </div>

      {/* Air Conditioner Section */}
      <div className="device-section air-conditioner-section">
        <h2>Set Schedule for Air Conditioner</h2>
        <div className="time-selector">
          <input
            type="time"
            value={airConditionerTime.turnOn}
            onChange={(e) => handleTimeChange('airConditioner', 'turnOn', e.target.value)}
          />
          <span> ~ </span>
          <input
            type="time"
            value={airConditionerTime.turnOff}
            onChange={(e) => handleTimeChange('airConditioner', 'turnOff', e.target.value)}
          />
          <button
            className="save-schedule-button"
            onClick={() => saveSchedule('airConditioner')}
          >
            Save Schedule
          </button>
        </div>
      </div>

      {/* Computer Section */}
      <div className="device-section computer-section">
        <h2>Set Schedule for Computer</h2>
        <div className="time-selector">
          <input
            type="time"
            value={computerTime.turnOn}
            onChange={(e) => handleTimeChange('computer', 'turnOn', e.target.value)}
          />
          <span> ~ </span>
          <input
            type="time"
            value={computerTime.turnOff}
            onChange={(e) => handleTimeChange('computer', 'turnOff', e.target.value)}
          />
          <button
            className="save-schedule-button"
            onClick={() => saveSchedule('computer')}
          >
            Save Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
