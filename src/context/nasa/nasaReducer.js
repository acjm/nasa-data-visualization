import { GET_NEOS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_NEOS:
      return {
        ...state,
        neos: action.payload,
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
