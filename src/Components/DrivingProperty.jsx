import React from "react";
import "./Styels/DrivingProperty.css";

const DrivingProperty = () => {
  return (
    <>
      <div className="dm">
        <h3 className="headingdm">Real Estate-Focused Digital Mastery</h3>
        <p>Streamlined Strategies for Real Estate Success</p>
        <div className="dmDetails">
          <div className="dmImage">
            <img
              src="./assets/drivingProperty.png"
              alt="Focused Digital Mastery"
            />
          </div>
          <div className="contentSide">
            <h2>Optimized Path to Property Purchase</h2>
            <p>
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>
            <button className="getStarted">Get Started</button>
          </div>
        </div>
      </div>
      <div className="inquiriesConversions">
        <h2>Driving Property Inquiries to Conversions</h2>
        <div className="icsDetails">
          <div className="icDetail">
            <div className="icImgContainer">
              <img
                src="./assets/CallToAction.png"
                alt="Call-to-Action Optimization"
              />
            </div>
            <h4>Call-to-Action Optimization</h4>
            <p>
              Our carefully crafted CTAs guide potential buyers through the
              property journey, enhancing engagement and conversion rates.
            </p>
          </div>
          <div className="icDetail">
            <div className="icImgContainer">
              <img
                src="./assets/LandingPage.png"
                alt="Landing Page Efficiency"
              />
            </div>
            <h4>Landing Page Efficiency</h4>
            <p>
              Tailored landing pages are designed for maximum property lead
              conversion. They provide seamless user experiences and clear
              pathways for inquiry submission.
            </p>
          </div>
          <div className="icDetail">
            <div className="icImgContainer">
              <img
                src="./assets/SocialProof.png"
                alt="Social Proof Utilization"
              />
            </div>
            <h4>Social Proof Utilization</h4>
            <p>
              Leverage the power of testimonials and success stories from
              satisfied buyers to build trust and credibility, encouraging
              hesitant prospects to take action
            </p>
          </div>
          <div className="icDetail">
            <div className="icImgContainer">
              <img
                src="./assets/MobileFrinedly.png"
                alt="Mobile-Friendly Experience"
              />
            </div>
            <h4>Mobile-Friendly Experience</h4>
            <p>
              With a responsive design approach, our strategies ensure a
              seamless browsing experience across all devices. This
              responsiveness enhances engagement and conversions by
              accommodating the preferences of on-the-go property seekers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrivingProperty;
