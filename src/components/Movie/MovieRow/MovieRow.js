import React from "react";
import "./MovieRow.css";

import MovieRowItem from "../MovieRowItem/MovieRowItem";

// props: movieList

const MovieRow = props => {
  console.log("props", props);

  const handleClick = e => {
    console.log(e.id);
    switch(e.id){
        case "left":

            break;
        case "right":
                
            break;
        default: 
        return;
    }
  };

  let movieRowItems =
    props.movies.length > 0 ? (
      props.movies.map(movie => {
        return <MovieRowItem key={movie.id} movie={movie} />;
      })
    ) : (
      <p>Loading</p>
    );

  return (
    <div className="movie-row-container">
      <div className="movie-row">
        <div className="leftArrow">
          <span id="left" onClick={(event) => handleClick(event.target)}>
            leftArrow
          </span>
        </div>
        <div className="movie-row-items-container">{movieRowItems}</div>
        <div className="rightArrow">
          <span id="right" onClick={event => handleClick(event.target)}>
            rightArrow
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
