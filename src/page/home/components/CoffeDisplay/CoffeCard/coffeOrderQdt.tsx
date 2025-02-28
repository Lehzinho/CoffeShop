import { useShoppingCart } from "@/context/ShoppingCart";
import * as S from "./styles";
import { Plus, Minus } from "@phosphor-icons/react";

interface CoffeOrderQdtProps {
  id: number;
}

export const CoffeOrderQdt = ({ id }: CoffeOrderQdtProps) => {
  const { addCoffe, removeCoffe, cart } = useShoppingCart();

  const coffe = cart.order.find((item) => item.id === id);
  const quantidade = coffe ? coffe.quantidade : 0;

  return (
    <S.CoffeOrderQdt>
      <button onClick={() => removeCoffe(id)}>
        <Minus />
      </button>
      <p>{quantidade}</p>
      <button onClick={() => addCoffe(id)}>
        <Plus />
      </button>
    </S.CoffeOrderQdt>
  );
};
