// const request = require('axios');

const { REACT_APP_PLACES_API_KEY } = process.env;
const PLACES_THUMBNAIL_ROUTE = 'https://maps.googleapis.com/maps/api/staticmap';

const encodeGetParams = (p) => Object.entries(p).map((kv) => kv.map(encodeURIComponent).join('=')).join('&');

function getPlaceThumbnail(lat, lon, setFunction) {
  const params = {
    key: REACT_APP_PLACES_API_KEY,
    center: `${lat},${lon}`,
    size: '300x300',
    format: 'jpg',
    zoom: 15,
  };
  const url = `${PLACES_THUMBNAIL_ROUTE}?${encodeGetParams(params)}`;

  setFunction(url);
}

module.exports = {
  getPlaceThumbnail,
};
