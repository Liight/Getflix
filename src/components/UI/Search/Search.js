import React, { Component } from "react";
import { connect } from "react-redux";
import "./Search.css";
import * as actions from "../../../store/actions";

class Search extends Component {
  state = {
    inputText: ""
  };
  changeHandler = str => {
    this.setState({ inputText: str });
  };
  startModal = () => {
    this.props.onGetSearch(this.state.inputText);
    setTimeout(() => {
      console.log('searched movie ::: ', this.props.searchedMovie)
      if (!this.props.searchedMovie.Title){
      } else {
        this.props.onToggleModal(this.props.searchedMovie);
        this.props.onToggleGlobalScrollbars();
      }
    }, 1000);
  };

  render() {
    return (
      <div className="search-container-outer">
        <div className="search-container-inner">
          <div className="icon-container" onClick={() => this.startModal()}>
            <span style={{ color: "white" }}>O\</span>
          </div>
          <div className="search-box">
            <input onChange={event => this.changeHandler(event.target.value)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeBigInfoKey: state.movies.activeBigInfoKey,
    searchedMovie: state.movies.searchedMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSearch: movieNameAsString =>
      dispatch(actions.getSingleMovie(movieNameAsString)),
    onToggleModal: movie => dispatch(actions.toggleModalFromSearch(movie)),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
