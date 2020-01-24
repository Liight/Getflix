import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

import './Modal.css';

const Modal = (props) => {

    const toggleModal = () => {
        props.onToggleModal()
    }

    let modal = props.showModal ? <div className="container" onClick={() => toggleModal()}></div> : null;
    
    return modal;
    
}

const mapStateToProps = state => {
  return {
    showModal: state.movies.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch(actions.toggleModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
