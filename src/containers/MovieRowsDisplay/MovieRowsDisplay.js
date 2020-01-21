import React, { Component } from "react";
import "./MovieRowsDisplay.css";

import MovieRow from "../../components/Movie/MovieRow/MovieRow";
import MovieRowBigInfo from "../../components/Movie/MovieRowBigInfo/MovieRowBigInfo";

// props: movieList
class MovieRowsDisplay extends Component {
  state = {
    currentlySelectedMovie: ""
  };

  updateCurrentSelectedMovieOnThisMovieRowsDisplay = movie => {
    // Check for empty object
    if (Object.keys(movie).length === 0 && movie.constructor === Object){
      return 0;
    }
      this.setState(
        prevState => {
          return {
            ...prevState,
            currentlySelectedMovie: movie
          };
        },
        () => {
          console.log("state : ", this.state);
        }
      );
  };

  render() {
    console.log("props", this.props);

    return (
      <div className="container">
        <MovieRow
          movies={this.props.movieList}
          updateSelectedMovie={
            this.updateCurrentSelectedMovieOnThisMovieRowsDisplay
          }
        />
        <MovieRowBigInfo movie={this.state.currentlySelectedMovie} />
        {/* <MovieRowBigInfo movie={"testing"} /> */}
      </div>
    );
  }
}

export default MovieRowsDisplay;
