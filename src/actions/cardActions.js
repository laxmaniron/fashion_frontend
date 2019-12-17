import axios from "axios";
import { returnErrors } from "./errorActions";
import { createMessage } from "./messages";

import { GET_CARD, ADD_CARD } from "./types";

export const getCardItems = id => dispatch => {
  axios
    .get(`/api/cards/showcards/?userid=${id}`)
    .then(res => {
      dispatch({
        type: GET_CARD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addtoCard = (cardinfo, user) => dispatch => {
  axios
    .post("/api/cards/addcard", {
      cardNumber: cardinfo.cardNumber,
      name: cardinfo.name,
      expirydate: cardinfo.expirydate,
      cvv: cardinfo.cvv,
      user: user
    })
    .then(res => {
      dispatch(createMessage({ addedtoCard: "Added Card Successfully" }));

      dispatch({
        type: ADD_CARD,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};
