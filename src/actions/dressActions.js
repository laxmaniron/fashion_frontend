import axios from "axios";
import { GET_DRESSES, ADD_DRESS, DRESSES_LOADING } from "./types";

export const getDresses = (
  page,
  limit,
  gender,
  brand,
  category,
  color,
  maindisc,
  searchquery
) => dispatch => {
  dispatch(setDressesLoading());

  let body = {
    page: page,
    limit: limit,
    gender: gender,
    brand: brand,
    category: category,
    color: color,
    maindisc: maindisc,
    search: searchquery
  };
  axios.post("/api/dresses/getdress", body).then(res => {
    dispatch({
      type: GET_DRESSES,
      payload: res.data
    });
    // console.log(res.data);
  });
};

export const addDress = dress => dispatch => {
  axios
    .post("/api/dresses", dress)
    .then(res =>
      dispatch({
        type: ADD_DRESS,
        payload: res.data
      })
    )
    .catch(error => {
      console.log(error.response);
    });
};

export const setDressesLoading = () => {
  return {
    type: DRESSES_LOADING
  };
};
