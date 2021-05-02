import React from "react";

import { Chart } from "react-google-charts";

const BarChart = ({ data }) => {
  return (
    <Chart
      width={"980px"}
      height={"980px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: "",
        chartArea: { width: "50%" },
        hAxis: {
          title: "Min estimated diameter  ",
          minValue: 0,
        },
        vAxis: {
          title: "Name of the nearest object",
        },
      }}
      // For tests
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default BarChart;
