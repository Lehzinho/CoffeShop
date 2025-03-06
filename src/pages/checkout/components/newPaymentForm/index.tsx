import { useFormContext } from "react-hook-form";
import { PaymentButton } from "./paymentButton";
import { CreditCard, Money, Bank, CurrencyDollar } from "@phosphor-icons/react";
import * as S from "./styles";
export const NewPaymentForm = () => {
  const { register } = useFormContext();
  const buttonArray = [
    {
      inputId: "credito",
      title: "Cartão de crédito",
      Icon: CreditCard,
      register: "pagamento",
    },
    {
      inputId: "debito",
      title: "cartão de débito",
      Icon: Money,
      register: "pagamento",
    },
    {
      inputId: "dinheiro",
      title: "dinheiro",
      Icon: Bank,
      register: "pagamento",
    },
  ];
  return (
    <S.NewPaymentForm>
      <div className="titleContainer">
        <CurrencyDollar size={22} />
        <div>
          <p className="title">Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="radioContainer">
        {buttonArray.map((button) => (
          <PaymentButton
            key={button.title}
            {...button}
            {...register(button.register)}
          />
        ))}
      </div>
    </S.NewPaymentForm>
  );
};
