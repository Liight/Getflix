import React from "react";
import "./MovieFeatureInfo.css";

const MovieFeatureInfo = props => {
  return (
    <div className="movie-feature-info-container">
      <div
        className="movie-feature-info-column"
        style={{ paddingLeft: window.innerWidth / 12 }}
      >
        <span className="movie-feature-title">{props.movie.title}</span>
        <span className="movie-feature-tagline">{props.movie.tagline}</span>
        <span>
          <span className="movie-feature-status">
            {props.movie.status + " "}
          </span>
          <span className="movie-feature-release-date">
            {props.movie.release_date.length > 0
              ? props.movie.release_date.slice(0, 4) + " "
              : null}
          </span>
          <span className="movie-feature-runtime">
            {" "}
            {props.movie.runtime} mins
          </span>
        </span>
        <span className="movie-feature-overview">{props.movie.overview}</span>
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

export default MovieFeatureInfo;
