import {
  GET_WISHLIST,
  ADD_WISHLIST,
  DELETE_FROM_WISHLIST
} from "../actions/types";

import cartReducer from "./cartReducer";

const initialState = {
  wishlists: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WISHLIST:
      console.log(action.payload);
      return {
        ...state,
        wishlists: action.payload,
        loading: false
      };
    case ADD_WISHLIST:
      // console.log(action.payload);
      return {
        ...state,
        wishlists: [...state.wishlists, action.payload]
      };

    case DELETE_FROM_WISHLIST:
      return {
        ...state,
        wishlists: state.wishlists.filter(
          wishlist => wishlist.wishlistid !== action.payload
        )
      };

    default:
      return state;
  }
}
