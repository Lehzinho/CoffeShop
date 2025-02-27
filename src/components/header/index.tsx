import { NavLink } from "react-router-dom";
import * as S from "./styles";
import Logo from "@/assets/Logo.svg?react";
import { MapPin } from "@phosphor-icons/react";
import { ShoppingCart } from "../shoppingCart";
export const Header = () => {
  return (
    <S.Header>
      <Logo />
      <div>
        <p>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </p>
        <NavLink to="/">
          <ShoppingCart type="yellow" />
        </NavLink>
      </div>
    </S.Header>
  );
};
