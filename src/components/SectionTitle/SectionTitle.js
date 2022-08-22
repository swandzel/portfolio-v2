import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({
  icon,
  title,
  subtitle,
  shadowColor,
  titleColor = "#000000",
  subtitleColor = "#000000",
}) => {
  return (
    <div className="section-title">
      <img src={icon} alt="About" />
      <div className="section-title--title">
        <h2
          style={{
            textShadow: `5px 5px 0px ${shadowColor}`,
            color: `${titleColor}`,
          }}
        >
          {title}
        </h2>
        <h3 style={{ color: `${subtitleColor}` }}>{subtitle}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
