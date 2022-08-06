import React from "react";
import "./header.styles.css";

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-center">
          <ul className="header-option">
            <li>
              <a href="/discover">Discover</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/join">Join Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
