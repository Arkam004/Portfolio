import React from "react";
import "../assets/CSS/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h4>SKILLS</h4>
      <h2 className="skills-heading">My Skills</h2>

      <div className="skills-wrapper">
        <div className="skill-box html">
          <h3>HTML</h3>
          <span>Frontend</span>
        </div>

        <div className="skill-box css">
          <h3>CSS</h3>
          <span>Frontend</span>
        </div>

        <div className="skill-box express">
          <h3>Bootstrap</h3>
          <span>Frontend</span>
        </div>

        <div className="skill-box node">
          <h3>Tailwind</h3>
          <span>Frontend</span>
        </div>

        <div className="skill-box js">
          <h3>JavaScript</h3>
          <span>Frontend</span>
        </div>

        <div className="skill-box react">
          <h3>React.js</h3>
          <span>Frontend</span>
        </div>

        <div className="skill-box node">
          <h3>Node.js</h3>
          <span>Backend</span>
        </div>

        <div className="skill-box express">
          <h3>Express.js</h3>
          <span>Backend</span>
        </div>

        <div className="skill-box mysql">
          <h3>MySQL</h3>
          <span>Database</span>
        </div>

        <div className="skill-box git">
          <h3>Git</h3>
          <span>Tool</span>
        </div>

        <div className="skill-box github">
          <h3>GitHub</h3>
          <span>Tool</span>
        </div>

        <div className="skill-box vscode">
          <h3>VsCode</h3>
          <span>Tool</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
