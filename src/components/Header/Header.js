import React from "react";
import Button from "../Button/Button";
import "./Header.scss";
import MyPhoto from "../../assets/images/main-photo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header--content">
        <div className="header--text">
          <h1 className="header--text--name">Sebastian Wandzel</h1>
          <h2 className="header--text--position">Front-End Developer</h2>
          <Button text="My Portfolio" />
        </div>
        <div className="header--image">
          <img src={MyPhoto} alt="My pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
