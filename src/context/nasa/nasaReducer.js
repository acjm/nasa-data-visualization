import { GET_NEOS, GET_NEOS_FILTRED, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_NEOS:
      return {
        ...state,
        neos: action.payload,
        loading: false,
      };
    case GET_NEOS_FILTRED:
      return {
        ...state,
        neos: {
          ...state.neos,
          near_earth_objects: action.payload,
        },
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
