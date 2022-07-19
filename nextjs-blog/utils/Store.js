import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
  favourite: { favouriteItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.favourite.favouriteItems.find(
        (item) => item.name === newItem.name
      );
      const favouriteItems = existItem
        ? state.favourite.favouriteItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.favourite.favouriteItems, newItem];
      return { ...state, favourite: { ...state.favourite, favouriteItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
