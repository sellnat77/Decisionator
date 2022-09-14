import './addressBox.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';

function AddressBox() {
  const [lattitude, setLattitude] = useState('34.1679914');

  const handleLatChange = (e) => {
    setLattitude(e.target.value);
  };

  return (
    <div className="addressBox">
      <Stack direction="row" spacing={2}>
        <FormControl>
          <TextField type="text" label="Lattitude" value={lattitude} onChange={handleLatChange} />
        </FormControl>
      </Stack>
    </div>
  );
}

export default AddressBox;
