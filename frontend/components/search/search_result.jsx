import React from 'react';
import FilteredResult from './filtered_result';
import EmptySearchResult from './empty_search_result';
import { withRouter } from 'react-router-dom';

class SearchResult extends React.Component {
  passespriceFilter(restaurant) {
    if (this.props.filters.price.size > 0) {
      return this.props.filters.price.has(restaurant.price_range);
    } else {
      return true;
    }
  }

  passesNeighborhoodFilter(restaurant) {
    if (this.props.filters.neighborhood.size > 0) {
      return this.props.filters.neighborhood.has(restaurant.neighborhood_name);
    } else {
      return true;
    }
  }

  passesCuisineFilter(restaurant) {
    if (this.props.filters.cuisine.size > 0) {
      return this.props.filters.cuisine.has(restaurant.cuisine_type);
    } else {
      return true;
    }
  }

  passesDressCodeFilter(restaurant) {
    if (this.props.filters.dress_code.size > 0) {
      return this.props.filters.dress_code.has(restaurant.dress_code);
    } else {
      return true;
    }
  }

  passesDiningStyleFilter(restaurant) {
    if (this.props.filters.dining_style.size > 0) {
      return this.props.filters.dining_style.has(restaurant.dining_style);
    } else {
      return true;
    }
  }

  passesTimeFilter(restaurant) {
    if (this.props.filters.time.size > 0) {
        let startIndex = restaurant.opening_hour.indexOf(":");
        let startHour = restaurant.opening_hour.slice(0, startIndex);
        startHour = parseInt(startHour);

        let closeIndex = restaurant.closing_hour.indexOf(":");
        let closeHour = restaurant.closing_hour.slice(0, closeIndex);
        closeHour = parseInt(closeHour);

        let time = parseInt(this.props.filters.time.values().next().value);
        
      return time > startHour && time < closeHour;
    } else {
      return true;
    }
  }

  clearFilterButton() {
    let button = document.getElementById("clearFilter");
    // button.addEventListener("click", () => this.checkFilters())
    let inputs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  }

  handleClearFilter() {
    this.props.clearAllFilters();
    this.clearFilterButton();
  }

  render() {
    let filtered;

    let filteredSearchResults = Object.values(this.props.restaurants).filter(
      (restaurant) => {
        return (
          this.passesNeighborhoodFilter(restaurant) &&
          this.passesCuisineFilter(restaurant) &&
          this.passesDiningStyleFilter(restaurant) &&
          this.passesDressCodeFilter(restaurant) &&
          this.passespriceFilter(restaurant) &&
          this.passesTimeFilter(restaurant)
        );
      }
    );

    filtered = filteredSearchResults.map((result, idx) => {
      return <FilteredResult key={idx} result={result} />;
    });

    return (
      <div className="search-result-container">
        <div className="search-result-wrapper">
          <div className="search-row">
            <div className="search-column"></div>
          </div>
        </div>

        <div className="filtered-result-container">
          <div>
            <div className="filtered-result-header">
              <div className="filtered-result-header-bar">
                <h3 className="filtered-result-header-title">{`${filtered.length} tables available`}</h3>
                <div className="sort-view-filter">
                  <div className="sort-filters">
                    <div className="sort-dropdown">
                      <button
                        id="clearFilter"
                        className="clear-filter-button"
                        onClick={this.handleClearFilter.bind(this)}
                        value=""
                      >
                        <span>Clear All Filters</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-section-header">
                <div className="content-section-bar"></div>
              </div>
              <div className="content-section">
                <div className="content-section-list">
                  {filtered}
                  {/* {filtered.length > 0 ? filtered : <EmptySearchResult/>} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResult);