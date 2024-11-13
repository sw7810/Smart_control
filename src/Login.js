// src/Login.js
import React from "react";
import "./Login.css";

function Login({ onLogin }) {
    return (
        <div className="login-container">
            <h1>welcome</h1>
            <p className="subheading">office_management</p>
            <input type="text" placeholder="id" className="input-field" />
            <input type="password" placeholder="password" className="input-field" />
            <button className="sign-up-button" onClick={onLogin}>Sign Up</button>
            <div className="links">
                <a href="#">forget password?</a> / <a href="#">create account</a>
            </div>
            <div className="divider">
                <hr /> <span>or</span> <hr />
            </div>
            <button className="social-button google">continue with google</button>
            <button className="social-button kakao">continue with kakao</button>
        </div>
    );
}

export default Login;
