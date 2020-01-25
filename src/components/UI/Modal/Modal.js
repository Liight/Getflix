import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import "./Modal.css";

const Modal = props => {
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
        <div className="modal-inner-display-info">
          <div className="">{props.movie.title}</div>
          <div className="">{props.movie.adult}</div>
          <div className="">{props.movie.backdrop_path}</div>
          <div className="">{props.movie.belongs_to_collection}</div>
          <div className="">{props.movie.budget}</div>
          <div className="">{props.movie.homepage}</div>
          <div className="">{props.movie.id}</div>
          <div className="">{props.movie.imdb_id}</div>
          <div className="">{props.movie.original_language}</div>
          <div className="">{props.movie.original_title}</div>
          <div className="">{props.movie.overview}</div>
          <div className="">{props.movie.popularity}</div>
          <div className="">{props.movie.poster_path}</div>
          <div className="">{props.movie.release_date}</div>
          <div className="">{props.movie.revenue}</div>
          <div className="">{props.movie.runtime}</div>
          <div className="">{props.movie.status}</div>
          <div className="">{props.movie.tagline}</div>
          <div className="">{props.movie.title}</div>
          <div className="">{props.movie.video}</div>
          <div className="">{props.movie.vote_average}</div>
          <div className="">{props.movie.vote_count}</div>
          <div className="">{props.movie.posterUrl}</div>

          <div className="">
            {props.movie.genres.map(g => {
              console.log(g);
              return <div className="">{"Genres"}</div>;
            })}
          </div>

          <div className="">
            {props.movie.production_companies.map(g => {
              console.log(g);
              return <div className="">{"production_companies"}</div>;
            })}
          </div>

          <div className="">
            {props.movie.production_countries.map(g => {
              console.log(g);
              return <div className="">{"production_countries"}</div>;
            })}
          </div>

          <div className="">
            {props.movie.spoken_languages.map(g => {
              console.log(g);
              return <div className="">{"spoken_languages"}</div>;
            })}
          </div>

        </div>
        <div className="modal-inner-display-image">
          <img src={""} alt=""></img>
        </div>
      </div>
    </div>
  ) : null;

  return modal;
};

const mapStateToProps = state => {
  return {
    showModal: state.movies.showModal,
    movie: state.movies.modalMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch(actions.toggleModal()),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
