import React from 'react';

import './../App.css';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
class Cart extends React.Component {
  render(){

    return (
      <div className="Cart">
        <Navbar />
        <div className="Cart__page">
          <h1>Cart</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart;
