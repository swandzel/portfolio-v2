import React from "react";
import "./Projects.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectsIcon from "../../assets/icons/icon-projects.svg";
import ProjectsItem from "../ProjectsItem/ProjectsItem";
import { projects } from "../../variables/projects";
import useParallax from "../../variables/useParallax";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref, projectsTitle } = useParallax();

  return (
    <div className="projects" id="projects" ref={ref}>
      <div className="projects--content">
        <motion.div
          style={{
            scale: projectsTitle,
          }}
        >
          <SectionTitle
            icon={ProjectsIcon}
            title="Projects"
            subtitle="Demo projects which showcase my skills"
            shadowColor="#DD7DFF"
          />
        </motion.div>
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
