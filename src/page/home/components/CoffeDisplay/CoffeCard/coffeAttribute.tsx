import * as S from "./styles";

interface CoffeAttributeProps {
  attributes: string[];
}

export const CoffeAttribute = ({ attributes }: CoffeAttributeProps) => {
  return (
    <S.CoffeAttributes className="attrContainer">
      {attributes.map((attr) => (
        <div key={attr}>
          <p>{attr}</p>
        </div>
      ))}
    </S.CoffeAttributes>
  );
};
