import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import "./MovieRowBigInfo.css";

class MovieRowBigInfo extends Component {
  state = {};

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
        ? (console.log("else: dont show"),
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
                    <div class="table-container">
                      <div class="row ">
                        <span className="title">{this.props.movie.title}</span>
                      </div>
                      <div class="row ">
                        <span className="tagline">
                          {this.props.movie.tagline}
                        </span>
                      </div>

                      <div class="row-multiLine">
                        <div class="row-multiLine-item">
                          {/* {props.movie.status + " "} */}
                          <span className=" release-date">
                            {this.props.movie.release_date.length > 0
                              ? this.props.movie.release_date.slice(0, 4) + " "
                              : null}
                          </span>
                        </div>
                        <div class="row-multiLine-item ">
                          <span className="runtime">
                            {this.props.movie.runtime + " mins"}
                          </span>
                        </div>
                        <div className="row-multiLine-item">
                          <span className="genres">
                            {this.props.movie.genres.slice(0, 4).map(g => {
                              return <span key={Math.random() * 1000}>{g.name + ", "}</span>;
                            })}
                          </span>
                        </div>
                      </div>

                      <div class="row ">
                        <span className="overview">
                          {this.props.movie.overview}
                        </span>
                      </div>

                      <div class="row button-row">
                        <div
                          className="button"
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
                <div className="image-column">
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
    onToggleModal: movie => dispatch(actions.toggleModal(movie)),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieRowBigInfo);
