import axios from 'axios';
import * as types from './types';
import openSocket from 'socket.io-client';

const baseUrl = 'https://google-chat-backend.herokuapp.com:3100/api/v0';

export const login = () => {
  return dispatch => {
    return axios
      .post(`${baseUrl}/login`)
      .then(res => {
        dispatch({type: types.LOGIN, res});
      })
      .catch(err => {
        console.error('get error response', err);
        dispatch({type: types.LOGIN_ERROR});
      });
  };
};

export const connectSocket = (url, token) => {
	const socket = openSocket(url, token);
	
};
