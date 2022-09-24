import React from "react";
import "../css/Header.css";
import logo from "../assets/header-logo/Group.svg";
const Header = () => {
  return (
    <div
      className="header"
      style={{
        width: "78%",
        margin: "0 auto",
        maxWidth: "1500px",
      }}
    >
      <div className="logo">
        <img src={logo} alt="" />
        <h4>Wakanda</h4>
      </div>
      <div className="menu-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>How it works</li>
          <li>For Freelancer</li>
          <button>Get Started</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
