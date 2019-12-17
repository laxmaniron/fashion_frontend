import React from "react";

import "./../App.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";
import $ from "jquery";

class StartPage extends React.Component {
  render() {
    return (
      <div className="Homepage">
        <Navbar />
        <div className="Homepage__page">
          <div className="Homepage__page__banner">
            <Link to="/">
              <img src={require("./../components/img/banner.jpg")} />
            </Link>
          </div>
          <div className="Homepage__page__links">
            <div className="Homepage__page__links__left">
              <div className="Homepage__page__links__item">
                <Link to="/">
                  <img src={require("./../components/img/bb1.jpg")} />
                </Link>
                <h1 className="Homepage__page__links__item__text">
                  Trending Dresses
                </h1>
              </div>
            </div>
            <div className="Homepage__page__links__right">
              <div className="Homepage__page__links__right__item Homepage__page__links__item">
                <Link to="/">
                  <img
                    className="Homepage__page__links__right__item__image"
                    src={require("./../components/img/bb2.jpg")}
                  />
                </Link>
                <h1 className="Homepage__page__links__right__item__text">
                  New Arrivals
                </h1>
              </div>
              <div className="Homepage__page__links__right__item Homepage__page__links__item">
                <Link to="/home/Men">
                  <img
                    className="Homepage__page__links__right__item__image"
                    src={require("./../components/img/men.jpg")}
                  />
                </Link>
                <h1 className="Homepage__page__links__right__item__text">
                  Men
                </h1>
              </div>
              <div className="Homepage__page__links__right__item Homepage__page__links__item">
                <Link to="/home/Women">
                  <img
                    className="Homepage__page__links__right__item__image"
                    src={require("./../components/img/bb4.jpg")}
                  />
                </Link>
                <h1 className="Homepage__page__links__right__item__text">
                  Women
                </h1>
              </div>
              <div className="Homepage__page__links__right__item Homepage__page__links__item">
                <Link to="/home/Kids">
                  <img
                    className="Homepage__page__links__right__item__image"
                    src={require("./../components/img/kids.jpg")}
                  />
                </Link>
                <h1 className="Homepage__page__links__right__item__text">
                  Kids
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default StartPage;
