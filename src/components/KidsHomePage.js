import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import uuid from 'uuid';
import { connect } from "react-redux";
import { getDresses } from "../actions/dressActions";
import { addtoCart } from "../actions/cartActions";
import { addtoWishlist } from "../actions/wishlistAcions";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
import Card from "./Card";
import { Link, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Popup from "./Popup";

// import "./dresses.css";

class KidsHomePage extends Component {
  state = {
    totalResults: 0,
    currentPage: 1,
    nextpage: null,
    gender: "Kids",
    brand: [],
    category: [],
    color: [],
    discount: {
      "10% and above": null,
      "20% and above": null,
      "30% and above": null,
      "40% and above": null,
      "50% and above": null
    },
    toggler: true,
    searchquery: "search",
    limit: 20,
    colorSet: {
      Black: 0,
      Brown: 0,
      Beige: 0,
      Grey: 0,
      White: 0,
      Blue: 0,
      Navy: 0,
      Green: 0,
      Olive: 0,
      Red: 0,
      Pink: 0,
      Orange: 0,
      Melange: 0
    },
    maindisc: -1,
    "10% and above": null,
    "20% and above": null,
    "30% and above": null,
    "40% and above": null,
    "50% and above": null,
    htol: null,
    ltoh: null,
    branddisplay: "none",
    brandZindex: "-1000",
    categorydisplay: "none",
    categoryZindex: "-1000"
  };

  async componentDidMount() {
    const page = 1;
    // const { gender } = this.props.match.params;
    let gender = "Kids";
    console.log(gender);
    const { limit, brand, category, color, maindisc, searchquery } = this.state;
    await this.props.getDresses(
      page,
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    );
  }

  paginate = async pageNumber => {
    const {
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    } = this.state;
    await this.props.getDresses(
      pageNumber,
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    );

    this.setState({ currentPage: pageNumber, toggler: !this.state.toggler });
  };

  brandFilter = (e, brandin) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    let {
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    } = this.state;

    const page = 1;

    if (brand.length == 0) {
      brand = [];
      brand.push(brandin);
      this.props.getDresses(
        page,
        limit,
        gender,
        brand,
        category,
        color,
        maindisc,
        searchquery
      );
      this.setState({ brand: brand });
    } else {
      if (brand.includes(brandin)) {
        for (var i = 0; i < brand.length; i++) {
          if (brand[i] == brandin) {
            console.log("hi in it");
            brand.splice(i, 1);

            console.log(brand);
            this.props.getDresses(
              page,
              limit,
              gender,
              brand,
              category,
              color,
              maindisc,
              searchquery
            );
            this.setState({ brand: brand });
          }
        }
      } else {
        brand.push(brandin);
        this.props.getDresses(
          page,
          limit,
          gender,
          brand,
          category,
          color,
          maindisc,
          searchquery
        );
        this.setState({ brand: brand });
      }
    }

    let p = false;
    if (e.target.value == "false") {
      p = false;
      this.setState({ [e.target.name]: !p });
    } else if (e.target.value == "true") {
      p = true;
      this.setState({ [e.target.name]: !p });
    }

    this.setState({ currentPage: page });
  };

  categoryFilter = (e, categoryin) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    let {
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    } = this.state;

    const page = 1;

    if (category.length == 0) {
      category = [];
      category.push(categoryin);
      this.props.getDresses(
        page,
        limit,
        gender,
        brand,
        category,
        color,
        maindisc,
        searchquery
      );
      this.setState({ category: category });
    } else {
      if (category.includes(categoryin)) {
        for (var i = 0; i < category.length; i++) {
          if (category[i] == categoryin) {
            console.log("hi in it");
            category.splice(i, 1);

            console.log(category);
            this.props.getDresses(
              page,
              limit,
              gender,
              brand,
              category,
              color,
              maindisc,
              searchquery
            );
            this.setState({ category: category });
          }
        }
      } else {
        category.push(categoryin);
        this.props.getDresses(
          page,
          limit,
          gender,
          brand,
          category,
          color,
          maindisc,
          searchquery
        );
        this.setState({ category: category });
      }
    }

    let p = false;
    if (e.target.value == "false") {
      p = false;
      this.setState({ [e.target.name]: !p });
    } else if (e.target.value == "true") {
      p = true;
      this.setState({ [e.target.name]: !p });
    }
  };

  colorFilter = (e, colorin) => {
    e.preventDefault();

    let {
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    } = this.state;

    const page = 1;

    if (color.length == 0) {
      color = [];
      color.push(colorin.toLowerCase());
      this.props.getDresses(
        page,
        limit,
        gender,
        brand,
        category,
        color,
        maindisc,
        searchquery
      );
      this.setState({ color: color });
    } else {
      if (color.includes(colorin.toLowerCase())) {
        for (var i = 0; i < color.length; i++) {
          if (color[i] == colorin.toLowerCase()) {
            console.log("hi in it");
            color.splice(i, 1);

            console.log(color);
            this.props.getDresses(
              page,
              limit,
              gender,
              brand,
              category,
              color,
              maindisc,
              searchquery
            );
            this.setState({ color: color });
          }
        }
      } else {
        color.push(colorin.toLowerCase());
        this.props.getDresses(
          page,
          limit,
          gender,
          brand,
          category,
          color,
          maindisc,
          searchquery
        );
        this.setState({ color: color });
      }
    }

    let p = false;
    if (e.target.value == "false") {
      p = false;
      this.setState({ [e.target.name]: !p });
    } else if (e.target.value == "true") {
      p = true;
      this.setState({ [e.target.name]: !p });
    }
  };

  discFilter = (e, discin) => {
    e.preventDefault();

    console.log(e.target.value);
    console.log(e.target.checked);

    let {
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      discount,
      searchquery
    } = this.state;

    const page = 1;

    maindisc = parseInt(discin.substr(0, 2), 10);

    this.props.getDresses(
      page,
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    );
    this.setState({ maindisc: maindisc });

    var keys = Object.keys(discount);

    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== discin) {
        this.setState({ [keys[i]]: false });
      }
    }

    this.setState({ [e.target.value]: e.target.checked });
  };

  sortFilter = (e, sortin) => {
    if (sortin == "ltoh") {
      this.setState({ htol: false });
    } else if (sortin == "htol") {
      this.setState({ ltoh: false });
    }
    this.setState({ [e.target.name]: e.target.checked });
  };

  changeGender = gender => {
    let { limit, brand, category, color, maindisc } = this.state;

    let page = 1;
    let searchquery = "search";

    this.props.getDresses(
      page,
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    );

    this.setState({ gender: gender });
    this.setState({ searchquery: "search" });
  };

  searchChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchSubmit = () => {
    let {
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    } = this.state;

    let page = 1;
    console.log(`hi ${searchquery}`);

    this.props.getDresses(
      page,
      limit,
      gender,
      brand,
      category,
      color,
      maindisc,
      searchquery
    );
  };

  displayAll = e => {
    if (this.state.branddisplay === "none") {
      this.setState({ branddisplay: "inline-block" });
      this.setState({ brandZindex: "1000" });
    }

    if (this.state.branddisplay === "inline-block") {
      this.setState({ branddisplay: "none" });
      this.setState({ brandZindex: "-1000" });
    }
  };

  displayAllCategories = e => {
    if (this.state.categorydisplay === "none") {
      this.setState({ categorydisplay: "inline-block" });
      this.setState({ categoryZindex: "1000" });
    }

    if (this.state.categorydisplay === "inline-block") {
      this.setState({ categorydisplay: "none" });
      this.setState({ categoryZindex: "-1000" });
    }
  };

  addItem = (dress, userid) => {
    this.props.addtoCart(dress, userid);
  };

  addItemWishlist = (dress, userid) => {
    this.props.addtoWishlist(dress, userid);
  };

  render() {
    const { dresses } = this.props.dresses;

    const { colorSet, htol, ltoh, searchquery } = this.state;

    if (dresses.brands) {
      // console.log(dresses.total);
      dresses.categories.sort();
      dresses.brands.sort();
    }

    const source = "http://localhost:5000/";

    let arr = null;

    if (Object.keys(dresses).length !== 0 && ltoh) {
      arr = JSON.parse(JSON.stringify(dresses.dresses));
      // console.log("bye");
      let swapped;
      do {
        swapped = false;
        for (var i = 0; i < arr.length - 1; i++) {
          if (
            parseFloat(arr[i].price.substring(1)) >
            parseFloat(arr[i + 1].price.substring(1))
          ) {
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
            swapped = true;
          }
        }
      } while (swapped);
    } else if (Object.keys(dresses).length !== 0 && htol) {
      arr = JSON.parse(JSON.stringify(dresses.dresses));
      // console.log("bye");
      let swapped;
      do {
        swapped = false;
        for (var i = 0; i < arr.length - 1; i++) {
          if (
            parseFloat(arr[i].price.substring(1)) <
            parseFloat(arr[i + 1].price.substring(1))
          ) {
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
            swapped = true;
          }
        }
      } while (swapped);
    } else {
      arr = dresses.dresses;

      // console.log(dresses.dresses);
    }

    return (
      <div className="SearchResults">
        <Navbar
          apparelChange={this.changeGender}
          searchfilter={this.searchChange}
          searchword={this.state.searchquery}
          searchsubmit={this.searchSubmit}
        />
        <div className="SearchResults__page">
          {/* filters */}
          <div className="SearchResults__page__Filters">
            <h1>Filters </h1>
            <div className="SearchResults__page__Filters__property">
              <div>
                <h2>Sort By</h2>
              </div>
              <div className="SearchResults__page__Filters__checkbox">
                <input
                  type="checkbox"
                  name="htol"
                  value={Boolean(htol)}
                  checked={Boolean(htol)}
                  onChange={e => this.sortFilter(e, "htol")}
                />
                <p>Price: &nbsp; High to Low</p>
              </div>
              <div className="SearchResults__page__Filters__checkbox">
                <input
                  type="checkbox"
                  name="ltoh"
                  value={Boolean(ltoh)}
                  checked={Boolean(ltoh)}
                  onChange={e => this.sortFilter(e, "ltoh")}
                />
                <p>Price: &nbsp; Low to High</p>
              </div>
            </div>
            <div className="SearchResults__page__Filters__property">
              <div>
                <h2>Brand</h2>
              </div>

              {dresses.brands
                ? dresses.brands.slice(0, 5).map(brand => (
                    <div
                      key={brand}
                      className="SearchResults__page__Filters__checkbox"
                    >
                      <input
                        type="checkbox"
                        name={brand}
                        value={Boolean(this.state[brand])}
                        checked={Boolean(this.state[brand])}
                        onChange={e => this.brandFilter(e, brand)}
                      />
                      <p>{brand}</p>
                    </div>
                  ))
                : null}

              <div
                className="SearchResults__page__Filters__checkbox"
                style={{ alignSelf: "center" }}
              >
                {dresses.brands ? (
                  <button onClick={this.displayAll} className="btn btn--pink">
                    see more ({Math.max(dresses.brands.length - 5, 0)})
                  </button>
                ) : null}
              </div>
            </div>

            <div className="SearchResults__page__Filters__property">
              <div>
                <h2>Categories</h2>
              </div>
              {dresses.categories
                ? dresses.categories.slice(0, 5).map(category => (
                    <div
                      key={category}
                      className="SearchResults__page__Filters__checkbox"
                    >
                      <input
                        type="checkbox"
                        name={category}
                        value={Boolean(this.state[category])}
                        checked={Boolean(this.state[category])}
                        onChange={e => this.categoryFilter(e, category)}

                        // {(e) => this.props.handleChange("tags", e)}
                      />

                      <p>{category}</p>
                    </div>
                  ))
                : null}

              <div
                className="SearchResults__page__Filters__checkbox"
                style={{ alignSelf: "center" }}
              >
                {dresses.categories ? (
                  <button
                    onClick={this.displayAllCategories}
                    className="btn btn--pink"
                  >
                    see more ({Math.max(dresses.categories.length - 5, 0)})
                  </button>
                ) : null}
              </div>
            </div>

            {/* {dresses.colors
            ? Object.entries(colorSet)
                .slice(0, 5)
                .map(([color, value]) => (
                  <div key={color} className="SearchResults__page__Filters__checkbox">
                    <input
                      type="checkbox"
                      name={color}
                      value={Boolean(this.state[color])}
                      checked={Boolean(this.state[color])}
                      onChange={e => this.colorFilter(e, color)}
                    />
                    
                  <p> {color}</p>

                  </div>
                ))
            : null} */}

            <div className="SearchResults__page__Filters__property">
              <div>
                <h2>Color</h2>
              </div>
              {dresses.colors
                ? Object.entries(colorSet).map(([color, value]) => (
                    <div
                      key={color}
                      className="SearchResults__page__Filters__checkbox"
                    >
                      <input
                        type="checkbox"
                        name={color}
                        value={Boolean(this.state[color])}
                        checked={Boolean(this.state[color])}
                        onChange={e => this.colorFilter(e, color)}
                      />
                      <span
                        style={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          marginRight: "5px",
                          // border: "1px solid black",
                          backgroundColor: color.toLowerCase()
                        }}
                      ></span>
                      <p> {color}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div className="SearchResults__page__Results">
            <div className="SearchResults__page__Results__Cards">
              {arr
                ? arr.map(dress => (
                    <div key={dress._id}>
                      <Card
                        dress={dress}
                        cartadd={this.addItem}
                        wishlistadd={this.addItemWishlist}
                        user={this.props.auth}
                      />
                    </div>
                  ))
                : null}
            </div>

            {dresses ? (
              <Pagination
                postsPerPage={this.state.limit}
                totalPosts={dresses.total}
                activePage={this.state.currentPage}
                paginate={this.paginate}
              />
            ) : null}
          </div>
        </div>
        {/* <div style={{ float: "right", marginLeft: "397px" }}>
          {dresses.total
            ? Math.ceil(parseInt(dresses.total) / this.state.limit)
            : null}
        </div> */}
        <Footer />
        <div
          className="popup"
          style={{
            display: this.state.branddisplay,
            zIndex: this.state.brandZindex
          }}
        >
          <div className="popup__content">
            <div className="popup__content__header">
              <h1>Available Brands </h1>
              <button
                className=" btn--pink popup__close"
                onClick={this.displayAll}
              >
                &times;
              </button>
            </div>
            <div className="popup__content__main">
              {dresses.brands
                ? dresses.brands.sort().map(brand => (
                    <div key={brand}>
                      <input
                        type="checkbox"
                        name={brand}
                        value={Boolean(this.state[brand])}
                        checked={Boolean(this.state[brand])}
                        onChange={e => this.brandFilter(e, brand)}
                      />
                      <span>{brand}</span>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
        {/*Categories*/}
        <div
          className="popup"
          style={{
            display: this.state.categorydisplay,
            zIndex: this.state.categoryZindex
          }}
        >
          <div className="popup__content">
            <div className="popup__content__header">
              <h1>Available Categories </h1>
              <button
                className=" btn--pink popup__close"
                onClick={this.displayAllCategories}
              >
                &times;
              </button>
            </div>
            <div className="popup__content__main">
              {dresses.categories
                ? dresses.categories.sort().map(category => (
                    <div key={category}>
                      <input
                        type="checkbox"
                        name={category}
                        value={Boolean(this.state[category])}
                        checked={Boolean(this.state[category])}
                        onChange={e => this.categoryFilter(e, category)}
                      />
                      <span>{category}</span>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

KidsHomePage.propTypes = {
  getDresses: PropTypes.func.isRequired,
  dresses: PropTypes.object.isRequired,
  addtoCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dresses: state.dresses,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getDresses,
  addtoCart,
  addtoWishlist
})(KidsHomePage);
