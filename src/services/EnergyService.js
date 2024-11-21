// services/EnergyService.js
const API_URL = 'http://localhost:5000/api/energy'; // 실제 백엔드 URL로 변경

export const getEnergyUsageData = async (date) => {
  try {
    const response = await fetch(`${API_URL}?date=${date}`);
    if (!response.ok) {
      throw new Error('Failed to fetch energy usage data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in EnergyService:', error);
    throw error;
  }
};
