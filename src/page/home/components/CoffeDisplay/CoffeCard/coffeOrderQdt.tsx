import * as S from "./styles";
import { Plus, Minus } from "@phosphor-icons/react";
export const CoffeOrderQdt = () => {
  return (
    <S.CoffeOrderQdt>
      <button>
        <Minus />
      </button>
      <p>0</p>
      <button>
        <Plus />
      </button>
    </S.CoffeOrderQdt>
  );
};
