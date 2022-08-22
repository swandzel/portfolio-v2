import "./Navbar.scss";
import { navbar_links } from "../../variables/navbar-links";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [changeStyle, setChangeStyle] = useState(false);

  useEffect(() => {
    const changeStyleHandler = () => {
      setChangeStyle(window.pageYOffset > 80);
    };

    window.addEventListener("scroll", changeStyleHandler);
    return () => window.removeEventListener("scroll", changeStyleHandler);
  }, []);

  return (
    <nav className={`navbar ${changeStyle ? "navbar--scroll" : ""}`}>
      <ul>
        {navbar_links.map((navbar_link) => (
          <li key={navbar_link.id}>{navbar_link.link}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
