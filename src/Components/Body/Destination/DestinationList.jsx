import './destinationList.css';
import React from 'react';
import List from '@mui/material/List';
import DestinationItem from './DestinationItem/DestinationItem';

function DestinationList({ coords }) {
  return (
    <List className="destionationList">
      {
        coords.map((coord) => (
          <DestinationItem key={coord.id} lat={coord.lat} lon={coord.lon} />
        ))
      }
    </List>
  );
}

export default DestinationList;
