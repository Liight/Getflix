import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";
import * as dims from "../../../utility/dimensions";
import "./MovieFeatureInfo.css";

const MovieFeatureInfo = props => {
  return (
    <div
      className="movie-feature-info-container"
      style={{
        width: dims.featureWidth,
        paddingLeft: dims.offSetButtonWidth,
        paddingRight: dims.offSetButtonWidth
      }}
    >
      <div
        className="movie-feature-info-column"
        style={{ width: dims.column60Width }}
      >
        <div className="table-container">
          <div className="movie-feature-row-multiLine">
            <span className="title-text">{props.movie.title}</span>

            <div className="movie-feature-row-multiLine">
              <div className="movie-feature-row-multiLine-item">
                {/* {props.movie.status + " "} */}
                <div className="multiLine-group">
                  <span className="main-text">
                    {props.movie.release_date.length > 0
                      ? props.movie.release_date.slice(0, 4) + " "
                      : null}
                  </span>

                  <span className="main-text">
                    {props.movie.runtime + " mins"}
                  </span>
                </div>
              </div>

              <div className="movie-feature-row-multiLine-item">
                <span className="main-text">
                  {props.movie.genres.slice(0, 4).map(g => {
                    return (
                      <span key={Math.random() * 100}>{g.name + ", "}</span>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="movie-feature-row ">
            <span className="main-text">{props.movie.overview}</span>
          </div>

          <div
            className="movie-feature-row button-row"
            style={{ width: dims.column60Width }}
          >
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
        style={{ width: dims.column40Width }}
      >
        <img
          src={props.movie.posterUrl}
          alt=""
          height="auto"
          width="100%"
          style={{ maxHeight: "500px", maxWidth: "250px" }}
        />
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
