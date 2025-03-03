import styled from "styled-components";

export const NewCheckoutForm = styled.div`
  grid-area: checkout;
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 6px 44px;
  background: ${({ theme }) => theme["base-card"]};

  hr {
    margin: 24px 0;
    stroke-width: 1px;
    background-color: var(--Base-Button, #e6e5e5);
  }

  .coffeContainer {
    width: 100%;
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const CoffeCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    color: var(--Base-Subtitle, #403937);

    font-size: 1rem;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }
  img {
    width: 64px;
    height: 64;
  }
  & > p {
    color: var(--Base-Text, #574f4d);
    text-align: right;

    /* Text/Bold M */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 20.8px */
  }
  .btnContainer {
    display: flex;
    gap: 0.5rem;

    & > button {
      all: unset;
      cursor: pointer;
      display: flex;
      height: 32px;
      padding: 0px 8px;
      justify-content: center;
      align-items: center;
      gap: 4px;

      color: var(--Base-Text, #574f4d);

      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;

      border-radius: 6px;
      background: var(--Base-Button, #e6e5e5);
    }
  }
`;
