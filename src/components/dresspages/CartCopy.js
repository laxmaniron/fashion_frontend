import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTimeout from "react-timeout";

import { GoogleLogin } from "react-google-login";
// import { Link, Redirect, withRouter } from "react-router-dom";

import { Link, Redirect, withRouter } from "react-router-dom";

const responseGoogle = (response) => {
  console.log(response);
};

class CartCopy extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="1098636343889-g5mru3mj6unhmd47iu56sktc5jv3l81i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default ReactTimeout(connect()(CartCopy));
