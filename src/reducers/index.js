import { combineReducers } from "redux";
import dressReducer from "./dressReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import dressMainpageReducer from "./dressMainpageReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import messages from "./messages";
import cardReducer from "./cardReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  dresses: dressReducer,
  error: errorReducer,
  auth: authReducer,
  dressMainpageReducer: dressMainpageReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  messages: messages,
  card: cardReducer,
  order: orderReducer
});
