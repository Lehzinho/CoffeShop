import { CoffeOrderQdt } from "@/components/CoffeOrderQdt";
import { CoffeOrder } from "@/reducers/shoppingCart/reducer";
import { Trash } from "@phosphor-icons/react";
import * as S from "./styles";
import { formatToDecimal } from "@/utils/formatDecimal";
import { useShoppingCart } from "@/context/ShoppingCart";

interface CoffeCardProps {
  coffeOrder: CoffeOrder;
}

export const CoffeCard = ({ coffeOrder }: CoffeCardProps) => {
  const { removeAllCoffesFromCart } = useShoppingCart();
  const { img, id, title, quantidade, price } = coffeOrder;
  return (
    <S.CoffeCard>
      <img src={img} />
      <div>
        <h1>{title}</h1>
        <div className="btnContainer">
          <CoffeOrderQdt id={id} tipo="cart" />
          <button type="button" onClick={() => removeAllCoffesFromCart(id)}>
            <Trash size={16} />
            <p>remover</p>
          </button>
        </div>
      </div>
      <p>R$ {formatToDecimal(quantidade * price)}</p>
    </S.CoffeCard>
  );
};
