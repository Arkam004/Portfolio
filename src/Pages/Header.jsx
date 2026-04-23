import React, { useEffect, useState } from "react";
import "../assets/CSS/Header.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/image/arkam.logo.jpg";

const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* NAV LINKS */}
        <nav className="nav-links">
          <a href="#home" className={active === "home" ? "active" : ""}>
            HOME
          </a>
          <a href="#about" className={active === "about" ? "active" : ""}>
            ABOUT
          </a>
          <a href="#skills" className={active === "skills" ? "active" : ""}>
            SKILLS
          </a>
          <a href="#services" className={active === "services" ? "active" : ""}>
            SERVICES
          </a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            PROJECTS
          </a>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            CONTACT
          </a>
        </nav>

        {/* SOCIAL ICONS */}
        <div className="header-icons">
          <a
            href="https://github.com/Arkam004?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dhuka-arkam-057102400?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
