import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  GET_WISHLIST,
  ADD_WISHLIST,
  DELETE_FROM_WISHLIST,
  MOVE_TO_CART,
  INC_CART_COUNT
} from "./types";
import { createMessage } from "./messages";

export const getWishlistItems = id => dispatch => {
  axios
    .get(`/api/wishlist/showwishlist/?userid=${id}`)
    .then(res => {
      dispatch({
        type: GET_WISHLIST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addtoWishlist = (dress, userid) => dispatch => {
  axios
    .post("/api/wishlist/addtowishlist", { dressId: dress._id, userId: userid })
    .then(res => {
      console.log("hi wishlist");
      console.log(res.data);

      if (res.data == "Item already in Wishlist") {
        dispatch(
          createMessage({ alreadyaddedtoWishlist: "Item already in wishlist" })
        );
      } else {
        dispatch(
          createMessage({ addedtoWishlist: "Added to Wishlist Successfully" })
        );

        dispatch({
          type: ADD_WISHLIST,
          payload: res.data
        });
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};

export const deleteWishlistItems = id => dispatch => {
  axios
    .post("/api/wishlist/deletefromwishlist", {
      wishlistid: id
    })
    .then(res => {
      dispatch(
        createMessage({
          deletedfromWishlist: "Removed from Wishlist Successfully"
        })
      );
      dispatch({
        type: DELETE_FROM_WISHLIST,
        payload: id
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};

export const movetoCart = id => dispatch => {
  axios
    .post("/api/wishlist/movetocart", {
      wishlistid: id
    })
    .then(res => {
      if (res.data == "Item already in Cart") {
        dispatch(createMessage({ alreadyInCart: "Item already in Cart" }));
      } else {
        dispatch(
          createMessage({
            MovedtoCart: "Moved to cart successfully"
          })
        );
        dispatch({
          type: DELETE_FROM_WISHLIST,
          payload: id
        });
        dispatch({
          type: INC_CART_COUNT,
          payload: id
        });
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};

export const cartCount = id => dispatch => {
  dispatch({
    type: INC_CART_COUNT,
    payload: id
  });
};

// if (res.data == "Item already in Wishlist") {
//   dispatch(
//     createMessage({ alreadyaddedtoWishlist: "Item already in wishlist" })
//   );
// } else {
//   dispatch(
//     createMessage({ addedtoWishlist: "Added to Wishlist Successfully" })
//   );

//   dispatch({
//     type: ADD_WISHLIST,
//     payload: res.data
//   });
// }
