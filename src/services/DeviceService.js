// services/DeviceService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getDeviceStatus = async (device) => {
  try {
    const response = await axios.get(`${BASE_URL}/devices/${device}/status`);
    return response.data.status;
  } catch (error) {
    throw new Error('Error fetching device status');
  }
};

export const updateDeviceStatus = async (device, status) => {
  try {
    await axios.post(`${BASE_URL}/devices/${device}/status`, { status });
  } catch (error) {
    throw new Error('Error updating device status');
  }
};

export const turnOffAllDevices = async () => {
  try {
    await axios.post(`${BASE_URL}/devices/turnoffall`);
  } catch (error) {
    throw new Error('Error turning off all devices');
  }
};
