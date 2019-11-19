// import uuid from "uuid";
import { GET_DRESSES, ADD_DRESS, DRESSES_LOADING } from "../actions/types";

const initialState = {
  dresses: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DRESSES:
      return {
        ...state,
        dresses: action.payload,
        loading: false
      };
    case ADD_DRESS:
      return {
        ...state,
        dresses: [action.payload, ...state.dresses]
      };
    case DRESSES_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
