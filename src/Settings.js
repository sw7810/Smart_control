// src/Settings.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

function Settings() {
    const [lightOn, setLightOn] = useState("");
    const [lightOff, setLightOff] = useState("");
    const [acOn, setAcOn] = useState("");
    const [acOff, setAcOff] = useState("");

    const navigate = useNavigate();

    return (
        <div className="common-container">
            <div className="settings-container">
                <button className="back-button" onClick={() => navigate("/dashboard")}>←</button>
                <h1>Device Schedule Settings</h1>
                <div className="schedule-group">
                    <h2>Set Schedule for Light</h2>
                    <label>Turn On:</label>
                    <input type="time" value={lightOn} onChange={(e) => setLightOn(e.target.value)} />
                    <label>Turn Off:</label>
                    <input type="time" value={lightOff} onChange={(e) => setLightOff(e.target.value)} />
                    <button>Save Schedule</button>
                </div>
                <div className="schedule-group">
                    <h2>Set Schedule for Air Conditioner</h2>
                    <label>Turn On:</label>
                    <input type="time" value={acOn} onChange={(e) => setAcOn(e.target.value)} />
                    <label>Turn Off:</label>
                    <input type="time" value={acOff} onChange={(e) => setAcOff(e.target.value)} />
                    <button>Save Schedule</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
