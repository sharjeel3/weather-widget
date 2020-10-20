import React, { useEffect } from 'react';
import { Container } from '../../ui-library/Container';
import { LocationInput } from '../LocationInput';
import { useSelector, useDispatch } from 'react-redux';
import { getLocation, getLocationError } from '../../redux/selectors/location';
import { fetchForecast } from '../../redux/actions/weather';
import { getWeatherContent } from '../../redux/selectors/weather';
import { Forecast } from '../Forecast';
import lodashGet from 'lodash.get';

export const Home = () => {
  const dispatch = useDispatch();
  const locationError = useSelector(getLocationError);
  const { lat, lng } = useSelector(getLocation);
  const dailyForecast = lodashGet(useSelector(getWeatherContent), 'daily');
  const hasLocation = !!lat && !!lng;

  useEffect(() => {
    const loadWeatherData = () => {
      dispatch(fetchForecast({ lat, lng }));
    };

    if (hasLocation) {
      loadWeatherData();
    }
  }, [lat, lng, dispatch, hasLocation]);

  if (locationError) {
    return <Container>{locationError}</Container>;
  }

  return (
    <Container id="main">
      {!hasLocation && <LocationInput />}
      {dailyForecast && <Forecast dailyForecast={dailyForecast} />}
    </Container>
  );
};
