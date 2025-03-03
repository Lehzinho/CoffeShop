import { useShoppingCart } from "@/context/ShoppingCart";
import * as S from "./styles";
import { CoffeCard } from "./coffeCard";
import { formatToDecimal } from "@/utils/formatDecimal";

export const NewCheckoutForm = () => {
  const { cart } = useShoppingCart();

  const { order, total } = cart;

  const precoEntrega = 375;

  return (
    <S.NewCheckoutForm>
      <div className="coffeContainer">
        {order.map((coffe) => (
          <div>
            <CoffeCard coffeOrder={coffe} />
            <hr />
          </div>
        ))}
      </div>
      <div className="precoContainer">
        <div className="row">
          <p>Total de items</p>
          <p>R$ {formatToDecimal(total)}</p>
        </div>
        <div className="row">
          <p>Entrega</p>
          <p>R$ {formatToDecimal(precoEntrega)}</p>
        </div>
        <div className="row total">
          <p>Total</p>
          <p>R$ {formatToDecimal(total + precoEntrega)}</p>
        </div>
        <button>Confirmar pedido</button>
      </div>
    </S.NewCheckoutForm>
  );
};
