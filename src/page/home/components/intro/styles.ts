import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  max-width: 110.9375rem;
  gap: 3.5rem;
  & > div {
    max-width: 36.75rem;
    h1 {
      font-size: 3rem;
      font-family: "Baloo 2", sans-serif;
      line-height: 1.3;
      margin-bottom: 16px;
    }
    p {
      font-size: 1.25rem;
      margin-bottom: 4.125rem;
    }
  }
  .cardContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const InfoCard = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.75rem;
  color: ${({ theme }) => theme["base-text"]};

  & > div {
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 99999px;

    background-color: ${({ theme, $color }) => theme[$color]};

    svg {
      color: ${({ theme }) => theme["base-white"]};
    }
  }
`;
