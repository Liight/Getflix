import React from 'react';
import './MovieRowsDisplay.css';

import MovieRow from '../../components/Movie/MovieRow/MovieRow';


// props: movieList
const MovieRowsDisplay = (props) => {
    console.log('props', props)
    return (
        <div className="container">
            <MovieRow movies={props.movieList} />
        </div>
    );
}

export default MovieRowsDisplay;
