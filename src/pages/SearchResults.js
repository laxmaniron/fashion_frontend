import React from 'react';

import './../App.css';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Filters from "./../components/Filters";
import Popup from "./../components/Popup";
import Results from "./../components/Results";
class SearchResults extends React.Component {
  render(){

    return (
      <div className="SearchResults">
        <Navbar />
        <div className="SearchResults__page">
            <Filters />
            <Results />

        </div>
        <Footer />
          <Popup />

      </div>



    );
  }
}

export default SearchResults;
