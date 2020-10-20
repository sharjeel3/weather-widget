import axios from 'axios';

export const request = ({ method = 'get', url, data = {}, headers = {} }) => {
  return axios(url, {
    method,
    data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  })
    .then(json => {
      return [null, json.data];
    })
    .catch(error => {
      const { status, statusText, data } = error.response;
      return [{ status, statusText, data }, null];
    });
};
