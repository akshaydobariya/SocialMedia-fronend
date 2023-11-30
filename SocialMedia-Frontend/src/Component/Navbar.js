// Navbar.js

import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/Slice/AccountSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { loginData } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
      <ul className="menu">
        <li className={location.pathname === "/home" ? "active" : ""}>
          <Link to="/home">Home</Link>
        </li>
        <li className={location.pathname === "/home/addpost" ? "active" : ""}>
          <Link to="/home/addpost">AddPost</Link>
        </li>
        <li className={location.pathname === "/home/profile" ? "active" : ""}>
          <Link to="/home/profile">Profile</Link>
        </li>
        <li
          className={location.pathname === "/home/connection" ? "active" : ""}
        >
          <Link to="/home/connection">Friend Request</Link>
        </li>
      </ul>
      <div className="right-side">
        {loginData == null ? (
          <>
            <button className="login-button">
              <Link to="/" className="link-button">
                Login
              </Link>
            </button>
            <button className="register-button">
              <Link to="signup" className="link-button">
                Register
              </Link>
            </button>
          </>
        ) : (
          <button
            className="logout-button"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
