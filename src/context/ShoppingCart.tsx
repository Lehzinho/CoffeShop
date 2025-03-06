/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import { cartReducer, CartState } from "../reducers/shoppingCart/reducer";
import {
  addNewCoffe,
  removeOldCoffe,
  removeAllCoffes,
  resetCoffes,
} from "@/reducers/shoppingCart/actions";
import { NewChckoutFromData } from "@/pages/checkout";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContextData {
  cart: CartState;
  deliveryOrder: NewChckoutFromData;
  resetCoffeCart: () => void;
  addCoffe: (id: number) => void;
  removeCoffe: (id: number) => void;
  removeAllCoffesFromCart: (id: number) => void;
  handleDeliveryOrder: (order: NewChckoutFromData) => void;
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
  const [deliveryOrder, setDeliveryOrder] = useState<NewChckoutFromData>(
    {} as NewChckoutFromData
  );

  const handleDeliveryOrder = (order: NewChckoutFromData) => {
    setDeliveryOrder(order);
  };

  const addCoffe = (id: number) => {
    dispach(addNewCoffe(id));
  };

  const removeCoffe = (id: number) => {
    dispach(removeOldCoffe(id));
  };

  const removeAllCoffesFromCart = (id: number) => {
    dispach(removeAllCoffes(id));
  };

  const resetCoffeCart = () => {
    dispach(resetCoffes());
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        deliveryOrder,
        addCoffe,
        removeCoffe,
        resetCoffeCart,
        handleDeliveryOrder,
        removeAllCoffesFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
