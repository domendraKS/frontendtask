import React from "react";
import "./Styels/FocusedDigitalMastery.css";

const FocusedDigitalMastery = () => {
  return (
    <>
      <div className="fdm">
        <h3 className="headingFDM">Real Estate-Focused Digital Mastery</h3>
        <div className="fdmDetails">
          <div className="fdmImage">
            <img src="./assets/fdmArrow.png" alt="Focused Digital Mastery" />
          </div>
          <div className="contentSide">
            <h2>Unlock the Potential of Digital Real Estate Excellence</h2>
            <p>
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
            <button className="getStarted">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusedDigitalMastery;
