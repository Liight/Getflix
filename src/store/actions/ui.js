import * as actionTypes from "./actionTypes";

export const toggleGlobalScrollbars = () => {
    console.log("TOGGLE_GLOBAL_SCROLLBARS in Actions");
  return {
    type: actionTypes.TOGGLE_GLOBAL_SCROLLBARS,
  };
};