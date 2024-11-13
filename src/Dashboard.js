// src/Dashboard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    // 선택된 강의실 상태 추가
    const [selectedRoom, setSelectedRoom] = useState("Lecture 1");

    return (
        <div className = "common-container">
            <div className="dashboard-container">
            <h1>DASH</h1>
            <h1>BOARD</h1>
            <div className="room-selector">
                {/* 강의실 선택 시 setSelectedRoom 호출 */}
                {["Lecture 1", "Lecture 2", "Lecture 3"].map((room) => (
                    <button
                        key={room}
                        className={`room-button ${selectedRoom === room ? "active" : ""}`}
                        onClick={() => setSelectedRoom(room)}
                    >
                        {room}
                    </button>
                ))}
                <button className="room-button add-room">+</button>
            </div>
            <div className="environment-info">
                <span>🌞 temperature : 17°</span>
                <span>💧 humidity : 10%</span>
            </div>
            <div className="card-container">
                <Link to="/control" className="card control">Control Devices</Link>
                <Link to="/settings" className="card schedule">Schedule Settings</Link>
                <Link to="/security" className="card security">Security</Link>
                <Link to="/analysis" className="card analysis">Usage Analysis</Link>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;
