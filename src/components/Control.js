// components/Control.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Control.css';
import { getDeviceStatus, updateDeviceStatus, turnOffAllDevices } from '../services/DeviceService'; // Named Import

const Control = () => {
  const [light1Status, setLight1Status] = useState(false);
  const [light2Status, setLight2Status] = useState(false);
  const [airConditionerStatus, setAirConditionerStatus] = useState(false);
  const [computerStatus, setComputerStatus] = useState(false);
  const [turnOffAllStatus, setTurnOffAllStatus] = useState(false); // 전체 끄기 상태 추가

  useEffect(() => {
    const fetchDeviceStatus = async () => {
      try {
        const light1Status = await getDeviceStatus('light1');
        setLight1Status(light1Status);
        const light2Status = await getDeviceStatus('light2');
        setLight2Status(light2Status);
        const airConditionerStatus = await getDeviceStatus('airConditioner');
        setAirConditionerStatus(airConditionerStatus);
        const computerStatus = await getDeviceStatus('computer');
        setComputerStatus(computerStatus);
      } catch (error) {
        console.error('Error fetching device status:', error);
      }
    };

    fetchDeviceStatus();
  }, []);

  const toggleDevice = async (device) => {
    try {
      const currentStatus = eval(`${device}Status`); // 현재 상태 가져오기
      const updatedStatus = !currentStatus; // 상태 반전

      // 상태 업데이트 후 UI 업데이트
      await updateDeviceStatus(device, updatedStatus);

      // 상태에 맞춰 UI를 반영
      if (device === 'light1') setLight1Status(updatedStatus);
      if (device === 'light2') setLight2Status(updatedStatus);
      if (device === 'airConditioner') setAirConditionerStatus(updatedStatus);
      if (device === 'computer') setComputerStatus(updatedStatus);
    } catch (error) {
      console.error(`Error toggling ${device}:`, error);
    }
  };

  const turnOffAll = async () => {
    try {
      // 모든 장치 끄기 API 호출
      await turnOffAllDevices();
      // 상태 업데이트 후 UI 반영
      setLight1Status(false);
      setLight2Status(false);
      setAirConditionerStatus(false);
      setComputerStatus(false);
      setTurnOffAllStatus(true); // 버튼 색상 반전 상태 변경
    } catch (error) {
      console.error('Error turning off all devices:', error);
    }
  };

  return (
    <div className="control-container">
      <Link to="/dashboard" className="back-button">
        <img src="/img/back-arrow.png" alt="Back" className="back-icon" />
      </Link>

      <h1 className="control-title">
        <span>CONTROL</span>
        <span>DEVICE</span>
      </h1>

      <div className="turn-off-all">
        <button
          className={turnOffAllStatus ? 'turn-off-all-button-off' : 'turn-off-all-button-on'} // 버튼 색상 변경
          onClick={turnOffAll}
        >
          <img src="/img/power-off.png" alt="Turn Off All" />
          Turn Off All
        </button>
      </div>

      {/* Light Group */}
      <div className="device-group">
        <h2>Light</h2>
        <div className="device-item">
          <img src="/img/light.png" alt="Light" />
          <span>Light1</span>
          <button
            className={light1Status ? 'on' : 'off'}
            onClick={() => toggleDevice('light1')}
          >
            {light1Status ? 'on' : 'off'}
          </button>
        </div>

        <div className="device-item">
          <img src="/img/light.png" alt="Light" />
          <span>Light2</span>
          <button
            className={light2Status ? 'on' : 'off'}
            onClick={() => toggleDevice('light2')}
          >
            {light2Status ? 'on' : 'off'}
          </button>
        </div>
      </div>

      {/* Air Conditioner Group */}
      <div className="device-group">
        <h2>Air Conditioner</h2>
        <div className="device-item">
          <img src="/img/air-conditioner.png" alt="Air Conditioner" />
          <span>Air Conditioner</span>
          <button
            className={airConditionerStatus ? 'on' : 'off'}
            onClick={() => toggleDevice('airConditioner')}
          >
            {airConditionerStatus ? 'on' : 'off'}
          </button>
        </div>
      </div>

      {/* Computer Group */}
      <div className="device-group">
        <h2>Computer</h2>
        <div className="device-item">
          <img src="/img/computer.png" alt="Computer" />
          <span>Computer</span>
          <button
            className={computerStatus ? 'on' : 'off'}
            onClick={() => toggleDevice('computer')}
          >
            {computerStatus ? 'on' : 'off'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Control;
