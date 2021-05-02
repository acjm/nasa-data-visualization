import React, { useEffect, useContext } from "react";

import BarChart from "../charts/BarChart";
import NasaContext from "../../context/nasa/nasaContext";

import { getNeosDataFormatted } from "../../utils/getNeosDataFormatted";

const Nasa = () => {
  const nasaContext = useContext(NasaContext);
  const { loading, neos } = nasaContext;
  const { near_earth_objects } = neos;

  // format data
  const newData = getNeosDataFormatted(near_earth_objects);

  useEffect(() => {
    // get neo data
    nasaContext.getNeos();
  }, []);

  return (
    <div className="c-main-container">
      Nasa component
      <BarChart data={newData} />
    </div>
  );
};

export default Nasa;
