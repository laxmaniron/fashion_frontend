import { GET_DRESS_MAININFO, DRESS_MAIN_LOADING } from "../actions/types";

const initialState = {
  dress: {},
  dresscurrentcolor: {},
  dressallcolor: [],
  colormodel: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DRESS_MAININFO:
      return {
        ...state,
        dress: action.payload.dress,
        dresscurrentcolor: action.payload.color,
        dressallcolor: action.payload.allcolorinfo,
        colormodel: action.payload.colorModel,
        loading: false
      };

    case DRESS_MAIN_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
