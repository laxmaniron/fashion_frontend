import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';
import Popup from './Popup';

class Filters extends React.Component {
  render(){
    return(
        <div className="SearchResults__page__Filters">
            <h1>Filters</h1>
            <div className="SearchResults__page__Filters__property">
                <div><h2>Sort By</h2></div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Price: &nbsp; High to  Low</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Price: &nbsp; Low  to High</p>
                </div>
            </div>
            <div className="SearchResults__page__Filters__property">
              <div><h2>Brand</h2></div>
                <div className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox"  name="Filters" value=""/><p>PUMA</p>
                </div>

                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>ADIDAS</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>TOMMY HILFIGER</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>JACK AND JONES</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                        <button className="btn btn--pink" >see more</button>
                </div>
            </div>
            <div className="SearchResults__page__Filters__property">
              <div><h2>Color</h2></div>
                <div className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox"  name="Filters" value=""/><p>Black</p>
                </div>

                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Blue</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Red</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Green</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Yellow</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Violet</p>
                </div>
            </div>
            <div className="SearchResults__page__Filters__property">
              <div><h2>Price</h2></div>
                <div className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox"  name="Filters" value=""/><p>Rs.494 &nbsp; to &nbsp; Rs.1421</p>
                </div>

                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Rs.1421 &nbsp; to &nbsp; Rs.2348</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Rs.2348 &nbsp; to &nbsp; Rs.3275</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>Rs.3275 &nbsp; to &nbsp; Rs.4202</p>
                </div>
            </div>

            <div className="SearchResults__page__Filters__property">
                <div><h2>Discount Range</h2></div>
                <div className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox"  name="Filters" value=""/><p>20% and above</p>
                </div>

                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>30% and above</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>40% and above</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>50% and above</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>60% and above</p>
                </div>
                <div  className="SearchResults__page__Filters__checkbox">
                  <input type="checkbox" name="Filters" value=""/><p>70% and above</p>
                </div>
            </div>

        </div>

    );
  }
}
export default Filters;
