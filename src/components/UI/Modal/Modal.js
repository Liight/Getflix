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
            <span className="modal-title">{props.addMovieInfo.Title}</span>
          </div>
          <div className="modal-double-column">
            <div className="modal-inner-display-info">
              {/** Description */}
              <div className="modal-flex-row modal-text-center">
                <span className="modal-text ">{props.addMovieInfo.Awards}</span>
              </div>
              <div className="modal-flex-row">
                <span className="modal-text">{props.addMovieInfo.Plot}</span>
              </div>
              {/** Modal MultiLine */}
              <div className="modal-multiLine">
                <div className="modal-multiline-item">
                  <span className="modal-text">{props.addMovieInfo.Year}</span>
                </div>

                <div className="modal-multiline-item">
                  <span className="modal-text">
                    {props.addMovieInfo.Runtime}
                  </span>
                </div>
              </div>
              <div className="modal-flex-row">
                <span className="modal-text">{props.addMovieInfo.Genre}</span>
              </div>
              {/** Modal multiLine ends */}
              {/** Cast */}
              <div className="modal-flex-row ">
                <span className="modal-text">
                  {"Directed by: " + props.addMovieInfo.Director}
                </span>
              </div>
              <div className="modal-flex-row ">
                <span className="modal-text">
                  {"Writers: " + props.addMovieInfo.Writer}
                </span>
              </div>
              <div className="modal-flex-row ">
                <span className="modal-text">
                  {"Cast: " + props.addMovieInfo.Actors}
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
              <span className="modal-text">Ratings</span>
            </div>
          </div>
          {/** Video */}
          <div className="modal-flex-row">
            <div className="modal-video">
              <span className="modal-text">Video</span>
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
