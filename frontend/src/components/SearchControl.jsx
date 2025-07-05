// SearchControl.jsx
import { useEffect } from "react";
import { GeoSearchControl, EsriProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
import "leaflet-geosearch/dist/geosearch.css";

export const SearchControl = ({ onResult }) => {
  const map = useMap();

  useEffect(() => {
    const provider = new EsriProvider();

    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      autoComplete: true,
      autoCompleteDelay: 300,
      showMarker: false,
    });

    map.addControl(searchControl);

    map.on("geosearch/showlocation", (result) => {
      const { x: lng, y: lat, label } = result.location;
      onResult([lat, lng], label);
    });

    return () => map.removeControl(searchControl);
  }, [map, onResult]);

  return null;
};
