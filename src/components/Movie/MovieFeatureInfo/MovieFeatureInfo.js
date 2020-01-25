import React from "react";
import "./MovieFeatureInfo.css";

const MovieFeatureInfo = props => {
  return (
    <div
      className="movie-feature-info-container"
      style={
        {
          // backgroundImage: "url(" + props.movie.posterUrl + ")",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "",
        }
      }
    >
      <div
        className="movie-feature-info-column"
        style={{ paddingLeft: window.innerWidth / 12 }}
      >
        <div class="table-container" role="table" aria-label="Destinations">
          <div class="flex-row title">{props.movie.title}</div>
          <div class="flex-row tagline">{props.movie.tagline}</div>

          <div class="flex-row multi-on-line">
            <div class="flex-row status">
              {props.movie.status + " "}
              {props.movie.release_date.length > 0
                ? props.movie.release_date.slice(0, 4) + " "
                : null}
            </div>
            <div class="flex-row runtime">
              {" " + props.movie.runtime + "mins"}
            </div>
            <div class="flex-row rating">
              {"popularity: " + props.movie.popularity}
            </div>
            <div class="flex-row rating">
              {"voteAv: " + props.movie.vote_average}
            </div>
          </div>

          <div class="flex-row overview">{props.movie.overview}</div>
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

export default MovieFeatureInfo;
