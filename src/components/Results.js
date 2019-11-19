import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';
import Card from './Card';

class Results extends React.Component {
  render(){
    return(
        <div className="SearchResults__page__Results">
            <div className="SearchResults__page__Results__Cards">

                <Card /><Card /><Card /><Card /><Card /><Card />
                <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
                <Card /><Card /><Card />
            </div>
            <div className="SearchResults__page__Results__Pagination">
                  <div className="pagination-wrapper">
                    <div className="pagination">
                      <Link className="prev page-numbers" to="/">prev</Link>
                      <Link className="page-numbers current" to="/">1</Link>
                      <Link className="page-numbers" to="/">2</Link>
                      <Link className="page-numbers" to="/">3</Link>
                      <Link className="page-numbers" to="/">4</Link>
                      <Link className="page-numbers" to="/">5</Link>
                      <Link className="page-numbers" to="/">6</Link>
                      <Link className="page-numbers" to="/">7</Link>
                      <Link className="page-numbers" to="/">8</Link>
                      <Link className="page-numbers" to="/">9</Link>
                      <Link className="page-numbers" to="/">10</Link>
                      <Link className="next page-numbers" to="/">next</Link>
                    </div>
                  </div>
            </div>
        </div>

    );
  }
}
export default Results;
