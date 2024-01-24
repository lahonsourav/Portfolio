import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="logo_container">Pritam </div>

      <div className="header_scrolls">
        <ul className="scroll_list">
          <li>About</li>

          <li>SKills</li>

          <li>Projects</li>

          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
