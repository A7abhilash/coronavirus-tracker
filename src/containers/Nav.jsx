import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top p-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#NAVBAR"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          <h2>COVID-19</h2>
        </Link>
        <div className="navbar-collapse collapse" id="NAVBAR">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Live Status in India
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutCorona" className="nav-link">
                About Corona
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/protection" className="nav-link">
                Protection
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/completeReport" className="nav-link">
                Complete Report
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
