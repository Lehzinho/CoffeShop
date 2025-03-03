import { Icon } from "@phosphor-icons/react";
import { ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";
import * as S from "./styles";

type PaymentButtonProps = {
  inputId: string;
  title: string;
  Icon: Icon;
} & ComponentPropsWithoutRef<"input">;

export const PaymentButton = ({
  inputId,
  title,
  Icon,
  ...props
}: PaymentButtonProps) => {
  const { watch } = useFormContext();

  const selectedPayment = watch("pagamento");

  return (
    <S.PaymentButton $selected={selectedPayment === inputId}>
      <Icon size={16} />
      {title}
      <input type="radio" value={inputId} id={inputId} {...props} />
    </S.PaymentButton>
  );
};
