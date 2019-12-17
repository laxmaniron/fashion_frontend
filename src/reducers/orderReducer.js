import { GET_ORDER, ADD_ORDER } from "../actions/types";

const initialState = {
  orders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      console.log(action.payload);
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };

    default:
      return state;
  }
}
