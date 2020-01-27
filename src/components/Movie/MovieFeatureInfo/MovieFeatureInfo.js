import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";
import "./MovieFeatureInfo.css";

const MovieFeatureInfo = props => {
  return (
    <div
      className="movie-feature-info-container"
      style={{ width: window.innerWidth }}
    >
      <div
        className="movie-feature-info-column"
        style={{ paddingLeft: window.innerWidth / 12 }}
      >
        <div className="table-container">
          <div className="movie-feature-row ">
            <span className="movie-feature-title">{props.movie.title}</span>
          </div>
          <div className="movie-feature-row ">
            <span className="movie-feature-tagline">{props.movie.tagline}</span>
          </div>

          <div className="movie-feature-row-multiLine">
            <div className="movie-feature-row-multiLine-item">
              {/* {props.movie.status + " "} */}
              <span className=" movie-feature-release-date">
                {props.movie.release_date.length > 0
                  ? props.movie.release_date.slice(0, 4) + " "
                  : null}
              </span>
            </div>
            <div className="movie-feature-row-multiLine-item ">
              <span className="movie-feature-runtime">
                {props.movie.runtime + " mins"}
              </span>
            </div>
            <div className="movie-feature-row-multiLine-item">
              <span className="movie-feature-genres">
                {props.movie.genres.slice(0, 4).map(g => {
                  return <span key={Math.random() * 100}>{g.name + ", "}</span>;
                })}
              </span>
            </div>
          </div>

          <div className="movie-feature-row ">
            <span className="movie-feature-overview">
              {props.movie.overview}
            </span>
          </div>

          <div className="movie-feature-row button-row">
            <div
              className="button"
              onClick={() => {
                props.onToggleModal(props.movie);
                props.onToggleGlobalScrollbars();
              }}
            >
              <span className="button-text">More Info</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="movie-feature-image-column"
        style={{ paddingRight: window.innerWidth / 12 }}
      >
        <img src={props.movie.posterUrl} alt="" height="100%" width="auto" />
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(MovieFeatureInfo);
