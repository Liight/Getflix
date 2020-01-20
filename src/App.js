import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import * as actions from "./store/actions/index";

import MovieRowsDisplay from './containers/MovieRowsDisplay/MovieRowsDisplay';

class App extends Component {
  state = {
    moviesTopRated: []
  };

  componentWillMount() {
    this.props.onLoadTopRatedMovies();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.moviesTopRated !== this.state.moviesTopRated;
  };

  componentDidUpdate() {
    console.log("component updated : ", this.state);
    this.setState(prevState => {
      return {
        ...prevState,
        moviesTopRated: this.props.moviesTopRated
      };
    });
  }

  render() {
    console.log("render", this.state);
    // Top Rated Row
    let topRatedMovieRow= this.state.moviesTopRated.length > 0 ? 
      <MovieRowsDisplay movieList={this.state.moviesTopRated} />
      : <p>Loading...</p>;

    // Some Other Row
let someOtherMovieRow =
  this.state.moviesTopRated.length > 0 ? (
    <MovieRowsDisplay movieList={this.state.moviesTopRated} />
  ) : (
    <p>Loading...</p>
  );
    return (
      <div className="App">
        <h1>running...</h1>
        {topRatedMovieRow}
        {someOtherMovieRow}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesTopRated: state.movies.updatedMovieListTopRated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTopRatedMovies: () => dispatch(actions.getTopRatedMovies()),
    onLoadSomeOtherMovies: () => dispatch(actions.getSomeOtherMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
