import React, { Fragment } from "react";
import "./../App.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Navbar extends React.Component {
  state = {
    gender: "Men",
    redirect: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
    // logout: PropTypes.func.isRequired
  };

  render() {
    const {
      apparelChange,
      searchword,
      searchfilter,
      searchsubmit
    } = this.props;

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
          <Link to="/home/Men">
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
        </Fragment>
      );
    } else if (route == "local") {
      links = (
        <Fragment>
          <div onClick={() => apparelChange("Men")}>
            {" "}
            <img
              src={require("./img/logo.png")}
              alt="smw logo"
              className="logo"
            />
          </div>
          <nav className="category_nav">
            <ul>
              <div
                onClick={() => apparelChange("Men")}
                className="link genderlink"
              >
                <li>Men</li>
              </div>
              <div
                onClick={() => apparelChange("Women")}
                className="link genderlink"
              >
                <li>Women</li>
              </div>
              <div
                onClick={() => apparelChange("Kids")}
                className="link genderlink"
              >
                <li>Kids</li>
              </div>
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
    return (
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

              {/* <span className="user-nav__notification">7</span> */}
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
              {/* <span className="user-nav__notification">13</span> */}
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
                style={{ marginLeft: "-2rem" }}
                className="user-nav__user-name"
                style={{ color: "var(--color-primary)" }}
              >
                {this.props.auth.user ? this.props.auth.user.username : null}
              </span>
            </div>
          </Link>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Navbar);
