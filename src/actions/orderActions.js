import axios from "axios";
import { returnErrors } from "./errorActions";
import { createMessage } from "./messages";

import { GET_ORDER, ADD_ORDER } from "./types";

export const getOrderItems = id => dispatch => {
  axios
    .get(`/api/orders/showorders/?userid=${id}`)
    .then(res => {
      dispatch({
        type: GET_ORDER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addtoOrder = body => dispatch => {
  axios
    .post("/api/orders/addtoorders/", {
      user: body.user,
      cost: body.cost,
      address: body.address
    })
    .then(res => {
      dispatch(createMessage({ addedtoOrder: "Ordered Successfully" }));

      dispatch({
        type: ADD_ORDER,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};
