import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      alert.error(error.msg);
    }
    if (message !== prevProps.message) {
      if (message.addedtoCart) {
        alert.success(message.addedtoCart);

        // console.log("success");
      }
      if (message.addedtoWishlist) {
        alert.success(message.addedtoWishlist);
      }

      if (message.deletedfromWishlist) {
        alert.success(message.deletedfromWishlist);
      }

      if (message.deletedfromCart) {
        alert.success(message.deletedfromCart);
      }
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.error,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
