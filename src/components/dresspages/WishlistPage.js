import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getWishlistItems,
  deleteWishlistItems,
  movetoCart
} from "../../actions/wishlistAcions";
import WishlistCard from "../WishlistCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ReactTimeout from "react-timeout";

class WishListPage extends React.Component {
  setData = () => {
    console.log(this.props.auth.user._id);
    this.props.getWishlistItems(this.props.auth.user._id);
  };
  componentDidMount() {
    this.props.setTimeout(this.setData, 300);
  }

  onDeleteClick = id => {
    this.props.deleteWishlistItems(id);
  };

  move = id => {
    this.props.movetoCart(id);
  };
  render() {
    const wishlistItems = this.props.wishlists;
    return (
      <div className="WishList">
        <Navbar />
        <div className="WishList__page">
          <div className="WishList__page__content">
            {wishlistItems
              ? wishlistItems.map(dress => (
                  <div key={dress.wishlistid}>
                    <WishlistCard
                      dress={dress.dress}
                      wishlist={dress}
                      user={this.props.auth}
                      deleteitem={this.onDeleteClick}
                      moveitem={this.move}
                    />
                  </div>
                ))
              : null}
          </div>
          <div className="WishList__page__empty">
            <div>
              <h1>Your Wish list is empty</h1>
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

const mapStateToProps = state => ({
  wishlists: state.wishlist.wishlists,
  auth: state.auth
});

export default ReactTimeout(
  connect(mapStateToProps, {
    getWishlistItems,
    deleteWishlistItems,
    movetoCart
  })(WishListPage)
);
