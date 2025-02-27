import { Outlet } from "react-router-dom";
import * as S from "./styles";
import { Header } from "../../components/header";

export const DefaultLayout = () => {
  return (
    <S.DefaultLayout>
      <Header />
      <Outlet />
    </S.DefaultLayout>
  );
};
