import React from "react";
import "./ProjectsItem.scss";
import Button from "../Button/Button";
import useParallax from "../../variables/useParallax";
import { motion } from "framer-motion";

const ProjectsItem = ({ title, about, technologies, code, live }) => {
  const { ref, projectsScale } = useParallax();

  return (
    <motion.div
      className="projects-item"
      style={{
        scale: projectsScale,
      }}
      ref={ref}
    >
      <div className="projects-item--image"></div>
      <div className="projects-item--text">
        <div className="projects-item--title">{title}</div>
        <div className="projects-item--about">{about}</div>
        <div className="projects-item--technologies">Technologies:</div>
        <div className="projects-item--technologies--list">{technologies}</div>
        <div className="projects-item--buttons">
          <Button
            text="Code"
            backgroundColor="#EBC30E"
            width="190px"
            link={code}
            external
          />
          <Button
            text="Live"
            backgroundColor="#ffffff"
            width="190px"
            link={live}
            external
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsItem;
