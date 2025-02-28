import { CoffeDisplay } from "./components/CoffeDisplay";
import Intro from "./components/intro";
import * as S from "./styles";

function Home() {
  return (
    <S.Home>
      <Intro />
      <CoffeDisplay />
    </S.Home>
  );
}

export default Home;
