// src/services/WeatherService.js
import ApiService from './ApiService';

class WeatherService {
  // 대구, 대한민국의 날씨 정보를 가져오는 메서드
  getWeather() {
    const city = 'Daegu,KR';
    const apiKey = 'b857fe9b15a51dcc686ee2dc74658aef'; //OpenWeatherMap API
    return ApiService.get(`/weather?q=${city}&units=metric&appid=${apiKey}`);
  }
}

export default new WeatherService();
