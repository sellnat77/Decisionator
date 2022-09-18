import './addressBox.css';
import React, { useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';

function AddressBox() {
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
  });

  return (
    <div className="addressBox">
      <TextField className="addressBox__input" type="text" placeholder="Enter place, town, or postal code..." inputRef={inputRef} />
    </div>
  );
}

export default AddressBox;
