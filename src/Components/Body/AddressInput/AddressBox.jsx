import './addressBox.css';
import React, { useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';

function AddressBox({ coords, setCoords }) {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: 'US' },
    fields: ['address_components', 'geometry', 'icon', 'name'],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options,
    );

    autoCompleteRef.current.addListener('place_changed', async () => {
      const place = await autoCompleteRef.current.getPlace();
      const lat = place.geometry.location.lat();
      const lon = place.geometry.location.lng();
      const newCoords = coords;
      newCoords.push({
        id: uuidv4(),
        lat,
        lon,
      });
      // console.log(newCoords);

      setCoords(newCoords);
    });
  });

  return (
    <div className="addressBox">
      <TextField className="addressBox__input" type="text" placeholder="Enter place, town, or postal code..." inputRef={inputRef} />
    </div>
  );
}

export default AddressBox;
