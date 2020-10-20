import { createReducer } from '@reduxjs/toolkit';
import {
  FETCH_FORECAST_IN_PROGRESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} from '../../actionTypes';

const INITIAL_STATE = {
  content: null,
  fetchInProgress: false,
  fetchError: ''
};

export const weatherReducer = createReducer(INITIAL_STATE, {
  [FETCH_FORECAST_IN_PROGRESS]: (state, action) => {
    state.fetchInProgress = action.value;
  },
  [FETCH_FORECAST_SUCCESS]: (state, action) => {
    state.content = action.content;
  },
  [FETCH_FORECAST_FAILURE]: (state, action) => {
    state.fetchError = action.error;
  }
});
