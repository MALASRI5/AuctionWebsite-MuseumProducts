import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css";

const LoginModal = ({ onClose, onOpenRegister }) => {
  const [loginType, setLoginType] = useState("username");
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
    setInputValue(""); 
    setError("");
  };

  const handleLogin = () => {
    const users = [
      { email: "muzeolux.auction@gmail.com", password: "1234" },
      { mobile: "9876543210", password: "password123" },
    ];

    const isValidUser = users.find((user) =>
      loginType === "username"
        ? user.email === inputValue && user.password === password
        : user.mobile === inputValue && user.password === password
    );

    if (isValidUser) {
      setError("");
      onClose();
      navigate("/Adminpanel"); 
    } else {
      setError("");
      alert("Successfully logged into Muzeolux");
      onClose();
      navigate("/")
    }
  };

    const handleCreateAccount = () => {
      navigate("/register");
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="forgot">Forgot Password?</div>
          {error && <div className="error">{error}</div>}

          <button className="login-btn" onClick={handleLogin}>LOGIN</button>

          <div className="or">OR</div>

          <div className="create-account" onClick={handleCreateAccount}>
            Create New Account
          </div>
        </div>
      </div>
    );
  };

  export default LoginModal;
