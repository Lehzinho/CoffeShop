import styled from "styled-components";

export const CoffeDisplay = styled.div`
  width: 1440px;
  height: 1645px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 54px;

  padding: 32px 160px 157px 160px;

  flex-shrink: 0;
  .coffeCardContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  & > h1 {
    font-family: "baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 3.375rem;
  }
`;
