import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Navigates to the home page
  };

  return (
    <div className="sidebar">
      <h2>Muzeolux Admin</h2>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Auctions</li>
        <li>Reports</li>
      </ul>
      <div className="back-to-home">
        <button onClick={handleBackToHome} style={{marginTop:'250px',marginLeft:'30px'}}>Back to Home</button>
      </div>
    </div>
  );
};

export default Sidebar;
