import React from "react";
import "./ProjectsItem.scss";
import Button from "../Button/Button";

const ProjectsItem = ({ title, about, technologies }) => {
  return (
    <div className="projects-item">
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
    </div>
  );
};

export default ProjectsItem;
