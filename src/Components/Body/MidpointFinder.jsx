import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import { getMidpoint } from '../../Api/Meet/getMidpoint';

function MidpointFinder() {
  const [lattitude, setLattitude] = useState('34.1679914');
  const [longitude, setLongitude] = useState('-118.3242127');

  const handleLatChange = (e) => {
    setLattitude(e.target.value);
  };

  const handleLonChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleGetMidpoint = async () => {
    try {
      const inputCoords = {
        coords: [
          {
            lat: parseFloat(lattitude),
            lon: parseFloat(longitude),
          },
        ],
      };
      await getMidpoint(inputCoords);
    } catch (err) {
      await getMidpoint(null);
    }
  };

  return (
    <div className="MidpointFinder">
      <Stack direction="row" spacing={2}>
        <FormControl>
          <TextField type="text" label="Lattitude" value={lattitude} onChange={handleLatChange} />
        </FormControl>
        <FormControl>
          <TextField type="text" label="Longitude" value={longitude} onChange={handleLonChange} />
        </FormControl>
        <Button variant="outlined" onClick={handleGetMidpoint}>
          Get Midpoint
        </Button>
      </Stack>
    </div>
  );
}

export default MidpointFinder;
