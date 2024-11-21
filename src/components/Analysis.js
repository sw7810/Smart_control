import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Analysis.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Analysis = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // 예시 데이터
  const totalEnergyUsage = "22H 34M"; // 백엔드 연동 수정
  const deviceUsage = {
    light: 56,
    airConditioner: 10,
    computer: 34,
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="analysis-container">
      {/* 뒤로가기 버튼 */}
      <Link to="/dashboard" className="back-button">
        <img src="/img/back-arrow.png" alt="Back" className="back-icon" />
      </Link>

      {/* 제목 */}
      <h1 className="analysis-title">
        <span>Energy</span>
        <span>Usage</span>
        <span>Analysis</span>
      </h1>

      {/* 날짜 선택 */}
      <div className="date-selector">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="date-input"
        />
      </div>

      {/* Total Energy Usage 섹션 */}
      <div className="total-usage-section">
        <div className="total-usage-header">
          <h2 className="total-usage-title">Total Energy Usage</h2>
          <span className="total-usage-value">{totalEnergyUsage}</span>
        </div>
        <div className="energy-usage-graph">
          {/* 백엔드 연동 후 그래프 데이터를 여기에 추가 */}
          <p style={{ textAlign: "center", color: "#888" }}>No data available</p>
        </div>
      </div>

      {/* 기기별 에너지 사용량 */}
      <div className="device-usage">
        <h3>Energy Usage by Device</h3>
        <div className="device-item">
          <span className="device-name">Light</span>
          <span className="device-usage-percentage">{deviceUsage.light}%</span>
        </div>
        <div className="device-item">
          <span className="device-name">Air Conditioner</span>
          <span className="device-usage-percentage">{deviceUsage.airConditioner}%</span>
        </div>
        <div className="device-item">
          <span className="device-name">Computer</span>
          <span className="device-usage-percentage">{deviceUsage.computer}%</span>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
