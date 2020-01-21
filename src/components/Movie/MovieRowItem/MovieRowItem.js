import React from "react";
import "./MovieRowItem.css";

/// props: movie
const MovieRowItem = props => {
  console.log('props : scale : ', props.scaleOnHover)
  return (
    <div className="movie-row-item-container">
      <div
        className={
          props.scaleOnHover
            ? "movie-row-item scale-up"
            : "movie-row-item"
        }
        key={Math.random() * 10}
        onClick={() => props.updateSelectedMovie(props.movie)}
      >
        <div className="movie-row-item-image">
          <img
            src={props.movie.posterUrl}
            alt=""
            height="300"
            width="200"
          ></img>
          <div className="clicker">V</div>
        </div>

        <div className="movie-row-item-areaHolder">
          {/* <div className="clicker">V</div> */}
        </div>
      </div>
    </div>
  );
};

export default MovieRowItem;
