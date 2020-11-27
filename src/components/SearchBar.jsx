import React from "react";
import { FetchCountries } from "./FetchCoronaApi";
// , { useState, useEffect }
function SearchBar({ handleCountryChange }) {
  const fetchedCountries = FetchCountries();

  return (
    <form>
      <select
        onChange={(event) => handleCountryChange(event.target.value)}
        className="form-control"
        id="search"
      >
        <option value="Global">Global</option>
        {fetchedCountries.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default SearchBar;
