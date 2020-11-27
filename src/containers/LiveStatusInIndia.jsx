import React from "react";
import {
  FetchCoronaData,
  FetchStatusOfIndia,
} from "../components/FetchCoronaApi";
import Cards from "../components/Cards";
import StatsInIndia from "../components/StatsInIndia";

function LiveStatusInIndia() {
  const { data, loading, error } = FetchCoronaData("India");
  const { data1 } = FetchStatusOfIndia();
  // const jump = FetchOneDayJumpInIndia();
  return (
    <div>
      <section id="status">
        <div className="container">
          <div className="row py-2 px-md-5">
            <div className="col-12 mb-5">
              <h2>Corona Live Status</h2>
              <h5>In India</h5>
            </div>
            {loading && (
              <h3 className="text-center text-primary p-2 mt-4">Loading...</h3>
            )}
            {error && (
              <h3 className="text-center text-danger p-2 mt-4 error">
                Error. Check your Internet Connectivity or Try Later!
              </h3>
            )}
            <Cards data={data} />
          </div>
        </div>
      </section>
      {!loading && !error ? <StatsInIndia data1={data1} /> : ""}
    </div>
  );
}

export default LiveStatusInIndia;
