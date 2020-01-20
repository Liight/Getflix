import React from 'react';
import './MovieRowsDisplay.css';

import MovieRow from '../../components/Movie/MovieRow/MovieRow';
import MovieRowBigInfo from '../../components/Movie/MovieRowBigInfo/MovieRowBigInfo';

// props: movieList
const MovieRowsDisplay = (props) => {

    console.log('props', props)

    return (
      <div className="container">
        <MovieRow movies={props.movieList} />
        <MovieRowBigInfo movie={"not-testing"} />
        <MovieRowBigInfo movie={"testing"} />
      </div>
    );
}

export default MovieRowsDisplay;
