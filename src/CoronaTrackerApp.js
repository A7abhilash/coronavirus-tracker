import React from "react";
import AboutCorona from "./containers/AboutCorona";
import Protection from "./containers/Protection";
import FAQs from "./containers/FAQs";
import LiveStatusInIndia from "./containers/LiveStatusInIndia";

function CoronaTrackerApp() {
  return (
    <div>
      <LiveStatusInIndia />
      <AboutCorona />
      <Protection />
      <FAQs />
    </div>
  );
}

export default CoronaTrackerApp;
