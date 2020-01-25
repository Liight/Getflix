import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import "./MovieRowBigInfo.css";

class MovieRowBigInfo extends Component {
  state = {

  };

  render() {
    console.log(
      " movie row big info rendered",
      "key from movie rows display ",
      this.props.thisRowsBigInfoKey,
      "global state active key ",
      this.props.activeBigInfoKey,
      this.props.movie
    );

    let BigInfo =
      this.props.movie === "" ||
      this.props.thisRowsBigInfoKey !== this.props.activeBigInfoKey
        ? 
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
                    <div
                      class="table-container"
                      role="table"
                      aria-label="Destinations"
                    >
                      <div class="flex-row title">{this.props.movie.title}</div>
                      <div class="flex-row tagline">
                        {this.props.movie.tagline}
                      </div>

                      <div class="flex-row multi-on-line">
                        <div class="flex-row status">
                          {this.props.movie.status + " "}
                          {this.props.movie.release_date.length > 0
                            ? this.props.movie.release_date.slice(0, 4) + " "
                            : null}
                        </div>
                        <div class="flex-row runtime">
                          {" " + this.props.movie.runtime + "mins"}
                        </div>
                        <div class="flex-row rating">
                          {"popularity: " + this.props.movie.popularity}
                        </div>
                        <div class="flex-row rating">
                          {"voteAv: " + this.props.movie.vote_average}
                        </div>
                      </div>

                      <div class="flex-row overview">
                        {this.props.movie.overview}
                      </div>
                    </div>
                  </div>

                  <div className="info-column-bottom">
                    <button
                      style={{ height: "50px", width: "100px" }}
                      onClick={() => {
                        this.props.onToggleModal();
                        this.props.onToggleGlobalScrollbars();
                      }}
                    >
                      More Info
                    </button>
                  </div>
                </div>
                <div
                  className="image-column"
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
