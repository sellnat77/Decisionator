const request = require('axios');

const {
  REACT_APP_BACKEND_SERVER,
} = process.env;
async function getMidpoint(inputCoords) {
  const res = await request.post(`${REACT_APP_BACKEND_SERVER}/meet/guest`, inputCoords);

  return res.body;
}

export default getMidpoint;
