import "./App.css";
import DrivingProperty from "./Components/DrivingProperty";
import EstateSuccess from "./Components/EstateSuccess";
import FocusedDigitalMastery from "./Components/FocusedDigitalMastery";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navigating from "./Components/Navigating";
import OurServices from "./Components/OurServices";
import ActionExperties from "./Components/ActionExperties";
import PeaceOfMind from "./Components/PeaceOfMind";
import OurPharma from "./Components/OurPharma";
import ContactUs from "./Components/ContactUs";
import AskedQuestion from "./Components/AskedQuestion";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "420px" }}>
        <EstateSuccess />
        <FocusedDigitalMastery />
        <OurServices />
        <Navigating />
        <DrivingProperty />
        <ActionExperties />
        <PeaceOfMind />
        <OurPharma />
        <AskedQuestion />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
