import React from "react";
import CountUp from "react-countup";

function Cards({ data }) {
  // console.log(data);
  if (!data.cases)
    /* Offcourse if one is undefined rest all parameters are undefined */
    return "";

  const confirmed = data.cases;
  const recovered = data.recovered;
  const deaths = data.deaths;
  const lastUpdate = data.updated;
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-4 p-3">
          <div className="p-2 bg-light">
            <h5>Confirmed</h5>
            <h2 className="text-secondary">
              <CountUp start={0} end={confirmed} duration={3} separator="," />
            </h2>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className="p-2 bg-light">
            <h5>Recovered</h5>
            <h2 className="text-success">
              <CountUp start={0} end={recovered} duration={3} separator="," />
            </h2>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className="p-2 bg-light">
            <h5>Deaths</h5>
            <h2 className="text-danger">
              <CountUp start={0} end={deaths} duration={3} separator="," />
            </h2>
          </div>
        </div>
        <div className="col-12 text-center text-muted">
          Last Update : {new Date(lastUpdate).toDateString()},{" "}
          {new Date(lastUpdate).toLocaleTimeString()} (IST)
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Cards;
