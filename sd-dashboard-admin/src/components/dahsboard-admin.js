import { Link } from "react-router-dom";
const DashboardAdmin = () => {
  return (
    <div>
      <p>Admin Dashboard</p>
      <Link to="/login" style={{textDecoration: "none"}}>
        <button type="button">Log out</button>
      </Link>
    </div>
  );
};

export default DashboardAdmin;
