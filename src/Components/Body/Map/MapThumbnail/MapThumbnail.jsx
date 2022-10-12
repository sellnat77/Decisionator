import './MapThumbnail.css';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { getPlaceThumbnail } from '../../../../Api/Places/getPlaceThumbnail';

function MapThumbnail({ coord }) {
  const [thumbSrc, setThumbSrc] = useState();
  const [thumbnailLoading, setThumbnailLoading] = useState(false);

  useEffect(() => {
    if (coord && coord.lat && coord.lon) {
      setThumbnailLoading(true);
      const placeUrl = getPlaceThumbnail(coord.lat, coord.lon);
      setThumbSrc(placeUrl);
      setThumbnailLoading(false);
    }
  }, [coord]);

  const defaultImg = 'https://www.google.com/maps/d/u/0/thumbnail?mid=1cJSNdF7dArrQkL8gaSoXABXL7Uk&hl=en';
  return (
    <div className="mapThumbnail">
      <Card>
        { thumbnailLoading ? (
          <CardMedia
            component="img"
            className="mapThumbnail__cardMedia"
            src={defaultImg}
          />
        )
          : (
            <CardMedia
              component="img"
              src={thumbSrc}
              className="mapThumbnail__cardMedia"
            />
          )}
      </Card>
    </div>
  );
}

export default MapThumbnail;
