import React from "react";
import "../assets/CSS/Services.css";
import mobile from "../assets/image/mobile.png";

const Services = () => {
  return (
    <section id="services" className="services">
      <p className="services-top">I AM GRAT AT</p>
      <h2 className="services-heading">
        I do awesome services for our clients
      </h2>

      <div className="services-grid">
        <div className="service-card">
          <div className="icon-circle">
            <span>{"</>"}</span>
          </div>
          <h3>Web Development</h3>
          <p>
            Create website with frontend, backend and Rest API
          </p>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <span className="icon-mobile"><img src={mobile} alt="" /></span>
          </div>
          <h3>Mobile Application</h3>
          <p>
            Create mobile application using React Native for android & ios
          </p>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <span>⬢</span>
          </div>
          <h3>Web Design</h3>
          <p>
            Prepare easy user interface and work smoothly
          </p>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <span>🖥</span>
          </div>
          <h3>Desktop Application</h3>
          <p>
            Create desktop application using java and electron js
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
