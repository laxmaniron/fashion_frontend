import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getWishlistItems,
  deleteWishlistItems,
  movetoCart,
  cartCount
} from "../../actions/wishlistAcions";

import WishlistCard from "../WishlistCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ReactTimeout from "react-timeout";

import { Link, Redirect, withRouter } from "react-router-dom";
import { getOrderItems, addtoOrder } from "../../actions/orderActions";

class Orders extends React.Component {
  state = {
    reload: false
  };
  setData = () => {
    // console.log(this.props.auth.user._id);
    if (this.props.auth.user) {
      this.props.getOrderItems(this.props.auth.user._id);
    }

    this.setState({ reload: true });
  };
  componentDidMount() {
    this.props.setTimeout(this.setData, 300);
  }

  onDeleteClick = id => {
    this.props.deleteWishlistItems(id);
  };

  move = id => {
    this.props.movetoCart(id);
    // this.props.cartCount(id);
  };
  render() {
    const orderItems = this.props.orders;
    if (!this.props.auth.isAuthenticated && this.state.reload) {
      return <Redirect to="/home/Men" />;
    }
    return (
      <div className="WishList">
        <Navbar />
        <div className="WishList__page">
          <div className="WishList__page__content">
            {orderItems
              ? orderItems.map(dress =>
                  dress._id ? (
                    <div
                      key={dress._id}
                      style={{
                        border: "1px solid var(--color-primary)",
                        padding: "10px",
                        fontSize: "2rem"
                      }}
                    >
                      Ordered &nbsp; on &nbsp; {dress.ordered_date}
                      <br />
                      Expected &nbsp; Delivery &nbsp; on &nbsp;
                      {dress.expected_delivery}
                    </div>
                  ) : null
                )
              : null}
          </div>

          <div className="WishList__page__empty">
            <Link to="/start">
              <button className="btn btn--pink btn--large">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wishlists: state.wishlist.wishlists,
  auth: state.auth,
  orders: state.order.orders
});

export default ReactTimeout(
  connect(mapStateToProps, {
    getWishlistItems,
    deleteWishlistItems,
    movetoCart,
    cartCount,
    getOrderItems
  })(Orders)
);
