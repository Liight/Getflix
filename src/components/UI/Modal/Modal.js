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
              <div className="modal-flex-row modal-text">
                {"title: " + props.movie.title}
              </div>
              <div className="modal-flex-row modal-text">
                {"budget: " + props.movie.budget}
              </div>
              <div className="modal-flex-row modal-text">
                {"homepage: " + props.movie.homepage}
              </div>
              <div className="modal-flex-row modal-text">
                {"original language: " + props.movie.original_language}
              </div>
              <div className="modal-flex-row modal-text">
                {"original title: " + props.movie.original_title}
              </div>
              <div className="modal-flex-row modal-text">
                {"overview: " + props.movie.overview}
              </div>
              <div className="modal-flex-row modal-text">
                {"popularity: " + props.movie.popularity}
              </div>
              {/* <div className="">{props.movie.poster_path}</div> */}
              <div className="modal-flex-row modal-text">
                {"release date: " + props.movie.release_date}
              </div>
              <div className="modal-flex-row modal-text">
                {"revenue: " + props.movie.revenue}
              </div>
              <div className="modal-flex-row modal-text">
                {"runtime: " + props.movie.runtime}
              </div>
              <div className="modal-flex-row modal-text">
                {"status: " + props.movie.status}
              </div>
              <div className="modal-flex-row modal-text">
                {"tagline: " + props.movie.tagline}
              </div>
              {/* <div className="">{props.movie.video}</div> */}
              <div className="modal-flex-row modal-text">
                {"vote average: " + props.movie.vote_average}
              </div>
              <div className="modal-flex-row modal-text">
                {"vote count: " + props.movie.vote_count}
              </div>
              {/* <div className="">{props.movie.posterUrl}</div> */}

              <div className="modal-flex-row modal-text">
                {"Genres: "}
                {props.movie.genres.map(g => {
                  return <div className="">{g.name + ", "}</div>;
                })}
              </div>

              <div className="modal-flex-row modal-text">
                {"Production Companies: "}
                {props.movie.production_companies.map(pc => {
                  return <div className="">{pc.name + ", "}</div>;
                })}
              </div>

              <div className="modal-flex-row modal-text">
                {"Production Countries: "}
                {props.movie.production_countries.map(pc => {
                  return <div className="">{pc.name}</div>;
                })}
              </div>

              <div className="modal-flex-row modal-text">
                {"Spoken Languages: "}
                {props.movie.spoken_languages.map(sl => {
                  return <div className="">{sl.name + ", "}</div>;
                })}
              </div>
            </div>

            <div className="modal-inner-display-image">
              <img src={props.movie.posterUrl} alt=""></img>
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
