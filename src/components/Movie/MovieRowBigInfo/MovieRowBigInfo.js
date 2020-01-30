import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import "./MovieRowBigInfo.css";

class MovieRowBigInfo extends Component {
  state = {};

  render() {
    // console.log(
    //   " movie row big info rendered",
    //   "key from movie rows display ",
    //   this.props.thisRowsBigInfoKey,
    //   "global state active key ",
    //   this.props.activeBigInfoKey,
    //   this.props.movie
    // );

    let BigInfo =
      this.props.movie === "" ||
      this.props.thisRowsBigInfoKey !== this.props.activeBigInfoKey ? (
        <div className="movie-row-big-info-wrapper no-reveal"></div>
      ) : (
        <div className="movie-row-big-info-wrapper">
          <div
            className="movie-row-big-info-container reveal"
            // style={{ width: dims.featureWidth, left: dims.offSetButtonWidth }}
          >
            <div
              className="info-column"
              // style={{
              //   width: dims.column60Width
              // }}
            >
              <div className="info-column-top">
                <div className="table-container">
                  <div className="row ">
                    <span className="title-text">{this.props.movie.title}</span>
                  </div>

                  <div className="row-multiLine">
                    <div className="multiLine-group">
                      <div className="row-multiLine-item">
                        {/* {props.movie.status + " "} */}
                        <span className="main-text">
                          {this.props.movie.release_date.length > 0
                            ? this.props.movie.release_date.slice(0, 4) + " "
                            : null}
                        </span>
                      </div>

                      <div className="row-multiLine-item ">
                        <span className="main-text">
                          {this.props.movie.runtime + " mins"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <span className="main-text">
                      {this.props.movie.genres.slice(0, 4).map(g => {
                        return (
                          <span key={Math.random() * 1000}>
                            {g.name + ", "}
                          </span>
                        );
                      })}
                    </span>
                  </div>

                  <div className="row ">
                    <span className="main-text subText">
                      {this.props.movie.overview}
                    </span>
                  </div>

                  <div className="movie-row-big-info-button-row">
                    <div
                      className="movie-row-big-info-button"
                      onClick={() => {
                        this.props.onToggleModal(this.props.movie);
                        this.props.onToggleGlobalScrollbars();
                      }}
                    >
                      <span className="button-text">More Info</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="image-column"
              // style={{ width: dims.column40Width }}
            >
              <img
                src={this.props.movie.posterUrl}
                alt=""
                height="auto"
                width="100%"
                style={{ maxHeight: "800px", maxWidth: "400px" }}
              />
            </div>
          </div>
        </div>
      );

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
    onToggleModal: movie => dispatch(actions.toggleModal(movie)),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieRowBigInfo);
