import "./Navbar.scss";
import { navbar_links } from "../../variables/navbar-links";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { headerAnim } from "../../variables/animations";

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
    <nav className="navbar">
      <motion.ul variants={headerAnim} initial="initial" animate="animate">
        {navbar_links.map((navbar_link) => (
          <li key={navbar_link.id}>
            <a href={navbar_link.href}>{navbar_link.link}</a>
          </li>
        ))}
      </motion.ul>

      <div className={`navbar--scroll ${changeStyle ? "is-active" : ""}`} />
    </nav>
  );
};

export default Navbar;
