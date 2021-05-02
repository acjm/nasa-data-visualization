import React, { useReducer } from "react";
import axios from "axios";

import NasaContext from "./nasaContext";
import NasaReducer from "./nasaReducer";
import { GET_NEOS, GET_NEOS_FILTRED, SET_LOADING } from "../types";

// utils
import { getNeosWithOrbitalBody } from "../../utils/getFilteredNeos";

//TODO: Move this to env folder
const BASE_URL =
  "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=74TIeAxc349so3qfXwghNScWlszA6SuwmHd1yfHn";

const NasaState = (props) => {
  // state
  const initialState = {
    neos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(NasaReducer, initialState);

  /**
   *  Returns the data after fetching Nasa API
   * @params {}
   * @return {} array of objects
   */
  const getNeos = async () => {
    setLoading();

    const res = await axios.get(`${BASE_URL}`);

    dispatch({
      type: GET_NEOS,
      payload: res.data,
    });
  };

  /**
   * Get neos filtred by orbit body
   * @params (String)
   * @return {*}
   */
  const getNeoFiltred = async (orbitalBody) => {
    setLoading();

    // Update the state
    // Instead of calling the API everytime teh action is dispatched
    // we can setup a caching system
    // We can use Redis, or Appollo client for that
    const res = await axios.get(`${BASE_URL}`);

    dispatch({
      type: GET_NEOS,
      payload: res.data,
    });
    //Update the state
    // Instead of calling the API everytime teh action is dispatched
    // we can setup a caching system
    // We can use Redis, or Appollo client for that

    const data = await getNeosWithOrbitalBody(
      orbitalBody,
      res.data.near_earth_objects
    );
    //console.log(data);
    data !== undefined &&
      dispatch({
        type: GET_NEOS_FILTRED,
        payload: data,
      });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <NasaContext.Provider
      value={{
        neos: state.neos,
        loading: state.loading,
        getNeos,
        getNeoFiltred,
        setLoading,
      }}
    >
      {props.children}
    </NasaContext.Provider>
  );
};

export default NasaState;
