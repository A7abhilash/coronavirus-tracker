import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = `https://covid19.mathdro.id/api`;
const BASE_URL2 = `https://disease.sh/v3/covid-19`;

//Corona Stats Global
export function FetchCoronaData(country) {
  const [state, setState] = useState({ data: [], loading: true, error: false });
  // const [url, setUrl] = useState(BASE_URL);
  let url = BASE_URL2;

  if (country) {
    if (country === "Global") {
      url = `${BASE_URL2}/all`;
    } else {
      url = `${BASE_URL2}/countries/${country}`;
    }
  }

  useEffect(() => {
    setState({
      ...state,
      data: [],
      loading: true,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        //   console.log(response.data);
        setState({
          ...state,
          data: response.data,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          error: true,
          loading: false,
          data: [],
        });
      });
  }, [country]);
  // console.log(state.data);
  return state;
}

//Corona stats global sorted
export function FetchSortedCountries() {
  const [sortedCountries, setSortedCountries] = useState([]);
  useEffect(() => {
    setSortedCountries([]);
    axios
      .get(`${BASE_URL2}/countries?sort=cases`)
      .then((response) => {
        // console.log(response.data);
        setSortedCountries(response.data);
      })
      .catch((error) => {
        setSortedCountries([]);
      });
  }, []);
  // console.log(sortedCountries);
  return sortedCountries;
}

//get all country name
export function FetchCountries() {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/countries`)
      .then((response) => {
        // console.log(response.data.countries);
        setFetchedCountries(response.data.countries);
      })
      .catch((error) => {
        console.error("Error");
      });
  }, []);
  return fetchedCountries;
}

//get stats of India
export function FetchStatusOfIndia() {
  const [state, setState] = useState({ data1: [] });
  useEffect(() => {
    setState({
      ...state,
      data1: [],
    });
    axios
      .get(`${BASE_URL2}/gov/india`)
      .then((response) => {
        // console.log(response.data);
        setState({
          ...state,
          data1: response.data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          data1: [],
        });
      });
  }, []);
  // console.log(state.data1.states);
  return state;
}
