import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);
  const router = useRouter();

  function handleAddPlace(formData) {
    const id = uid();
    const newPlace = { id, ...formData };
    setPlaces([...places, newPlace]);
    router.push("/");
  }
  if (!places) {
    return null;
  }
  function handleDeletePlace(id) {
    setPlaces(places.filter((place) => place.id !== id));
    router.push("/");
  }
  function handleEditPlace(data, id) {
    setPlaces(
      places.map((place) => (place.id === id ? { ...place, ...data } : place))
    );
    router.push(`/places/${id}`);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        handleAddPlace={handleAddPlace}
        handleDeletePlace={handleDeletePlace}
        handleEditPlace={handleEditPlace}
      />
    </>
  );
}
