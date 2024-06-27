import React from "react";
import "./Styels/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="contactUs">
        <h3>Connect with Our Digital Marketing Experts</h3>
        <p>
          Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
          Elevate Your Online Presence Together
        </p>
        <form className="contactUsForm">
          <div className="formInput">
            <div className="shorInput">
              <div className="singleInput">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="singleInput">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="Enter your Number" />
              </div>
              <div className="singleInput">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" />
              </div>
            </div>
            <div className="longInput">
              <label htmlFor="message">Message</label>
              <textarea rows={9} placeholder="Enter your message"></textarea>
            </div>
          </div>
          <button className="getStarted">Get Started</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
