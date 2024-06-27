import React from "react";
import "./Styels/OurServices.css";
import {
  RiBarChart2Fill,
  RiBubbleChartFill,
  RiCursorFill,
  RiFilmFill,
} from "react-icons/ri";
import { BiSolidBookAlt } from "react-icons/bi";
import { MdWebAsset } from "react-icons/md";
import { FaArrowTrendUp, FaHeadSideVirus } from "react-icons/fa6";

const OurServices = () => {
  return (
    <>
      <div className="ourServices">
        <h2>Our Service Offerings</h2>
        <p>Strategies that Drive Property Market Excellence</p>
        <div className="servicesDetails">
          <div className="serviceContainer">
            <div className="serviceIcon">
              <RiBarChart2Fill className="icon" />
            </div>
            <h4>Automotive SEO</h4>
            <p>
              Drive Your Success with Automotive SEO: Ignite Online Visibility
              and Outrace the Competition. Accelerate Your Business Growth Today
            </p>
          </div>
          <div className="serviceContainer">
            <div className="serviceIcon">
              <RiCursorFill className="icon" />
            </div>
            <h4>PPC Precision</h4>
            <p>
              Maximize visibility and drive quality traffic with meticulously
              targeted Pay-Per-Click campaigns.
            </p>
          </div>
          <div className="serviceContainer">
            <div className="serviceIcon">
              <RiBubbleChartFill className="icon" />
            </div>
            <h4>Social Acceleration</h4>
            <p>
              Engage and influence your audience across social media platforms,
              amplifying your brand's presence and connection.
            </p>
          </div>
          <div className="serviceContainer">
            <div className="serviceIcon">
              <BiSolidBookAlt className="icon" />
            </div>
            <h4>Content Excellence</h4>
            <p>
              Craft compelling, automotive-specific content that resonates with
              enthusiasts and drives engagement.
            </p>
          </div>
          <div className="serviceContainer">
            <div className="serviceIcon">
              <MdWebAsset className="icon" />
            </div>
            <h4>Web Design</h4>
            <p>
              Transform visitors into customers with high-performance websites
              designed for seamless user experiences and increased conversions.
            </p>
          </div>
          <div className="serviceContainer">
            <div className="serviceIcon">
              <FaArrowTrendUp className="icon" />
            </div>
            <h4>Data-Driven Insights</h4>
            <p>
              Leverage data to refine your strategies, making informed decisions
              that drive revenue growth.
            </p>
          </div>
          <div className="serviceContainer">
            <div className="serviceIcon">
              <FaHeadSideVirus className="icon" />
            </div>
            <h4>End-to-End Solutions</h4>
            <p>
              From initial awareness to post-purchase loyalty, we offer
              full-funnel solutions that guide customers through every step of
              their journey.
            </p>
          </div>
          <div className="serviceContainer">
            <div className="serviceIcon">
              <RiFilmFill className="icon" />
            </div>
            <h4>Video Marketing</h4>
            <p>
              Unleash the Power of Video Marketing: Captivate, Engage, and
              Elevate Your Brand with Compelling Visual Stories.
            </p>
          </div>
        </div>
        <button className="getStarted">Get Started</button>
      </div>
    </>
  );
};

export default OurServices;
