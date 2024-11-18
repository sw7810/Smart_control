// services/WeatherService.js

import axios from 'axios';

const getWeather = async () => {
  try {
    const apiKey = 'b857fe9b15a51dcc686ee2dc74658aef';  // 실제 API 키 사용
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Daegu,KR&units=metric&appid=${apiKey}`);
    return response;
  } catch (error) {
    console.error("Error fetching weather data:", error); // 에러 확인
    throw error; // 오류를 다시 던져서 컴포넌트에서 처리
  }
};

export default { getWeather };
