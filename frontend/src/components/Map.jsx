import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { SearchControl } from "./SearchControl";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { updateLocation } from "../../app/location.slice";

const Map = () => {
  const [position, setPosition] = useState([21.170240 ,  72.831061]);
  const [label, setLabel] = useState(null);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(updateLocation({ label }));
  // }, [label]);
  return (
    <MapContainer
      style={{ height: "400px", width: "100%" }}
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SearchControl
        onResult={(coords, label) => {
          setPosition(coords);
          setLabel(label);
        }}
      />
      <Marker position={position}>
        <Popup>{label || "Selected location"}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
