import React from 'react';
import { LocationInput } from './index';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as locationActions from '../../redux/actions/location';
import * as reactPlacesAutoComplete from 'react-places-autocomplete';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<LocationInput />', () => {
  let wrapper, store;
  beforeEach(() => {
    store = mockStore({ weather: {}, location: {} });
    wrapper = mount(
      <Provider store={store}>
        <LocationInput />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Input field', () => {
    expect(wrapper.find('LocationInput__Input')).toExist();
  });

  it('should refresh location upon selection', async () => {
    const refreshLocationSpy = jest.spyOn(locationActions, 'refreshLocation');
    jest
      .spyOn(reactPlacesAutoComplete, 'geocodeByAddress')
      .mockImplementation(() => [{ lat: 1, lng: 2 }]);
    jest.spyOn(reactPlacesAutoComplete, 'getLatLng').mockImplementation(() => ({ lat: 1, lng: 2 }));
    wrapper.find('input').simulate('change', { target: { value: 'San Francisco' } });
    await wrapper.find('PlacesAutocomplete').prop('onSelect')('San Francisco, CA, USA');
    expect(refreshLocationSpy).toHaveBeenCalledWith({ lat: 1, lng: 2 });
  });

  it('should call refreshLocationError when failed to load lat lng', async () => {
    const refreshLocationErrorSpy = jest.spyOn(locationActions, 'refreshLocationError');
    jest.spyOn(reactPlacesAutoComplete, 'geocodeByAddress').mockImplementation(() => {
      throw new Error();
    });
    wrapper.find('input').simulate('change', { target: { value: 'San Francisco' } });
    await wrapper.find('PlacesAutocomplete').prop('onSelect')('San Francisco, CA, USA');
    expect(refreshLocationErrorSpy).toHaveBeenCalled();
  });
});
