import './destinationItem.css';
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';

function DestinationItem({ lat, lon }) {
  const debugLocation = `${lat},${lon}`;
  return (
    <ListItem
      className="destinationItem"
      secondaryAction={(
        <IconButton
          className="destinationItem__icon_secondary"
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
                       )}
    >
      <ListItemAvatar>
        <Avatar className="destinationItem__icon_primary">
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        className="destinationItem__text"
        primary={debugLocation}
        secondary={debugLocation || null}
      />
    </ListItem>
  );
}

export default DestinationItem;
