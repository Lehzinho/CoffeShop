import { Link, NavLink } from "react-router-dom";
import * as S from "./styles";
import Logo from "@/assets/images/Logo.svg?react";
import { MapPin } from "@phosphor-icons/react";
import { ShoppingCart } from "../../../components/shoppingCart";
import { useShoppingCart } from "@/context/ShoppingCart";
export const Header = () => {
  const { cart } = useShoppingCart();
  const { items } = cart;
  return (
    <S.Header>
      <Link to={"/"}>
        <Logo />
      </Link>
      <div>
        <p>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </p>
        <NavLink to="/checkout">
          <ShoppingCart items={items} type="yellow" />
        </NavLink>
      </div>
    </S.Header>
  );
};
