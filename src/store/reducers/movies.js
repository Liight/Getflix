import * as actionTypes from "../actions/actionTypes";

const initialState = {
  updatedMovieListTopRated: [],
  updatedMovieListSomeOther: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_RATED_MOVIES:
      console.log(
        "reducer.updatedMovieListTopRated",
        action.updatedMovieListTopRated
      );
      return {
        ...state,
        updatedMovieListTopRated: action.updatedMovieListTopRated
      };
    case actionTypes.GET_SOME_OTHER_MOVIES:
      console.log(
        "reducer.updatedMovieListSomeOther",
        action.updatedMovieListSomeOther
      );
      return {
        ...state,
        updatedMovieListTopRated: action.updatedMovieListSomeOther
      };
    default:
      return state;
  }
};

export default reducer;
