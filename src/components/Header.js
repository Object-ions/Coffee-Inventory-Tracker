import React from "react";
import './Header.css'

import logoImage from "./../img/logo.png"

function Header() {
  return (
    <div className="header">
      <img src={logoImage} alt="logo" />
      <h2>Inventory Panel</h2>
    </div>
  );
}

export default Header;