import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';

import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef();
  const points = [{
    lat: 52.3909553943508,
    lng: 4.85309666406198
  },
  {
    lat: 52.369553943508,
    lng: 4.85309666406198
  },
  {
    lat: 52.3909553943508,
    lng: 4.929309666406198
  },
  {
    lat: 52.3809553943508,
    lng: 4.939309666406198
  }];

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: 52.38333,
        lng: 4.9
      },
      zoom: 12,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: point.lat,
        lng: point.lng
      },
      {
        icon
      })
        .addTo(mapRef.current)
        .bindPopup(`Hello!`);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <section className="cities__map map" id="map" ref={mapRef}></section>
  );
};
// className="cities__map map"

export default Map;
