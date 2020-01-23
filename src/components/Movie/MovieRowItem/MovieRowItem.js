import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import "./MovieRowItem.css";

/// props: movie
const MovieRowItem = props => {
  // console.log('movie row item rendered', props)

  const updateParentStateAndGlobalState = (movie, rowKey) => {
    props.updateSelectedMovie(movie); // passed from parent
    console.log("movie row item updated movie  ", rowKey);
    props.onUpdateActiveBigInfoKey(rowKey);
    console.log("movie row item sent key ", rowKey);
  };

  // console.log('props : scale : ', props.scaleOnHover)
  return (
    <div className="movie-row-item-container">
      <div
        className={
          props.scaleOnHover ? "movie-row-item scale-up" : "movie-row-item"
        }
        key={Math.random() * 10000}
        onClick={() => 
          updateParentStateAndGlobalState(props.movie, props.thisRowsBigInfoKey)
        }
      >
        <div className="movie-row-item-image">
          <img
            src={props.movie.posterUrl}
            alt=""
            height="300"
            width="200"
          ></img>
          <div className={props.activeKey === props.thisRowsBigInfoKey ? "clicker" : "clicker-big"}>V</div>
        </div>

        <div className="movie-row-item-areaHolder">
          {/* <div className="clicker">V</div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeKey: state.movies.activeBigInfoKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateActiveBigInfoKey: key =>
      dispatch(actions.updateActiveBigInfoKey(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieRowItem);
