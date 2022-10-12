import './compositeAddressInput.css';
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import AddressBox from './AddressBox';
import MapThumbnail from '../Map/MapThumbnail/MapThumbnail';
//
function CompositeAddressInput({ setSelectedCoords }) {
  const [thumbCoords, setThumbCoords] = useState([]);

  useEffect(() => {
    if (thumbCoords && thumbCoords.lat && thumbCoords.lon) {
      setSelectedCoords(thumbCoords);
    }
  }, [thumbCoords, setSelectedCoords]);

  return (
    <Stack className="compositeAddressInput" spacing={2}>
      <AddressBox setCoords={setThumbCoords} />
      <MapThumbnail coord={thumbCoords} />
    </Stack>
  );
}

export default CompositeAddressInput;
