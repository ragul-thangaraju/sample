import { combineReducers } from "redux";
import { currentUser } from "./loginInReducer";

/**
 * Combining all objects to redux store
 */
export default combineReducers({
  currentUser,
});
