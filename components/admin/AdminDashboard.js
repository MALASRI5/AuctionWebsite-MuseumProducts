import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import UsersTable from "./UsersTable";
import AuctionList from "./AuctionList";
import Reports from "./Reports";
import './Sidebar.css';

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-main">
        <Routes>
          <Route path="/admin/users" element={<UsersTable />} />
          <Route path="/admin/auctions" element={<AuctionList />} />
          <Route path="/admin/reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
