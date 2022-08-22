import "./About.scss";
import AboutIcon from "../../assets/icons/icon-about.svg";
import ResumeIcon from "../../assets/icons/icon-resume.svg";
import GitHubIcon from "../../assets/icons/icon-github.svg";
import SectionTitle from "../SectionTitle/SectionTitle";
import { technologies } from "../../variables/technologies";
import React, { useState, useRef, useLayoutEffect } from "react";

import { motion, useTransform, useViewportScroll } from "framer-motion";

const About = () => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const initial = elementTop - clientHeight;
  const final = elementTop + 50;
  const finalExt = 2000;

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  const { scrollY } = useViewportScroll();
  const scaleRight = useTransform(scrollY, [initial, final, 5000], [0.5, 1, 2]);
  const left = useTransform(scrollY, [initial, final], ["0", "1000px"]);
  const right = useTransform(
    scrollY,
    [initial, final, 5000],
    ["-150vw", "0px", "50vw"]
  );

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        style={{
          scale: scaleRight,
        }}
        className="about--left"
      >
        <h2>My skills</h2>
        <div className="about--left--technologies">
          {technologies.map((technology) => (
            <div className="about--left--technologies-item" key={technology.id}>
              <img src={technology.icon} alt={technology.name} />
              <div className="tooltip">{technology.name}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        style={{
          x: right,
        }}
        className="about--right"
      >
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
      </motion.div>
    </section>
  );
};

export default About;
