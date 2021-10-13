import { FC, Dispatch, SetStateAction, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface ICoords {
  lat: number;
  lng: number;
}

interface IMapProps {
  geolocationAllowed: boolean;
  setGeolocationAllowed: Dispatch<SetStateAction<boolean>>;
}
export const Map: FC<IMapProps> = ({
  geolocationAllowed,
  setGeolocationAllowed,
}) => {
  const [center, setCenter] = useState<ICoords>({
    lat: 36.8508,
    lng: -76.2859,
  });
  const [hasGeolocationData, setHasGeolocationData] = useState<boolean>(false);
  const [isLoadingMap, setIsLoadingMap] = useState<boolean>(true);

  useEffect(() => {
    if (geolocationAllowed && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem(
          "atob-location-information",
          JSON.stringify({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        );
        setHasGeolocationData(true);
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLoadingMap(false);
      });
    }
  }, [geolocationAllowed]);

  useEffect(() => {
    const mapTimer = setTimeout(() => {
      setIsLoadingMap(false);
    }, 5000);

    return () => clearTimeout(mapTimer);
  }, [geolocationAllowed]);

  function renderMap() {
    if (!geolocationAllowed) {
      return (
        <div className="allow-location">
          <button onClick={() => setGeolocationAllowed(true)}>
            Find My Location
            <i className="fas fa-search"></i>
          </button>
        </div>
      );
    } else if (isLoadingMap) {
      return (
        <div className="map-loading">
          <span>Attempting to retrieve your location</span>
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      );
    } else if (!hasGeolocationData) {
      return (
        <div className="map-message">
          <span>We couldn't find your location</span>
          <span>
            If you are outside of Norfolk, we recommend contacting a different
            towing service provider, as our response times may be longer.
          </span>
        </div>
      );
    } else {
      return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY || ""}>
          <GoogleMap center={center} zoom={12}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      );
    }
  }
  return <>{renderMap()}</>;
};
