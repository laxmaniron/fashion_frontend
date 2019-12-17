import { GET_CARD, ADD_CARD } from "../actions/types";

const initialState = {
  cards: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD:
      console.log(action.payload);
      return {
        ...state,
        cards: action.payload,
        loading: false
      };
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };

    default:
      return state;
  }
}
