import { useReducer, createContext } from "react";
import { shopReducer, initialState } from "../reducers/CartRedusers";

export const ShopContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const value = {
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    state: state,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
