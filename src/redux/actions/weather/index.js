import {
  FETCH_FORECAST_IN_PROGRESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} from '../../actionTypes';
import lodashGet from 'lodash.get';
import { DEFAULT_ERROR_MESSAGE } from '../../../app/constants/errors';
import { request } from '../../../libs/request';

export const fetchForecast = ({ lat, lng }) => async dispatch => {
  try {
    dispatch({ type: FETCH_FORECAST_IN_PROGRESS, value: true });
    const [error, response] = await request({
      url: `/.netlify/functions/weather?lat=${lat}&lng=${lng}&units=metric`
    });
    dispatch({ type: FETCH_FORECAST_IN_PROGRESS, value: false });
    if (error) {
      return dispatch({
        type: FETCH_FORECAST_FAILURE,
        error: lodashGet(error, 'data.reason', DEFAULT_ERROR_MESSAGE)
      });
    }
    dispatch({
      type: FETCH_FORECAST_SUCCESS,
      content: response
    });
  } catch (e) {
    dispatch({ type: FETCH_FORECAST_IN_PROGRESS, value: false });
    dispatch({
      type: FETCH_FORECAST_FAILURE,
      error: DEFAULT_ERROR_MESSAGE
    });
  }
};
