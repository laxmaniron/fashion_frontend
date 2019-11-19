import React from 'react';

import './../App.css';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
class SearchItem extends React.Component {
  render(){

    return (
      <div className="SearchItem">
        <Navbar />
        <div className="SearchItem__page">
            <div className="SearchItem__page__images">
                <div className="SearchItem__page__images__small">
                    <img className="SearchItem__page__images__small__item" src={require("./../components/img/card_images/small_color_navy1.webp")}/>
                    <img className="SearchItem__page__images__small__item" src={require("./../components/img/card_images/small_color_navy2.webp")}/>
                    <img className="SearchItem__page__images__small__item" src={require("./../components/img/card_images/small_color_navy3.webp")}/>
                    <img className="SearchItem__page__images__small__item" src={require("./../components/img/card_images/small_color_navy4.webp")}/>
                    <img className="SearchItem__page__images__small__item" src={require("./../components/img/card_images/small_color_navy5.webp")}/>
                    <img className="SearchItem__page__images__small__item" src={require("./../components/img/card_images/small_color_navy6.webp")}/>

                </div>
                <div className="SearchItem__page__images__big">
                    <img className="SearchItem__page__images__big__item" src={require("./../components/img/card_images/big_color_navy1.webp")}/>
                </div>
            </div>
            <div className="SearchItem__page__description">
                <div className="SearchItem__page__description__title">Roadster</div>
                <div className="SearchItem__page__description__description">Full Sleeve Mens Cartigon </div>
                <div className="SearchItem__page__description__price"><b>Rs.&nbsp;999</b>&nbsp; <sub>inclusive of all taxes</sub></div>
                <div className="SearchItem__page__description__colours">
                    <h1>Available colors </h1>
                    <img className="SearchItem__page__images__small__item" title="navy blue" src={require("./../components/img/card_images/color_black.webp")}/>
                      <img className="SearchItem__page__images__small__item" title="white" src={require("./../components/img/card_images/color_white.webp")}/>
                </div>
                <div className="SearchItem__page__description__size">
                  <div><h1>Select your size</h1></div>

                  <button className="SearchItem__page__description__size__item">S</button>
                  <button className="SearchItem__page__description__size__item">M</button>
                  <button className="SearchItem__page__description__size__item">L</button>
                  <button className="SearchItem__page__description__size__item">XL</button>
                  <button className="SearchItem__page__description__size__item">XXL</button>

                </div>
                <div className="SearchItem__page__description__buttons">Buttons</div>
                <div className="SearchItem__page__description__delivery">Delivery</div>








            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchItem;
