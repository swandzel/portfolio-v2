import React from "react";
import "./Contact.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import EmailIcon from "../../assets/icons/icon-email.svg";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact--content">
        <SectionTitle
          icon={EmailIcon}
          title="Email Me"
          subtitle="Want to hire me?"
          shadowColor="#C4C4C4"
          titleColor="#DD7DFF"
          subtitleColor="#C4C4C4"
        />
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" />
          <Button text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
