import React from "react";
import "./About.scss";
import AboutIcon from "../../assets/icons/icon-about.svg";
import ResumeIcon from "../../assets/icons/icon-resume.svg";
import GitHubIcon from "../../assets/icons/icon-github.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

import { technologies } from "../../variables/technologies";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about--left">
        <h2>My skills</h2>
        <div className="about--left--technologies">
          {technologies.map((technology) => (
            <div className="about--left--technologies-item" key={technology.id}>
              <img src={technology.icon} alt={technology.name} />
              <div className="tooltip">{technology.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="about--right">
        <SectionTitle
          icon={AboutIcon}
          title="About"
          subtitle="A few words about me"
          shadowColor="#EBC30E"
        />
        <div className="about--right--about">
          <p>My name is Sebastian Wandzel and I am a front-end developer.</p>
          <p>
            I focus mainly on building modern, responsive websites and API-based
            applications.
          </p>
          <p>
            I have experience working with clients from various countries and
            industries.
          </p>
        </div>
        <div className="about--right--icons">
          <a
            href="https://github.com/swandzel"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubIcon} alt="Check my GitHub" />
          </a>
          <img src={ResumeIcon} alt="Download my resume" />
        </div>
      </div>
    </section>
  );
};

export default About;
