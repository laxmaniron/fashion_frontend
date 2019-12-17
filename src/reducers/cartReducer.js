import {
  GET_CART,
  ADD_CART,
  DELETE_FROM_CART,
  INC_CART_COUNT
} from "../actions/types";

const initialState = {
  carts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      console.log(action.payload);
      return {
        ...state,
        carts: action.payload,
        loading: false
      };
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload]
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter(cart => cart.cartid !== action.payload)
      };

    case INC_CART_COUNT:
      return {
        ...state,
        carts: [...state.carts, action.payload]
      };

    default:
      return state;
  }
}
