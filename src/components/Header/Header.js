import Button from "../Button/Button";
import "./Header.scss";
import MyPhoto from "../../assets/images/main-photo.png";
import MyPhotoMobile from "../../assets/images/main-photo-mobile.png";
import { motion } from "framer-motion";
import BracketsIcon from "../../assets/icons/icon-brackets-header.svg";
import LaptopIcon from "../../assets/icons/icon-laptop-header.svg";
import useParallax from "../../variables/useParallax";
import { headerAnim } from "../../variables/animations";

const Header = () => {
  const { ref, brackets, laptop, text } = useParallax();

  return (
    <header className="header" ref={ref}>
      <motion.div
        className="header--content"
        variants={headerAnim}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="header--text"
          style={{
            y: text,
          }}
        >
          <h1 className="header--text--name">Sebastian Wandzel</h1>
          <h2 className="header--text--position">Front-End Developer</h2>
          <Button text="My Portfolio" link="#projects" />
        </motion.div>
        <div className="header--image">
          <img src={MyPhoto} alt="My pic" className="header--image--my-pic" />
          <img
            src={MyPhotoMobile}
            alt="My pic"
            className="header--image--my-pic-mobile"
          />

          <motion.img
            src={BracketsIcon}
            alt="Icon #1"
            className="header--icons brackets"
            style={{
              y: brackets,
            }}
          />
          <motion.img
            src={LaptopIcon}
            alt="Icon #2"
            className="header--icons laptop"
            style={{
              y: laptop,
            }}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
