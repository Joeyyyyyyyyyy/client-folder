import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  // const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  // const [token, setToken] = useState("");

  // setToken(localStorage.getItem("token"));

  // console.log(token);
  const LogoutHandler = () => {
    // setAuth(false);
    localStorage.removeItem("user");
    navigate("/login");
  };
  
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">WEEKND</span>
        </Link>
        {/* <div>
          <a href="/"className="home">Home</a>
          <a href="/" className="booking">View Bookings</a>
        </div> */}
        {user ? (
          <button className="navButtonLogout" onClick={LogoutHandler}>
            Logout
          </button>
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
