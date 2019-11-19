import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pagination extends Component {
  render() {
    const { totalPosts, postsPerPage, activePage, paginate } = this.props;
    let pageNumbers = [];

    let low = Math.max(1, activePage - 4);
    let high = Math.min(Math.ceil(totalPosts / postsPerPage), activePage + 4);

    if (low == 1) {
      if (Math.ceil(totalPosts / postsPerPage) >= 9) {
        high = 9;
      }
    }

    if (high == Math.ceil(totalPosts / postsPerPage)) {
      if (high - 9 >= 1) {
        low = high - 8;
      }
    }

    for (let i = low; i <= high; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="SearchResults__page__Results__Pagination">
        <div className="pagination-wrapper">
          <div className="pagination">
            {pageNumbers.map(number =>
              activePage === number ? (
                <span
                  key={number}
                  className="page-numbers current"
                  onClick={() => paginate(number)}
                  // style={{ color: "blue" }}
                >
                  {number}
                </span>
              ) : (
                <span
                  key={number}
                  onClick={() => paginate(number)}
                  className="page-numbers"
                >
                  {number}
                </span>
              )
            )}
            &nbsp;&nbsp;
            <span
              style={{
                marginLeft: "2rem",
                fontSize: "1.5rem",
                fontFamily: "inherit",
                fontWeight: "600"
              }}
            >
              (
              {totalPosts
                ? Math.ceil(parseInt(totalPosts) / postsPerPage)
                : null}
              ) pages
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
