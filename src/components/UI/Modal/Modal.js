import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import "./Modal.css";

const Modal = props => {
  const toggleModal = () => {
    props.onToggleModal();
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
          <h1>Title</h1>
          <p>Other stuff</p>
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
    showModal: state.movies.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch(actions.toggleModal()),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
