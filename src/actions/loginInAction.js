import { API_ENDPOINT } from "../config";
import Client from "../utils/AxiosInstance";
import { myLog } from "../utils/Utility";
import { ACTION_TYPES } from "./types";
import store from "store";
import moment from "moment";

/**
 * Authenticate user using email/username and password
 * @param {String} username
 * @param {String} password
 * @param {Function} callback
 */
export const authenticate = (email, password, callback) => {
  return async (dispatch) => {
    try {
      const response = await Client.post(API_ENDPOINT.LOGIN, {
        email,
        password,
        device: {},
      });
      myLog(response, "---login response----");
      if (response.code === 0) {
        myLog("success", "---login response----");
        /**
         * Dispatch authenticated user data to reducer
         */
        dispatch({
          type: ACTION_TYPES.SET_AUTH_TOKENS,
          payload: response.data,
        });
        store.set("userSession", response);
        store.set("sessionTill", moment().add(20, "m").toDate());
        callback(true);
      } else {
        callback(false);
      }
    } catch (error) {
      myLog(error, "--Login error--");
      callback(false);
    }
  };
};
