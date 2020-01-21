import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import * as actions from "./store/actions/index";

import MovieRowsDisplay from './containers/MovieRowsDisplay/MovieRowsDisplay';
import MovieFeature from './containers/MovieFeature/MovieFeature';

class App extends Component {
  state = {
    moviesTopRated: [],
    moviesSomeOther: []
  };

  componentWillMount() {
    this.props.onLoadTopRatedMovies();
    this.props.onLoadSomeOtherMovies();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.moviesTopRated !== this.state.moviesTopRated || nextProps.moviesSomeOther !== this.state.moviesSomeOther
  };

  componentDidUpdate() {
    console.log("component updated : ", this.state);
    this.setState(prevState => {
      return {
        ...prevState,
        moviesTopRated: this.props.moviesTopRated,
        moviesSomeOther: this.props.moviesSomeOther
      };
    });
  }

  render() {
             console.log("render", this.state);
             // Top Rated Row
             let topRatedMovieRow =
               this.state.moviesTopRated.length > 0 ? (
                 <MovieRowsDisplay movieList={this.state.moviesTopRated} />
               ) : (
                 <p style={{ color: "white" }}>Loading...</p>
               );

             // Some Other Row
             let someOtherMovieRow =
               this.state.moviesSomeOther.length > 0 ? (
                 <MovieRowsDisplay movieList={this.state.moviesSomeOther} />
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
                 <h1>running...</h1>
                 {featureMovies}
                 {topRatedMovieRow}
                 {someOtherMovieRow}
               </div>
             );
           }
}

const mapStateToProps = state => {
  return {
    moviesTopRated: state.movies.updatedMovieListTopRated,
    moviesSomeOther: state.movies.updatedMovieListSomeOther
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTopRatedMovies: () => dispatch(actions.getTopRatedMovies()),
    onLoadSomeOtherMovies: () => dispatch(actions.getSomeOtherMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
