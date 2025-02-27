import { createContext, ReactNode, useContext, useReducer } from "react";
import { cartReducer, CartState } from "../reducers/shoppingCart/reducer";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContextData {
  cart: CartState;
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
  });
  return (
    <ShoppingCartContext.Provider value={{ cart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
