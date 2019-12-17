import React, { Fragment } from "react";
import "./../App.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import { getCartItems } from "../actions/cartActions";
import { getWishlistItems } from "../actions/wishlistAcions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactTimeout from "react-timeout";
import Logout from "./auth/Logout";

class Navbar extends React.Component {
  state = {
    gender: "Men",
    redirect: false,
    wishlistcount: 0,
    cartcount: 0
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    getCartItems: PropTypes.func.isRequired,
    getWishlistItems: PropTypes.func.isRequired
    // logout: PropTypes.func.isRequired
  };

  setCart = () => {
    this.props.getCartItems(this.props.auth.user._id);
  };

  setData = () => {
    // console.log(this.props.auth.user._id);
    if (this.props.auth.user) {
      this.props.getWishlistItems(this.props.auth.user._id);
      this.props.setTimeout(this.setCart, 300);
    }

    // this.props.getCartItems(this.props.auth.user._id);
  };
  componentDidMount() {
    this.props.setTimeout(this.setData, 200);
  }

  render() {
    const {
      apparelChange,
      searchword,
      searchfilter,
      searchsubmit
    } = this.props;

    const { wishlistcount, cartcount } = this.state;

    console.log(window.location.href);

    let route;

    if (
      window.location.href == "http://localhost:3000/home/Women" ||
      window.location.href == "http://localhost:3000/home/Men" ||
      window.location.href == "http://localhost:3000/home/Kids"
    ) {
      route = "local";
      console.log(route);
    } else {
      route = "other";
      console.log(route);
    }

    let links;

    if (route == "other") {
      links = (
        <Fragment>
          <Link to="/start">
            {" "}
            <img
              src={require("./img/logo.png")}
              alt="smw logo"
              className="logo"
            />
          </Link>
          <nav className="category_nav">
            <ul>
              <Link to="/home/Men" className="link genderlink">
                <li>Men</li>
              </Link>
              <Link to="/home/Women" className="link genderlink">
                <li>Women</li>
              </Link>
              <Link to="/home/Kids" className="link genderlink">
                <li>Kids</li>
              </Link>
            </ul>
          </nav>
          <div className="search">
            <h1
              style={{
                // fontSize: "2.0rem",
                color: "var(--color-primary)",
                letterSpacing: "1.5px"
              }}
            >
              {" "}
              Style My Way{" "}
            </h1>
          </div>
        </Fragment>
      );
    } else if (route == "local") {
      links = (
        <Fragment>
          <Link to="/start">
            {" "}
            <img
              src={require("./img/logo.png")}
              alt="smw logo"
              className="logo"
            />
          </Link>
          <nav className="category_nav">
            <ul>
              <Link to="/home/Men" className="link genderlink">
                <li>Men</li>
              </Link>
              <Link to="/home/Women" className="link genderlink">
                <li>Women</li>
              </Link>
              <Link to="/home/Kids" className="link genderlink">
                <li>Kids</li>
              </Link>
            </ul>
          </nav>
          <div className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search "
              name="searchquery"
              value={searchword}
              onChange={e => searchfilter(e)}
            />
            <div onClick={() => searchsubmit()}>
              <div className="search__button genderlink">
                <img
                  className="user-nav__icon_1"
                  alt="search"
                  src={require("./img/SVG/search.svg")}
                />
              </div>
            </div>
          </div>
        </Fragment>
      );
    }

    const { isAuthenticated, user } = this.props.auth;

    // if (this.props.isAuthenticated) {
    //   if (
    //     window.location.href == "http://localhost:3000/home/Women" ||
    //     window.location.href == "http://localhost:3000/home/Men" ||
    //     window.location.href == "http://localhost:3000/home/Kids"
    //   ) {
    //     console.log("ok");
    //   } else {
    //     return <Redirect to="/home/Men" />;
    //   }
    // }

    const authLinks = (
      <header className="header">
        {links}

        <nav className="user-nav">
          {/*icon boxxes*/}
          <Link to="/wishlist">
            <div className="user-nav__icon-box">
              <img
                className="user-nav__icon"
                alt="wishlist"
                src={require("./img/SVG/heart.svg")}
              />

              <span
                className="user-nav__notification"
                style={{ color: "black" }}
              >
                {this.props.wishlist.length}
              </span>
            </div>
          </Link>
          {/*icon box-2*/}
          <Link to="/cart">
            <div className="user-nav__icon-box">
              <img
                className="user-nav__icon"
                alt="cart"
                src={require("./img/SVG/cart.svg")}
              />
              <span
                className="user-nav__notification"
                style={{ color: "black" }}
              >
                {this.props.cart.length}
              </span>
            </div>
          </Link>
          {/*last element of header*/}

          <Link className="link" to="/ShowProfile/">
            <div className="user-nav__user">
              {/* <img
                src={require("./img/user.jpg")}
                alt="profile"
                className="user-nav__user-photo"
              /> */}
              <span
                style={{
                  fontSize: "2.0rem",
                  color: "var(--color-primary)"
                }}
                // className="user-nav__user-name"
                // style={{}}
              >
                {this.props.auth.user ? this.props.auth.user.username : null}
              </span>
            </div>
          </Link>

          {/*last element of header*/}
          <Link
            style={{
              fontWeight: "400",
              fontSize: "1.8rem"
            }}
            className="link"
            to="#"
          >
            <Logout />
          </Link>
        </nav>
      </header>
    );

    const guestLinks = (
      <header className="header">
        {links}

        <nav className="user-nav">
          {/*icon boxxes*/}
          <Link to="/login" className="link">
            <div
              className="user-nav__icon-box"
              style={{
                fontSize: "2.0rem",
                color: "var(--color-primary)"
              }}
            >
              <span
                style={{
                  fontSize: "2.0rem",
                  color: "var(--color-primary)"
                }}
                // className="user-nav__user-name"
                // style={{}}
              >
                Login
              </span>
            </div>
          </Link>
          {/*icon box-2*/}
          <Link to="/register" className="link">
            <div className="user-nav__user">
              <div
                className="user-nav__icon-box"
                style={{
                  fontSize: "2.0rem",
                  color: "var(--color-primary)"
                }}
              >
                Register
              </div>
            </div>
          </Link>
        </nav>
      </header>
    );

    return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  wishlist: state.wishlist.wishlists,
  cart: state.cart.carts
});

export default ReactTimeout(
  connect(mapStateToProps, {
    getCartItems,
    getWishlistItems
  })(Navbar)
);
