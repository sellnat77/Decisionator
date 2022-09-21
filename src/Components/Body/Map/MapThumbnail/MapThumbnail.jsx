import './MapThumbnail.css';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { getPlaceThumbnail } from '../../../../Api/Places/getPlaceThumbnail';

function MapThumbnail({ coord }) {
  const [thumbSrc, setThumbSrc] = useState();
  const [thumbnailLoading, setThumbnailLoading] = useState(false);

  useEffect(() => {
    if (coord && coord.lat) {
      setThumbnailLoading(true);
      getPlaceThumbnail(coord.lat, coord.lon, setThumbSrc);
      setThumbnailLoading(true);
    }
  }, [coord]);

  // const defaultImg = 'https://www.google.com/maps/d/u/0/thumbnail?mid=1cJSNdF7dArrQkL8gaSoXABXL7Uk&hl=en';
  return (
    <div className="mapThumbnail">
      <Card>
        <CardMedia
          component="img"
          className="mapThumbnail__cardMedia"
          src={thumbSrc}
        />
        <h3>
          {thumbnailLoading}
        </h3>
      </Card>
    </div>
  );
}

export default MapThumbnail;
