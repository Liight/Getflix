import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import * as actions from "./store/actions/index";

import MovieRowsDisplay from "./containers/MovieRowsDisplay/MovieRowsDisplay";
import MovieFeature from "./containers/MovieFeature/MovieFeature";
import TopBar from "./components/Navigation/TopBar/TopBar";
import Footer from "./components/Navigation/Footer/Footer";
import Modal from "./components/UI/Modal/Modal";

class App extends Component {
  state = {
    moviesTopRated: [],
    moviesSomeOther: [],
    moviesLatest: [],
    scrollbarsVisible: true
  };

  componentWillMount() {
    if (!this.props.initialListsUpdatesComplete) {
      this.props.onLoadTopRatedMovies();
      this.props.onLoadSomeOtherMovies();
      this.props.onLoadLatestMovies();
      setTimeout(() => {
        this.props.onVerifyInitialListUpdatesAreComplete();
      }, 1000);
    } else {
      // console.log(
      //   "no need to spam external apis, this has been handled and call responses have been added to global state for caching."
      // );
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextProps.moviesTopRated !== this.state.moviesTopRated ||
      nextProps.moviesSomeOther !== this.state.moviesSomeOther ||
      nextProps.moviesLatest !== this.state.moviesLatest ||
      nextProps.scrollbarsVisible !== this.state.scrollbarsVisible
    );
  };

  componentDidUpdate() {
    console.log("app updated : ", this.state);
    // There has to be a better way to get the body element to dynamically set scrollbar styles based on global state
    if (!this.props.scrollbarsVisible) {
      document.getElementsByTagName("body")[0].className += " hidden-overflows";
    } else {
      document.getElementsByTagName("body")[0].className = "";
    }
    this.setState(prevState => {
      return {
        ...prevState,
        moviesTopRated: this.props.moviesTopRated,
        moviesSomeOther: this.props.moviesSomeOther,
        moviesLatest: this.props.moviesLatest,
        scrollbarsVisible: this.props.scrollbarsVisible
      };
    });
  }

  componentDidMount() {}

  render() {
    console.log("App rendered");
    // This is to fix an issue where react starts requiring RAM resources very fast
    // on screen widths below 500px this occurs
    // There is a lot of dimensions reading with javascript in this application,
    // this may be the cause of this issue, requires more investigation
    if (window.innerWidth < 500) {
      return (
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Cannot render screen to small
        </div>
      );
    }
    // Leave ^^^^^^

    //  console.log("render", this.state);
    // Top Rated Row
    let topRatedMovieRow =
      this.state.moviesTopRated.length > 0 ? (
        <MovieRowsDisplay
          movieList={this.state.moviesTopRated}
          category={"Top Rated"}
        />
      ) : (
        <p style={{ color: "white" }}>Loading...</p>
      );

    // Some Other Row
    let someOtherMovieRow =
      this.state.moviesSomeOther.length > 0 ? (
        <MovieRowsDisplay
          movieList={this.state.moviesSomeOther}
          category={"Popular"}
        />
      ) : (
        <p style={{ color: "white" }}>Loading...</p>
      );

    // Latest Row
    let latestMovieRow =
      this.state.moviesLatest.length > 0 ? (
        <MovieRowsDisplay
          movieList={this.state.moviesLatest}
          category={"Upcoming"}
        />
      ) : (
        <p style={{ color: "white" }}>Loading...</p>
      );

    // Feature
    let featureMovies =
      this.state.moviesSomeOther.length > 0 ? (
        <MovieFeature movieList={this.state.moviesSomeOther} />
      ) : (
        <p style={{ color: "white" }}>Loading...</p>
      );

    return (
      <div className="App">
        <TopBar />
        {featureMovies}
        {latestMovieRow}
        {topRatedMovieRow}
        {someOtherMovieRow}

        <Footer />
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesTopRated: state.movies.updatedMovieListTopRated,
    moviesSomeOther: state.movies.updatedMovieListSomeOther,
    moviesLatest: state.movies.updatedMovieListLatest,
    initialListsUpdatesComplete: state.movies.initialListsUpdatesComplete,
    scrollbarsVisible: state.ui.scrollbarsVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTopRatedMovies: () => dispatch(actions.getTopRatedMovies()),
    onLoadSomeOtherMovies: () => dispatch(actions.getSomeOtherMovies()),
    onLoadLatestMovies: () => dispatch(actions.getLatestMovies()),
    onVerifyInitialListUpdatesAreComplete: () =>
      dispatch(actions.verifyInitialListUpdatesAreComplete())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
