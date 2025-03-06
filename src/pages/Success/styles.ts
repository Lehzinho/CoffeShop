import styled from "styled-components";

export const Success = styled.div`
  margin: 0 auto;

  h1 {
    color: ${({ theme }) => theme["yellow-dark"]};

    font-family: "Baloo 2";
    font-size: 32px;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 4px;
  }

  & > p {
    color: ${({ theme }) => theme["base-subtitle"]};

    font-size: 20px;
    line-height: 130%;
    margin-bottom: 40px;
  }

  & > div {
    display: flex;
    gap: 100px;
  }

  .entregaContainer {
    display: flex;
    width: 526px;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    position: relative;
    border-radius: 6px 36px;
    background-clip: padding-box;
    background-color: ${({ theme }) => theme["base-white"]};
    border: 1px solid transparent;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -1px;
      border-radius: inherit;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.yellow},
        ${({ theme }) => theme.purple}
      );
    }
  }

  .row {
    display: flex;
    gap: 12px;
    align-items: center;
    color: ${({ theme }) => theme["base-text"]};
    line-height: 130%;

    span {
      font-weight: 700;
    }

    svg {
      width: 32px;
      height: 32px;
      border-radius: 999px;

      padding: 8px;
      color: ${({ theme }) => theme["base-white"]};
    }

    &:first-child > svg {
      background-color: red;
      background-color: ${({ theme }) => theme.purple};
    }

    &:nth-child(2) > svg {
      background-color: ${({ theme }) => theme["yellow"]};
    }

    &:nth-child(3) > svg {
      background-color: green;
    }
  }
`;
