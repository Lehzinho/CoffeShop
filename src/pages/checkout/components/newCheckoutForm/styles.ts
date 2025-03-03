import styled from "styled-components";

export const NewCheckoutForm = styled.div`
  grid-area: checkout;
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  border-radius: 6px 44px;
  background: ${({ theme }) => theme["base-card"]};

  hr {
    margin: 24px 0;
    stroke-width: 1px;
    background-color: ${({ theme }) => theme["base-button"]};
  }
  .precoContainer {
    width: 100%;
    button {
      all: unset;
      cursor: pointer;
      width: 100%;
      display: flex;
      padding: 12px 8px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      align-self: stretch;

      border-radius: 6px;
      background: var(--Brand-Yellow, #dbac2c);

      color: var(--Base-White, #fff);

      /* Components/Button G */
      font-size: 14px;
      font-weight: 700;
      line-height: 160%; /* 22.4px */
      text-transform: uppercase;
    }
  }

  .coffeContainer {
    width: 100%;
    overflow-y: auto;
    max-height: 400px;
    padding-right: 12px;
    /* For WebKit Browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1; /* Light gray background */
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888; /* Darker thumb */
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555; /* Even darker on hover */
    }
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.9375rem;

    p {
      text-align: right;
      color: ${({ theme }) => theme["base-text"]};
    }
    p:first-child {
      font-size: 14px;
    }
    p:nth-child(2) {
      font-size: 16px;
    }
  }
  .total {
    p {
      font-size: 20px !important;
      font-weight: 700;
    }
  }
`;

export const CoffeCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme["base-subtitle"]};

    font-size: 1rem;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }
  img {
    width: 64px;
    height: 64;
  }
  & > p {
    color: ${({ theme }) => theme["base-text"]};
    text-align: right;

    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
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

      color: ${({ theme }) => theme["base-text"]};

      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;

      border-radius: 6px;
      background-color: ${({ theme }) => theme["base-button"]};
    }
  }
`;
