import './Map.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Map({ imgSrc }) {
  const defaultImg = 'https://www.google.com/maps/d/u/0/thumbnail?mid=1cJSNdF7dArrQkL8gaSoXABXL7Uk&hl=en';
  return (
    <div className="map">
      <Card>
        <CardMedia
          className="map__cardMedia"
          image={imgSrc || defaultImg}
        />
      </Card>
    </div>
  );
}

export default Map;
