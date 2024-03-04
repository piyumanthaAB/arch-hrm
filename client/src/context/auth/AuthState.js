import React from 'react';
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  SET_LOADING,
} from '../types.js';
import authReducer from './authReducer';
import AuthContext from './authContext';
import { useReducer } from 'react';
import axios from 'axios';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null,
    loading: false,
    user: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signup = async (formData) => {
    const { email, password, passwordConfirm, mobile } = formData;

    try {
      dispatch({
        type: SET_LOADING,
      });
      const res = await axios.post('/api/v1/auth/signup', {
        email,
        password,
        passwordConfirm,
        mobile,
      });
      // load user after signup
      loadUser();
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data.user,
      });
      // console.log({ res });

      return res;
    } catch (err) {
      // console.log(err.response.data.message);
      // console.log({ err });
      dispatch({
        type: REGISTER_FAIL,
      });
      throw err;
    }
  };

  //user login
  const login = async (formData) => {
    const { email, password } = formData;
    try {
      dispatch({
        type: SET_LOADING,
      });
      const res = await axios.post('/api/v1/auth/login', { email, password });
      // load user after login
      loadUser();
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data.user,
      });
      // console.log({ res });

      return res;
    } catch (err) {
      console.log(err.response.data.message);
      console.log({ err });
      dispatch({
        type: LOGIN_FAIL,
      });
      throw err;
    }
  };

  //user logout
  const logout = async () => {
    try {
      dispatch({
        type: SET_LOADING,
      });

      const res = await axios.get('/api/v1/auth/logout');

      dispatch({
        type: LOGOUT,
      });
      return res;
    } catch (err) {
      // console.log(`${err.response.data.message}`);
      dispatch({
        type: LOGOUT,
      });
      throw err;
    }
  };

  //user loaded
  const loadUser = async () => {
    try {
      dispatch({
        type: SET_LOADING,
      });
      const res = await axios.get('/api/v1/auth/current-user');
      let user = res.data.data.user;
      user.uni = res.data.data.uni;
      dispatch({
        type: USER_LOADED,
        payload: user,
      });
    } catch (err) {
      // console.log(err.response.data.message);
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        signup,
        login,
        loadUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
