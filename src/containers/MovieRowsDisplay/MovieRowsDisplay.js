import React, { Component } from "react";
import { connect } from "react-redux";
import "./MovieRowsDisplay.css";

import MovieRow from "../../components/Movie/MovieRow/MovieRow";
import MovieRowBigInfo from "../../components/Movie/MovieRowBigInfo/MovieRowBigInfo";

// props: movieList
class MovieRowsDisplay extends Component {
  state = {
    currentlySelectedMovie: "",
    uniqueKeyForThisParticularComponent: Math.floor(Math.random() * 1000)
  };

  updateScaleMovieItems = () => {
    if (
      this.props.activeBigInfoKey !==
      this.state.uniqueKeyForThisParticularComponent
    ) {
      // console.log("WOULD RESCALE");
      return true;
    } else {
      // console.log('WOULD NOT RESCALE')
      return false;
    }
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
          currentlySelectedMovie: movie
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

    let hoverScaleMovieItems = this.updateScaleMovieItems();

    let movieRowsDisplayContainer =
      this.props.movieList.length > 0 ? (
        <div className="movie-rows-display-container">
          <MovieRow
            movies={this.props.movieList}
            updateSelectedMovie={
              this.updateCurrentSelectedMovieOnThisMovieRowsDisplay
            }
            thisRowsBigInfoKey={this.state.uniqueKeyForThisParticularComponent} // unique key
            scaleOnHover={hoverScaleMovieItems}
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

const mapStateToProps = state => {
  return {
    activeBigInfoKey: state.movies.activeBigInfoKey
  };
};

export default connect(mapStateToProps)(MovieRowsDisplay);
