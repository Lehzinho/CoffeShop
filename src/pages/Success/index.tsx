import { useShoppingCart } from "@/context/ShoppingCart";
import bike from "@/assets/images/checkoutImg.png";
import * as S from "./styles";
import { Timer, MapPin, CurrencyDollar } from "@phosphor-icons/react";

function Success() {
  const { deliveryOrder } = useShoppingCart();
  const { Bairro, CEP, Cidade, Complemento, Número, Rua, UF, pagamento } =
    deliveryOrder;
  const pagamentoText = {
    credito: "Cartão de Credito",
    debito: "Cartão de Debito",
    dinheiro: "Dinheiro",
  }[pagamento];
  return (
    <S.Success>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <div className="entregaContainer">
          <div className="row">
            <MapPin weight="fill" />
            <div>
              <p>
                Entrega em
                <span> {` Numero ${Número || "N/A"} ${Rua}, ${Bairro}`},</span>
              </p>
              <p>{`${Cidade}, ${UF} - ${CEP}`}</p>
              <p>{Complemento}</p>
            </div>
          </div>
          <div className="row">
            <Timer weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </div>
          <div className="row">
            <CurrencyDollar />
            <div>
              <p>Pagamento na entrega</p>
              <span>{pagamentoText}</span>
            </div>
          </div>
        </div>
        <img src={bike} />
      </div>
    </S.Success>
  );
}

export default Success;
