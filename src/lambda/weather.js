require('dotenv').config();
const axios = require('axios');

export async function handler(event, context, callback) {
  const END_POINT = 'https://api.openweathermap.org/data/2.5/onecall';
  const APP_ID = process.env.WEATHER_APP_ID;

  const { lat, lng, units } = event.queryStringParameters;
  const finalUrl = `${END_POINT}?lat=${lat}&lon=${lng}&appid=${APP_ID}&units=${units}&exclude=hourly,minutely`;

  try {
    const response = await axios({ url: finalUrl, method: 'get' });
    callback(null, {
      statusCode: response.status,
      body: JSON.stringify(response.data)
    });
  } catch (e) {
    const { status, data } = e.response;
    callback(null, {
      statusCode: status,
      body: JSON.stringify(data)
    });
  }
}
