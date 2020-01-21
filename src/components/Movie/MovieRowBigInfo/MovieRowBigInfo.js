import React from "react";
import "./MovieRowBigInfo.css";

const MovieRowBigInfo = props => {
  console.log("movie in movieitem : ", props.movie);
  if (props.movie === "") {
    return <div className="movie-row-big-info-wrapper no-reveal"></div>
  } else {
    return (
      <div className="movie-row-big-info-wrapper">
        <div className="movie-row-big-info-container reveal">
          <div
            className="info-column"
            style={{
              paddingLeft: window.innerWidth / 12
            }}
          >
            <span className="title">{props.movie.title}</span>
            <span className="tagline">{props.movie.tagline}</span>
            <span>
              <span className="status">{props.movie.status + " "}</span>
              <span className="release-date">
                {props.movie.release_date.length > 0
                  ? props.movie.release_date.slice(0, 4) + " "
                  : null}
              </span>
              <span className="runtime"> {props.movie.runtime} mins</span>
            </span>
            {/* <span>
            <span className="runtime"> budget ${props.movie.budget}</span>
            <span className="runtime"> revenue ${props.movie.revenue}</span>
          </span> */}
            {/* <span className="runtime">{props.movie.runtime}</span> */}
            <span className="overview">{props.movie.overview}</span>
          </div>
          <div
            className="image-column"
            // style={{ backgroundImage: "url(" + props.movie.posterUrl + ")" }}
          >
            <img
              src={props.movie.posterUrl}
              alt=""
              height="100%"
              width="auto"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default MovieRowBigInfo;
