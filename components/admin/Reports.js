import React from "react";
import "./AdminDashboard.css";

const Reports = () => {
  const reportStats = {
    totalUsers: 12,
    totalAuctions: 40,
    revenue: "₹ 7,23,00,567",
  };

  return (
    <div className="admin-reports">
      <h2>Reports Dashboard</h2>
      <div className="report-cards">
        <div className="report-card users">
          <h3>Total Users</h3>
          <p>{reportStats.totalUsers}</p>
        </div>
        <div className="report-card auctions">
          <h3>Total Auctions</h3>
          <p>{reportStats.totalAuctions}</p>
        </div>
        <div className="report-card revenue">
          <h3>Total Revenue</h3>
          <p>{reportStats.revenue}</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
