import React from 'react';
import "./MovieRowBigInfo.css";

const MovieRowBigInfo = (props) => {
  console.log('movie in movieitem : ', props.movie)

  return (
    <div className="movie-row-big-info-container">
      <p>MovieRowBIGINFO</p>
      <p>{props.movie.title}</p>
      <p>{props.movie.release_date}</p>
      <p>{props.movie.status}</p>
      <p>{props.movie.tagline}</p>
      <p>{props.movie.runtime}</p>
      <p>{props.movie.overview}</p>
    </div>
  );
};

export default MovieRowBigInfo;
