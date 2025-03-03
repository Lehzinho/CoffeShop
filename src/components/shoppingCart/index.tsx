import * as S from "./style";
import { ShoppingCart as Cart } from "@phosphor-icons/react";

interface ShoppingCartProps {
  type?: "yellow" | "purple";
  items?: number;
}

export const ShoppingCart = ({
  items = 0,
  type = "purple",
}: ShoppingCartProps) => {
  return (
    <S.ShoppingCart $type={type}>
      {items > 0 && <p className="amount">{items}</p>}
      <Cart size={22} weight="fill" />
    </S.ShoppingCart>
  );
};
