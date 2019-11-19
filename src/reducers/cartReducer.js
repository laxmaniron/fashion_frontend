import { GET_CART, ADD_CART, DELETE_FROM_CART } from "../actions/types";

const initialState = {
  carts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        carts: action.payload,
        loading: false
      };
    case ADD_CART:
      return {
        ...state,
        carts: []
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter(cart => cart.cartid !== action.payload)
      };

    default:
      return state;
  }
}
