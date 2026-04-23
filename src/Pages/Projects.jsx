import React from "react";
import "../assets/CSS/Projects.css";

import thegrovela from "../assets/image/thegrovela.png";
import generalmills from "../assets/image/generalmills.png";
const projectData = [
  {
    title: "Thegrovela",
    img: thegrovela,
  },
  {
    title: "Generalmills",
    img: generalmills,
  },
  // {
  //   title: "Portfolio Website",
  //   img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  // },
  // {
  //   title: "Food Delivery App",
  //   img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  // },
  // {
  //   title: "E-Commerce Store",
  //   img: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
  // },
  // {
  //   title: "Learning Platform",
  //   img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h3 style={{color: "#B7B89F", margin: "0 0 10px"}}>My Project</h3>
      <h1 className="projects-title">Projects</h1>
      <p>This are Awesome project made by me</p>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />

            {/* Overlay */}
            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
