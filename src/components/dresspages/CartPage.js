import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCartItems, deleteCartItems } from "../../actions/cartActions";
import CartCard from "../CartCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ReactTimeout from "react-timeout";

class CartPage extends Component {
  setData = () => {
    console.log(this.props.auth.user._id);
    this.props.getCartItems(this.props.auth.user._id);
  };
  componentDidMount() {
    this.props.setTimeout(this.setData, 300);
  }

  onDeleteClick = id => {
    this.props.deleteCartItems(id);
  };
  render() {
    const cartItems = this.props.carts;
    let total = 0;

    if (cartItems.length > 0) {
      for (var i = 0; i < cartItems.length; i++) {
        total += Math.floor(
          parseFloat(cartItems[i].dress.price.substring(1)) * 50
        );
      }
    }
    return (
      <div className="Cart">
        <Navbar />
        <div className="Cart__page">
          <div className="Cart__page__content">
            <div className="Cart__page__content__left">
              {cartItems
                ? cartItems.map(dress => (
                    <div key={dress.cartid}>
                      <CartCard
                        dress={dress.dress}
                        cart={dress}
                        user={this.props.auth}
                        deleteitem={this.onDeleteClick}
                      />
                    </div>
                  ))
                : null}
            </div>
            <div className="Cart__page__content__right">
              <div className="Cart__page__content__right__header">
                <h1> Price details</h1>
              </div>
              <div className="Cart__page__content__right__items">
                <div>Cart Total</div>
                <div> &#8377; &nbsp; {total}</div>
              </div>
              <div className="Cart__page__content__right__items">
                <div>Discount</div>
                <div> &#8377; &nbsp; {Math.floor(total / 10)}</div>
              </div>
              <div className="Cart__page__content__right__items">
                <div>Delivery</div>
                <div>
                  {" "}
                  <del className="red">&#8377; &nbsp; 125 </del> &nbsp;{" "}
                  <span className="green">FREE</span>
                </div>
              </div>

              <div className="Cart__page__content__right__items">
                <div>Final Price</div>
                <div className="green">
                  {" "}
                  &#8377; &nbsp;{total - Math.floor(total / 10)}{" "}
                </div>
              </div>
              <div className="Cart__page__content__right__items">
                <button className="btn btn--large btn--pink">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
          <div className="Cart__page__empty">
            <div>
              <h1>Your Cart is empty</h1>
            </div>
            <button className="btn btn--pink btn--large">
              Continue Shopping
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

CartPage.propTypes = {
  getCartItems: PropTypes.func.isRequired,
  carts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  carts: state.cart.carts,
  auth: state.auth
});

export default ReactTimeout(
  connect(mapStateToProps, { getCartItems, deleteCartItems })(CartPage)
);
