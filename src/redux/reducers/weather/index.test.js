import { weatherReducer } from './index';
import {
  FETCH_FORECAST_IN_PROGRESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} from '../../actionTypes';

describe('Weather Reducer', () => {
  it('should return initial state', () => {
    expect(weatherReducer(undefined, { type: 'test' })).toEqual({
      content: null,
      fetchInProgress: false,
      fetchError: ''
    });
  });

  describe('FETCH_FORECAST_IN_PROGRESS', () => {
    it('should return correct state', () => {
      const action = { type: FETCH_FORECAST_IN_PROGRESS, value: true };
      expect(weatherReducer({}, action)).toEqual({
        fetchInProgress: true
      });
    });
  });

  describe('FETCH_FORECAST_SUCCESS', () => {
    it('should return correct state', () => {
      const action = { type: FETCH_FORECAST_SUCCESS, content: { lat: 37, lng: 140 } };
      expect(weatherReducer({}, action)).toEqual({
        content: { lat: 37, lng: 140 }
      });
    });
  });

  describe('FETCH_FORECAST_FAILURE', () => {
    it('should return correct state', () => {
      const action = { type: FETCH_FORECAST_FAILURE, error: 'fail' };
      expect(weatherReducer({}, action)).toEqual({
        fetchError: 'fail'
      });
    });
  });
});
