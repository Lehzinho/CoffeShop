import { ComponentPropsWithoutRef } from "react";
import * as S from "./styles";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  gridColumn?: number;
  optional: boolean;
  error: string;
};

export const Input = ({
  gridColumn = 1,
  optional,
  error,
  ...rest
}: InputProps) => {
  return (
    <S.Input style={{ gridColumn: `span ${gridColumn}` }}>
      <input {...rest} />
      {optional && <i>Optional</i>}
      {error && <p>{error}</p>}
    </S.Input>
  );
};
