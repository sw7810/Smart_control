// components/Control.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Control.css';
import { getDeviceStatus, updateDeviceStatus, turnOffAllDevices, turnOnAllDevices } from '../services/DeviceService';

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
      let updatedStatus;

      if (device === 'light1') {
        updatedStatus = !light1Status;
        setLight1Status(updatedStatus);
      }
      if (device === 'light2') {
        updatedStatus = !light2Status;
        setLight2Status(updatedStatus);
      }
      if (device === 'airConditioner') {
        updatedStatus = !airConditionerStatus;
        setAirConditionerStatus(updatedStatus);
      }
      if (device === 'computer') {
        updatedStatus = !computerStatus;
        setComputerStatus(updatedStatus);
      }

      await updateDeviceStatus(device, updatedStatus);
    } catch (error) {
      console.error(`Error toggling ${device}:`, error);
    }
  };

  const turnOffAll = async () => {
    try {
      console.log('Turning off all devices...');
      await turnOffAllDevices();  // 서버에서 모든 장치 끄기
      setLight1Status(false);
      setLight2Status(false);
      setAirConditionerStatus(false);
      setComputerStatus(false);
      setTurnOffAllStatus(true); // 상태 업데이트 후 색상 반전
    } catch (error) {
      console.error('Error turning off all devices:', error);
    }
  };

  const turnOnAll = async () => {
    try {
      console.log('Turning on all devices...');
      await turnOnAllDevices(); // 모든 장치 켜는 함수 호출
      setLight1Status(true);
      setLight2Status(true);
      setAirConditionerStatus(true);
      setComputerStatus(true);
      setTurnOffAllStatus(false); // 상태 업데이트 후 색상 반전
    } catch (error) {
      console.error('Error turning on all devices:', error);
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
          className={turnOffAllStatus ? 'turn-off-all-button-off' : 'turn-off-all-button-on'}
          onClick={turnOffAllStatus ? turnOnAll : turnOffAll} // 상태에 따라 '켜기'와 '끄기' 버튼 처리
        >
          <img src="/img/power-off.png" alt="Turn Off All" />
          {turnOffAllStatus ? 'Turn On All' : 'Turn Off All'}  {/* 텍스트 변경 */}
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
