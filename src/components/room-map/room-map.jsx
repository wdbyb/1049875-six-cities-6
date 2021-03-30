import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import * as types from '../../props/offers.js';
import {connect} from 'react-redux';
import "leaflet/dist/leaflet.css";

const RoomMap = (props) => {
  const {currentOffer, offersNearby, activeOfferID} = props;
  const mapRef = useRef();
  const offers = [];

  offers.push(currentOffer);

  offersNearby.forEach((offer) => {
    offers.push(offer);
  });

  useEffect(() => {
    const cityLocation = offers[0].city.location;

    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: cityLocation.latitude,
        lng: cityLocation.longitude
      },
      zoom: cityLocation.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      const pinUrl = activeOfferID === offer.id ? `img/pin-active.svg` : `img/pin.svg`;
      const icon = leaflet.icon({
        iconUrl: pinUrl,
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
  }, [offers, activeOfferID]);

  return (
    <section className="property__map map" id="map" ref={mapRef}></section>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(types.offer).isRequired,
  activeCardID: PropTypes.number,
};

export {RoomMap};
export default connect()(RoomMap);
