import React, { useRef, useEffect } from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./MapStyles";

const Map = props => {
  const mapRef = useRef();

  const { center, zoom, classes } = props;

  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={classes.map}
      style={props.style}
      id="map"
    ></div>
  );
};

export default withStyles(styles)(Map);
