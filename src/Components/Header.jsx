import React from "react";
import "./Styels/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navBar">
        <div className="logo">
          <img src="./assets/Logo.png" alt="Logo" />
        </div>
        <div className="btnContainer">
          <button className="contactBtn">Contact Us</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
