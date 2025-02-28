import * as S from "./styles";
import { CoffeAttribute } from "./coffeAttribute";
import { CoffeOrder } from "./coffeOrder";

interface CoffeCardProps {
  id: number;
  img: string;
  attributes: string[];
  title: string;
  description: string;
  price: number;
}

export const CoffeCard = (props: CoffeCardProps) => {
  const { attributes, description, img, price, title, id } = props;

  return (
    <S.CoffeCard>
      <img src={img} alt="chicara com café" />
      <CoffeAttribute attributes={attributes} />
      <h1>{title}</h1>
      <p>{description}</p>
      <CoffeOrder price={price} id={id} />
    </S.CoffeCard>
  );
};
