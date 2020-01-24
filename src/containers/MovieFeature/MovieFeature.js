import React, { Component } from "react";
import "./MovieFeature.css";

import { CSSTransition } from "react-transition-group";

import MovieFeatureInfo from "../../components/Movie/MovieFeatureInfo/MovieFeatureInfo";

class MovieFeature extends Component {
  
  state = {
    movieList: this.props.movieList,
    currentMovie: 0,
    showFeature: true,
    animationSyncTimer:200,
    transitionDirection: "example",
    autoNextFeatureSlider: false
  };

  componentDidMount() {
    if (this.state.autoNextFeatureSlider) {
      this.setAutoNextFeatureOn();
    }
  }

  setAutoNextFeatureOn = () => {
    setInterval(() => {
      this.nextMovie();
    }, 5000);
  };

  nextMovie = () => {
    // Increments state.currentMovie by 1
    this.setState(
      prevState => {
        return {
          ...prevState,
          showFeature: false,
          transitionDirection: "example-right"
        };
      },
      () => {
        setTimeout(() => {
          if (this.state.currentMovie === this.state.movieList.length - 1) {
            this.setState(prevState => {
              return {
                ...prevState,
                currentMovie: 0,
                showFeature: true
              };
            });
          } else {
            this.setState(prevState => {
              return {
                ...prevState,
                currentMovie: this.state.currentMovie + 1,
                showFeature: true
              };
            });
          }
        }, this.state.animationSyncTimer);
      }
    );
  };

  prevMovie = () => {
    // Decreases state.currentMovie by 1
    this.setState(
      prevState => {
        return {
          ...prevState,
          showFeature: false,
          transitionDirection: "example"
        };
      },
      () => {
        setTimeout(() => {
          if (this.state.currentMovie === 0) {
            this.setState(prevState => {
              return {
                ...prevState,
                currentMovie: this.state.movieList.length - 1,
                showFeature: true
              };
            });
          } else {
            this.setState(prevState => {
              return {
                ...prevState,
                currentMovie: this.state.currentMovie - 1,
                showFeature: true
              };
            });
          }
        }, this.state.animationSyncTimer);
      }
    );
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
        {/* Movie */}

        <CSSTransition
          in={this.state.showFeature}
          classNames={this.state.transitionDirection}
          timeout={this.state.animationSyncTimer}
        >
          <MovieFeatureInfo movie={movie} key={Math.random() * 1000} />
        </CSSTransition>

        {/* Movie End */}
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
