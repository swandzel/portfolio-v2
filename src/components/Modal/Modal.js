import React, { useEffect } from "react";
import "./Modal.scss";
import "../Button/Button.scss";

const Modal = ({ setShowModal, toggleModal }) => {
  const closeModal = (e) => {
    if (e.target.id === "modal" || e.key === "Escape") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  });

  return (
    <div className="modal" onClick={closeModal} id="modal">
      <div className="modal--content">
        <div className="modal--close" onClick={toggleModal}>
          X
        </div>
        Here is my CV
        <a
          href={require("../../assets/CV_Sebastian_Wandzel.pdf")}
          download="CV_Sebastian_Wandzel"
          className="button"
          style={{ backgroundColor: "#dd7dff", width: "294px" }}
        >
          download
        </a>
      </div>
    </div>
  );
};

export default Modal;
