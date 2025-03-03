import { useShoppingCart } from "@/context/ShoppingCart";
import * as S from "./styles";
import { CoffeCard } from "./coffeCard";

export const NewCheckoutForm = () => {
  const { cart } = useShoppingCart();

  const { order, total } = cart;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total / 100);
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
      <div className="row">
        <p>total de items</p>
        <p>R$ {formattedPrice}</p>
      </div>
      <div className="row">
        <p>Entrega</p>
        <p>R$ 9,70</p>
      </div>
      <div className="row">
        <p>Total</p>
        <p>R$ 33,20</p>
      </div>
      <button>Confirmar pedido</button>
    </S.NewCheckoutForm>
  );
};
