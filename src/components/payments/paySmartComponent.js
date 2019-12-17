import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Card from "react-credit-cards";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCartItems, deleteCartItems } from "../../actions/cartActions";
import CartCard from "../CartCard";
import PayCard from "./PayCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ReactTimeout from "react-timeout";
import { Link, Redirect, withRouter } from "react-router-dom";
import { addAddress } from "../../actions/authActions";
import { getCardItems, addtoCard } from "../../actions/cardActions";
import { getOrderItems, addtoOrder } from "../../actions/orderActions";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";

// import "./styles.css";

import "react-credit-cards/es/styles-compiled.css";

class paySmartComponent extends Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
    addressAdd: "",
    pincodeAdd: "",
    reload: false,
    addressforpayment: ""
  };

  setData = () => {
    this.props.getCartItems(this.props.auth.user._id);
    this.props.getCardItems(this.props.auth.user._id);
    this.props.getOrderItems(this.props.auth.user._id);
    this.setState({ reload: true });
  };
  componentDidMount() {
    this.props.setTimeout(this.setData, 300);
  }

  onChangeAddress = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitAddress = () => {
    const newAddress = {
      user: this.props.auth.user,
      address: this.state.addressAdd,
      pincode: this.state.pincodeAdd
    };
    this.props.addAddress(newAddress);
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    const cardinfo = {
      cardNumber: this.state.number,
      name: this.state.name,
      expirydate: this.state.expiry,
      cvv: this.state.cvc
    };

    this.props.addtoCard(cardinfo, this.props.auth.user);

    this.setState({ formData });

    this.form.reset();
  };

  finalPay = total => {
    const finalamount = total - Math.floor(total / 10);

    console.log(finalamount);
    console.log(this.props.auth.user);
    console.log(this.state.addressforpayment);

    const body = {
      user: this.props.auth.user,
      cost: finalamount,
      address: this.state.addressforpayment
    };

    this.props.addtoOrder(body);
  };
  start;
  render() {
    const {
      name,
      number,
      expiry,
      cvc,
      focused,
      issuer,
      formData,
      addressAdd,
      pincodeAdd
    } = this.state;

    const cartItems = this.props.carts;
    let total = 0;

    if (!this.props.auth.isAuthenticated && this.state.reload) {
      return <Redirect to="/home/Men" />;
    }

    if (cartItems.length > 0) {
      for (var i = 0; i < cartItems.length; i++) {
        console.log("hi cart");
        if (cartItems[i].cartid) {
          total += Math.floor(
            parseFloat(cartItems[i].dress.price.substring(1)) * 50
          );
        }
      }
    }

    const { user } = this.props.auth;

    return (
      <div className="Payment">
        <Navbar />
        <div className="Payment__page">
          <div className="Payment__page__content">
            <div className="Payment__page__content__left">
              <div className="Payment__page__content__left__left">
                {user
                  ? user.Address.map((place, index) => (
                      <div key={index} className="form__radio-group2">
                        <input
                          type="radio"
                          onChange={this.onChangeAddress}
                          className="form__radio-input2"
                          id={index}
                          name="addressforpayment"
                          value={`${place}  ${user.pincode[index]}`}
                        />
                        <label htmlFor={index} className="form__radio-label2">
                          <span className="form__radio-button2"></span>
                          {`${place}      ${user.pincode[index]}`}
                        </label>
                      </div>
                    ))
                  : null}

                <div className="form__group2">
                  <input
                    type="text"
                    name="addressAdd"
                    value={addressAdd}
                    onChange={this.onChangeAddress}
                    className="form__input2 fix"
                    placeholder="full address"
                  />
                </div>
                <div className="form__group2">
                  <input
                    type="text"
                    name="pincodeAdd"
                    value={pincodeAdd}
                    onChange={this.onChangeAddress}
                    className="form__input2 fix"
                    placeholder="pincode"
                  />
                </div>
                <div>
                  <button
                    className="btn btn--large btn--pink"
                    onClick={this.onSubmitAddress}
                  >
                    Add Address
                  </button>
                </div>
              </div>
              <div className="Payment__page__content__left__right">
                {this.props.cards
                  ? this.props.cards.map(card => (
                      <div key={card._id} className="form__radio-group2">
                        <input
                          type="radio"
                          // onChange={this.onChangeAddress}
                          className="form__radio-input2"
                          name="cardforpayment"
                          id={card._id}
                          // value={`${place}      ${user.pincode[index]}`}
                        />

                        <label
                          htmlFor={card._id}
                          className="form__radio-label2"
                        >
                          <span className="form__radio-button2"></span>
                          <Card
                            number={card.cardNumber}
                            name={card.name}
                            expiry={card.expirydate}
                            cvc={card.cvv}
                            // focused={focused}
                          />
                        </label>
                      </div>
                    ))
                  : null}

                <div>
                  <Card
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focused}
                    callback={this.handleCallback}
                  />
                </div>
                <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                  <div className="form__group2">
                    <input
                      type="tel"
                      name="number"
                      className="form__input2 fix"
                      placeholder="Card Number"
                      pattern="[\d| ]{16,22}"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                  <div className="form__group2">
                    <input
                      type="text"
                      name="name"
                      className="form__input2 fix"
                      placeholder="Name"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>

                  <div className="form__group2">
                    <input
                      type="tel"
                      name="expiry"
                      className="form__input2 fix"
                      placeholder="Valid Thru"
                      pattern="\d\d/\d\d"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                  <div className="form__group2">
                    <input
                      type="tel"
                      name="cvc"
                      className="form__input2 fix"
                      placeholder="CVC"
                      pattern="\d{3}"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>

                  <input type="hidden" name="issuer" value={issuer} />
                  <div className="form-actions">
                    <button className="btn btn--large btn--pink">
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="Payment__page__content__right">
              <div className="Payment__page__content__right__header">
                <h1> Details</h1>
              </div>
              <div className="Payment__page__content__right__items">
                {cartItems
                  ? cartItems.map(dress =>
                      dress.cartid ? (
                        <div
                          className="Payment__page__content__right__items__images"
                          key={dress.cartid}
                        >
                          <PayCard
                            dress={dress.dress}
                            cart={dress}
                            user={this.props.auth}
                            deleteitem={this.onDeleteClick}
                          />
                        </div>
                      ) : null
                    )
                  : null}
              </div>
              <div className="Payment__page__content__right__items__price">
                <div>
                  <div>Final Price</div>
                  <div className="green">
                    {" "}
                    &#8377; &nbsp;{total - Math.floor(total / 10)}{" "}
                  </div>
                </div>
                <Link to="/orders">
                  <button
                    onClick={this.finalPay.bind(this, total)}
                    className="btn btn--large btn--pink"
                  >
                    Purchase
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* cartItems.map(dress =>
                    dress.cartid ? (
                      <div key={dress.cartid}>
                        <CartCard
                          dress={dress.dress}
                          cart={dress}
                          user={this.props.auth}
                          deleteitem={this.onDeleteClick}
                        />
                      </div>
                    ) : null
                  ) */}

        <Footer />
      </div>
    );
  }
}

paySmartComponent.propTypes = {
  getCartItems: PropTypes.func.isRequired,
  carts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  carts: state.cart.carts,
  auth: state.auth,
  cards: state.card.cards,
  orders: state.order.orders
});

export default ReactTimeout(
  connect(mapStateToProps, {
    getCartItems,
    deleteCartItems,
    addAddress,
    getCardItems,
    addtoCard,
    getOrderItems,
    addtoOrder
  })(paySmartComponent)
);
