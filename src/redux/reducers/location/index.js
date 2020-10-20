import { createReducer } from '@reduxjs/toolkit';
import { REFRESH_LOCATION, REFRESH_LOCATION_ERROR } from '../../actionTypes';

const INITIAL_STATE = {
  lat: null,
  lng: null,
  error: ''
};

export const locationReducer = createReducer(INITIAL_STATE, {
  [REFRESH_LOCATION]: (state, action) => {
    state.lat = action.lat;
    state.lng = action.lng;
  },
  [REFRESH_LOCATION_ERROR]: (state, action) => {
    state.error = action.error;
  }
});
