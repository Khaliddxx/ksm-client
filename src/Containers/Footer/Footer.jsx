import React from "react";
import "./Footer.scss";
import logo from "../../Assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <img src={logo} alt="KSM Logo" />
        <p>
          Khartoum – Nassir Extension – Omak Street crosses Bashir Elnefedi
          Street.
        </p>
      </div>
      <p className="cp">
        © Designed & Developed by <a href="https://khalidxah.tech">xDev</a>{" "}
        2023. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
