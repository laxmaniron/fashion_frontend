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

class WishListPage extends React.Component {
  state = {
    reload: false
  };
  setData = () => {
    // console.log(this.props.auth.user._id);
    if (this.props.auth.user) {
      this.props.getWishlistItems(this.props.auth.user._id);
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
    const wishlistItems = this.props.wishlists;
    if (!this.props.auth.isAuthenticated && this.state.reload) {
      return <Redirect to="/home/Men" />;
    }
    return (
      <div className="WishList">
        <Navbar />
        <div className="WishList__page">
          {wishlistItems.length ? (
            <div className="WishList__page__content">
              {wishlistItems
                ? wishlistItems.map(dress =>
                    dress.wishlistid ? (
                      <div key={dress.wishlistid}>
                        <WishlistCard
                          dress={dress.dress}
                          wishlist={dress}
                          user={this.props.auth}
                          deleteitem={this.onDeleteClick}
                          moveitem={this.move}
                        />
                      </div>
                    ) : null
                  )
                : null}
            </div>
          ) : (
            <div className="WishList__page__empty">
              <div>
                <h1>Your Wish list is empty</h1>
              </div>
              <Link to="/start">
                <button className="btn btn--pink btn--large">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wishlists: state.wishlist.wishlists,
  auth: state.auth
});

export default ReactTimeout(
  connect(mapStateToProps, {
    getWishlistItems,
    deleteWishlistItems,
    movetoCart,
    cartCount
  })(WishListPage)
);
