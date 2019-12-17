import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SHOW_PROFILE,
  EDIT_USERPROFILE,
  ADD_ADDRESS
} from "./types";

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/userinfo/current", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({
  username,
  password,
  email,
  firstname,
  lastname,
  phoneno,
  Address,
  pincode,
  gender,
  role,
  profilepic,
  profilepicparse
}) => dispatch => {
  //headers

  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  let body = new FormData();
  body.append("profilepicparse", profilepicparse);

  body.set("username", username);
  body.set("password", password);
  body.set("email", email);
  body.set("firstname", firstname);
  body.set("lastname", lastname);
  body.set("phoneno", phoneno);
  body.set("Address", Address);
  body.set("pincode", pincode);
  body.set("gender", gender);
  body.set("role", role);
  body.set("profilepic", profilepic);

  // Request Body

  // const data = {
  //   username,
  //   password,
  //   email,
  //   firstname,
  //   lastname,
  //   phoneno,
  //   Address,
  //   pincode,
  //   gender,
  //   role,
  //   profilepic
  //   // profilepicparse
  // };

  // body.append("data", data);

  console.log(body);

  axios
    .post("/api/userinfo/register", body, config)
    .then(res => {
      let data = res;
      data.token = res.headers["x-auth-token"];

      console.log(data);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const login = (username, password) => dispatch => {
  //headers

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const getProfile = () => (dispatch, getState) => {
  axios
    .get("/api/userinfo/current", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: SHOW_PROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const UpdateUserProfile = updatedprofile => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  config.headers["x-auth-token"] = getState().auth.token;

  let body = new FormData();
  body.append("profilepicparse", updatedprofile.profilepicparse);

  body.set("email", updatedprofile.email);
  body.set("firstname", updatedprofile.firstname);
  body.set("lastname", updatedprofile.lastname);
  body.set("phoneno", updatedprofile.phoneno);
  body.set("Address", updatedprofile.Address);
  body.set("pincode", updatedprofile.pincode);
  body.set("profilepic", updatedprofile.profilepic);

  console.log(body);

  axios
    .put("/api/userinfo/editprofile", body, config)
    .then(res => {
      dispatch({
        type: EDIT_USERPROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(
        returnErrors(err.response.data, err.response.status, "UPDATE_FAIL")
      )
    );
};

export const addAddress = addressAdd => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  config.headers["x-auth-token"] = getState().auth.token;

  // let body = new FormData();

  // body.set("user", addressAdd.user);
  // body.set("address", addressAdd.address);
  // body.set("pincode", addressAdd.pincode);

  // console.log(body);

  // addAddress

  const body = JSON.stringify({
    user: addressAdd.user,
    address: addressAdd.address,
    pincode: addressAdd.pincode
  });

  axios
    .put("/api/userinfo/addAddress", body, config)
    .then(res => {
      dispatch({
        type: ADD_ADDRESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status, "ADD_FAIL"))
    );
};

//Setup config/headers and token
export const tokenConfig = getState => {
  //Get token from localstorage
  const token = getState().auth.token;
  const user = getState().auth.user;

  //Headers

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //If token , add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
