import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import * as types from '../../props/offers.js';

import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offers} = props;
  const mapRef = useRef();

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

    offers.forEach((offer) => {
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      },
      {
        icon
      })
        .addTo(mapRef.current)
        .bindPopup(`Hello!`);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <section className="cities__map map" id="map" ref={mapRef}></section>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(types.offer).isRequired,
};

export default Map;
