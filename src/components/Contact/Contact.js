import "./Contact.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import EmailIcon from "../../assets/icons/icon-email.svg";
import Button from "../Button/Button";
import MessageLeftIcon from "../../assets/icons/icon-message-left.svg";
import MessageRightIcon from "../../assets/icons/icon-message-right.svg";
import { motion } from "framer-motion";
import useParallax from "../../variables/useParallax";

const Contact = () => {
  const { left, right, ref, contactScale, clientWidth } = useParallax();

  return (
    <div className="contact" id="contact" ref={ref}>
      <motion.div
        style={{
          scale: contactScale,
        }}
        className="contact--content"
      >
        <SectionTitle
          icon={EmailIcon}
          title="Email Me"
          subtitle={clientWidth > 410 ? "Want to hire me?" : ""}
          shadowColor="#C4C4C4"
          titleColor="#DD7DFF"
          subtitleColor="#C4C4C4"
        />
        <motion.img
          loading="lazy"
          src={MessageLeftIcon}
          alt="Icon #1"
          className="contact--icons left"
          style={{
            y: left,
          }}
        />
        <motion.img
          loading="lazy"
          src={MessageRightIcon}
          alt="Icon #2"
          className="contact--icons right"
          style={{
            y: right,
          }}
        />
        <form
          action="https://formsubmit.co/d2d67f1d6a2c4b67244ca11c700ead82"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="hidden"
            name="_next"
            value="https://swandzel.netlify.app/"
          />
          <input type="hidden" name="_captcha" value="false" />
          <textarea type="text" name="message" placeholder="Message" />
          <Button text="Send" email />
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
