import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import "./login.css";'
import Swal from "sweetalert2"

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const { loading, error } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT.APP.API.SERVER}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.msg,
          });
        }
        if (!data.status) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
        navigate("/login")
      });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="login">
        <div className="lContainer">
          <h1 className="logins">Register</h1>
          <input
            type="text"
            placeholder="name"
            id="name"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button
            type="submit"
            disabled={loading}
            onClick={handleChange}
            className="lButton"
          >
            Register
          </button>
          {error && <span className="error">{error.message}</span>}
        </div>
      </div>
    </form>
  );
};

export default Register;
