import * as actionTypes from "../actions/actionTypes";

const initialState = {
  scrollbarsVisible: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_GLOBAL_SCROLLBARS: // CASE
    console.log("TOGGLE_GLOBAL_SCROLLBARS in Reducer");
      return {
        ...state,
        scrollbarsVisible: !state.scrollbarsVisible
      };
    default:
      return state;
  }
};

export default reducer;
