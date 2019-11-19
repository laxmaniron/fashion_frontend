import axios from "axios";
import { GET_DRESS_MAININFO, DRESS_MAIN_LOADING } from "./types";

export const getDressMaininfo = id => dispatch => {
  dispatch(setDresseMainLoading());
  axios.get(`/api/dresses/test?dressid=${id}`).then(res => {
    dispatch({
      type: GET_DRESS_MAININFO,
      payload: res.data
    });
    // console.log(res.data);
  });
};

export const setDresseMainLoading = () => {
  return {
    type: DRESS_MAIN_LOADING
  };
};
