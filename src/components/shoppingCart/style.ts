import styled from "styled-components";

export const ShoppingCart = styled.div<{ $type: "yellow" | "purple" }>`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 0.375rem;
  background-color: ${({ theme, $type }) =>
    $type === "yellow" ? theme["yellow-light"] : theme["purple-light"]};

  .amount {
    width: 1.25rem;
    height: 1.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);

    font-size: 0.75rem;
    font-weight: bold;

    background-color: ${({ theme }) => theme["yellow-dark"]};
    color: ${({ theme }) => theme["base-white"]};

    border-radius: 99999px;
  }

  svg {
    color: ${({ theme, $type }) =>
      $type === "yellow" ? theme["yellow-dark"] : theme["purple-dark"]};
  }
`;
