import { REFRESH_LOCATION, REFRESH_LOCATION_ERROR } from '../../actionTypes';

export const refreshLocation = ({ lat, lng }) => ({
  type: REFRESH_LOCATION,
  lat,
  lng
});

export const refreshLocationError = ({ error }) => ({
  type: REFRESH_LOCATION_ERROR,
  error
});
