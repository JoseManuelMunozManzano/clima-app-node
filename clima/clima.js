const axios = require('axios');

const { weatherMapKey } = require('../config/api-key');

const getClima = async (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=es&units=metric&appid=${weatherMapKey}`;

  const resp = await axios.get(url);

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
