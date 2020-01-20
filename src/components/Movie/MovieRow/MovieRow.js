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
  // Navigate Refs
  // Handle left and right second input to fix this bug in navaigation
  let focusedSection = 0;
  const focusInput = (id, direction) => {
    let highLimit = scrollerRefs.length - 1;
    let lowLimit = 0;

    // console.log("scrollerRefs", scrollerRefs);

    // Keep in Bounds Checks
    if (id <= lowLimit && direction === "left") {
      id = lowLimit;
      console.log(direction, id);
    } else if (id <= lowLimit && direction === "right") {
      id = lowLimit + 1;
      console.log(direction, id);
    } else if (id >= highLimit && direction === "right") {
      id = highLimit;
      console.log(direction, id);
    } else if (id >= highLimit && direction === "left") {
      id = highLimit - 1;
      console.log(direction, id);
    }

    scrollerRefs[id].scrollIntoView(); // Scroll selected section into view
    focusedSection = id; // Save focused section
  };

  // Define movie row sections as an array of sub arrays
  let numberOfMovieRowSections = 0;
  let movieRowSections = [];
  if (props.movies.length > 0) {
    let tempChunkSize = Math.floor((window.innerWidth - 100) / 200);
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
            style={{
              paddingLeft: Math.floor((window.innerWidth - 100) % 200) / 2,
              paddingRight: Math.floor((window.innerWidth - 100) % 200) / 2
            }}
            key={Math.random() * 10}
            ref={setRef}
          >
            {section.map(movie => {
              return (
                <MovieRowItem
                  key={Math.random() * 10}
                  movie={movie}
                  updateSelectedMovie={props.updateSelectedMovie}
                />
              );
            })}
          </div>
        );
      })
    ) : (
      <p>Loading</p>
    );

  return (
    <div className="movie-row-container">
    <span>{}</span>
      <div className="movie-row" style={{ width: window.innerWidth - 100 }}>
        <div className="leftArrow">
          {/* <span id="left" onClick={event => handleClick(event.target)}> */}
          <span
            id="left"
            onClick={() => focusInput(focusedSection - 1, "left")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 172 172"
              // style=" fill:#000000;"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                // style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                  <path d="M110.725,154.08333l11.10833,-11.10833l-56.975,-56.975l56.975,-56.975l-11.10833,-11.10833l-67.725,68.08333z"></path>
                </g>
              </g>
            </svg>
          </span>
        </div>
        <div className="movie-row-items-container">{movieRowItems}</div>
        <div className="rightArrow">
          <span
            id="right"
            onClick={() => focusInput(focusedSection + 1, "right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 172 172"
              // style=" fill:#000000;"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                // style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                  <path d="M61.275,17.91667l-11.10833,11.10833l56.975,56.975l-56.975,56.975l11.10833,11.10833l67.725,-68.08333z"></path>
                </g>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
