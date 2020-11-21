const axios = require('axios');

const { mapboxKey } = require('../config/api-key');

const getLugarLatLng = async dir => {
  const encodeUrl = encodeURI(dir);

  const ruta = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json?&language=es&access_token=${mapboxKey}`;

  const resp = await axios.get(ruta);

  if (!resp.data.features) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.features[0];
  const direccion = data.place_name_es;
  const lat = data.center[1];
  const lng = data.center[0];

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
