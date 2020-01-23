import React, { Component } from "react";
import "./MovieRowsDisplay.css";

import MovieRow from "../../components/Movie/MovieRow/MovieRow";
import MovieRowBigInfo from "../../components/Movie/MovieRowBigInfo/MovieRowBigInfo";

// props: movieList
class MovieRowsDisplay extends Component {
  state = {
    currentlySelectedMovie: "",
    hoverScaleMovieItems: true,
    uniqueKeyForThisParticularComponent: Math.floor(Math.random() * 1000)
  };

  updateCurrentSelectedMovieOnThisMovieRowsDisplay = movie => {
    // Check for empty object
    if (Object.keys(movie).length === 0 && movie.constructor === Object) {
      return 0;
    }
    this.setState(
      prevState => {
        return {
          ...prevState,
          currentlySelectedMovie: movie,
          hoverScaleMovieItems: false
        };
      },
      () => {
        console.log("movie row display state updated : ", this.state);
        console.log("movie row display props : ", this.props);
      }
    );
  };

  render() {
    console.log("movie row display rendered");

    let movieRowsDisplayContainer =
      this.props.movieList.length > 0 ? (
        <div className="movie-rows-display-container">
          <MovieRow
            movies={this.props.movieList}
            updateSelectedMovie={
              this.updateCurrentSelectedMovieOnThisMovieRowsDisplay
            }
            thisRowsBigInfoKey={this.state.uniqueKeyForThisParticularComponent} // unique key
            scaleOnHover={this.state.hoverScaleMovieItems}
            category={this.props.category}
          />
          <MovieRowBigInfo
            thisRowsBigInfoKey={this.state.uniqueKeyForThisParticularComponent} // unique key
            movie={this.state.currentlySelectedMovie}
          />
        </div>
      ) : null;

    return movieRowsDisplayContainer;
  }
}

export default MovieRowsDisplay;
