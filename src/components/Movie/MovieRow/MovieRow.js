import React from "react";
import "./MovieRow.css";

import MovieRowItem from '../MovieRowItem/MovieRowItem';

// props: movieList

const MovieRow = props => {
    console.log('props', props);


  let movieRow =
    props.movies.length > 0 ? (
      props.movies.map(movie => {
        return (
            <MovieRowItem movie={movie}/>
        //   <div id="movie-row-item" key={Math.random() * 10}>
        //     <p>{movie.title}</p>
        //     <p>{movie.overview}</p>
        //     <img
        //       src={movie.posterUrl}
        //       width={"auto"}
        //       height={"100px"}
        //       alt=""
        //     ></img>
        //   </div>
        );
      })
    ) : (
      <p>Loading</p>
    );

  return <div className="container">{movieRow}</div>;
};

export default MovieRow;
