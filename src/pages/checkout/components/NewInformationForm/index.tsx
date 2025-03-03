import { Input } from "@/components/input";
import { useFormContext } from "react-hook-form";
import { MapPin } from "@phosphor-icons/react";
import * as S from "./styles";

type inputProps = {
  gridColumn: number;
  placeHolder: string;
  optional: boolean;
};

interface NewCheckoutFormProps {
  inputArray: inputProps[];
  numColumns?: number;
}

export const NewInformationForm = ({
  inputArray,
  numColumns = 12,
}: NewCheckoutFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <S.NewCheckoutForm $numColumn={numColumns}>
      <div className="title">
        <MapPin size={22} />
        <div>
          <h1>Endereço de Entrega</h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <div>
        {inputArray.map((input) => (
          <Input
            {...input}
            {...register(input.placeHolder)}
            error={errors[input.placeHolder]?.message as string}
          />
        ))}
      </div>
    </S.NewCheckoutForm>
  );
};
