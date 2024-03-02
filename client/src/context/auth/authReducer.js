/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_LOADING,
  USER_LOADED,
} from '../types.js';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      break;
  }
};
