// Note: This reducer will also update localStorage
import * as actionTypes from "../actions/actionTypes";
import * as localStorageHandler from "../../utility/localStorage";

const initialState = {
  initialListsUpdatesComplete: false,
  updatedMovieListTopRated: [],
  updatedMovieListSomeOther: [],
  activeBigInfoKey: Number
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_RATED_MOVIES: // CASE
      localStorageHandler.setLocalStorage(
        "updatedMovieListTopRated",
        action.updatedMovieListTopRated
      );
      // console.log(
      //   "reducer updated movie list : ",
      //   action.updatedMovieListTopRated
      // );
      return {
        ...state,
        updatedMovieListTopRated: action.updatedMovieListTopRated
      };
    case actionTypes.GET_SOME_OTHER_MOVIES: // CASE
      localStorageHandler.setLocalStorage(
        "updatedMovieListSomeOther",
        action.updatedMovieListSomeOther
      );
      // console.log(
      //   "reducer.updatedMovieListSomeOther",
      //   action.updatedMovieListSomeOther
      // );
      return {
        ...state,
        updatedMovieListSomeOther: action.updatedMovieListSomeOther
      };
    case actionTypes.VERIFY_INITIAL_LIST_UPDATES_ARE_COMPLETE: // CASE
      // console.log("action.type", action.type);
      return {
        ...state,
        initialListsUpdatesComplete: true
      };
    case actionTypes.UPDATE_ACTIVE_BIG_INFO_KEY: // CASE
      console.log("action.type", action.type, "KEY: ", action.activeBigInfoKey);
      return {
        ...state,
        activeBigInfoKey: action.activeBigInfoKey
      };
    default:
      return state;
  }
};

export default reducer;
