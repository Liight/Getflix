import React, { Component } from "react";
import "./MovieFeature.css";

import MovieFeatureInfo from "../../components/Movie/MovieFeatureInfo/MovieFeatureInfo";

import * as dims from "../../utility/dimensions";

class MovieFeature extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    movieList: this.props.movieList,
    thisNode: null,
  };

  componentWillMount() {
    this.setState(prevState => {
      return { ...prevState, thisNode: this.myRef.current };
    });
  }

  componentDidMount() {
    if (this.state.autoNextFeatureSlider) {
      this.setAutoNextFeatureOn();
    }
    // console.log("this.state.thisNode", this.state.thisNode);
  }

  focusInput = direction => {
    const node = this.myRef.current;
    if (direction === "right") {
      node.scrollLeft += Math.floor(dims.windowWidth);
    } else if (direction === "left") {
      node.scrollLeft -= Math.floor(dims.windowWidth);
    }
  };

  render() {
    let movieList = this.state.movieList;

    let movieListComponents = movieList.map(movie => {
      return (
        <MovieFeatureInfo
          movie={movie}
          key={Math.random() * 1000}
          style={{ width: "100%" }}
        />
      );
    });

    return (
      <div className="movie-feature-container" ref={this.myRef}>
        <div
          className="movie-feature-arrow movie-feature-arrow-left"
          onClick={event => this.focusInput("left")}
          style={{
            width: dims.buttonWidth
          }}
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

        <div className="movie-feature-row">{movieListComponents}</div>
        {/* Movies End */}
        <div
          className="movie-feature-arrow movie-feature-arrow-right"
          onClick={event => this.focusInput("right")}
          style={{ width: dims.buttonWidth }}
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
