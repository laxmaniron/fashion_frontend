import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import { createMessage } from "../actions/messages";
import { connect } from "react-redux";
import $ from "jquery";

class Card extends React.Component {
  render() {
    const { dress, cartadd, user, wishlistadd } = this.props;
    return (
      <div className="Card">
        <div className="Card__image">
          <Link to={`/DressMainPage/${dress._id}`}>
            <img src={dress.cover_photo} />
          </Link>
        </div>
        <div className="Card__matter">
          <div className="Card__title">
            <h2>
              {dress.brand.split(" ")[0]} {dress.brand.split(" ")[1]}{" "}
              {dress.brand.split(" ")[2]}
            </h2>
          </div>
          <div className="Card__description">
            <p>
              {dress.name.split("-")[dress.name.split("-").length - 2]}-
              {dress.name.split("-")[dress.name.split("-").length - 1]}
            </p>
          </div>
          <div className="Card__buttons">
            <div
              onClick={() =>
                user.user
                  ? cartadd(dress, user.user._id)
                  : this.props.createMessage({
                      LoginRequired: "Login Required"
                    })
              }
              className="btn btn--pink"
            >
              {/* else {
      this.props.createMessage({
        LoginRequired: "Login Required"
      });
    } */}
              Add to Cart
            </div>
            <button
              className="btn btn--grey"
              onClick={() =>
                user.user
                  ? wishlistadd(dress, user.user._id)
                  : this.props.createMessage({
                      LoginRequired: "Login Required"
                    })
              }
            >
              WishList
            </button>
          </div>
          <div className="Card__sizes">
            Sizes:&nbsp;S,&nbsp;M,&nbsp;L,&nbsp;XL
          </div>
          <div className="Card__price">
            <b>
              Rs.&nbsp;{Math.floor(parseFloat(dress.price.substring(1)) * 50)}
            </b>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carts: state.cart.carts,
  auth: state.auth
});

export default connect(mapStateToProps, { createMessage })(Card);
