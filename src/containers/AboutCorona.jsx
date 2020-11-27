import React from "react";

function AboutCorona() {
  return (
    <section id="aboutCorona">
      <div className="container mb-5">
        <div className="row mx-1">
          <div className="col-md-6 offset-md-3 info">
            <h5 className="about-intro">About the Disease</h5>
            <h3 className="my-2">Corona Virus (COVID-19)</h3>
            <div className="my-2 p-2">
              <p>
                <b>
                  COVID-19 is a new illness that can affect your lungs and
                  airways.{" "}
                </b>
                It's caused by a virus called coronavirus. It was discovered in
                December 2019 in Wuhan, Hubei, China.
              </p>
              <p>
                Common signs of infection include respiratory symptoms, fever,
                cough, shortness of breath and breathing difficulties. In more
                severe cases, infection can cause pneumonia, severe acute
                respiratory syndrome, kidney failure and even death.
              </p>
              <p>
                For more details visit WHO website. <br />
                <a
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                  role="button"
                  className="btn btn-outline-info my-2 p-2"
                >
                  Visit WHO Website
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCorona;
