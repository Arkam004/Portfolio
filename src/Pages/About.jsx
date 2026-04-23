import React from "react";
import "../assets/CSS/About.css";
import aboutImg from "../assets/image/arkam.png";

import { FaMusic, FaPlane, FaFilm, FaBasketballBall } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <img src={aboutImg} alt="About" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <span className="about-small-title">MY INTRO</span>
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I am student of B.E ( Bachelor of Engineering in Computer Science ).
            I am now working as a Web developer and Mobile Application Developer
          </p>

          <div className="about-info">
            <p><strong>Name:</strong> <span>Dhuka Arkam</span></p>
            <p><strong>Date of birth:</strong> <span>August 09, 2007</span></p>
            <p><strong>Address:</strong> <span>Ahmadabad, India</span></p>
            <p><strong>Zip code:</strong> <span>385210</span></p>
            <p><strong>Email:</strong> <span>dhukaarkam2007@gmail.com</span></p>
            <p><strong>Phone:</strong> <span>+91 9586690888</span></p>
          </div>

          {/* HOBBIES */}
          <div className="about-hobbies">
            <div className="hobby">
              <FaMusic />
              <span>Music</span>
            </div>
            <div className="hobby">
              <FaPlane />
              <span>Travel</span>
            </div>
            <div className="hobby">
              <FaFilm />
              <span>Movie</span>
            </div>
            <div className="hobby">
              <FaBasketballBall />
              <span>Sports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
