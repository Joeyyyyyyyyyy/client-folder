import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">WEEKND</span>
        </Link>
        <div>
          <a href="/"className="home">Home</a>
          <a href="/" className="booking">View Bookings</a>
        </div>
        {user ? (
          <a href="/" className="navButtonLogout" onClick={LogoutHandler}>
            Logout
          </a>
        ) : (
            <div className="navItems">
              <Link to="/register">
              <button className="navButton">Register</button>
              </Link>
              <Link to="/login">
            <button className="navButton">Login</button>
              </Link>
              
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
