import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Admin Panel</h2>
    <ul>
      <li><Link to="/admin/users">Users</Link></li>
      <li><Link to="/admin/auctions">Auctions</Link></li>
      <li><Link to="/admin/reports">Reports</Link></li>
    </ul>
  </div>
);

export default Sidebar;
