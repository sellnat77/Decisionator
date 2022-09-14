import './MapThumbnail.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function MapThumbnail({ imgSrc }) {
  const defaultImg = 'https://www.google.com/maps/d/u/0/thumbnail?mid=1cJSNdF7dArrQkL8gaSoXABXL7Uk&hl=en';
  return (
    <div className="mapThumbnail">
      <Card>
        <CardMedia
          className="mapThumbnail__cardMedia"
          image={imgSrc || defaultImg}
        />
      </Card>
    </div>
  );
}

export default MapThumbnail;
