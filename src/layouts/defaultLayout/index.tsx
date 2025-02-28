import { Outlet } from "react-router-dom";
import * as S from "./styles";
import { Header } from "./header";

export const DefaultLayout = () => {
  return (
    <S.DefaultLayout>
      <Header />
      <Outlet />
    </S.DefaultLayout>
  );
};
