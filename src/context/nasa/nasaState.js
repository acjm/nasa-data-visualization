import React, { useReducer } from "react";
import axios from "axios";

import NasaContext from "./nasaContext";
import NasaReducer from "./nasaReducer";
import { GET_NEOS, SET_LOADING } from "../types";

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

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <NasaContext.Provider
      value={{
        neos: state.neos,
        loading: state.loading,
        getNeos,
        setLoading,
      }}
    >
      {props.children}
    </NasaContext.Provider>
  );
};

export default NasaState;
