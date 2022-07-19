import { createContext, useState } from "react";
import{useRouter} from 'next/dist/client/router';

const initialDataState = {
  location: null,
  favorites: [],
};
const DataContext = createContext(initialDataState);

export function DataContextProvider(props) {
    const router = useRouter
  const [location, setLocation] = useState(initialDataState);
  const [favorites, setcart] = useState([]);

  function addCartHandler(product) {
    setcart((prevFavorites) => {
      return prevFavorites.concat(product);
      
    });router.push('/favourite');
    
  }

  function removeCartHandler() {
    setcart((prevFavorites) => {
      return (prevFavorites.length = 0);
    });
  }

  function getFavorite() {
    return favorites;
  }
  function getLocation() {
    return location.location;
  }

  function setLocationData(placeSelected) {
    setLocation((prevLocation) => {
      prevLocation.location = placeSelected;
      return prevLocation;
    });
  }

  const context = {
    addCartHandler: addCartHandler,
    removeCartHandler: removeCartHandler,
    getFavorite: getFavorite,
    getLocation: getLocation,
    setLocationData: setLocationData,
  };

  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
