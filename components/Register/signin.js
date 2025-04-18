import React, { useState } from "react";
import LoginModal from '../header/loginModal'
import "./Register.css";

const Register = ({ openLoginModal }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    console.log("Form submitted successfully");
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Register Now</h2>
      <div className="register-container">

        <>
          {showLogin && (
            <LoginModal
              onClose={() => setShowLogin(false)}
              onOpenRegister={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            />
          )}
          {showRegister && <Register onClose={() => setShowRegister(false)} />}
        </>

        <form onSubmit={handleSubmit}>
          <div className="roww">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>

          <div className="roww">
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone" required />
          </div>

          <div className="roww">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="roww">
            <label>I am:</label>
            <label><input type="radio" name="gender" value="Male" /> Male</label>
            <label><input type="radio" name="gender" value="Female" /> Female</label>
            <label><input type="radio" name="gender" value="Other" /> Other</label>
          </div>

          <div className="roww">
            <label>Date of Birth:</label>
            <input type="date" />
          </div>

          <div className="roww">
            <label>How did you hear about us?</label>
            <select name="howHeard">
              <option value="">Select</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend">Friend</option>
              <option value="Advertisement">Advertisement</option>
            </select>
          </div>

          <div className="roww">
            <label>Interested In:</label>
            <select name="interestedIn" className="flex">
              <option value="">Select</option>
              <option value="Paintings">Paintings</option>
              <option value="Artifacts">Artifacts</option>
            </select>

            <label>Nationality:</label>
            <select name="nationality">
              <option value="">Select</option>
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label>Interested in Bidding:</label>
            <label><input type="radio" name="biddingInterest" value="Yes" /> Yes</label>
            <label><input type="radio" name="biddingInterest" value="No" /> No</label>
          </div>

          <button type="submit" className="btnReg">Submit</button>
        </form>

        <p className="login-text">
          
          <span onClick={() => setShowLogin(true)} style={{ color: "goldenrod", cursor: "pointer" }}>
          Already a User?{" "} Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
