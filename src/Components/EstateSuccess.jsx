import React from "react";
import "./Styels/EstateSuccess.css";

const EstateSuccess = () => {
  return (
    <>
      <div className="bgContainer">
        <div className="textEstateSuccess">
          <p className="heading">
            Elevate{" "}
            <span style={{ color: "#0078FF", fontWeight: 700 }}>
              Real Estate Success
            </span>{" "}
            with Osumare's Digital Expertise
          </p>
          <p className="shortDesc">
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
          <button className="getStarted">Get Started</button>
        </div>
        <div className="weNeedMarketingImg">
          <p className="textOnImage">
            We Need <br /> Marketing
          </p>
          <img src="./assets/weNeedMarketing.png" alt="We Need Marketing" />
        </div>
      </div>
    </>
  );
};

export default EstateSuccess;
