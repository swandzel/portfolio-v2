import React from "react";
import "./Navbar.scss";
import { navbar_links } from "../../variables/navbar-links";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navbar_links.map((navbar_link) => (
          <li key={navbar_link.id}>{navbar_link.link}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
