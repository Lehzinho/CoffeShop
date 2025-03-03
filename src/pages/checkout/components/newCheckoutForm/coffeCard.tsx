import { CoffeOrderQdt } from "@/components/CoffeOrderQdt";
import { CoffeOrder } from "@/reducers/shoppingCart/reducer";
import { Trash } from "@phosphor-icons/react";
import * as S from "./styles";

interface CoffeCardProps {
  coffeOrder: CoffeOrder;
}

export const CoffeCard = ({ coffeOrder }: CoffeCardProps) => {
  const { img, id, title, quantidade, price } = coffeOrder;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format((quantidade * price) / 100);
  return (
    <S.CoffeCard>
      <img src={img} />
      <div>
        <h1>{title}</h1>
        <div className="btnContainer">
          <CoffeOrderQdt id={id} tipo="cart" />
          <button type="button">
            <Trash size={16} />
            <p>remover</p>
          </button>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </S.CoffeCard>
  );
};
