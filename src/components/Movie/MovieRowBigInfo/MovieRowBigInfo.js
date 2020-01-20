import React from 'react';
import "./MovieRowBigInfo.css";

const MovieRowBigInfo = (props) => {
  console.log('movie in movieitem : ', props.movie)
    let display = null;
    if(props.movie !== "testing"){
        display = props.movie.title
    } else {
        display = "in testing mode"
    }

  return (
    <div className="movie-row-big-info-container">
      <p>MovieRowBIGINFO</p>
      <p>{display}</p>
    </div>
  );
};

export default MovieRowBigInfo;
