import React from "react";
import "../assets/CSS/Home.css";

const Home = () => {
  const scrollToProjects = () => {
  const section = document.getElementById("projects");
  section.scrollIntoView({ behavior: "smooth" });
};
  return (
    <section id="home" className="hero">
      {/* Availability badge */}
      <div className="hero-badge">
        <span className="dot"></span>
        <span>Available for opportunities</span>
      </div>

      {/* Main content */}
      <h1 className="hero-title">Hi, I’m Arkam</h1>

      <h2 className="hero-subtitle">Full Stack Developer</h2>

      <p className="hero-text">
        Full Time at <span>Valudas Tech Park</span>, passionate about creating
        modern web experiences with clean code and innovative solutions.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <button onClick={scrollToProjects} className="btn primary">
          View My Work
        </button>
        <a href="#contact" className="btn secondary">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Home;
