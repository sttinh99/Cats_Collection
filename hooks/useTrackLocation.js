import { useState } from "react";

export default function useTrackLocation() {
  const [errMsgTrackLocation, setErrMsgTrackLocation] = useState("");
  const [latLong, setLatLong] = useState("");
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatLong(`${latitude},${longitude}`);
    setErrMsgTrackLocation("");
  };
  const error = () => {
    setErrMsgTrackLocation("Unable to retrieve your location");
  };

  const trackYouLocation = () => {
    if (!navigator.geolocation) {
      setErrMsgTrackLocation("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return { errMsgTrackLocation, latLong, trackYouLocation };
}
