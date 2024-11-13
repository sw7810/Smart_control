// src/Security.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Security.css";

function Security() {
    const navigate = useNavigate();

    return (
        <div className="common-container">
            <div className="security-container">
                <button className="back-button" onClick={() => navigate("/dashboard")}>←</button>
                <h1>Security Alert</h1>
                <p>Unauthorized access detected.</p>
                <button>Details</button>
            </div>
        </div>
    );
}

export default Security;
