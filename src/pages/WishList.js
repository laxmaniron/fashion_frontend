import React from "react";

import "./../App.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
class WishList extends React.Component {
  render() {
    return (
      <div className="WishList">
        <Navbar />
        <div className="page">
          <h1>Wishlist</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WishList;
