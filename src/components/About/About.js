import React from "react";
import "./About.scss";
import AboutIcon from "../../assets/icons/icon-about.svg";
import ResumeIcon from "../../assets/icons/icon-resume.svg";
import GitHubIcon from "../../assets/icons/icon-github.svg";
import SectionTitle from "../SectionTitle/SectionTitle";
import JavaScriptIcon from "../../assets/icons/icon-javascript.svg";
import HtmlIcon from "../../assets/icons/icon-html.svg";
import CssIcon from "../../assets/icons/icon-css.svg";
import ReactIcon from "../../assets/icons/icon-react.svg";
import VueIcon from "../../assets/icons/icon-vue.svg";
import SassIcon from "../../assets/icons/icon-sass.svg";
import TypeScriptIcon from "../../assets/icons/icon-typescript.svg";
import NodeIcon from "../../assets/icons/icon-node.svg";
import XdIcon from "../../assets/icons/icon-xd.svg";

const About = () => {
  const technologies = [
    { id: 1, name: "JavaScript", icon: JavaScriptIcon },
    { id: 2, name: "HTML", icon: HtmlIcon },
    { id: 3, name: "CSS", icon: CssIcon },
    { id: 4, name: "React", icon: ReactIcon },
    { id: 3, name: "Vue", icon: VueIcon },
    { id: 3, name: "Sass", icon: SassIcon },
    { id: 3, name: "TypeScript", icon: TypeScriptIcon },
    { id: 3, name: "Node", icon: NodeIcon },
    { id: 3, name: "Adobe Xd", icon: XdIcon },
  ];

  return (
    <section className="about">
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
          <img src={GitHubIcon} alt="Check my GitHub" />
          <img src={ResumeIcon} alt="Download my resume" />
        </div>
      </div>
    </section>
  );
};

export default About;
