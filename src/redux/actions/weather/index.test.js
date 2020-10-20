import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchForecast } from './index';
import {
  FETCH_FORECAST_IN_PROGRESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} from '../../actionTypes';
import { DEFAULT_ERROR_MESSAGE } from '../../../app/constants/errors';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Weather Action Creators', () => {
  describe('fetchForecast()', () => {
    let store;
    beforeEach(() => {
      moxios.install();
      store = mockStore({ weather: {} });
    });

    afterEach(() => {
      moxios.uninstall();
      jest.clearAllMocks();
    });

    it('should return actions for successful fetch', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: { lat: -37, lon: 145, daily: [] }
        });
      });
      await store.dispatch(
        fetchForecast({
          lat: -37,
          lng: 145
        })
      );
      expect(store.getActions()).toEqual([
        { type: FETCH_FORECAST_IN_PROGRESS, value: true },
        { type: FETCH_FORECAST_IN_PROGRESS, value: false },
        { type: FETCH_FORECAST_SUCCESS, content: { lat: -37, lon: 145, daily: [] } }
      ]);
    });

    it('should return actions for fetch error', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: { reason: 'Bad request' }
        });
      });
      await store.dispatch(fetchForecast({}));
      expect(store.getActions()).toEqual([
        { type: FETCH_FORECAST_IN_PROGRESS, value: true },
        { type: FETCH_FORECAST_IN_PROGRESS, value: false },
        {
          type: FETCH_FORECAST_FAILURE,
          error: 'Bad request'
        }
      ]);
    });

    it('should return actions for unexpected failure', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.reject();
      });
      await store.dispatch(
        fetchForecast({
          lat: -37,
          lng: 145
        })
      );
      expect(store.getActions()).toEqual([
        { type: FETCH_FORECAST_IN_PROGRESS, value: true },
        { type: FETCH_FORECAST_IN_PROGRESS, value: false },
        {
          type: FETCH_FORECAST_FAILURE,
          error: DEFAULT_ERROR_MESSAGE
        }
      ]);
    });
  });
});
