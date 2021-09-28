import { FC, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface ICoords {
  lat: number;
  lng: number;
}
export const Map: FC = () => {
  const [center, setCenter] = useState<ICoords>({
    lat: 36.8508,
    lng: -76.2859,
  });
  const [hasGeolocationData, setHasGeolocationData] = useState<boolean>(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setHasGeolocationData(true);
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);
  return (
    <LoadScript googleMapsApiKey="AIzaSyDYAvRSjTHLUINsw1yGj9Mevlo-F4N6GdU">
      <GoogleMap center={center} zoom={12}>
        {hasGeolocationData && <Marker position={center} />}
      </GoogleMap>
      {!hasGeolocationData ? (
        <div className="map-message">
          <span>We couldn't find your location</span>
          <span>
            If you are outside of Norfolk, we recommend contacting a different
            towing service provider, as our response times may be longer.
          </span>
        </div>
      ) : (
        ""
      )}
    </LoadScript>
  );
};
