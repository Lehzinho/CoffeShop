import styled from "styled-components";
export const CoffeCard = styled.div`
  width: 256px;
  height: 19.375rem;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 0.375rem 2.25rem;
  padding: 1.25rem;
  padding-top: 0;

  img {
    margin: -1.25rem auto 0.75rem;
  }

  & > p {
    color: ${({ theme }) => theme["base-text-light"]};
    text-align: center;

    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    margin-bottom: 1.875rem;
  }

  & > h1 {
    color: ${({ theme }) => theme["base-text"]};
    text-align: center;

    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }
`;

export const CoffeAttributes = styled.div`
  margin-bottom: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  & > div {
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    background-color: ${({ theme }) => theme["yellow-light"]};

    p {
      color: ${({ theme }) => theme["yellow-dark"]};
      font-size: 0.625rem;
      font-weight: 700;
      line-height: 130%;
      text-transform: uppercase;
    }
  }
`;

export const CoffeOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-family: Roboto;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${({ theme }) => theme["base-text"]};

    span {
      font-family: "Baloo 2";
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const CoffeOrderQdt = styled.div`
  width: fit-content;
  display: flex;
  gap: 8px;

  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme }) => theme["base-button"]};

  button {
    all: unset;
    cursor: pointer;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.purple};
  }
`;
