import * as actionTypes from "../actions/actionTypes";

const initialState = {
  updatedMovieList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES:
      console.log("reducer.updatedMovieList", action.updatedMovieList);
      return {
        ...state,
        updatedMovieList: [...state.updatedMovieList, action.updatedMovieList]
      };
    default:
      return state;
  }
};

export default reducer;
