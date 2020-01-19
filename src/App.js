import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import * as actions from "./store/actions/index";

class App extends Component {
  state = {
    movies: []
  };

  componentWillMount() {
    this.props.onLoadMovies();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.movies !== this.state.movies;
  };

  componentDidUpdate() {
    console.log("component updated : ", this.state);
    this.setState(prevState => {
      return {
        ...prevState,
        movies: this.props.movies
      };
    });
  }

  render() {
    console.log("render", this.state);
    let movieRow;

    if (this.state.movies.length > 0) {
      movieRow = this.state.movies[0].map(movie => {
        return (
          <div id="movie-row-item" key={Math.random() * 10}>
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            <img
              src={movie.posterUrl}
              width={"auto"}
              height={"100px"}
              alt=""
            ></img>
          </div>
        );
      });
    } else {
      movieRow = <p>Loading...</p>;
    }

    return (
      <div className="App">
        <h1>running...</h1>
        {movieRow}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.updatedMovieList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMovies: () => dispatch(actions.getMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
