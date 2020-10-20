import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import styled from 'styled-components/macro';
import { brandColors } from '../../ui-library/theme/colors';
import { useDispatch } from 'react-redux';
import { refreshLocation, refreshLocationError } from '../../redux/actions/location';
import { DEFAULT_ERROR_MESSAGE } from '../../app/constants/errors';

const Label = styled('label')`
  display: block;
  font-size: 1.25em;
  margin: 1em 0 0.5em;
`;

const Input = styled('input')`
  font-size: 1.25em;
  padding: 0;
  background: ${brandColors.white};
  border-bottom: 1px solid ${brandColors.grey};
  color: ${brandColors.grey};
  height: 2em;
  line-height: 2em;
  width: 100%;
`;

export const LocationInput = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');

  const handleSelect = async address => {
    try {
      const results = await geocodeByAddress(address);
      const { lat, lng } = await getLatLng(results[0]);
      dispatch(refreshLocation({ lat, lng }));
    } catch (e) {
      dispatch(refreshLocationError({ error: DEFAULT_ERROR_MESSAGE }));
    }
  };

  return (
    <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <Label htmlFor="location-text-field">Enter your location:</Label>
          <Input
            {...getInputProps({
              id: 'location-text-field',
              placeholder: 'Start typing ...',
              className: 'location-search-input'
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const style = suggestion.active
                ? { backgroundColor: brandColors.ultraLightGrey, cursor: 'pointer' }
                : { backgroundColor: brandColors.white, cursor: 'pointer' };
              return (
                <div
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, {
                    style
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </PlacesAutocomplete>
  );
};
