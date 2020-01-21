import React from 'react';
import './MovieFeature.css';

import MovieRowBigInfo from '../../components/Movie/MovieRowBigInfo/MovieRowBigInfo';

const MovieFeature = (props) => {

    let movie = props.movieList[0];

    return (
      <div className="container">
        <p>movie feature</p>
        <MovieRowBigInfo movie={movie} />
      </div>
    );
}

export default MovieFeature;
