import React from "react";
import "./Styels/Navigating.css";
import { BsLightningChargeFill } from "react-icons/bs";
import { SiSpringsecurity } from "react-icons/si";
import { TbDeviceTabletSearch } from "react-icons/tb";
import { PiStarFourFill } from "react-icons/pi";

const Navigating = () => {
  return (
    <>
      <div className="natigatingContainer">
        <h3>Navigating Real Estate's Digital Landscape</h3>
        <p>Insights for Real Estate Marketing Advantage</p>
        <div className="allDetails">
          <div className="leftSide">
            <div className="detailNavigating">
              <div className="serviceIcon">
                <PiStarFourFill className="icon" />
              </div>
              <div className="content">
                <h4>Market Trends Analysis</h4>
                <p>Predictive insights to guide real estate strategies.</p>
              </div>
            </div>
            <div className="detailNavigating">
              <div className="serviceIcon">
                <BsLightningChargeFill className="icon" />
              </div>
              <div className="content">
                <h4>Targeted Buyer Persona</h4>
                <p>Understand and connect with your ideal property buyers.</p>
              </div>
            </div>
            <div className="detailNavigating">
              <div className="serviceIcon">
                <SiSpringsecurity className="icon" />
              </div>
              <div className="content">
                <h4>Competitor Insights</h4>
                <p>
                  Stand out in the property market with informed strategies.
                </p>
              </div>
            </div>
            <div className="detailNavigating">
              <div className="serviceIcon">
                <TbDeviceTabletSearch className="icon" />
              </div>
              <div className="content">
                <h4>Visual Content Appeal</h4>
                <p>
                  Captivate buyers with appealing visuals and immersive
                  experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <img src="./assets/WeAreExpert.png" alt="We are Expert" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigating;
