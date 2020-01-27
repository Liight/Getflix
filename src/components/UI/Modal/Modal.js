import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import "./Modal.css";

const Modal = props => {
  console.log("MODAL PROPS :: ", props);
  console.log(props.addMovieInfo);

  const toggleModal = () => {
    props.onToggleModal(null);
    props.onToggleGlobalScrollbars();
  };

  if(props.addMovieInfo === undefined){
    alert('movie not found')
  }

  let modal = props.showModal ? (
    <div className="modal-container">
      <div
        className="modal-close-button"
        style={{ fontSize: "2em", color: "white" }}
        onClick={() => toggleModal()}
      >
        X
      </div>
      <div className="modal-inner-display">
        <div className="modal-column">
          <div className="title-row">
            <span className="modal-title">
              {props.addMovieInfo.Title
                ? props.addMovieInfo.Title
                : props.movie.title}
            </span>
          </div>
          <div className="modal-double-column">
            <div className="modal-inner-display-info">
              {/** Description */}
              <div className="modal-flex-row modal-text-center">
                <span className="modal-text ">
                  {props.addMovieInfo.Awards ? props.addMovieInfo.Awards : null}
                </span>
              </div>
              <div className="modal-flex-row">
                <span className="modal-text">
                  {props.addMovieInfo.Plot
                    ? props.addMovieInfo.Plot
                    : props.movie.overview}
                </span>
              </div>
              {/** Modal MultiLine */}
              <div className="modal-multiLine">
                <div className="modal-multiline-item">
                  <span className="modal-text">
                    {props.addMovieInfo.Year
                      ? props.addMovieInfo.Year
                      : props.movie.release_date.slice(0, 4)}
                  </span>
                </div>

                <div className="modal-multiline-item">
                  <span className="modal-text">
                    {props.addMovieInfo.Runtime
                      ? props.addMovieInfo.Runtime
                      : props.movie.runtime + " mins"}
                  </span>
                </div>
              </div>
              <div className="modal-flex-row">
                <span className="modal-text">
                  {props.addMovieInfo.Genre
                    ? props.addMovieInfo.Genre
                    : props.movie.genres.map(g => {
                        return <span>{g.name + ", "}</span>;
                      })}
                </span>
              </div>
              {/** Modal multiLine ends */}
              {/** Cast */}
              <div className="modal-flex-row ">
                <span className="modal-text">
                  {"Directed by: " + props.addMovieInfo.Director
                    ? props.addMovieInfo.Director
                    : null}
                </span>
              </div>
              <div className="modal-flex-row ">
                <span className="modal-text">
                  {"Writers: " + props.addMovieInfo.Writer
                    ? props.addMovieInfo.Writer
                    : null}
                </span>
              </div>
              <div className="modal-flex-row ">
                <span className="modal-text">
                  {"Cast: " + props.addMovieInfo.Actors ? props.addMovieInfo.Actors : null}
                </span>
              </div>
            </div>

            <div className="modal-inner-display-image">
              <img src={props.movie.posterUrl} alt=""></img>
            </div>
          </div>
          {/** Ratings */}
          <div className="modal-flex-row">
            <div className="modal-ratings">
              {props.addMovieInfo.Ratings !== undefined
                ? props.addMovieInfo.Ratings.map(item => {
                    return (
                      <div className="modal-ratings-item">
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
                width={window.innerWidth / 1.3}
                height={(window.innerWidth / 1.3) * 0.6}
                src={
                  "https://www.youtube.com/embed/" +
                  props.movie.videos.results[0].key
                }
              ></iframe>
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
    addMovieInfo: state.movies.modalMovieAddInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch(actions.toggleModal()),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
