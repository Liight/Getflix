import React from "react";
import "./MovieRowItem.css";

/// props: movie
const MovieRowItem = props => {
  return (
    <div className="movie-row-item-container">
      <div
        className="movie-row-item"
        key={Math.random() * 10}
        onClick={() => props.updateSelectedMovie(props.movie)}
      >
        <div className="movie-row-item-image">
          <img src={props.movie.posterUrl} alt="" height="300" width="200"></img>
        </div>

        <div className="movie-row-item-info">
          {/* <p>{props.movie.title}</p> */}
        </div>
      </div>
    </div>
  );
};

export default MovieRowItem;
