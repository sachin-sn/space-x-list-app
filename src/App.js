import React from "react";
import { connect } from "react-redux";
import RadioList from "./components/RadioList/RadioList";
import ListItem from "./components/ListItem/ListItem";
import "./App.scss";
import {
  ADD_TO_FILTER_LIST,
  getSpaceXData,
  LOAD_INITIAL_REQUEST,
} from "./redux-store/actions";

const years = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
];
const booleanValues = ["True", "False"];

class App extends React.Component {
  componentDidMount() {
    this.props.getDataOnLoad();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" aria-label="SpaceX Launch Program">
          SpaceX Launch Programs
        </header>
        <div className="App-body">
          <div className="filter-panel">
            <div className="filter-panel-header" aria-label="Filters">
              Filters
            </div>
            {this.props.filter.length ? (
              <div className="filter-section">
                <div
                  aria-label="clear all filters"
                  className="clear-all-filter"
                  onClick={() => {
                    this.props.updateFilter(this.props.filter, "clearAll");
                  }}
                >
                  clear all
                </div>
              </div>
            ) : null}
            <div className="filter-section">
              <div className="filter-section-title" aria-label="Launch Year">
                Launch Year
              </div>
              <div className="filter-section-body">
                <RadioList
                  items={years}
                  name="launchYear"
                  filter={this.props.filter}
                  updateFilter={this.props.updateFilter}
                />
              </div>
            </div>
            <div className="filter-section">
              <div
                className="filter-section-title"
                aria-label="Successful Launch"
              >
                Successful Launch
              </div>
              <div className="filter-section-body">
                <RadioList
                  items={booleanValues}
                  name="successfulLaunch"
                  filter={this.props.filter}
                  updateFilter={this.props.updateFilter}
                />
              </div>
            </div>
            <div className="filter-section">
              <div
                className="filter-section-title"
                aria-label="Successful Land"
              >
                Successful Land
              </div>
              <div className="filter-section-body">
                <RadioList
                  items={booleanValues}
                  name="successfulLand"
                  filter={this.props.filter}
                  updateFilter={this.props.updateFilter}
                />
              </div>
            </div>
          </div>
          <div className="main-content">
            {this.props.isLoading ? (
              <div className="loading-block">
                <img
                  alt="loading"
                  src="https://heroic.academy/wp-content/uploads/2016/12/animat-rocket-color.gif"
                />
                <br />
                Loading...
              </div>
            ) : this.props.filter.length > 0 && this.props.data.length === 0 ? (
              <div className="no-records-found">
                <img
                  alt="no-records-found"
                  src="https://media.giphy.com/media/J2OETVrTGa00L9sTIR/source.gif"
                />
                <br />
                No matching records found!
              </div>
            ) : (
              this.props.data.map((item, index) => (
                <div className="block" key={index}>
                  <ListItem {...item} />
                </div>
              ))
            )}
          </div>
          <div className="App-footer">
            Developed by:
            <a
              href="https://www.linkedin.com/in/sachin-s-nagaraja/"
              target="_blank"
            >
              sachin nagaraja
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { ...state };
};

const mapDispatch = (dispatch) => {
  return {
    getDataOnLoad: () => {
      dispatch({ type: LOAD_INITIAL_REQUEST });
      getSpaceXData(dispatch);
    },
    updateFilter: (filters, filterType, filterValue) => {
      if (filterType !== "clearAll") {
        let item = filters.find((f) => f.type === filterType);
        if (item) {
          let newFilters = filters.filter((f) => f.type !== item.type);
          filters = [...newFilters, { type: filterType, value: filterValue }];
        } else {
          filters = [...filters, { type: filterType, value: filterValue }];
        }
      } else {
        filters = [];
      }
      dispatch({ type: ADD_TO_FILTER_LIST, filter: filters });
      dispatch({ type: LOAD_INITIAL_REQUEST });
      getSpaceXData(dispatch, filters);
    },
  };
};

export default connect(mapState, mapDispatch)(App);
