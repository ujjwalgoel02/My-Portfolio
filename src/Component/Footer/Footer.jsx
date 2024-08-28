import React from "react";
import "./Footer.css";
import user_logo from "../../assets/user_icon.svg";
import { toast } from "react-toastify";

const Footer = () => {
  const onSubscribe = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "54848495-f287-4dfc-aad7-c7b3b65ada37");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success(res.message);
      console.log("Success", res);
    } else {
      toast.error(res.message); 
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-logo">
            <h1>𝖀𝖏𝖏𝖜𝖆𝖑</h1>
          </div>
          <p className="footer-top-left-title">
            I'm Ujjwal Goel, a frontend, web, and application developer.
          </p>
        </div>
        <form onSubmit={onSubscribe} className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_logo} alt="" />
            <input type="email" placeholder="Enter your email"name="email" />
          </div>
          <button type="submit" className="footer-subscribe">Subscribe</button>
        </form>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 Ujjwal Goel. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
