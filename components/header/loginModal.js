import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css";

const LoginModal = ({ onClose, onOpenRegister }) => {
  const [loginType, setLoginType] = useState("username");
  const navigate = useNavigate();
  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };
  
  const handleCreateAccount = () => {
    navigate("/MuzeoLux/register"); 
    onClose(); 
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="title">Login</h2>
        
        <div className="options">
          <label>
            <input
              type="radio"
              name="loginType"
              value="username"
              checked={loginType === "username"}
              onChange={handleLoginTypeChange}
            /> Email ID
          </label>
          <label>
            <input
              type="radio"
              name="loginType"
              value="mobile"
              checked={loginType === "mobile"}
              onChange={handleLoginTypeChange}
            /> Registered Mobile No.
          </label>
        </div>

        <input
          type={loginType === "username" ? "email" : "tel"}
          placeholder={loginType === "username" ? "Email ID" : "Mobile Number"}
          className="input"
        />
        <input type="password" placeholder="Password" className="input" />

        <div className="forgot">Forgot Password?</div>
        <button className="login-btn">LOGIN</button>

        <div className="or">OR</div>

        <div className="create-account" onClick={handleCreateAccount}>
          Create New Account
        </div>
      </div>
    </div>
    
  );
};

export default LoginModal;
