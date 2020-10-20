import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { brandColors } from '../../ui-library/theme/colors';

const days = [
  { name: 'Sunday', shortName: 'SUN' },
  { name: 'Monday', shortName: 'MON' },
  { name: 'Tuesday', shortName: 'TUE' },
  { name: 'Wednesday', shortName: 'WED' },
  { name: 'Thursday', shortName: 'THU' },
  { name: 'Friday', shortName: 'FRI' },
  { name: 'Saturday', shortName: 'SAT' }
];

const Root = styled('div')`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 1em;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DayItem = styled('div')`
  display: inline-block;
  text-align: center;
  padding: 0 0.5em;
  img {
    width: 100px;
    height: 100px;
  }
`;

const Temps = styled('div')`
  font-size: 1.5em;
  p {
    display: inline-block;
  }
`;

const MinTemp = styled('p')`
  color: ${brandColors.lightGrey};
`;

const MaxTemp = styled('p')`
  color: ${brandColors.grey};
  margin-right: 0.25em;
`;

const Day = styled('div')`
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const getImageUrl = icon => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const Forecast = ({ dailyForecast }) => {
  return (
    <Root>
      {dailyForecast.map(dailyWeather => {
        const { dt, weather, temp } = dailyWeather;
        const { min, max } = temp;
        const { icon, description } = weather[0];
        const localDate = new Date(dt * 1000);
        const day = localDate.getDay();
        const nowDate = new Date();
        const isToday = localDate.getDate() === nowDate.getDate();
        const dayName = isToday ? 'Today' : days[day].name;
        const dayShortName = isToday ? 'Today' : days[day].shortName;
        const dayLabel = isToday ? 'Today' : `on ${dayName}`;

        return (
          <DayItem key={dt}>
            <img src={getImageUrl(icon)} alt={`It is ${description}`} />
            <Day aria-label={dayLabel}>{dayShortName}</Day>
            <Temps>
              <MaxTemp aria-label={`Maximum temperature is ${Math.ceil(max)}`}>
                {Math.ceil(max)}&#730;
              </MaxTemp>
              <MinTemp aria-label={`Minimum temperature is ${Math.ceil(min)}.`}>
                {Math.ceil(min)}&#730;
              </MinTemp>
            </Temps>
          </DayItem>
        );
      })}
    </Root>
  );
};

Forecast.propTypes = {
  dailyForecast: PropTypes.array.isRequired
};
