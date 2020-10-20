import React from 'react';
import { Home } from './index';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as weatherActions from '../../redux/actions/weather';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<Home />', () => {
  let wrapper, store;
  beforeEach(() => {
    store = mockStore({ weather: {}, location: {} });
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('should render Container', () => {
    expect(wrapper.find('Container')).toExist();
  });

  it('should render Location Input', () => {
    expect(wrapper.find('LocationInput')).toExist();
  });

  it('should not render Location Input when we have location data', () => {
    store = mockStore({
      location: {
        lat: 13,
        lng: 124
      },
      weather: {}
    });
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper.find('LocationInput')).not.toExist();
  });

  it('should fetch forecast when we have location data', () => {
    const fetchForecastSpy = jest.spyOn(weatherActions, 'fetchForecast');
    store = mockStore({
      location: {
        lat: 13,
        lng: 124
      },
      weather: {}
    });
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(fetchForecastSpy).toHaveBeenCalled();
  });

  it('should render Forecast', () => {
    store = mockStore({
      location: {
        lat: 13,
        lng: 124
      },
      weather: {
        content: {
          daily: [{ dt: 1545454512, temp: {}, weather: [{ icon: '10n' }] }]
        }
      }
    });
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper.find('Forecast')).toExist();
  });
});
