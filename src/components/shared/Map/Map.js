import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import mapboxgl from "mapbox-gl";

import styles from "./MapStyles";

const Map = props => {
  const { center, zoom, classes, location } = props;

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWxhbmJtOTQiLCJhIjoiY2s3Nm5hMDNqMDB6ODNmcjFpZDY4cTZ6ZSJ9.JGBqV98Ie6psn59Yk6nVHw";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center, // starting position [lng, lat]
      zoom // starting zoom
    });

    const size = 200;

    // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
    // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
    const pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd: function() {
        const canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext("2d");
      },

      // called once before every frame where the icon will be used
      render: function() {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = "rgba(255, 200, 200," + (1 - t) + ")";
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
        context.fillStyle = "#FEC600";
        context.strokeStyle = "white";
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(0, 0, this.width, this.height).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      }
    };

    map.on("load", function() {
      map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

      map.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              }
            }
          ]
        }
      });
      map.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": "pulsing-dot"
        }
      });
    });
  }, [location]);

  return <div className={classes.map} style={props.style} id="map"></div>;
};

export default withStyles(styles)(Map);
