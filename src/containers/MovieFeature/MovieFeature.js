import React, { Component } from "react";
import "./MovieFeature.css";

class MovieFeature extends Component {
  state = {
    movieList: this.props.movieList,
    currentMovie: 0
  };

  render() {
    let value = this.state.currentMovie;
    let movie = this.state.movieList[value];
    // Change Featured Movie
    // setInterval(() => {
    //   console.log("timed function");
    //   if (value === this.state.movieList.length - 1) {
    //     this.setState((prevState)=>{
    //       return {
    //         ...prevState,
    //         currentMovie: 0
    //       };
    //     })
    //     movie = this.state.movieList[this.state.currentMovie];
    //   } else {
    //     this.setState(prevState => {
    //       return {
    //         ...prevState,
    //         currentMovie: value += 1
    //       };
    //     });
    //     movie = this.state.movieList[this.state.currentMovie];
    //   }
    // }, 10000);

    return (
      <div className="movie-feature-container">
        <div
          className="movie-feature-info-column"
          style={{
            paddingLeft: window.innerWidth / 12
          }}
        >
          <span className="movie-feature-title">{movie.title}</span>
          <span className="movie-feature-tagline">{movie.tagline}</span>
          <span>
            <span className="movie-feature-status">{movie.status + " "}</span>
            <span className="movie-feature-release-date">
              {movie.release_date.length > 0
                ? movie.release_date.slice(0, 4) + " "
                : null}
            </span>
            <span className="movie-feature-runtime"> {movie.runtime} mins</span>
          </span>
          <span className="movie-feature-overview">{movie.overview}</span>
        </div>
        <div className="movie-feature-image-column">
          <img src={movie.posterUrl} alt="" height="100%" width="auto" />
        </div>
      </div>
    );
  }
}

export default MovieFeature;
