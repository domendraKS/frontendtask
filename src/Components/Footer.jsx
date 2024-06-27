import React from "react";
import "./Styels/Footer.css";
import { IoLogoWhatsapp, IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaPinterest, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerCol1">
          <img src="./assets/Logo.png" alt="Logo" className="footerLogo" />
          <p className="aboutCmpn">
            The best digital marketing agency in Pune with a proven track record
            of consistently delivering quality service.
          </p>
          <div className="addressContainer">
            <h4>Address</h4>
            <p>
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </p>
          </div>
          <div className="contactContainer">
            <h4>Contacts</h4>
            <div className="contact">
              <IoMail />
              <span>hello@osumare.in</span>
            </div>
            <div className="contact">
              <IoIosCall />
              <span>+91 84598 76226</span>
            </div>
          </div>
        </div>
        <div className="footerCol2">
          <h4>Menu</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div className="footerCol3">
          <h4>Social</h4>
          <div className="mainIconsContainer">
            <a href="#" className="iconContainer">
              <FaXTwitter className="icon" />
            </a>
            <a href="#" className="iconContainer">
              <FaFacebookSquare className="icon" />
            </a>
            <a href="#" className="iconContainer">
              <FaYoutube className="icon" />
            </a>
            <a href="#" className="iconContainer">
              <FaPinterest className="icon" />
            </a>
            <a href="#" className="iconContainer">
              <IoLogoWhatsapp className="icon" />
            </a>
            <a href="#" className="iconContainer">
              <AiFillInstagram className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
