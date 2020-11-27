import React from "react";

function Top10CountryCases({ sortedCountries }) {
  // console.log(sortedCountries);

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-12 p-2 bg-light table-responsive">
          <h3 className="text-center my-2">
            Top 10 worst affected countries by COVID-19
          </h3>
          <table className="table table-sm table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Sl No.</th>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              {sortedCountries.map((country, index) => {
                if (index < 10) {
                  return (
                    <tr key={index + 1}>
                      <th>{index + 1}</th>
                      <th>{country.country}</th>
                      <th className="text-danger">{country.cases}</th>
                      <th className="text-danger">{country.active}</th>
                      <th className="text-success">{country.recovered}</th>
                      <th className="text-secondary">{country.deaths}</th>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Top10CountryCases;
