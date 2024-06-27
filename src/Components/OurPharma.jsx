import React from "react";
import "./Styels/OurPharma.css";
import { FaQuoteRight } from "react-icons/fa6";

const OurPharma = () => {
  return (
    <>
      <div className="ourPharma">
        <h3>What Our Pharma Partners Say</h3>
        <p>Driving Transformations, One Brand at a Time</p>
        <div className="pharmaSay">
          <div className="imgSide">
            <img src="./assets/Pharma1.png" alt="Pharma Says" />
          </div>
          <div className="pharmaDetails">
            <div className="nameProfile">
              <div className="imgName">
                <img src="./assets/Pharma1.png" alt="Pharma Profile" />
                <p className="name">Tabish khan</p>
              </div>
              <FaQuoteRight className="icon" />
            </div>
            <p className="desc">
              Osumare's expertise in pharma marketing is unparalleled. Their
              strategies helped us navigate complex regulations while driving
              remarkable growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPharma;
