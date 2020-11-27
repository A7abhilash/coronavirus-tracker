import React from "react";

function Footer() {
  return (
    <div className="container-fluid p-3 pt-md-5 bg-dark text-white ">
      <div className="row">
        <div className="col-md-5 offset-md-1">
          <h5>About the Page</h5>
          <p>
            This website is for health information and advice about coronavirus
            (COVID-19), how to prevent and protect yourself from disease.
          </p>
        </div>
        <div className="col-md-5 offset-md-1">
          <h5>Important Links</h5>
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            className="my-2"
          >
            WHO Website
          </a>
          <br />
          <a href="https://www.mygov.in/covid-19" className="my-2">
            Indian Health Government Website
          </a>
          <br />
          <a href="https://www.mohfw.gov.in/" className="my-2">
            Health & Family Welfare Website
          </a>
          <br />
          <a href="https://www.healthline.com/coronavirus" className="my-2">
            COVID-19 Health Line
          </a>
          <br />
        </div>
        <div
          className="col-12 my-3 text-center"
          style={{ fontFamily: "cursive" }}
        >
          <hr />
          <h5>Template made with ❤️ by A7</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
