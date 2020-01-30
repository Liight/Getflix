import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import * as dims from "../../../utility/dimensions";

import "./Modal.css";

const Modal = props => {
  console.log("MODAL PROPS :: ", props);
  // console.log(props.addMovieInfo);

  const toggleModal = () => {
    props.onToggleModal(null);
    props.onToggleGlobalScrollbars();
  };

  if (props.addMovieInfo === undefined) {
    alert("movie not found");
  }

  let modal = props.showModal ? (
    <div className="modal-container">
      <div
        className="modal-close-button"
        style={{
          fontSize: "2em",
          height: (dims.windowWidth / 100) * 8
        }}
        onClick={() => toggleModal()}
      >
        X
      </div>
      <div className="modal-inner-display">
        <div className="modal-column">
          <div className="title-row">
            <span className="modal-title-text">
              {props.addMovieInfo.Title !== null
                ? props.addMovieInfo.Title
                : props.movie.title !== null
                ? props.movie.title
                : props.searchedMovie.Title !== null
                ? props.searchedMovie.Title
                : null}
            </span>
          </div>
          <div className="modal-double-column">
            <div className="modal-inner-display-info">
              {/** Description */}
              <div className="modal-flex-row modal-text-center">
                <span className="modal-ratings-text">
                  {props.addMovieInfo.Awards !== null
                    ? props.addMovieInfo.Awards
                    : props.movie.title !== null
                    ? props.movie.title
                    : props.searchedMovie.Title !== null
                    ? props.searchedMovie.Title
                    : null}
                </span>
              </div>
              <div className="modal-flex-row">
                <span className="main-text subText">
                  {props.addMovieInfo.Plot !== null
                    ? props.addMovieInfo.Plot
                    : props.movie.overview !== null
                    ? props.movie.overview
                    : props.searchedMovie.Plot
                    ? props.searchedMovie.Plot
                    : null}
                </span>
              </div>
              {/** Modal MultiLine */}
              <div className="modal-multiLine">
                <div className="modal-multiline-item">
                  <span className="main-text">
                    {props.addMovieInfo.Year !== null
                      ? props.addMovieInfo.Year
                      : props.movie.release_date !== null
                      ? props.movie.release_date.slice(0, 4)
                      : props.searchedMovie.Year !== null
                      ? props.searchedMovie.Year
                      : null}
                  </span>
                </div>

                <div className="modal-multiline-item">
                  <span className="main-text">
                    {props.addMovieInfo.Runtime !== null
                      ? props.addMovieInfo.Runtime
                      : props.movie.runtime !== null
                      ? props.movie.runtime + " mins"
                      : props.searchedMovie.Runtime !== null
                      ? props.searchedMovie.Runtime
                      : null}
                  </span>
                </div>
              </div>
              <div
                className="modal-flex-row"
                style={{ justifyContent: "center"}}
              >
                <span className="main-text subText">
                  {props.addMovieInfo.Genre !== null
                    ? props.addMovieInfo.Genre
                    : props.searchedMovie.Genre !== null
                    ? props.searchedMovie.Genre
                    : props.movie.genres !== null
                    ? props.movie.genres.map(g => {
                        return <span>{g.name + ", "}</span>;
                      })
                    : null}
                </span>
              </div>
              {/** Modal multiLine ends */}
              {/** Cast */}
              <div className="modal-flex-row ">
                <span className="main-text subText">
                  {props.addMovieInfo.Director !== null
                    ? "Directed by: " + props.addMovieInfo.Director
                    : props.searchedMovie.Director !== null
                    ? props.searchedMovie.Director
                    : null}
                </span>
              </div>
              <div className="modal-flex-row ">
                <span className="main-text subText">
                  {props.addMovieInfo.Writer !== null
                    ? "Writers: " + props.addMovieInfo.Writer
                    : props.searchedMovie.Writer !== null
                    ? props.searchedMovie.Writer
                    : null}
                </span>
              </div>
              <div className="modal-flex-row ">
                <span className="main-text subText">
                  {props.addMovieInfo.Actors !== null
                    ? "Cast: " + props.addMovieInfo.Actors
                    : props.searchedMovie.Actors !== null
                    ? props.searchedMovie.Actors
                    : null}
                </span>
              </div>
            </div>

            <div className="modal-inner-display-image">
              <img
                src={
                  props.movie.posterUrl 
                    ? props.movie.posterUrl
                    : props.searchedMovie.Poster !== null
                    ? props.searchedMovie.Poster
                    : null
                }
                alt=""
              ></img>
            </div>
          </div>
          {/** Ratings */}
          <div className="modal-flex-row" style={{ justifyContent: "center"}}>
            <div className="modal-ratings">
              {props.addMovieInfo !== null &&
              props.addMovieInfo.Ratings !== undefined &&
              props.addMovieInfo.Ratings !== null
                ? props.addMovieInfo.Ratings.map(item => {
                    return (
                      <div className="modal-ratings-item">
                        <span className="modal-ratings-text">{item.Value}</span>
                        <span
                          className="modal-ratings-text"
                          style={{ lineHeight: 1 }}
                        >
                          {item.Source}
                        </span>
                      </div>
                    );
                  })
                : props.searchedMovie !== null &&
                  props.searchedMovie.Ratings !== undefined &&
                  props.searchedMovie.Ratings !== null
                ? props.searchedMovie.Ratings.map(item => {
                    return (
                      <div
                        className="modal-ratings-item"
                        key={Math.random() * 1000}
                      >
                        <span className="modal-ratings-text">{item.Value}</span>
                        <span className="modal-ratings-text">
                          {item.Source}
                        </span>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          {/** Video */}
          <div className="modal-flex-row">
            <div className="modal-video">
              <iframe
                title="videoPlayer"
                width={window.innerWidth / 1.6}
                height={(window.innerWidth / 1.6) * 0.6}
                src={
                  props.movie.videos
                    ? "https://www.youtube.com/embed/" +
                      props.movie.videos.results[0].key
                    : null
                }
              ></iframe>
            </div>
          </div>
          <div className="modal-flex-row">
            <div className="modal-bottom-info">
              <div className="modal-flex-row">
                <span className="modal-bottom-info-text">Info</span>
              </div>
              <span className="modal-bottom-info-text">Info</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return modal;
};

const mapStateToProps = state => {
  return {
    showModal: state.movies.showModal,
    movie: state.movies.modalMovie,
    addMovieInfo: state.movies.modalMovieAddInfo,
    searchedMovie: state.movies.searchedMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch(actions.toggleModal()),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
