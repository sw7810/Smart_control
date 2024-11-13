// src/Control.js
import React, { useState } from "react";
import "./Control.css";

function Control() {
    const [light1, setLight1] = useState(false);
    const [light2, setLight2] = useState(false);
    const [airConditioner, setAirConditioner] = useState(false);
    const [computer, setComputer] = useState(false);

    return (
        <div className="common-container">
            <button className="back-button" onClick={() => window.history.back()}>←</button>
            <h1>CONTROL DEVICE</h1>

            <div className="device-category">
                <h2>Light</h2>
                <div className="device">
                    <span>💡 Light1</span>
                    <label className="switch">
                        <input type="checkbox" checked={light1} onChange={() => setLight1(!light1)} />
                        <span className="slider"></span>
                    </label>
                    <span>{light1 ? "on" : "off"}</span>
                </div>
                <div className="device">
                    <span>💡 Light2</span>
                    <label className="switch">
                        <input type="checkbox" checked={light2} onChange={() => setLight2(!light2)} />
                        <span className="slider"></span>
                    </label>
                    <span>{light2 ? "on" : "off"}</span>
                </div>
            </div>

            <div className="device-category">
                <h2>Air Conditioner</h2>
                <div className="device">
                    <span>❄️ Air Conditioner</span>
                    <label className="switch">
                        <input type="checkbox" checked={airConditioner} onChange={() => setAirConditioner(!airConditioner)} />
                        <span className="slider"></span>
                    </label>
                    <span>{airConditioner ? "on" : "off"}</span>
                </div>
            </div>

            <div className="device-category">
                <h2>Computer</h2>
                <div className="device">
                    <span>🖥️ Computer</span>
                    <label className="switch">
                        <input type="checkbox" checked={computer} onChange={() => setComputer(!computer)} />
                        <span className="slider"></span>
                    </label>
                    <span>{computer ? "on" : "off"}</span>
                </div>
            </div>
        </div>
    );
}

export default Control;
