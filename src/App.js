//Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";
//CSS
import "./coronaTrackerApp.css";
import healthCareWorkers from "./assets/healthCareWorkers.jpg";

//Containers
import CoronaTrackerApp from "./CoronaTrackerApp";
import Nav from "./containers/Nav";
import AboutCorona from "./containers/AboutCorona";
import Protection from "./containers/Protection";
import FAQs from "./containers/FAQs";
import CompleteReport from "./containers/CompleteReport";
import Footer from "./containers/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={CoronaTrackerApp} />
        <Route exact path="/aboutCorona" component={AboutCorona} />
        <Route exact path="/protection" component={Protection} />
        <Route exact path="/faq" component={FAQs} />
        <Route exact path="/completeReport" component={CompleteReport} />
      </Switch>
      <img
        src={healthCareWorkers}
        alt="Health Care Workers"
        className="img-thumbnail img-fluid p-2 my-5 mx-1"
      />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
