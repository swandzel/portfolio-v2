import React from "react";
import "./Projects.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectsIcon from "../../assets/icons/icon-projects.svg";
import ProjectsItem from "../ProjectsItem/ProjectsItem";
import { projects } from "../../variables/projects";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects--content">
        <SectionTitle
          icon={ProjectsIcon}
          title="Projects"
          subtitle="Demo projects which showcase my skills"
          shadowColor="#DD7DFF"
        />
        {projects.map((project) => (
          <ProjectsItem
            key={project.id}
            title={project.title}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
