import { refreshLocation, refreshLocationError } from './index';
import { REFRESH_LOCATION, REFRESH_LOCATION_ERROR } from '../../actionTypes';

describe('Weather Action Creators', () => {
  describe('refreshLocation()', () => {
    it('should return correct action', () => {
      expect(refreshLocation({ lat: 123, lng: 444 })).toEqual({
        type: REFRESH_LOCATION,
        lat: 123,
        lng: 444
      });
    });
  });

  describe('refreshLocationError()', () => {
    it('should return correct action', () => {
      expect(refreshLocationError({ error: 'This error' })).toEqual({
        type: REFRESH_LOCATION_ERROR,
        error: 'This error'
      });
    });
  });
});
