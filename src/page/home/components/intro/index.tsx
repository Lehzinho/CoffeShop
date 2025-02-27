import * as S from "./styles";
import intro from "@/assets/HeroImg.png";

import {
  Coffee,
  Package,
  ShoppingCart as Cart,
  Timer,
} from "@phosphor-icons/react";

const infoArray = [
  {
    Icon: Coffee,
    text: "O café chega fresquinho até você",
    color: "purple",
  },
  {
    Icon: Package,
    text: "Embalagem mantém o café intacto",
    color: "base-text",
  },
  {
    Icon: Cart,
    text: "Compra simples e segura",
    color: "yellow-dark",
  },
  {
    Icon: Timer,
    text: "Entrega rápida e rastreada",
    color: "yellow-light",
  },
];

const Intro = () => {
  return (
    <S.Intro>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="cardContainer">
          {infoArray.map(({ Icon, text, color }) => (
            <S.InfoCard key={text} $color={color}>
              <div>
                <Icon size={16} weight="fill" />
              </div>
              {text}
            </S.InfoCard>
          ))}
        </div>
      </div>
      <img src={intro} />
    </S.Intro>
  );
};

export default Intro;
