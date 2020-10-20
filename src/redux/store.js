import { configureStore } from '@reduxjs/toolkit';
import { locationReducer } from './reducers/location';
import { weatherReducer } from './reducers/weather';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    weather: weatherReducer
  }
});
