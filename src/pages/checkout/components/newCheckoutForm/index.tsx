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
      {cart.order.length > 0 ? (
        <div className="coffeContainer">
          {order.map((coffe) => (
            <div key={coffe.id}>
              <CoffeCard coffeOrder={coffe} />
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div className="coffeContainer">
          <p>Java não encontrado</p>
        </div>
      )}
      <div className="precoContainer">
        <div className="row">
          <p>Total de items</p>
          <p>R$ {formatToDecimal(total)}</p>
        </div>
        <div className="row">
          <p>Entrega</p>
          <p>
            R$ {cart.order.length > 0 ? formatToDecimal(precoEntrega) : "0,00"}
          </p>
        </div>
        <div className="row total">
          <p>Total</p>
          <p>
            R${" "}
            {cart.order.length > 0
              ? formatToDecimal(total + precoEntrega)
              : "0,00"}
          </p>
        </div>
        <button disabled={cart.order.length === 0}>Confirmar pedido</button>
      </div>
    </S.NewCheckoutForm>
  );
};
