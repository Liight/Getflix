import * as actionTypes from "../actions/actionTypes";

const initialState = {
  updatedMovieListTopRated: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES:
      console.log(
        "reducer.updatedMovieListTopRated",
        action.updatedMovieListTopRated
      );
      return {
        ...state,
        updatedMovieListTopRated: action.updatedMovieListTopRated
      };
    default:
      return state;
  }
};

export default reducer;
