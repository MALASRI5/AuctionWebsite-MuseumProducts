import React from "react";
import Sidebar from "./Sidebar";
import AuctionList from "./AuctionList";
import Reports from "./Reports";
import UsersTable from "./UsersTable";
import './AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard" >
      <Sidebar />
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
        <UsersTable />
        <AuctionList />
        <Reports />
      </div>
    </div>
  );
};

export default AdminDashboard;
