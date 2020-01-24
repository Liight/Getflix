import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import "./MovieRowBigInfo.css";

class MovieRowBigInfo extends Component {
  state = {
    // thisInitialKey: this.props.activeBigInfoKey
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log("BIG INFO component should update");
  //   return nextProps.activeBigInfoKey === this.state.thisInitialKey;
  // };

  render() {
    console.log(
      " movie row big info rendered",
      "key from movie rows display ", this.props.thisRowsBigInfoKey,
      "global state active key ",this.props.activeBigInfoKey,
      // this.state.thisInitialKey,
      this.props.movie
    );

    let BigInfo =
      this.props.movie === "" ||
      this.props.thisRowsBigInfoKey !== this.props.activeBigInfoKey
        ? // this.props.thisRowsBigInfoKey !== this.props.activeBigInfoKey
          (console.log("else: dont show"),
          (<div className="movie-row-big-info-wrapper no-reveal"></div>))
        : (console.log("evaluating to show"),
          (
            <div className="movie-row-big-info-wrapper">
              <div className="movie-row-big-info-container reveal">
                <div
                  className="info-column"
                  style={{
                    paddingLeft: window.innerWidth / 12
                  }}
                >
                  <div className="info-column-top">
                    <span className="title">{this.props.movie.title}</span>
                    <span className="tagline">{this.props.movie.tagline}</span>
                    <span>
                      <span className="status">
                        {this.props.movie.status + " "}
                      </span>
                      {/* // Throws error here iterating over undefined */}
                      <span className="release-date">
                        {this.props.movie.release_date.length > 0
                          ? this.props.movie.release_date.slice(0, 4) + " "
                          : null}
                      </span>

                      <span className="runtime">
                        {" "}
                        {this.props.movie.runtime} mins
                      </span>
                    </span>
                    {/* <span>
            <span className="runtime"> budget ${this.props.movie.budget}</span>
            <span className="runtime"> revenue ${this.props.movie.revenue}</span>
          </span> */}
                    {/* <span className="runtime">{this.props.movie.runtime}</span> */}
                    <span className="overview">
                      {this.props.movie.overview}
                    </span>
                  </div>
                  <div className="info-column-bottom">
                    <button
                      style={{ height: "50px", width: "100px" }}
                      onClick={() => {this.props.onToggleModal(); this.props.onToggleGlobalScrollbars();}}
                    >
                      More Info
                    </button>
                  </div>
                </div>
                <div
                  className="image-column"
                  // style={{ backgroundImage: "url(" + this.props.movie.posterUrl + ")" }}
                >
                  <img
                    src={this.props.movie.posterUrl}
                    alt=""
                    height="100%"
                    width="auto"
                  />
                </div>
              </div>
            </div>
          ));

    return BigInfo;
  }
}

const mapStateToProps = state => {
  return {
    activeBigInfoKey: state.movies.activeBigInfoKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch(actions.toggleModal()),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieRowBigInfo);
