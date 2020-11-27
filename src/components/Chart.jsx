import React from "react";
import { Bar } from "react-chartjs-2";

function Chart({ data, country }) {
  if (!data.cases)
    /* Offcourse is one is undefined rest all parameters are undefined */
    return "";

  const confirmed = data.cases;
  const recovered = data.recovered;
  const deaths = data.deaths;
  // console.log(data);
  // console.log(confirmed);
  //to check if something is stored or not
  const barChart = country ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#6c757d", "#28a745", "#dc3545"],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current stats in ${country}` },
      }}
    />
  ) : (
    ""
  );
  return (
    <div className="container bg-light p-3">{country ? barChart : ""}</div>
  );
}

export default Chart;
