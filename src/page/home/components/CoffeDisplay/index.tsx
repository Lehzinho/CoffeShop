import { CoffeCard } from "./CoffeCard";
import { coffeArray } from "./coffes";
import * as S from "./styles";

export const CoffeDisplay = () => {
  return (
    <S.CoffeDisplay>
      <h1>Nossos cafés</h1>
      <div className="coffeCardContainer">
        {coffeArray.map((coffe) => (
          <CoffeCard {...coffe} />
        ))}
      </div>
    </S.CoffeDisplay>
  );
};
