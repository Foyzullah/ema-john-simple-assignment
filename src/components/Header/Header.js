import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav className="navmenu">
        <ul className="mainmenu">
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./shop">Shop</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
