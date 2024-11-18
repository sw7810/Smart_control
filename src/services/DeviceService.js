// services/DeviceService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/schedule';  // 백엔드 API URL
// services/DeviceService.js

// Mock 데이터 대신 실제 API 호출을 하지 않음
export const getDeviceStatus = (device) => {
  return new Promise((resolve) => {
    // Mock 상태 데이터, 실제로는 API 호출로 값을 가져오게 됩니다.
    const mockData = {
      light1: false,
      light2: true,
      airConditioner: false,
      computer: true,
    };
    setTimeout(() => resolve(mockData[device]), 1000);  // 1초 후 반환
  });
};

export const updateDeviceStatus = (device, status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 성공적으로 상태가 업데이트된다고 가정
      console.log(`${device} is now ${status ? 'ON' : 'OFF'}`);
      resolve(status);
    }, 500);
  });
};

export const turnOffAllDevices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Turning off all devices...');
      resolve(); // 모든 장치 끄는 동작
    }, 500);
  });
};

export const turnOnAllDevices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Turning on all devices...');
      resolve(); // 모든 장치 켜는 동작
    }, 500);
  });
};

export const saveSchedule = async (scheduleData) => {
  try {
    const response = await axios.post(API_URL, scheduleData);  // 스케줄 데이터 전송
    return response.data;
  } catch (error) {
    console.error('Error saving schedule:', error);
    throw error;
  }
};