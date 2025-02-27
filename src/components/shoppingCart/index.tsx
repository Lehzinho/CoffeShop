import * as S from "./style";
import { ShoppingCart as Cart } from "@phosphor-icons/react";

interface ShoppingCartProps {
  type: "yellow" | "purple";
  items?: number;
}

export const ShoppingCart = ({ items, type = "purple" }: ShoppingCartProps) => {
  return (
    <S.ShoppingCart $type={type}>
      {items && <p className="amount">{0}</p>}
      <Cart size={22} weight="fill" />
    </S.ShoppingCart>
  );
};
