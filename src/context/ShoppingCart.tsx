/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useReducer } from "react";
import { cartReducer, CartState } from "../reducers/shoppingCart/reducer";
import {
  addNewCoffe,
  removeOldCoffe,
  removeAllCoffes,
} from "@/reducers/shoppingCart/actions";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContextData {
  cart: CartState;
  addCoffe: (id: number) => void;
  removeCoffe: (id: number) => void;
  removeAllCoffesFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData
);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cart, dispach] = useReducer(cartReducer, {
    order: [],
    total: 0,
    items: 0,
  });

  const addCoffe = (id: number) => {
    dispach(addNewCoffe(id));
  };

  const removeCoffe = (id: number) => {
    dispach(removeOldCoffe(id));
  };

  const removeAllCoffesFromCart = (id: number) => {
    dispach(removeAllCoffes(id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addCoffe, removeCoffe, removeAllCoffesFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
