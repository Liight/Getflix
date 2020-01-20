import React from 'react';
import './MovieRowItem.css';


/// props: movie
const MovieRowItem = (props) => {
    return (
      <div className="movie-row-item-container">
        <div
          className="movie-row-item"
          key={Math.random() * 10}
        >
          <p>{props.movie.title}</p>
          <p>{props.movie.overview}</p>
          <img
            src={props.movie.posterUrl}
            width={"auto"}
            height={"100px"}
            alt=""
          ></img>
        </div>
      </div>
    );
}

export default MovieRowItem;
