import { useEffect, useState } from "react";
import { fetchAvailablePlaces } from "../http.js";
import { sortPlacesByDistance } from "../loc.js";
import ErrorPage from "./ErrorPage.jsx";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      try {
        const places = await fetchAvailablePlaces();
        // sort places based on user location and distance to them
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            coords.latitude,
            coords.longitude
          );

          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "Could not fetch places!" });
        setIsFetching(false); // we have to set this twice cuz of navigator not having the async await functionality
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Data is loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
