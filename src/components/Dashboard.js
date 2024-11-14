// components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WeatherService from '../services/WeatherService'; // WeatherService 불러오기
import './Dashboard.css';

const Dashboard = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState('Lecture 1');

  useEffect(() => {
    // 날씨 정보를 가져오기 위한 API 호출
    const fetchWeather = async () => {
      try {
        const response = await WeatherService.getWeather();
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  const handleLectureChange = (lecture) => {
    setSelectedLecture(lecture);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        <span>DASH</span>
        <span>BOARD</span>
      </h1>

      <div className="lecture-selector">
        <span
          className={`lecture ${selectedLecture === 'Lecture 1' ? 'selected' : ''}`}
          onClick={() => handleLectureChange('Lecture 1')}
        >
          Lecture 1
        </span>
        <span
          className={`lecture ${selectedLecture === 'Lecture 2' ? 'selected' : ''}`}
          onClick={() => handleLectureChange('Lecture 2')}
        >
          Lecture 2
        </span>
        <span
          className={`lecture ${selectedLecture === 'Lecture 3' ? 'selected' : ''}`}
          onClick={() => handleLectureChange('Lecture 3')}
        >
          Lecture 3
        </span>
        <button className="add-lecture">+</button>
      </div>

      <div className="weather">
        <span>🌞 temperature : {temperature}°C</span>
        <span>💧 humidity : {humidity}%</span>
      </div>

      <div className="dashboard-links">
        <Link to="/control" className="dashboard-link control">
          Control Devices
          <img src="/img/control.png" alt="Control Devices" className="card-image" />
        </Link>
        <Link to="/schedule" className="dashboard-link schedule">
          Schedule Settings
          <img src="/img/schedule.png" alt="Schedule Settings" className="card-image" />
        </Link>
        <Link to="/security" className="dashboard-link security">
          Security
          <img src="/img/security.png" alt="Security" className="card-image" />
        </Link>
        <Link to="/analysis" className="dashboard-link analysis">
          Usage Analysis
          <img src="/img/analysis.png" alt="Usage Analysis" className="card-image" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
