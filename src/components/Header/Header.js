import Button from "../Button/Button";
import "./Header.scss";
import MyPhoto from "../../assets/images/main-photo.png";
import { motion } from "framer-motion";
import BracketsIcon from "../../assets/icons/icon-brackets-header.svg";
import LaptopIcon from "../../assets/icons/icon-laptop-header.svg";
import useParallax from "../../variables/useParallax";

const Header = () => {
  // const { scrollY } = useViewportScroll();
  // const brackets = useTransform(scrollY, [0, 500], ["100px", "0px"]);
  // const laptop = useTransform(scrollY, [0, 500], ["0px", "100px"]);
  // const text = useTransform(scrollY, [0, 500], ["0px", "250px"]);
  const { ref, brackets, laptop, text } = useParallax();

  return (
    <header className="header" ref={ref}>
      <div className="header--content">
        <motion.div
          className="header--text"
          style={{
            y: text,
          }}
        >
          <h1 className="header--text--name">Sebastian Wandzel</h1>
          <h2 className="header--text--position">Front-End Developer</h2>
          <Button text="My Portfolio" />
        </motion.div>
        <div className="header--image">
          <img src={MyPhoto} alt="My pic" />
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
      </div>
    </header>
  );
};

export default Header;
