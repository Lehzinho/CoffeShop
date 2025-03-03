import styled from "styled-components";

export const CoffeOrderQdt = styled.div<{ $tipo: "catalog" | "cart" }>`
  width: fit-content;
  display: flex;
  gap: 8px;
  height: ${({ $tipo }) => ($tipo === "catalog" ? "38px" : "32px")};
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
