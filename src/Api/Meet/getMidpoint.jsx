const request = require('axios');

const {
  REACT_APP_BACKEND_SERVER,
} = process.env;
async function getMidpoint(inputCoords) {
  console.log(REACT_APP_BACKEND_SERVER);
  const res = await request.post(`${REACT_APP_BACKEND_SERVER}/meet/guest`, inputCoords);
  console.log(res.body);

  return res.body;
}

module.exports = {
  getMidpoint,
};
