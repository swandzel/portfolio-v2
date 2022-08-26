import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./Modal.scss";

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
        <Button text="Download" />
      </div>
    </div>
  );
};

export default Modal;
