import axios from "axios";
import { returnErrors } from "./errorActions";
import { createMessage } from "./messages";

import { GET_CART, ADD_CART, DELETE_FROM_CART } from "./types";

export const getCartItems = id => dispatch => {
  axios
    .get(`/api/cart/showcart/?userid=${id}`)
    .then(res => {
      dispatch({
        type: GET_CART,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addtoCart = (dress, userid) => dispatch => {
  axios
    .post("/api/cart/addtocart", { dressId: dress._id, userId: userid })
    .then(res => {
      dispatch(createMessage({ addedtoCart: "Added to Cart Successfully" }));
      dispatch({
        type: ADD_CART,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};

export const deleteCartItems = id => dispatch => {
  axios
    .post("/api/cart/deletefromcart", {
      cartid: id
    })
    .then(res => {
      dispatch(
        createMessage({
          deletedfromCart: "Removed from Cart Successfully"
        })
      );
      dispatch({
        type: DELETE_FROM_CART,
        payload: id
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};
