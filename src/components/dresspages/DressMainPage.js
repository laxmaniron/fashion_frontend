import React, { Component, Fragment } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getDressMaininfo } from "../../actions/dressMainActions";
import { addtoCart } from "../../actions/cartActions";
import { addtoWishlist } from "../../actions/wishlistAcions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactTimeout from "react-timeout";
import "../../css/image_align.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

class DressMainPage extends Component {
  setData = () => {
    this.setState({ alldata: this.props.maindress });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDressMaininfo(id);
    this.props.setTimeout(this.setData, 250);
  }

  state = {
    alldata: {
      dress: {},
      dresscurrentcolor: {},
      dressallcolor: [],
      colormodel: []
    }
  };

  static propTypes = {
    getDressMaininfo: PropTypes.func.isRequired,
    maindress: PropTypes.object.isRequired
  };

  colorChange = id => {
    let { alldata } = this.state;
    let len = alldata.dressallcolor ? alldata.dressallcolor.length : 0;
    for (var i = 0; i < len; i++) {
      console.log(`${alldata.dressallcolor[i].colorId}  hi hi  ${id}`);
      if (alldata.dressallcolor[i].colorId === id) {
        alldata.dresscurrentcolor = alldata.dressallcolor[i];
        break;
      }
    }

    this.setState({ alldata: alldata });
  };

  addcart = () => {
    this.props.addtoCart(this.props.maindress.dress, this.props.auth.user._id);
  };

  addwishlist = () => {
    this.props.addtoWishlist(
      this.props.maindress.dress,
      this.props.auth.user._id
    );
  };

  render() {
    let { alldata } = this.state;
    console.log(this.props.maindress);

    return (
      <div className="SearchItem">
        <Navbar />
        <div className="SearchItem__page">
          <div className="SearchItem__page__images">
            <div className="SearchItem__page__images__small">
              {alldata.dresscurrentcolor.smallimageset
                ? alldata.dresscurrentcolor.smallimageset.map(image => (
                    <Fragment>
                      <img
                        src={image}
                        className="SearchItem__page__images__small__item"
                      />
                    </Fragment>
                  ))
                : null}
            </div>

            <div className="SearchItem__page__images__big">
              {alldata.dresscurrentcolor.hdimageset ? (
                <img
                  className="SearchItem__page__images__big__item"
                  src={alldata.dresscurrentcolor.hdimageset[0]}
                />
              ) : null}
            </div>
          </div>

          {alldata.dress ? (
            <div className="SearchItem__page__description">
              <div className="SearchItem__page__description__title">
                {alldata.dress.brand}
              </div>
              <div className="SearchItem__page__description__description">
                {alldata.dress.name}
              </div>
              <div className="SearchItem__page__description__price">
                <b>
                  Rs.&nbsp;
                  {alldata.dresscurrentcolor.price ? (
                    <span>
                      {Math.floor(
                        parseFloat(
                          alldata.dresscurrentcolor.price.substring(1)
                        ) * 50
                      )}
                    </span>
                  ) : null}
                </b>
                &nbsp; <sub>inclusive of all taxes</sub>
              </div>
              <div className="SearchItem__page__description__colours">
                <h1>Available colors </h1>

                {alldata.colormodel.map(color => (
                  <span
                    key={color._id}
                    onClick={this.colorChange.bind(this, color._id)}
                  >
                    <img
                      className="SearchItem__page__images__small__item"
                      src={color.color_dresspic}
                    />
                  </span>
                ))}
              </div>
              <div className="SearchItem__page__description__size">
                <div>
                  <h1 class="SearchItem__page__description__size__title">
                    Select your size
                  </h1>
                </div>

                <span className="SearchItem__page__description__size__item">
                  S
                </span>
                <span className="SearchItem__page__description__size__item ">
                  M
                </span>
                <span className="SearchItem__page__description__size__item ">
                  L
                </span>
                <span className="SearchItem__page__description__size__item ">
                  XL
                </span>
                <span className="SearchItem__page__description__size__item ">
                  XXL
                </span>
              </div>
              <div className="SearchItem__page__description__buttons">
                <div
                  onClick={this.addcart}
                  className="btn btn--pink btn--large"
                >
                  Add to Cart{" "}
                </div>
                <button
                  onClick={this.addwishlist}
                  className="btn btn--grey btn--large"
                >
                  WishList{" "}
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  maindress: state.dressMainpageReducer,
  auth: state.auth
});

export default ReactTimeout(
  connect(mapStateToProps, { getDressMaininfo, addtoCart, addtoWishlist })(
    DressMainPage
  )
);
