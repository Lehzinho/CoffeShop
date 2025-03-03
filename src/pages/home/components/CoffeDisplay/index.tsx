import { CoffeCard } from "./CoffeCard";
import { coffeArray } from "@/assets/arrays/coffesArray";
import * as S from "./styles";

export const CoffeDisplay = () => {
  return (
    <S.CoffeDisplay>
      <h1>Nossos cafés</h1>
      <div className="coffeCardContainer">
        {coffeArray.map((coffe) => (
          <CoffeCard key={coffe.id} {...coffe} />
        ))}
      </div>
    </S.CoffeDisplay>
  );
};
