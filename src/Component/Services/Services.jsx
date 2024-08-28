import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import service_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="service-container">
        {service_data.map((Service, index) => (
          <a
            key={index}
            href={Service.s_link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="myservice-item"
            onClick={() => console.log("Clicked:", Service.s_link)}
          >
            <div key={index} className="services-format">
              <h3>{Service.s_no}</h3>
              <h2>{Service.s_name}</h2>
              <p>{Service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
