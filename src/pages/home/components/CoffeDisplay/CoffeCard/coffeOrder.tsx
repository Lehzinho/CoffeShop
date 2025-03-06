import { CoffeOrderQdt } from "@/components/CoffeOrderQdt";
import * as S from "./styles";
import { ShoppingCart } from "@/components/shoppingCart";
import { formatToDecimal } from "@/utils/formatDecimal";
import { Link } from "react-router-dom";
import { useShoppingCart } from "@/context/ShoppingCart";
interface CoffeOrderProps {
  price: number;
  id: number;
}

export const CoffeOrder = ({ price, id }: CoffeOrderProps) => {
  const { cart } = useShoppingCart();

  return (
    <S.CoffeOrder>
      <p>
        R$ <span>{formatToDecimal(price)}</span>
      </p>
      <div>
        <CoffeOrderQdt id={id} />
        <Link to={cart.total > 0 ? "/checkout" : "/"}>
          <ShoppingCart />
        </Link>
      </div>
    </S.CoffeOrder>
  );
};
