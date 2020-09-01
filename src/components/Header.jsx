import React from "react";
import logo from "../img/logo.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="header-navigation">
        <span>About me</span>
        <span>Relationships</span>
        <span>Requirements</span>
        <span>Users</span>
        <span>Sign Up</span>
      </div>
    </header>
  );
};

export default Header;
