import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
};
  return (
    <div className="container">
      <div className="card">
        <h1>Student Dashboard</h1>
        <p>Welcome to your learning portal</p>

        <div className="dashboard-links">
          <Link className="dash-link" to="profile">
            Profile
          </Link>

          <Link className="dash-link" to="settings">
            Settings
          </Link>
        </div>
        
     <button className="button" onClick={handleLogout}>
  Logout
</button>

        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;