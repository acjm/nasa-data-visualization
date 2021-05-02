import React, { useEffect, useContext, useState } from "react";

import BarChart from "../charts/BarChart";
import NasaContext from "../../context/nasa/nasaContext";

import { getNeosDataFormatted } from "../../utils/getNeosDataFormatted";

const Nasa = () => {
  // local state
  const [isFiltering, setIsFiltering] = useState(false);

  // context
  const nasaContext = useContext(NasaContext);
  const { loading, neos } = nasaContext;
  const { near_earth_objects } = neos;

  // format data
  const newData = getNeosDataFormatted(near_earth_objects);

  useEffect(() => {
    // get neo data
    nasaContext.getNeos();
  }, []);

  //
  const onChange = (e) => {
    setIsFiltering(true);
    const orbitalBody = e.target.value;
    if (isFiltering) nasaContext.getNeoFiltred(orbitalBody);
  };

  return (
    <div className="c-main-container">
      <h2> Nasa component</h2>
      <div className="options mt-5 justify-center">
        <select onChange={onChange}>
          <option value="Earth">Earth</option>
          <option value="Juptr">Juptr</option>
          <option value="Mars">Mars</option>
          <option value="Merc">Merc</option>
        </select>
      </div>
      <BarChart data={newData} />
    </div>
  );
};

export default Nasa;
