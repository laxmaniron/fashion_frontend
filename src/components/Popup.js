import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

class Popup extends React.Component {
  state = {
    display: "none",
    "z-index": -1000,
    visible: 0
  };

  render() {
    const { Display, Zindex, toClose, brands } = this.props;

    return (
      <div className="popup" style={{ display: Display, zIndex: Zindex }}>
        <div className="popup__content">
          <div className="popup__content__header">
            <h1>Available Brands </h1>
            <button
              className=" btn--pink popup__close"
              onClick={() => toClose()}
            >
              &times;
            </button>
          </div>
          <div className="popup__content__main"></div>
        </div>
      </div>
    );
  }
}
export default Popup;
