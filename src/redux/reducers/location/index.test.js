import { locationReducer } from './index';
import { REFRESH_LOCATION, REFRESH_LOCATION_ERROR } from '../../actionTypes';

describe('Location Reducer', () => {
  it('should return initial state', () => {
    expect(locationReducer(undefined, { type: 'test' })).toEqual({
      lat: null,
      lng: null,
      error: ''
    });
  });

  describe('REFRESH_LOCATION', () => {
    it('should return correct state', () => {
      const action = { type: REFRESH_LOCATION, lat: 123, lng: 456 };
      expect(locationReducer({}, action)).toEqual({
        lat: 123,
        lng: 456
      });
    });
  });

  describe('REFRESH_LOCATION_ERROR', () => {
    it('should return correct state', () => {
      const action = { type: REFRESH_LOCATION_ERROR, error: 'That error' };
      expect(locationReducer({}, action)).toEqual({
        error: 'That error'
      });
    });
  });
});
