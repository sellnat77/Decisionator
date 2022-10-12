import './Body.css';
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Map from './Map/Map';
import DestinationList from './Destination/DestinationList';
import CompositeAddressInput from './AddressInput/CompositeAddressInput';

function Body() {
  const [leftCoord, setLeftCoord] = useState();
  const [rightCoord, setRightCoords] = useState();
  const [coordList, setCoordList] = useState([]);

  useEffect(() => {
    if (rightCoord && leftCoord) {
      setCoordList([leftCoord, rightCoord]);
      return;
    }

    if (leftCoord) {
      setCoordList([leftCoord]);
      return;
    }

    if (rightCoord) {
      setCoordList([rightCoord]);
    }
  }, [leftCoord, rightCoord]);

  return (
    <div className="body">
      <Stack className="body__stack" direction="row" justifyContent="space-around" spacing={2}>
        <CompositeAddressInput setSelectedCoords={setLeftCoord} className="body__stack__left" />
        <Stack className="body__stack__mid" spacing={2}>
          <Map />
          <Button variant="contained">
            Meet
          </Button>
          {coordList
            ? <DestinationList coords={coordList} />
            : <div /> }
        </Stack>
        <CompositeAddressInput setSelectedCoords={setRightCoords} className="body__stack__right" />
      </Stack>
    </div>
  );
}

export default Body;
