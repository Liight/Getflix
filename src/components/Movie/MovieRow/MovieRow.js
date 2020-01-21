import React from "react";
import "./MovieRow.css";

import MovieRowItem from "../MovieRowItem/MovieRowItem";

// props: movieList

const MovieRow = props => {
  console.log("props", props);

  // Dynamic Refs
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
        numberOfMovieRowSections = numberOfMovieRowSections + 1;
      }

      return R;
    };

    movieRowSections = chunk(props.movies, tempChunkSize);

    // Check for correct items per section
    let check = _movieRowSections => {
      if (
        _movieRowSections[0].length !==
        _movieRowSections[_movieRowSections.length - 1].length
      ) {
        let additionalChunkLength =
          _movieRowSections[0].length -
          _movieRowSections[_movieRowSections.length - 1].length;
        // generate empty objects
        let additionalChunk = {};
        // push changes to array
        for (let j = 0; j < additionalChunkLength; j++) {
          _movieRowSections[_movieRowSections.length - 1].push(additionalChunk);
        }
        _movieRowSections[_movieRowSections.length - 1].push();
      }
    };
    check(movieRowSections);

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
              paddingLeft: "40px",
              paddingRight: "40px"
              // width:
              //   Math.floor((window.innerWidth))
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
    <div className="movie-row-container" style={{ width: window.innerWidth }}>
      <span
        style={{
          color: "white",
          paddingLeft:
            Math.floor((window.innerWidth - 100) / movieRowSections[0].length) /
            2,
          fontSize: "2em"
        }}
      >
        {"category listing"}
      </span>
      <div className="movie-row" style={{ width: window.innerWidth - 200 }}>
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
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
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
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
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
