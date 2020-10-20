// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom/extend-expect';

// Enzyme setup
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// Google API
const setupGoogleMock = () => {
  const google = {
    maps: {
      Marker: class {},
      Map: class {
        setTilt() {}
        fitBounds() {}
      },
      LatLngBounds: class {},
      places: {
        Autocomplete: class {},
        AutocompleteService: class {},
        PlacesServiceStatus: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS'
        },
        PlacesAutocomplete: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS'
        }
      },

      MarkerClusterer: class {},
      Geocoder: class {}
    }
  };
  global.window.google = google;
};

setupGoogleMock();
