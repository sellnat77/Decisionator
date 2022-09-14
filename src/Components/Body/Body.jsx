import './Body.css';
import React from 'react';
import Stack from '@mui/material/Stack';
import AddressBox from './AddressInput/AddressBox';
import MapThumbnail from './Map/MapThumbnail/MapThumbnail';
import Map from './Map/Map';

function Body() {
  return (
    <div className="body">
      <Stack className="body__stack" direction="row" justifyContent="space-around" spacing={2}>
        <Stack spacing={2}>
          <AddressBox />
          <MapThumbnail />
        </Stack>
        <Stack spacing={2}>
          <Map />
        </Stack>
        <Stack spacing={2}>
          <AddressBox />
          <MapThumbnail />
        </Stack>
      </Stack>

    </div>
  );
}

export default Body;
