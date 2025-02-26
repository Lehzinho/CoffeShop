import { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartProviderProps {
  childen: ReactNode;
}

interface ShoppingCartContextData {
  cafe: string;
}

const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData
);

export const ShoppingCartProvider = ({
  childen,
}: ShoppingCartProviderProps) => {
  const [cafe] = useState("");
  return (
    <ShoppingCartContext.Provider value={{ cafe }}>
      {childen}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
