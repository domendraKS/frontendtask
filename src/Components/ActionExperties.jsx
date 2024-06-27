import React from "react";
import "./Styels/ActionExperties.css";

const ActionExperties = () => {
  return (
    <>
      <div className="inquiriesConversions">
        <h2>Our Expertise in Action</h2>
        <div className="icsDetails">
          <div className="icDetail">
            <div className="icImgContainer">
              <img src="./assets/EffectiveCTA.png" alt="Effective CTAs" />
            </div>
            <h4>Effective CTAs</h4>
            <p>
              See how our strategic CTAs drove a significant increase in
              property inquiries and accelerated sales for a real estate agency.
            </p>
          </div>
          <div className="icDetail">
            <div className="icImgContainer">
              <img
                src="./assets/ConversionalOptimized.png"
                alt="Conversion-Optimized Landing Pages"
              />
            </div>
            <h4>Conversion-Optimized Landing Pages</h4>
            <p>
              Explore a case study where our landing page optimization increased
              property lead conversion rates by 30%
            </p>
          </div>
          <div className="icDetail">
            <div className="icImgContainer">
              <img
                src="./assets/TrustBuilding.png"
                alt="Trust Building with Social Proof"
              />
            </div>
            <h4>Trust Building with Social Proof</h4>
            <p>
              Discover how leveraging client testimonials boosted buyer
              confidence, leading to higher conversion rates for a property
              development project
            </p>
          </div>
          <div className="icDetail">
            <div className="icImgContainer">
              <img
                src="./assets/SuccessMedal.png"
                alt="Mobile-First Success:"
              />
            </div>
            <h4>Mobile-First Success:</h4>
            <p>
              Learn how our mobile-responsive design approach resulted in a 25%
              increase in inquiries from mobile users for a real estate agency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionExperties;
