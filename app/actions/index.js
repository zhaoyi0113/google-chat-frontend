import axios from 'axios';
import * as types from './types';

const baseUrl = 'http://localhost:3100/api/v0';

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
