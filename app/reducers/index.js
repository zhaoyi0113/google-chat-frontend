import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initState = { images: [] };

const queryImage = (state, action) => {
  if (typeof state === 'undefined') {
    return {};
  }
  switch (action.type) {
		case types.LOGIN:
			const {url} = action.res.data;
			window.location = url;
      return { ...state };
    default:
      return initState;
  }
};

export default combineReducers({ images: queryImage });
