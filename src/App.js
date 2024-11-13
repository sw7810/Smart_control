// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Control from "./Control";
import Settings from "./Settings";
import Security from "./Security";
import Analysis from "./Analysis";
import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);

    return (
        <div className={isLoggedIn ? "app-background-white" : "app-background-black"}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/control" element={<Control />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/analysis" element={<Analysis />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
