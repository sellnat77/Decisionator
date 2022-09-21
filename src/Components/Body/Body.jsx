import './Body.css';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddressBox from './AddressInput/AddressBox';
import MapThumbnail from './Map/MapThumbnail/MapThumbnail';
import Map from './Map/Map';
import DestinationList from './Destination/DestinationList';

function Body() {
  const [coords, setCoords] = useState([]);

  return (
    <div className="body">
      <Stack className="body__stack" direction="row" justifyContent="space-around" spacing={2}>
        <Stack className="body__stack__left" spacing={2}>
          <AddressBox coords={coords} setCoords={setCoords} />
          <MapThumbnail coord={coords[0]} />
        </Stack>
        <Stack className="body__stack__mid" spacing={2}>
          <Map />
          <Button variant="outlined">
            Logout
          </Button>
          {coords
            ? <DestinationList coords={coords} />
            : <div /> }
        </Stack>
        <Stack className="body__stack__right" spacing={2}>
          <AddressBox coords={coords} setCoords={setCoords} />
          <MapThumbnail coord={coords[1]} />
        </Stack>
      </Stack>

    </div>
  );
}

export default Body;
