import { useShoppingCart } from "@/context/ShoppingCart";
import * as S from "./styles";
import { Plus, Minus } from "@phosphor-icons/react";

interface CoffeOrderQdtProps {
  id: number;
  tipo?: "catalog" | "cart";
}

export const CoffeOrderQdt = ({ id, tipo = "catalog" }: CoffeOrderQdtProps) => {
  const { addCoffe, removeCoffe, cart } = useShoppingCart();

  const coffe = cart.order.find((item) => item.id === id);
  const quantidade = coffe ? coffe.quantidade : 0;

  return (
    <S.CoffeOrderQdt $tipo={tipo}>
      <button type="button" onClick={() => removeCoffe(id)}>
        <Minus />
      </button>
      <p>{quantidade}</p>
      <button type="button" onClick={() => addCoffe(id)}>
        <Plus />
      </button>
    </S.CoffeOrderQdt>
  );
};
