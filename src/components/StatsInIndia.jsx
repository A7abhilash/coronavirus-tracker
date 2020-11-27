import React from "react";

function StatsInIndia({ data1 }) {
  if (!data1.states) return "";
  // console.log(data1.states);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 p-2 bg-light  table-responsive">
          <table className="table table-sm table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Sl No.</th>
                <th>State</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              {data1.states.map((data, index) => {
                return (
                  <tr key={index + 1}>
                    <th>{index + 1}</th>
                    <th>{data.state}</th>
                    <th className="text-danger">
                      Total: {data.cases} <br /> Today: {data.todayCases}
                    </th>
                    <th className="text-danger">
                      Total: {data.active} <br />
                      Today: {data.todayActive > 0 ? data.todayActive : 0}
                    </th>
                    <th className="text-success">
                      Total: {data.recovered} <br /> Today:{" "}
                      {data.todayRecovered}
                    </th>
                    <th className="text-secondary text-center">
                      Total: {data.deaths} <br /> Today: {data.todayDeaths}
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h6 className="text-center">
            PS: Today's number of active cases is calculated by subracting
            yesterday's total active cases is from today's total active cases.
            Eventually 0 cases implies more recoveries has been seen.
          </h6> 
        </div>
      </div>
    </div>
  );
}

export default StatsInIndia;
