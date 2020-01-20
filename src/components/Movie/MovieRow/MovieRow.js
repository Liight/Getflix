import React, { useRef } from "react";
import "./MovieRow.css";

import MovieRowItem from "../MovieRowItem/MovieRowItem";

// props: movieList

const MovieRow = props => {
  console.log("props", props);

  // Dynamic Refs
  const ref = React.useRef(null);
  let scrollerRefs = [];
  const setRef = ref => {
    scrollerRefs.push(ref);
  };
  let focusedSection = 0;
  const focusInput = id => {
    console.log("scrollerRefs", scrollerRefs);
    if(id < 0){
      id = 0;
    } else if (id >= scrollerRefs.length - 1){
      id = scrollerRefs.length - 1;
    }
    scrollerRefs[id].scrollIntoView();
    focusedSection = id;
  };
  

  // Define movie row sections as an array of sub arrays
  let numberOfMovieRowSections = 0;
  let movieRowSections = [];
  if (props.movies.length > 0) {
    let tempChunkSize = 3;
    let chunk = (arr, chunkSize) => {
      var R = [];
      for (var i = 0, len = arr.length; i < len; i += chunkSize) {
        R.push(arr.slice(i, i + chunkSize));
        numberOfMovieRowSections += 1;
      }

      return R;
    };

    movieRowSections = chunk(props.movies, tempChunkSize);
    console.log("movieRowSections : FINAL : ", movieRowSections);
  }

  let movieRowItems =
    movieRowSections.length > 0 ? (
      movieRowSections.map((section, index) => {
        return (
          <div
            id={index.toString()}
            className="movie-row-section"
            key={Math.random() * 10}
            ref={setRef}
          >
            {section.map(movie => {
              return <MovieRowItem key={Math.random() * 10} movie={movie} />;
            })}
          </div>
        );
      })
    ) : (
      <p>Loading</p>
    );

  return (
    <div className="movie-row-container">
      <div className="movie-row">
        <div className="leftArrow">
          {/* <span id="left" onClick={event => handleClick(event.target)}> */}
          <span id="left" onClick={() => focusInput(focusedSection - 1)}>
            leftArrow
          </span>
        </div>
        <div className="movie-row-items-container">{movieRowItems}</div>
        <div className="rightArrow">
          <span id="right" onClick={() => focusInput(focusedSection+1)}>
            rightArrow
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
