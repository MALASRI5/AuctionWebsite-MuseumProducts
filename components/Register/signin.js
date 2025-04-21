import React, { useState } from "react";
import axios from "axios";
import LoginModal from "../header/loginModal";
import "./Register.css";

const Register = ({ openLoginModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    howHeard: "",
    interestedIn: "",
    nationality: "",
    biddingInterest: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/register", formData);
      console.log("User registered:", response.data);
      setSuccess("Registration successful!");
      setError("");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dateOfBirth: "",
        howHeard: "",
        interestedIn: "",
        nationality: "",
        biddingInterest: "",
      });
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Register Now</h2>
      <div className="register-container">
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

        <form onSubmit={handleSubmit}>
          <div className="roww">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div className="roww">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="roww">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          <div className="roww">
            <label>I am:</label>
            <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} /> Other</label>
          </div>

          <div className="roww">
            <label>Date of Birth:</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
          </div>

          <div className="roww">
            <label>How did you hear about us?</label>
            <select name="howHeard" value={formData.howHeard} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend">Friend</option>
              <option value="Advertisement">Advertisement</option>
            </select>
          </div>

          <div className="roww">
            <label>Interested In:</label>
            <select name="interestedIn" value={formData.interestedIn} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Paintings">Paintings</option>
              <option value="Artifacts">Artifacts</option>
            </select>

            <label>Nationality:</label>
            <select name="nationality" value={formData.nationality} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="roww">
            <label>Interested in Bidding:</label>
            <label><input type="radio" name="biddingInterest" value="Yes" checked={formData.biddingInterest === "Yes"} onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="biddingInterest" value="No" checked={formData.biddingInterest === "No"} onChange={handleChange} /> No</label>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <button type="submit" className="btnReg">Submit</button>
        </form>

        <p className="login-text">
          <span onClick={() => setShowLogin(true)} style={{ color: "goldenrod", cursor: "pointer" }}>
            Already a User? Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
