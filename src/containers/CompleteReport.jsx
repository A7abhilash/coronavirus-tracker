import React, { useState } from "react";

import Cards from "./../components/Cards";
import Chart from "./../components/Chart";
import SearchBar from "./../components/SearchBar";
import {
  FetchCoronaData,
  FetchSortedCountries,
} from "./../components/FetchCoronaApi";
import Top10CountryCases from "../components/Top10CountryCases";

function CompleteReport() {
  const [country, setCountry] = useState("Global");
  const { data, loading, error } = FetchCoronaData(country);
  const sortedCountries = FetchSortedCountries();
  // console.log(sortedCountries);
  // console.log(data.confirmed);

  const handleCountryChange = (country) => {
    // console.log(country);
    setCountry(country);
  };

  return (
    <section className="pb-5">
      <div id="status">
        <header>
          <div className="container pb-5 py-md-5 mb-md-5">
            <div className="row justify-content-center py-2">
              <div className="col-md-4 order-md-last my-2 text-center">
                <SearchBar handleCountryChange={handleCountryChange} />
              </div>
              <div className="col-md-7 order-md-first my-2">
                <h2>Corona Live Status</h2>
                {country === "Global" ? (
                  <div>
                    <h5>All over the Globe</h5>
                  </div>
                ) : (
                  <div>
                    <h5>In {country}</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
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

      <Chart data={data} country={country} />
      {sortedCountries.length ? (
        <Top10CountryCases sortedCountries={sortedCountries} />
      ) : (
        ""
      )}
    </section>
  );
}

export default CompleteReport;
