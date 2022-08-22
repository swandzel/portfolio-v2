import React from "react";
import "./ProjectsItem.scss";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fromBottom } from "../../variables/animations";

const ProjectsItem = ({ title, about, technologies }) => {
  return (
    <motion.div
      initial="initial"
      variants={fromBottom}
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring" }}
      className="projects-item"
    >
      <div className="projects-item--image"></div>
      <div className="projects-item--text">
        <div className="projects-item--title">{title}</div>
        <div className="projects-item--about">{about}</div>
        <div className="projects-item--technologies">Technologies:</div>
        <div className="projects-item--technologies--list">{technologies}</div>
        <div className="projects-item--buttons">
          <Button text="Code" backgroundColor="#EBC30E" width="190px" />
          <Button text="Live" backgroundColor="#ffffff" width="190px" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsItem;
