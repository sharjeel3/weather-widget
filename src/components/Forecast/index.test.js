import React from 'react';
import { mount } from 'enzyme';
import { Forecast } from './index';

describe('<Forecast />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      dailyForecast: [
        {
          dt: 1603159200,
          temp: { min: 7.5, max: 16.2 },
          weather: [{ icon: '10n', description: 'Clear' }]
        }
      ]
    };
    wrapper = mount(<Forecast {...props} />);
  });

  it('should render', () => {
    expect(wrapper.find('Forecast__Root')).toExist();
  });

  it('should render image', () => {
    expect(wrapper.find('img').prop('src')).toEqual('https://openweathermap.org/img/wn/10n@2x.png');
    expect(wrapper.find('img').prop('alt')).toEqual('It is Clear');
  });

  it('should render day', () => {
    expect(wrapper.find('Forecast__Day').text()).toEqual('Today');
    expect(wrapper.find('Forecast__Day').prop('aria-label')).toEqual('Today');
  });

  it('should render minimum temperature', () => {
    expect(wrapper.find('Forecast__MinTemp').text()).toEqual('8˚');
    expect(wrapper.find('Forecast__MinTemp').prop('aria-label')).toEqual(
      'Minimum temperature is 8.'
    );
  });

  it('should render maximum temperature', () => {
    expect(wrapper.find('Forecast__MaxTemp').text()).toEqual('17˚');
    expect(wrapper.find('Forecast__MaxTemp').prop('aria-label')).toEqual(
      'Maximum temperature is 17'
    );
  });
});
