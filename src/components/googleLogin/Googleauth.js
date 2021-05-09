import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTimeout from "react-timeout";
// import { Link, Redirect, withRouter } from "react-router-dom";

import { Link, Redirect, withRouter } from "react-router-dom";

class Googleauthenticaton extends Component {
  render() {
    return <div className="Cart">hi</div>;
  }
}

export default ReactTimeout(connect()(Googleauthenticaton));
