import * as S from "./styles";
import { CoffeOrderQdt } from "./coffeOrderQdt";
import { ShoppingCart } from "@/components/shoppingCart";
interface CoffeOrderProps {
  price: number;
  id: number;
}

export const CoffeOrder = ({ price, id }: CoffeOrderProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price / 100);

  return (
    <S.CoffeOrder>
      <p>
        R$ <span>{formattedPrice}</span>
      </p>
      <div>
        <CoffeOrderQdt id={id} />
        <ShoppingCart />
      </div>
    </S.CoffeOrder>
  );
};
