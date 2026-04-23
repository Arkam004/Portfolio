import React from "react";
import "../assets/CSS/Contact.css";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <p className="contact-subtitle">CONTACT US</p>
      <h2 className="contact-title">Have a Project?</h2>
      <p className="contact-desc">
        Have a Project ? If yes you can share with me
      </p>

      <div className="contact-container">
        {/* GitHub */}
        <a
          href="https://github.com/Arkam004?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="icon" />
          <h3>Github</h3>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dhuka-arkam-057102400?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
        </a>

        {/* Email */}
        <a href="mailto:arkamamin134@gmail.com" className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919586690888"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaWhatsapp className="icon" />
          <h3>WhatsApp</h3>
        </a>
      </div>
    </section>
  );
};

export default Contact;
