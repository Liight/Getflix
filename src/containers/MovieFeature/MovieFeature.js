import React, { Component } from "react";
import "./MovieFeature.css";

class MovieFeature extends Component {
  state = {
    movieList: this.props.movieList,
    currentMovie: 0
  };

  nextMovie = () => {
    // Increments state.currentMovie by 1
    if (this.state.currentMovie === this.state.movieList.length - 1) {
      this.setState(prevState => {
        return {
          ...prevState,
          currentMovie: 0
        };
      });
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          currentMovie: this.state.currentMovie + 1
        };
      });
    }
  };

  prevMovie = () => {
    // Decreases state.currentMovie by 1
    if (this.state.currentMovie === 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          currentMovie: this.state.movieList.length - 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          currentMovie: this.state.currentMovie - 1
        };
      });
    }
  };

  render() {
    let movie = this.state.movieList[this.state.currentMovie];

    return (
      <div className="movie-feature-container">
        <div
          className="movie-feature-arrow movie-feature-arrow-left"
          onClick={() => this.prevMovie()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 172 172"
            // style=" fill:#000000;"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              // style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#ffffff">
                <path d="M110.725,154.08333l11.10833,-11.10833l-56.975,-56.975l56.975,-56.975l-11.10833,-11.10833l-67.725,68.08333z"></path>
              </g>
            </g>
          </svg>
        </div>
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
        <div
          className="movie-feature-arrow movie-feature-arrow-right"
          onClick={() => this.nextMovie()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 172 172"
            // style=" fill:#000000;"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              // style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#ffffff">
                <path d="M61.275,17.91667l-11.10833,11.10833l56.975,56.975l-56.975,56.975l11.10833,11.10833l67.725,-68.08333z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default MovieFeature;
